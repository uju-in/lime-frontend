import { atom } from 'recoil'
import { MemberProfile, defaultMemberProfile } from '../_types/mypage.type'

export const editProfileState = atom<MemberProfile>({
  key: 'editProfileState',
  default: defaultMemberProfile,
})
