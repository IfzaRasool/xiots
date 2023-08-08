import Head from 'next/head';
import Image from 'next/image';
import NavBar from './components/navbar';
import Hero from './home';
import OurService from './components/ourservice';
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo Test Ifza</title>
        <meta name="description" content="Xiots Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <OurService />
      </main>
    </div>
  );
}
