import { Suspense } from 'react'
import ItemDetailView from './_component/ItemDetailView'

type Props = {
  params: { itemId: number }
}

export default function DetailPage({ params }: Props) {
  const { itemId } = params

  return (
    <Suspense fallback={<div>Loading. . .</div>}>
      <ItemDetailView itemId={itemId} />
    </Suspense>
  )
}
