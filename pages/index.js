import Head from 'next/head'
import Image from 'next/image'
import NavBar from './components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo Test Ifza</title>
        <meta name="description" content="Xiots Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar/>
        <h1 className="text-3xl font-bold underline bg-orange-500">
    Hello 
    </h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
