import { toast } from 'react-hot-toast'

interface IToast {
  type: 'success' | 'error'
  message: string
  duration?: number
}

const renderToast = ({ type, message, duration = 3500 }: IToast) => {
  switch (type) {
    case 'error':
      return toast.error(message, {
        duration,
      })
    case 'success':
      return toast.success(message, {
        duration,
      })
    default:
      return toast(message, {
        duration,
      })
  }
}

export default renderToast
