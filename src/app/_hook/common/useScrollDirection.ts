'use client'

/**
 * 임계값을 기준으로 스크롤이 변경되면 방향 상태 업데이트
 */

import { useState, useEffect } from 'react'

const SCROLL_THRESHOLD = 3 // 스크롤 변화를 감지하는 임계값

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up')

  useEffect(() => {
    let lastScrollY = 0

    const updateScrollDirection = () => {
      const { scrollY } = window
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (
        scrollY - lastScrollY > SCROLL_THRESHOLD ||
        scrollY - lastScrollY < -SCROLL_THRESHOLD
      ) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [])

  return scrollDirection
}
