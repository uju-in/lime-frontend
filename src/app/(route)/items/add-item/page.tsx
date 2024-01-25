import RQProvider from '@/app/_components/RQProvider'
import PostForm from './_component/PostForm'

export default function AddItemPage() {
  return (
    <section className="w-[780px] flex-col bg-white px-8">
      <div className="flex flex h-[150px] items-center">
        <h1 className="text-[32px] font-bold">아이템 생성</h1>
      </div>
      <RQProvider>
        <PostForm />
      </RQProvider>
    </section>
  )
}
