import { useMutation, useQueryClient } from '@tanstack/react-query'

import { getCookie } from '@/app/_utils/cookie'
import { saveKeys } from '.'

async function deleteSave(favoriteItemIds: number[], folderIds: number[]) {
  const accessToken = await getCookie('accessToken')
  const formData = new FormData()
  if (favoriteItemIds.length > 0)
    formData.append('favoriteItemIds', favoriteItemIds.join(','))
  if (folderIds.length > 0) formData.append('folderIds', folderIds.join(','))

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  })

  if (!res.ok) {
    const data = await res.json()

    throw data.message
  }
}

interface DeleteSaveRequest {
  favoriteItemIds: number[]
  folderIds: number[]
}

export default function useDeleteSave() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, DeleteSaveRequest>({
    mutationFn: ({ favoriteItemIds, folderIds }) =>
      deleteSave(favoriteItemIds, folderIds),
    onSuccess: () => {
      alert('찜 폴더 삭제 성공')

      queryClient.invalidateQueries({ queryKey: saveKeys._def })
    },
    onError: (error) => {
      alert(error)
    },
  })
}
