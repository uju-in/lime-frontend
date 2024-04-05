import { useRouter } from 'next/navigation'
import { ERROR_CODE, ERROR_MESSAGE } from '@/app/_constants/error'
import renderToast from '../../_utils/toast'

interface ApiError extends Error {
  code?: string
  message: string
}

export const useHandleApiError = () => {
  const router = useRouter()

  return (error: ApiError) => {
    if (error.code === ERROR_CODE.INSUFFICIENT_PERMISSION) {
      if (window.confirm(ERROR_MESSAGE.PROFILE_COMPLETION_REQUIRED)) {
        router.push('/join')
      }
    } else if (error.code === ERROR_CODE.INVALID_ACCESS_TOKEN) {
      if (window.confirm(ERROR_MESSAGE.LOGIN_REQUIRED)) {
        router.push('/login')
      }
    } else {
      renderToast({
        type: 'error',
        message: String(error.message),
      })
    }
  }
}
