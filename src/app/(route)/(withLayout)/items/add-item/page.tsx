import { cn } from '@/app/_utils/twMerge'
import PostForm from './_component/PostForm'

export default function AddItemPage() {
  return (
    <section
      className={cn('flex flex-col bg-white p-[39px_30px]', 'mo:w-full mo:p-0')}
    >
      <div className="flex items-center mo:hidden">
        <h1 className="text-[32px] font-bold">아이템 생성</h1>
      </div>
      <PostForm />
    </section>
  )
}
