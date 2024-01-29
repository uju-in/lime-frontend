'use client'

import { useQuery } from '@tanstack/react-query'

// TODO: cursorId, size
const fetchItemList = async (keyword: string, sortOption: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/search?keyword=${keyword}&cursorId=null&size=20&itemSortCondition=${sortOption}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  const data = await response.json()

  return data
}

const useItemListData = (keyword: string, sortOption: string) => {
  const {
    data: itemList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['itemList', keyword, sortOption],
    queryFn: () => fetchItemList(keyword, sortOption),
  })

  return {
    itemList,
    isLoading,
    isError,
  }
}

export default useItemListData
