'use client'

import { ItemType } from '@/app/_types/item.type'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { itemKeys } from '.'

export const fetchItemList = async (
  keyword: string,
  sortOption: string,
  pageParam: string | null,
) => {
  const SIZE = 18
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/items/search?keyword=${keyword}&cursorId=${pageParam}&size=${SIZE}&itemSortCondition=${sortOption}`,
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

interface Props {
  keyword: string
  sortOption: string
}

const useItemListData = ({ keyword, sortOption }: Props) => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: itemKeys.itemList(keyword, sortOption).queryKey,
    queryFn: ({ pageParam = null }) =>
      fetchItemList(keyword, sortOption, pageParam),
    initialPageParam: null,
    getNextPageParam: ({
      nextCursorId,
    }: {
      nextCursorId: string
      items: ItemType[]
    }) => {
      return nextCursorId
    },
    staleTime: 1000 * 60,
  })

  const itemList = useMemo(() => {
    return data ? data.pages.flatMap((pageData) => pageData.items) : []
  }, [data])

  return {
    data,
    itemList,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}

export default useItemListData
