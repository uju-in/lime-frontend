'use client'

function ReviewItemSkeleton() {
  return (
    <div className="flex w-[720px] animate-pulse items-center justify-between p-[20px]">
      <div className="ml-[24px] mr-[20px] flex w-[535px] flex-col">
        <div className="flex">
          <div className="mr-[8px] h-[40px] w-[40px] rounded-full bg-gray-200" />
          <div>
            <div className="mb-[4px] h-[12px] w-[100px] rounded bg-gray-200" />
            <div className="h-[12px] w-[200px] rounded bg-gray-200" />
          </div>
        </div>
        <div className="ml-[48px] mt-[14px] h-[60px] w-[400px] rounded bg-gray-200" />
      </div>
      <div className="h-[80px] w-[80px] bg-gray-200 text-[12px] font-[500] text-[#fff]" />
    </div>
  )
}

function ReviewSectionSkeletonUI() {
  return (
    <div className="mt-[64px] animate-pulse">
      <div className="mb-6">
        <div className="mb-3 h-6 w-1/4 rounded bg-gray-200" />
        <div className="flex space-x-2">
          <div className="h-3 w-1/6 rounded bg-gray-200" />
          <div className="h-3 w-1/6 rounded bg-gray-200" />
        </div>
      </div>
      <div className="space-y-4">
        <ReviewItemSkeleton />
        <ReviewItemSkeleton />
        <ReviewItemSkeleton />
      </div>
    </div>
  )
}

export { ReviewItemSkeleton, ReviewSectionSkeletonUI }
