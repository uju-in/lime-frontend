'use client'

import React, { useEffect } from 'react'

import useGetSearchParam from '../_hook/common/useGetSearchParams'

export function GetSearchParams() {
  const accessToken = useGetSearchParam('accessToken')

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken)
    }
  }, [])

  return <div>GetSearchParams</div>
}
