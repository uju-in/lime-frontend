import { getCookie } from '@/app/_utils/cookie'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface ChangeSaveFolderRequest {
  folderId: number
  folderName: string
}

async function postChangeName({
  folderId,
  folderName,
}: ChangeSaveFolderRequest) {
  const accessToken = await getCookie('accessToken')

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

    throw data.message
  }

  return res.status
}

export const useChangeSaveFolderName = () => {
  const queryClient = useQueryClient()

  return useMutation<number, Error, ChangeSaveFolderRequest>({
    mutationFn: ({ folderId, folderName }) =>
      postChangeName({ folderId, folderName }),
    onSuccess: () => {
      alert('이름 수정 완료')

      queryClient.invalidateQueries({ queryKey: ['savesList'] })
    },
    onError: (err) => {
      alert(err)
    },
  })
}
