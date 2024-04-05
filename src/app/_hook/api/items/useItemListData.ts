import { ItemType } from '@/app/_types/item.type'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { itemKeys } from '.'

export const fetchItemList = async (
  hobbyName: string,
  sortOption: string,
  keyword: string,
  pageParam: string | null,
) => {
  const SIZE = 18
  let URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/search?cursorId=${pageParam}&size=${SIZE}&itemSortCondition=${sortOption}`

  if (keyword.length > 0) {
    URL += `&keyword=${keyword}`
  } else if (hobbyName.length > 0) {
    URL += `&hobbyName=${hobbyName}`
  }
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  return data
}

interface Props {
  sortOption: string
  hobbyName?: string
  keyword?: string
}

const useItemListData = ({
  sortOption,
  hobbyName = '',
  keyword = '',
}: Props) => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: itemKeys.itemList(hobbyName, sortOption, keyword).queryKey,
    queryFn: ({ pageParam = null }) =>
      fetchItemList(hobbyName, sortOption, keyword, pageParam),
    initialPageParam: null,
    getNextPageParam: ({
      nextCursorId,
    }: {
      nextCursorId: string
      items: ItemType[]
      itemTotalCount: number
    }) => {
      return nextCursorId
    },
    staleTime: 1000 * 60,
  })

  const itemList = useMemo(() => {
    return data ? data.pages.flatMap((pageData) => pageData.items) : []
  }, [data])

  const itemTotalCount = useMemo(() => {
    return data
      ? data.pages.flatMap((pageData) => pageData.itemTotalCount)[0]
      : 0
  }, [data])

  return {
    data,
    itemList,
    itemTotalCount,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}

export default useItemListData
