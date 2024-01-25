export interface MemberInfo {
  level: number
  memberId: number
  nickname: string
  profileImage: string
}

export interface ReviewInfo {
  content: string
  createdAt: string
  imageUrls: string[]
  rate: number
  reviewId: number
  updatedAt: string
}

export interface ReviewResponse {
  cursorId: string
  isReviewed: boolean
  memberInfo: MemberInfo
  reviewSummary: ReviewInfo
}

export interface PagesResponse {
  nextCursorId: string
  itemReviewTotalCount: number
  totalCount: number
  reviews: ReviewResponse[]
}
