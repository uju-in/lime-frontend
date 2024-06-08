import ErrorFallback from '@/app/_components/errorFallback'
import ErrorHandlingWrapper from '@/app/_components/errorHandlingWrapper'
import Loading from '@/app/_components/loading'
import { cn } from '@/app/_utils/twMerge'
import ItemDetailView from './_component/ItemDetailView'

type Props = {
  params: { itemId: number }
}

export default function DetailPage({ params }: Props) {
  const { itemId } = params

  return (
    <main
      className={cn('mx-auto mt-[32px] min-h-[650px] w-[720px]', 'mo:w-full')}
    >
      <ErrorHandlingWrapper
        fallbackComponent={ErrorFallback}
        suspenseFallback={<Loading />}
      >
        <ItemDetailView itemId={itemId} />
      </ErrorHandlingWrapper>
    </main>
  )
}
