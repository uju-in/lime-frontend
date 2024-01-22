import Layout from '@/app/_components/layout/Layout'
import { GetSearchParams } from './_components/GetSearchParams'

export default function Home() {
  return (
    <Layout>
      {/* 로그인 시 토큰 저장을 위해 임시로 배치한 클라이언트 컴포넌트 */}
      <GetSearchParams />
    </Layout>
  )
}
