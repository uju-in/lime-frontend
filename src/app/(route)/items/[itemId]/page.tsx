import { getCookie } from '@/app/_utils/cookie'
import { Suspense } from 'react'
import ItemDetailView from './_component/ItemDetailView'

type Props = {
  params: { itemId: number }
}

export default function DetailPage({ params }: Props) {
  const { itemId } = params

  const accessToken = getCookie('accessToken')

  return (
    <Suspense fallback={<div>Loading. . .</div>}>
      <ItemDetailView accessToken={accessToken} itemId={itemId} />
    </Suspense>
  )
}
