import { cn } from '@/app/_utils/twMerge'
import MoItemDetailHeader from './_component/MoItemDetailHeader'
import ItemDetailPage from './_component/ItemDetailPage'

type Props = {
  params: { itemId: number }
}

export default function DetailPage({ params }: Props) {
  const { itemId } = params

  return (
    <>
      <MoItemDetailHeader />
      <article
        className={cn('mx-auto mt-[32px] min-h-[650px] w-[720px]', 'mo:w-full')}
      >
        <ItemDetailPage itemId={itemId} />
      </article>
    </>
  )
}
