export default function AddItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex h-dvh w-dvw max-w-[1440px] justify-center bg-[#F7F7F7]">
      {children}
    </div>
  )
}
