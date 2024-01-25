export interface SignUpState {
  nickname: string
  career: number | null
  mbti: string
  content: string
  hobby: string
}

export interface CareerOption {
  label: string
  value: number
}
