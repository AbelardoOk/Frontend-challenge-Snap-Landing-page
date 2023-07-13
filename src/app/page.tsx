"use client"

import { Header } from '@/components/header'
import { MainContent } from '@/components/content'
import { HeaderMobile } from '@/components/headerMobile'
import { useWindowSize } from 'rooks'
import { MainContentMobile } from '@/components/contentMobile'

export default function Home() {
  const { innerWidth } = useWindowSize();

  return (
    <main className='h-screen bg-neutral-white overflow-hidden'>

    {(innerWidth !== null && innerWidth > 768) ? <Header/>: <HeaderMobile/> }

    {(innerWidth !== null && innerWidth > 768) ? <MainContent/>: <MainContentMobile/> }
      
    </main>
  )
}
