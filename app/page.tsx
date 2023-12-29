import React from 'react'
import Script from 'next/script';
import ExperiencePage from './experience/page.tsx';
import Footer from './footer/page.tsx';
import AboutPage from './about/page.tsx';

const Home = () => {
  return (
    <><main className="flex min-h-screen flex-col items-center justify-between pt-12">
      <div id="cursor-aura"></div>
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="container mx-auto px-4">
          <header className="text-center py-10">
            <h1 className="text-4xl font-bold">Naman Gulati</h1>
            <p className="text-xl text-gray-600">Senior Software Engineer</p>
            <p className="mt-2 text-gray-500">Crafting Robust Web Applications and Data Pipelines</p>
          </header>

          <AboutPage/>
          <section className="my-8">
            <h2 className="text-3xl font-semibold">Core Skills</h2>
            <ul className="mt-4 space-y-2 text-gray-400 list-disc pl-4">
              <li>Ruby on Rails, Java</li>
              <li>PostgreSQL</li>
              <li>Cassandra</li>
              <li>Kafka</li>
              <li>GRPC</li>
              <li>Kubernetes</li>
              <li>Ansible</li>
              <li>Airflow</li>
              <li>Redis</li>
            </ul>
          </section>

          <ExperiencePage></ExperiencePage>
        </div>
      </div>
      <Footer/>
    </main><Script id='cursor-aura-script' dangerouslySetInnerHTML={{
      __html: `document.addEventListener('mousemove', (e) => {
        const aura = document.getElementById('cursor-aura');
        aura.style.opacity = 0.2;
        aura.style.left = e.pageX + 'px';
        aura.style.top = e.pageY + 'px';
      });`
    }}/></>
    );
}

export default Home