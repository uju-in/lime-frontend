import { CurrentFavoriteItemMetadata } from '@/app/_types/saveItem.type'
import renderToast from '@/app/_utils/toast'

export const validateSelectedItem = (
  currentSelectedItem: CurrentFavoriteItemMetadata | null,
) => {
  if (!currentSelectedItem) {
    renderToast({
      type: 'error',
      message: '아이템을 선택해 주세요.',
    })

    return false
  }

  return true
}
