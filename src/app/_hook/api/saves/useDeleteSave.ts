import { useMutation, useQueryClient } from '@tanstack/react-query'

import renderToast from '@/app/_utils/toast'
import { getCookie } from 'cookies-next'
import { saveKeys } from '.'

async function deleteSave(favoriteItemIds: number[], folderIds: number[]) {
  const accessToken = getCookie('accessToken')
  const formData = new FormData()
  if (favoriteItemIds.length > 0) {
    formData.append('favoriteItemIds', favoriteItemIds.join(','))
  }
  if (folderIds.length > 0) {
    formData.append('folderIds', folderIds.join(','))
  }
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
      renderToast({ type: 'success', message: '삭제되었습니다.' })

      queryClient.invalidateQueries({ queryKey: saveKeys.saveList._def })
    },
    onError: (error) => {
      renderToast({ type: 'error', message: String(error) })
    },
  })
}
