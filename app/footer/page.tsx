import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
      <footer className="text-white bottom-0 pb-0 bg-white w-full h-18">
        <section className="my-0 bottom-0 pl-2 pt-2">
          <Link href="https://www.linkedin.com/in/naman-gulati-5b1779172/">
            <Image src="/linkedin.png" height={35} width={30} alt="LinkedIn" className="inline" />
          </Link>
          <Link href="https://github.com/naman-gulati3" className="pl-4">
            <Image src="/github.png" height={35} width={30} alt="Github" className="inline" />
          </Link>
        </section>
        <h2 className="text-m text-center text-gray-600 pb-4">© Naman Gulati</h2>
      </footer>
  )
}

export default Footer