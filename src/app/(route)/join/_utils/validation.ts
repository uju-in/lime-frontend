/* 닉네임 입력 검증 */
const validateNickname = (nickname: string) => {
  if (!nickname.trim()) {
    alert('닉네임 입력해 주세요.')

    return false
  }

  return true
}

/* 닉네임 중복 확인,취미 선택 검증 */
const validateForm = ({
  isDuplicated,
  career,
}: {
  isDuplicated: boolean
  career: number | null
}) => {
  if (isDuplicated) {
    alert('닉네임 중복 확인을 진행해 주세요.')

    return false
  }

  if (!career) {
    alert('취미 경력을 선택해 주세요.')

    return false
  }

  return true
}

export { validateNickname, validateForm }
