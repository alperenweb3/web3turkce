import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-300 text-black shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0" href="/">
          <Image
            src="/images/web3_logo_edited.png"
            alt="Web3 Logo"
            width={100}
            height={100}
          ></Image>
          <span className="ml-1 text-xl uppercase">turkce</span>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto ">
          <Link className="mx-5 cursor-pointer uppercase hover:text-orange-500" href="/blog">Blog</Link>
          <Link className="mx-5 cursor-pointer uppercase hover:text-orange-500" href="/about">Hakkımızda</Link>
        </nav>
      </div>
    </header>
  );
}

