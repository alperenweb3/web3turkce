import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout title="Web3Turkce Ekibi Hakkında">
        <h1 className='text-5xl border-b-4 pb-5 font-bold'>Hakkımızda</h1>

        <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
          <h3 className="text-2xl mb-5">Web3Turkce Blog</h3>
          <p className="mb-3">Web3Turkce Kaynaklar</p>
        </div>
    </Layout>
  )
}
