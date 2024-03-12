export default function MypageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(to bottom, white 107px, #F7F7F7 107px)',
      }}
      className="flex w-full px-[150px] py-[49px]"
    >
      {children}
    </div>
  )
}
