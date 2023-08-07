import Head from 'next/head';
import Image from 'next/image';
import NavBar from './components/navbar';
import Hero from './home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo Test Ifza</title>
        <meta name="description" content="Xiots Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <Hero />
      </main>
    </div>
  );
}
