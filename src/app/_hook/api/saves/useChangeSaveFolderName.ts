import { useMutation, useQueryClient } from '@tanstack/react-query'
import renderToast from '@/app/_utils/toast'
import { getCookie } from 'cookies-next'
import { saveKeys } from '.'
import { useHandleApiError } from '../../common/useHandleApiError'

interface ChangeSaveFolderRequest {
  folderId: number
  folderName: string
}

async function postChangeName({
  folderId,
  folderName,
}: ChangeSaveFolderRequest) {
  const accessToken = getCookie('accessToken')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites/folders/${folderId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ folderName }),
    },
  )

  if (!res.ok) {
    const data = await res.json()

    throw data
  }

  return res.status
}

export const useChangeSaveFolderName = () => {
  const queryClient = useQueryClient()
  const handleApiError = useHandleApiError()

  return useMutation<number, Error, ChangeSaveFolderRequest>({
    mutationFn: ({ folderId, folderName }) =>
      postChangeName({ folderId, folderName }),
    onSuccess: () => {
      renderToast({ type: 'success', message: '폴더 이름이 변경되었습니다.' })

      queryClient.invalidateQueries({ queryKey: saveKeys.saveList._def })
    },
    onError: (error) => {
      handleApiError(error)
    },
  })
}
