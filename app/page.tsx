import React from 'react'
import Script from 'next/script';
import ExperiencePage from './experience/page.tsx';
import Footer from './footer/page.tsx';
import AboutPage from './about/page.tsx';

const Home = () => {
  return (
    <><main className="flex min-h-screen flex-col items-center justify-between pt-12">
      <div id="cursor-aura"></div>
      <div className="max-w-5xl w-full items-center justify-between lg:flex">
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
          <section className="my-8">
            <h2 className="text-3xl font-semibold">Notable Projects</h2>
            <ul className="mt-4 space-y-2 text-gray-200 list-disc pl-4">
              <li>EV Analytics System</li>
                <li className="mt-4 space-y-2 text-gray-400">Spearheaded the implementation of ingestion and analytics microservices for detailed EV analytics in Java backed by data ingestion in Kafka, storage in TimescaleDB, api in gRPC leveraging Kafka consumer and streaming APIs</li>
                <li className="mt-4 space-y-2 text-gray-400">Provides features for realtime detection of charging events, deep discharge, excess charge and detailed analytics for metrics like energy consumption, mileage and range, distance to empty</li>
              <li className="pt-8">Provider Router Service</li>
                <li className="mt-4 space-y-2 text-gray-400">Developed services for data ingestion, transformation and forwarding to external clients</li>
                <li className="mt-4 space-y-2 text-gray-400">Transforms data from Kafka and stores in postgres partitioned tables</li>
                <li className="mt-4 space-y-2 text-gray-400">Ruby apps to lock and read from postgres, transformed to client&#39;s desired format and pushes data in batches via HTTP to external clients</li>
                <li className="pt-8">Vehicle Motion Status Detection</li>
                <li className="mt-4 space-y-2 text-gray-400">Crafted algorithm for detection of vehicle&#39;s motion status using Kafka consumer app and redis as intermediate store for motion status</li>
                <li className="mt-4 space-y-2 text-gray-400">Handled publication of motion status to frontend through sockets and gRPC apis</li>
                <li className="pt-8">Data Delivery System</li>
                <li className="mt-4 space-y-2 text-gray-400">High traffic IoT data delivery system ingesting data in Kafka filtering and tranforming data in Java microservice</li>
                <li className="mt-4 space-y-2 text-gray-400">Uses prometheus and grafana for analysing data trends</li>
                <li className="mt-4 space-y-2 text-gray-400">Publishes data to mapping clients via HTTP api</li>
                <li className="pt-8">Envoy proxy alerting and visualization</li>
                <li className="mt-4 space-y-2 text-gray-400">Led the implementation of Envoy Proxy Load Balancers for gRPC API to facilitate rate limiting, load balancing, and health checking, significantly enhancing API efficiency and reliability.</li>
                <li className="mt-4 space-y-2 text-gray-400">Developed advanced monitoring features, including health checking and outlier detection, ensuring robust API performance and system resilience.</li>
                <li className="mt-4 space-y-2 text-gray-400">Deployed Grafana dashboards for real-time monitoring and alerting, improving visibility into API traffic and system metrics.</li>
            </ul>
          </section>
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