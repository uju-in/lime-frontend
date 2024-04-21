import Link from 'next/link'
import Header from './_components/layout/Header'

export default function NotFound() {
  return (
    <main className="my-0 flex flex-col">
      <Header />
      <section className="flex h-dvh flex-col items-center justify-center gap-[24px]">
        <h2 className="text-[22px] font-[700]">페이지를 찾을 수 없습니다!</h2>
        <Link
          href="/"
          className="rounded-[4px] border bg-[#EDEDED] p-[12px] text-[15px]"
        >
          메인으로
        </Link>
      </section>
    </main>
  )
}
