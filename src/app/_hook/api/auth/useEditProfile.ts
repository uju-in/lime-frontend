import { useMutation, useQueryClient } from '@tanstack/react-query'

import { SignUpState } from '@/app/_types/signUp.types'
import renderToast from '@/app/_utils/toast'
import { getCookie } from 'cookies-next'
import { useHandleApiError } from '../../common/useHandleApiError'
import { mypageKeys } from '../mypage'

async function editProfile(params: SignUpState) {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/members/profile`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(params),
    },
  )

  if (!res.ok) {
    const data = await res.json()

    throw data
  }

  return res.status
}

export default function useEditProfile() {
  const queryClient = useQueryClient()
  const handleApiError = useHandleApiError()

  return useMutation<number, Error, SignUpState>({
    mutationFn: editProfile,
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '변경 성공!',
      })

      queryClient.invalidateQueries({ queryKey: mypageKeys.userProfile._def })
    },
    onError: (error) => {
      handleApiError(error)
    },
  })
}
