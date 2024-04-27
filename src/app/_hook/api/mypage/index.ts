import { createQueryKeys } from '@lukemorales/query-key-factory'

export const mypageKeys = createQueryKeys('mypage', {
  userProfile: (nickname: string) => [nickname],
  userContentList: (nickname: string, hobby: string) => [nickname, hobby],
})
