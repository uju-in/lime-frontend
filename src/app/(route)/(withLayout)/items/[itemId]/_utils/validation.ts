import renderToast from '@/app/_utils/toast'

const MAX_CONTENT_LENGTH = 11
const MIN_COUNT = 0

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

  if (rating === MIN_COUNT) {
    renderToast({
      type: 'error',
      message: '별점을 선택해 주세요!',
    })

    return false
  }

  if (multipartReviewImages.length === MIN_COUNT) {
    renderToast({
      type: 'error',
      message: '리뷰 사진을 첨부해 주세요.',
    })

    return false
  }

  return true
}

/* 이미지 개수 검증 */
export const validateImage = ({
  existingImages,
  multipartReviewImages,
  filesArray,
}: {
  existingImages: string[]
  multipartReviewImages: File[]
  filesArray?: File[]
}) => {
  const MAX_IMAGE_COUNT = 5

  const files = filesArray || []

  const totalImagesCount =
    existingImages.length + multipartReviewImages.length + files.length

  /** 최대 이미지 개수 */
  if (totalImagesCount > MAX_IMAGE_COUNT) {
    renderToast({
      type: 'error',
      message: '최대 5장까지 등록 가능합니다.',
    })

    return false
  }

  /** 최소 이미지 개수 */
  if (totalImagesCount < MIN_COUNT) {
    renderToast({
      type: 'error',
      message: '이미지를 등록해 주세요.',
    })

    return false
  }

  return true
}

/** 이미지 용량 */
export const validateImageSize = (filesArray: File[]) => {
  const MAX_IMAGE_SIZE = 5 * 1024 * 1024

  const isExceedingSize = filesArray.some(
    (file: File) => file.size > MAX_IMAGE_SIZE,
  )

  if (isExceedingSize) {
    renderToast({
      type: 'error',
      message: '이미지 파일 크기는 5MB를 초과할 수 없습니다.',
    })

    return false
  }

  return true
}
