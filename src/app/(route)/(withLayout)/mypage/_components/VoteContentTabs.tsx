'use client'

import Loading from '@/app/_components/loading'
import { useUserContentListData } from '@/app/_hook/api/mypage/queries/useContentList'
import { useClientCookies } from '@/app/_hook/common/useClientCookies'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import { cn } from '@/app/_utils/twMerge'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import VoteItem from '../../votes/_component/VoteItem'
import EmptyMessage from './EmptyMessage'

export default function VoteContentTabs() {
  const clientCookies = useClientCookies()

  const hobby = useGetSearchParam('category') || '농구'
  const nickname =
    useGetSearchParam('nickname') || clientCookies.getClientCookie('nickname')

  const { ref, inView } = useInView()

  const { contentList, fetchNextPage, isFetchingNextPage } =
    useUserContentListData(nickname, hobby)

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  if (contentList.length === 0) {
    return <EmptyMessage menu="MY투표" path="/votes/add-vote" />
  }

  return (
    <article>
      <ul
        className={cn(
          'grid grid-cols-[repeat(auto-fill,353px)] gap-[20px]',
          'mo:grid-cols-1 mo:gap-[16px]',
        )}
      >
        {contentList.map((item) => (
          <li
            key={item.cursorId}
            className={cn('h-[390px] w-[353px]', 'mo:w-full')}
          >
            <VoteItem
              item={item}
              width={158}
              height={208}
              innerClassNames="h-[208px]"
            />
          </li>
        ))}
      </ul>
      {isFetchingNextPage ? <Loading /> : <div ref={ref} />}
    </article>
  )
}
