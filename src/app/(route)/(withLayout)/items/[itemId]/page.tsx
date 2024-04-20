import { Suspense } from 'react'
import { cn } from '@/app/_utils/twMerge'
import Loading from '@/app/_components/loading'
import ItemDetailView from './_component/ItemDetailView'
import MoItemDetailHeader from './_component/MoItemDetailHeader'

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
        <Suspense fallback={<Loading />}>
          <ItemDetailView itemId={itemId} />
        </Suspense>
      </article>
    </>
  )
}
