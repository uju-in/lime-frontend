'use client'

import { cn } from '@/app/_utils/twMerge'

export default function ItemDetailSkeleton() {
  return (
    <section>
      <div className="mb-4 h-6 w-1/3 animate-pulse rounded bg-gray-200" />
      <article className={cn('flex justify-between', 'mo:flex-col')}>
        <div className="flex justify-center">
          <div
            className={cn(
              'h-[227px] w-[227px] rounded-[8px] bg-gray-200',
              'mo:hidden',
            )}
          />
          <div
            className={cn(
              'hidden h-[375px] w-[375px] rounded-[8px] bg-gray-200',
              'mo:block',
            )}
          />
        </div>
        <div
          className={cn(
            'flex w-[473px] flex-col justify-between',
            'mo:w-full mo:px-[16px]',
          )}
        >
          <div
            className={cn(
              'flex h-[165px] w-[473px] flex-col justify-between border-t-[3px] border-[#000]',
              'mo:w-full mo:border-0',
            )}
          >
            <div className={cn('hidden', 'mo:block')}>
              <div className="mb-0 mt-[12px] h-4 w-1/2 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="mt-[10px] h-6 w-1/2 animate-pulse rounded bg-gray-200 mo:mt-0 mo:h-5" />
            <div className="flex w-full">
              <div className="mr-1 h-[14px] w-[14px] rounded-full bg-gray-200" />
              <span className="line-clamp-2 h-[14px] w-[50px] animate-pulse rounded bg-gray-200 text-[14px] font-[500] text-[#6F6F6F]" />
            </div>
            <div className="flex justify-between">
              <strong className="h-8 w-1/4 animate-pulse rounded bg-gray-200" />
              <div className="flex items-center">
                <div className="mr-1 h-[20px] w-[20px] rounded-full bg-gray-200" />
                <span className="h-[14px] w-[30px] animate-pulse rounded bg-gray-200 font-[500] text-[#6F6F6F]" />
              </div>
            </div>
          </div>
          <div className="mt-4 h-10 w-full animate-pulse rounded bg-gray-200" />
        </div>
      </article>
    </section>
  )
}
