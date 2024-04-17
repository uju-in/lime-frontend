export interface ItemType {
  cursorId: string
  itemSummary: {
    createdAt: string
    id: number
    image: string
    name: string
    price: number
    favoriteCount: number
    reviewCount: number
  }
}

export interface ItemResponse {
  nextCursorId: string
  itemTotalCount: number
  totalCount: number
  items: ItemType[]
}

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
