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
