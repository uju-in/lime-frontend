export interface ReviewState {
  rating: number
  content: string
  multipartReviewImages: File[]
  existingImages: string[]
  reviewItemUrlsToRemove: string[]
}

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
  likeCount: number
}

export interface ReviewResponse {
  cursorId: string
  memberInfo: MemberInfo
  reviewSummary: ReviewInfo
  reviewLoginMemberStatus: {
    isReviewed: boolean
    isLiked: boolean
  }
}

export interface PageType {
  itemReviewTotalCount: number
  nextCursorId: string
  reviews: ReviewResponse[]
}

export interface PagesResponse {
  pages: PageType[]
  pageParams: any[]
}

export type SortOption = 'NEWEST' | 'LIKE_COUNT_DESC'
