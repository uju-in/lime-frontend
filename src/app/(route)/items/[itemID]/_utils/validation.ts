/* 이미지 별점 선택 검증 */
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
