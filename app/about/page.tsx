import Link from "next/link"
import Image from "next/image"
import React from 'react'

const AboutPage = () => {
  return (
    <section className="my-8">
    <h2 className="text-3xl font-semibold">About Me</h2>
    <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="container mx-auto px-4 pt-4">
        <p className="text-x text-gray-400">Hey there,</p>
        <p className="text-x text-gray-400">I am Naman Gulati</p>
        <p className="text-x text-gray-400">I am a Senior Software Engineer from Roorkee, Uttarakhand with over 5 years of experience</p>
        <p className="text-x text-gray-400 inline">currently working at </p>
        <Link href="https://www.loconav.com" className="text-x text-white-600 underline">Loconav</Link>.
        <p className="text-x text-gray-400 inline"> I mostly work on building robust data pipeline backend systems in Java</p>
        <Image src="/java.png" height={40} width={40} alt="Java" className="inline" />
        <p className="text-x text-gray-400">and love learning and trying out new stuff.</p>
        <p className="text-x text-gray-400 inline">I also have experience of building web apps and APIs on Ruby on Rails </p>
        <Image src="/ror.png" height={30} width={25} alt="RoR" className="inline" />
        <p className="text-x text-gray-400">I have also tried my hands at multiple technologies and frameworks like</p>
        <p className="text-x text-white inline">Ansible, Kubernetes, Terraform, Airflow, AWS</p> <p className="text-x text-gray-400 inline">and a bunch more.</p>
        <p className="text-x text-gray-400">I love reading about systems and try to learn something new everyday.</p>
      </div>
    </div>
  </section>
  )
}

export default AboutPage