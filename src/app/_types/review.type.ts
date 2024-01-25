export interface ReviewDetails {
  cursorId: string
  memberInfo: any
  reviewId: number
  rate: number
  content: string
  isReviewed: boolean
  createdAt: string
  updatedAt: string
}

export interface PagesResponse {
  nextCursorId: string
  itemReviewTotalCount: number
  totalCount: number
  reviews: ReviewDetails[]
}
