'use client'

import { useRouter } from 'next/navigation'

interface ErrorProps {
  error: Error | null
  resetErrorBoundary: () => void
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorProps) {
  const router = useRouter()

  return (
    <div className="flex h-dvh flex-col items-center gap-[50px] pt-[210px]">
      <h2 className="text-[22px] font-[700px]">문제가 발생했어요</h2>
      <div className="flex gap-[20px]">
        <button
          type="button"
          className="rounded-[4px] border bg-black p-[12px] text-white"
          onClick={() => router.push('/')}
        >
          메인으로
        </button>
        <button
          type="button"
          className="rounded-[4px] border bg-[#EDEDED] p-[12px]"
          onClick={resetErrorBoundary}
        >
          다시 불러오기
        </button>
      </div>
    </div>
  )
}
