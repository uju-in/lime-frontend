export interface VoteInfoType {
  hobby: string
  maximumParticipants: number
  content: string
  item1Id: number | null
  item2Id: number | null
}

export interface SelectedItemType {
  imageUrl1: string | null
  imageUrl2: string | null
  title1: string
  title2: string
}
