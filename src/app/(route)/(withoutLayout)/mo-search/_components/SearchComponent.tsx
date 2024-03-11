'use client'

import React, { useState } from 'react'
import { SearchItemList } from '@/app/_components/layout/search/SearchItemList'
import { MoHeader } from '../../../../_components/layout/mobile/MoHeader'
import RQProvider from '../../../../_components/RQProvider'
import RecentSearchList from './RecentSearchList'

export default function SearchComponent() {
  const [inputKeyword, setInputKeyword] = useState<string>('')

  return (
    <div className="">
      <MoHeader.Search
        inputKeyword={inputKeyword}
        setInputKeyword={setInputKeyword}
      />
      {inputKeyword.length === 0 ? (
        <RecentSearchList />
      ) : (
        <RQProvider>
          <SearchItemList inputKeyword={inputKeyword} />
        </RQProvider>
      )}
    </div>
  )
}
