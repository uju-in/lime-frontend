import renderToast from '@/app/_utils/toast'

const MAX_CONTENT_LENGTH = 11

/* 아이템 등록 - 이미지 별점 선택 검증 */
export const validateForm = ({
  rating,
  multipartReviewImages,
  content,
}: {
  rating: number
  multipartReviewImages: File[]
  content: string
}) => {
  if (content.trim().length < MAX_CONTENT_LENGTH) {
    renderToast({
      type: 'error',
      message: '리뷰 내용을 최소 10자 입력해 주세요!',
    })

    return false
  }

  if (rating === 0) {
    renderToast({
      type: 'error',
      message: '별점을 선택해 주세요!',
    })

    return false
  }

  if (multipartReviewImages.length === 0) {
    renderToast({
      type: 'error',
      message: '리뷰 사진을 첨부해 주세요.',
    })

    return false
  }

  return true
}

/* 이미지 갯수 검증 */
export const validateImage = ({
  existingImages,
  multipartReviewImages,
  content,
}: {
  existingImages: string[]
  multipartReviewImages: File[]
  content: string
}) => {
  if (content.trim().length < MAX_CONTENT_LENGTH) {
    renderToast({
      type: 'error',
      message: '리뷰 내용을 최소 10자 이상 작성해 주세요..',
    })

    return false
  }

  if (existingImages.length + multipartReviewImages.length === 0) {
    renderToast({
      type: 'error',
      message: '이미지를 등록해 주세요.',
    })

    return false
  }

  return true
}
