'use client'

import React, { useEffect } from 'react'

import { setCookie } from 'cookies-next'
import useGetSearchParam from '../_hook/common/useGetSearchParams'

export function GetSearchParams() {
  const token = useGetSearchParam('accessToken')

  useEffect(() => {
    if (token) {
      setCookie('accessToken', token)
    }
  }, [token])

  return <div />
}
