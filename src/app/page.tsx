'use client'
import { Layout } from 'antd'
import { Header } from '@/components/Header'
import { Content } from '@/components/Content'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  )
}
