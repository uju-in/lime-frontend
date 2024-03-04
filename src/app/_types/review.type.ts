export interface ItemInfo {
  id: number
  name: string
  price: number
  image: string
}

export interface ItemDetailType {
  itemInfo: ItemInfo
  hobbyName: string
  itemAvgRate: number
  itemUrl: string
  favoriteCount: number
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

export interface PagesResponse {
  nextCursorId: string
  itemReviewTotalCount: number
  totalCount: number
  reviews: ReviewResponse[]
}

export type SortOption = 'NEWEST' | 'LIKE_COUNT_DESC'
