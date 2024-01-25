export interface MemberDetails {
  level: number
  memberId: number
  nickname: string
  profileImage: string
}

export interface ReviewDetails {
  cursorId: string
  memberInfo: MemberDetails
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
