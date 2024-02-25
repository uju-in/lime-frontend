/* 아이템 등록 - 이미지 별점 선택 검증 */
export const validateForm = ({
  rating,
  multipartReviewImages,
}: {
  rating: number
  multipartReviewImages: File[]
}) => {
  if (rating === 0) {
    alert('별점을 선택해 주세요!')

    return false
  }

  if (multipartReviewImages.length === 0) {
    alert('리뷰 사진을 첨부해 주세요.')

    return false
  }

  return true
}

/* 이미지 갯수 검증 */
export const validateImage = ({
  existingImages,
  multipartReviewImages,
}: {
  existingImages: string[]
  multipartReviewImages: File[]
}) => {
  if (existingImages.length + multipartReviewImages.length === 0) {
    alert('이미지를 등록해 주세요.')

    return false
  }

  return true
}
