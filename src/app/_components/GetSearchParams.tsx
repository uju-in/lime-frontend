'use client'

import React, { useEffect } from 'react'

import useGetSearchParam from '../_hook/common/useGetSearchParams'
import { setCookie } from '../_utils/cookie'

export function GetSearchParams() {
  const token = useGetSearchParam('accessToken')

  useEffect(() => {
    if (token) {
      setCookie('accessToken', token)
    }
  }, [token])

  return <div />
}
