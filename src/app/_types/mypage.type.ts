export const defaultMemberProfile: MemberProfile = {
  memberId: 0,
  nickname: '',
  profileImage: '',
  level: 1,
  hobby: '',
  content: '',
  career: null,
  mbti: '',
  followerCount: 0,
  followingCount: 0,
}

export interface ProfileType {
  bucketProfiles: []
  inventoryProfiles: []
  memberProfile: MemberProfile
}

export interface MemberProfile {
  memberId: number
  nickname: string
  profileImage: string
  level: number
  hobby: string
  content: string
  career: number | null
  mbti: string
  followerCount: number
  followingCount: number
}
