import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/Layout"

export default function NotFound() {
  return (
    <div>
        <Layout title="Page Not Found">
            <div className="flex flex-col items-center mt-20">
                <Image  src="/images/web3_logo_edited.png" width={100} height={100} alt="Web3Turkce Logo"/>
                <h1 className="text-6xl my-5">Whooops!</h1>
                <h2 className="text-4xl text-gray-400 mb-5">This page does not exist</h2>
            </div>
        </Layout>
    </div>
  )
}
