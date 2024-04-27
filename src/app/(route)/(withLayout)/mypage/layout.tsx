import RQProvider from '@/app/_components/RQProvider'

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main
      style={{
        backgroundImage:
          'linear-gradient(to bottom, white 107px, #F7F7F7 107px)',
      }}
      className="flex w-full px-[120px] py-[49px]"
    >
      <RQProvider>{children}</RQProvider>
    </main>
  )
}
