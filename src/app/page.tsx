import { Header } from '@/components/header'
import { MainContent } from '@/components/content'

export default function Home() {
  return (
    <main className='h-screen bg-neutral-white overflow-hidden'>
      <Header/>
      <MainContent/>
    </main>
  )
}
