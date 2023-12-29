import React from 'react'
import Link from 'next/link';

const ExperiencePage = () => {
  return (
    <section className="my-8">
        <h2 className="text-3xl font-semibold">Professional Journey</h2>
        <div className="max-w-5xl w-full justify-start font-mono text-sm lg:flex">
          <div className="container mx-auto px-4 pt-4">
            <p className="mt-4 space-y-2 text-gray-500 font-semibold">Feb 2019 - Dec 2021</p>
          </div>
        </div>
        <div className="max-w-5xl w-full justify-end font-mono text-sm lg:flex">
          <div className="container mx-auto px-4 pt-4">
            <p className="mt-4 space-y-2 text-gray-400">Delivering high-quality, robust production code for a diverse aray of projects for multiple clients.</p>
            <p className="mt-4 space-y-2 text-gray-400">Collaborated with engineers accross teams to design and develop features in a fast paced startup environment.</p>
          </div>
        </div>
        <div className="p-2 pt-4 flex space-x-4">
          <div className="w-20 h-10 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
            RoR
          </div>
          <div className="w-20 h-10 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
            HTML
          </div>
          <div className="w-320h-10 p-2 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
            Javascript
          </div>
          <div className="w-20 h-10 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
            Jquery
          </div>
        </div>

        <div className="max-w-5xl w-full justify-start font-mono text-sm lg:flex">
          <div className="container mx-auto px-4 pt-4">
            <p className="mt-4 space-y-2 text-gray-500 font-semibold">Dec 2021 - Present</p>
          </div>
        </div>
        <div className="max-w-5xl w-full justify-end font-mono text-sm lg:flex">
          <div className="container mx-auto px-4 pt-4">
            <p className="mt-4 space-y-2 text-gray-400">Developed high performance, scalable data pipeline applications and APIs in an array on domains for clients like Deloitte, Mother Dairy, Jubliant Foods and many more.</p>
          </div>
        </div>
        <div className="p-2 pt-4 flex space-x-4">
          <div className="w-20 h-10 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
            Java
          </div>
          <div className="w-20 h-10 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
            Kafka
          </div>
          <div className="w-30 h-10 p-2 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
            PostgresSQL
          </div>
          <div className="w-20 h-10 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
            ELK
          </div>
        </div>
        <div className="mt-10">
          <Link href="/naman_gulati_resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-10 text-white font-semibold">
            Check out my full Resume here -{'>'}
          </Link>
        </div>
      </section>
  )
}

export default ExperiencePage