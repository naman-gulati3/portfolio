import Image from 'next/image'
import Link from "next/link"
import React from 'react'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-12">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="container mx-auto px-4">
          <header className="text-center py-10">
            <h1 className="text-4xl font-bold">Naman Gulati</h1>
            <p className="text-xl text-gray-600">Senior Software Engineer</p>
            <p className="mt-2 text-gray-500">Crafting Robust Web Applications and Data Pipelines</p>
          </header>

          <section className="my-8">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="mt-4 text-gray-700">
              Brief paragraph introducing yourself...
            </p>
          </section>
          <section className="my-8">
            <h2 className="text-3xl font-semibold">Core Skills</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Ruby on Rails, Java</li>
              <li>Database Management: PostgreSQL</li>
              <li>Data Pipeline Engineering: Kafka, gRPC APIs</li>
            </ul>
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-semibold">Key Projects</h2>
            <div className="mt-4">
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Project Name</h3>
                <p className="text-gray-600">Description...</p>
              </div>
            </div>
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-semibold">Professional Journey</h2>
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-semibold">Testimonials</h2>
          </section>
        </div>
      </div>
      <footer className="text-white bottom-0 pb-0 bg-white w-full">
          <section className="my-0 bottom-0 pl-2 pt-2">
            <Link href="https://www.linkedin.com/in/naman-gulati-5b1779172/">
              <Image src="/linkedin.png" height={35} width={30} alt="LinkedIn"/>
            </Link>
          </section >
            <h2 className="text-m text-center text-gray-600">© Naman Gulati</h2>
          </footer>
    </main>
  )
}

export default Home