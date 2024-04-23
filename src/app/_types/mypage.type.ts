export interface ProfileType {
  bucketProfiles: []
  inventoryProfiles: []
  memberProfile: MemberProfile
}

interface MemberProfile {
  memberId: number
  nickName: string
  profileImage: string
  level: number
  hobby: string
  content: string
  career: number
  mbti: string
  followerCount: number
  followingCount: number
}
