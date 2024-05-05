import renderToast from '@/app/_utils/toast'

/* 닉네임 입력 검증 */
const validateNickname = (nickname: string) => {
  if (!nickname.trim()) {
    renderToast({
      type: 'error',
      message: '닉네임 입력해 주세요.',
    })

    return false
  }

  const regex = /^[가-힣a-zA-Z0-9]+$/

  if (!regex.test(nickname)) {
    renderToast({
      type: 'error',
      message: '영문, 숫자, 한글만 조합해 주세요.',
    })

    return false
  }

  return true
}

/* 닉네임 중복 확인,취미 선택, 자기소개 공백 검증 */
const validateForm = ({
  isDuplicated,
  career,
  content,
}: {
  isDuplicated?: boolean
  career: number | null
  content: string
}) => {
  if (isDuplicated) {
    renderToast({
      type: 'error',
      message: '닉네임 중복 확인을 진행해 주세요.',
    })

    return false
  }

  if (career === null) {
    renderToast({
      type: 'error',
      message: '취미 경력을 선택해 주세요.',
    })

    return false
  }

  if (!content.trim()) {
    renderToast({
      type: 'error',
      message: '자기소개를 입력해 주세요.',
    })

    return false
  }

  return true
}

export { validateNickname, validateForm }
