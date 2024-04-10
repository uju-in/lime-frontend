import renderToast from '@/app/_utils/toast'

/* 투표 아이템 선택 검증 */
export const validateChoiceItem = (itemId: number | null) => {
  if (!itemId) {
    renderToast({
      type: 'error',
      message: '아이템을 선택해 주세요!',
    })

    return false
  }

  return true
}
