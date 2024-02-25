import { useSearchParams } from 'next/navigation'

export default function useGetSearchParam(key: string) {
  const params = useSearchParams()

  return params.get(key)
}
