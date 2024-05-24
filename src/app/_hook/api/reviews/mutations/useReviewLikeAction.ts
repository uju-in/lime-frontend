import { PagesResponse, SortOption } from '@/app/_types/review.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import { reviewKeys } from '..'
import { useHandleApiError } from '../../../common/useHandleApiError'

interface ReviewLikeRequest {
  reviewId: number
  isLiked: boolean
  itemId: number
  sortOption: SortOption
}

interface ReviewLikeContext {
  previousReviews: PagesResponse
  currentLikeRequest: ReviewLikeRequest
}

async function postReviewLikeAction({ reviewId, isLiked }: ReviewLikeRequest) {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews/${reviewId}/like`,
    {
      method: isLiked ? 'DELETE' : 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  if (!res.ok) {
    const data = await res.json()
    throw data
  }
}

export default function useReviewLikeAction() {
  const queryClient = useQueryClient()
  const handleApiError = useHandleApiError()

  return useMutation<void, Error, ReviewLikeRequest, ReviewLikeContext>({
    mutationFn: ({ reviewId, isLiked, itemId, sortOption }) =>
      postReviewLikeAction({ reviewId, isLiked, itemId, sortOption }),
    /** 변이 발생(함수 호출) */
    onMutate: async (currentLikeRequest) => {
      const { itemId, sortOption } = currentLikeRequest
      const reviewListKey = [...reviewKeys.reviewList._def, itemId, sortOption]

      /** 서버에서 가져오는 데이터 중단 (쿼리 취소) */
      await queryClient.cancelQueries({ queryKey: reviewListKey })

      const previousReviews =
        queryClient.getQueryData<PagesResponse>(reviewListKey)

      /** 클라이언트에서 미리 상태 업데이트  */
      queryClient.setQueryData<PagesResponse>(reviewListKey, (previousData) => {
        if (!previousData) return { pages: [], pageParams: [] }

        /** 좋아요 상태(isLiked)와 좋아요 개수(isCount)를 미리 업데이트 */
        return {
          ...previousData,
          pages: previousData.pages.map((page) => ({
            ...page,
            reviews: page.reviews.map((review) =>
              review.reviewSummary.reviewId === currentLikeRequest.reviewId
                ? {
                    ...review,
                    reviewLoginMemberStatus: {
                      ...review.reviewLoginMemberStatus,
                      isLiked: !currentLikeRequest.isLiked,
                    },
                    reviewSummary: {
                      ...review.reviewSummary,
                      likeCount: currentLikeRequest.isLiked
                        ? review.reviewSummary.likeCount - 1
                        : review.reviewSummary.likeCount + 1,
                    },
                  }
                : review,
            ),
          })),
        }
      })

      /** 이전 데이터 (previousReviews) 후 context로 저장 및 반환 */
      return {
        previousReviews: previousReviews as PagesResponse,
        currentLikeRequest,
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: reviewKeys.reviewList._def })
    },
    /** 실패 시 기존 데이터 유지 (데이타 롤백) */
    onError: (error, currentLikeRequest, context) => {
      if (context) {
        const { itemId, sortOption } = currentLikeRequest
        const reviewListKey = [
          ...reviewKeys.reviewList._def,
          itemId,
          sortOption,
        ]

        queryClient.setQueryData(reviewListKey, context.previousReviews)
      }

      handleApiError(error)
    },
  })
}
