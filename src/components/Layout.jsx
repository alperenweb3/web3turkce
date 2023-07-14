import Head from 'next/head'

function Layout({title, keywords, description, children}) {
  return (
    <div>
        <Head>
          <title>{title}</title>
          <meta name='keywords' content={keywords}/>
          <meta name='description' content={description}/>
          <link rel="icon" href="https://fav.farm/🔥" />
          </Head>
        <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}

Layout.defaultProps={
  title: "Web3 Dünyası Türkçe Kaynaklar",
  keywords: "web3, web3 kaynaklar, web3 turkce",
  description: "Web3 Türkce Kaynak Sitesi"
}

export default Layout;