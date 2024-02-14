export interface ItemInfoType {
  id: number
  name: string
  price: number
  image: string
}

export interface VoteInfoType {
  id: number
  hobby: string
  content: string
  startTime: string
  endTime: string
  maxParticipants: number
  isVoting: boolean
  participants: number
  item1Votes: number
  item2Votes: number
}

export interface VoteDetailType {
  item1Info: ItemInfoType
  item2Info: ItemInfoType
  voteInfo: VoteInfoType
  isOwner: boolean
  selectedItemId: number
}
