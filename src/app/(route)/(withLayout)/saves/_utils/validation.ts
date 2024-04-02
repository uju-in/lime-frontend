import renderToast from '@/app/_utils/toast'

export const validateSaveFolderName = (folderName: string): boolean => {
  if (folderName === 'default') {
    renderToast({ type: 'error', message: '생성 불가능한 이름입니다.' })
    return false
  }
  if (folderName.length > 20 || folderName.length === 0) {
    renderToast({
      type: 'error',
      message: '1-20자로 설정해주세요.',
    })
    return false
  }

  return true
}
