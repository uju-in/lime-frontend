import { Suspense } from 'react'
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
      <Suspense fallback={<div>Loading. . .</div>}>
        <ItemDetailView itemId={itemId} />
      </Suspense>
    </>
  )
}
