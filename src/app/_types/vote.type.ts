export interface PagesResponse {
  nextCursorId: string
  totalCount: number
  votes: VoteInfo[]
}

export interface VoteInfo {
  voteInfo: {
    id: number
    content: string
    startTime: string
    isVoting: boolean
    participants: number
  }
  item1Info: {
    id: number
    name: string
    price: number
    image: string
  }
  item2Info: {
    id: number
    name: string
    price: number
    image: string
  }
  cursorId: string
}

export interface RankingInfo {
  rankingInfos: [
    {
      id: number
      item1Image: string
      item2Image: string
      participants: number
    },
  ]
}
