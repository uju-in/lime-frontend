import { getCookie } from '@/app/_utils/cookie'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import renderToast from '@/app/_utils/toast'
import { saveKeys } from '.'

const addSaveFolder = async (folderName: string) => {
  const accessToken = await getCookie('accessToken')

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites/folders`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ folderName }),
    },
  )

  if (!response.ok) {
    const data = await response.json()

    throw data
  }
}

export default function useAddSaveFolder() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, string>({
    mutationFn: (folderName) => addSaveFolder(folderName),
    onSuccess: () => {
      renderToast({ type: 'success', message: '폴더가 추가되었습니다.' })

      queryClient.invalidateQueries({ queryKey: saveKeys.saveList._def })
    },
    onError: (error) => {
      renderToast({ type: 'error', message: String(error) })
    },
  })
}
