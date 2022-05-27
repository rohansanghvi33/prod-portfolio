import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import { Tweet } from 'react-twitter-widgets'


export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen py-6 bg-auto bg-no-repeat bg-gray-900">
      <Head>
        <title>Rohan Sanghvi</title>
        <meta name="Autho" content="Rohan Sanghvi" />
        <link rel="icon" href="/folio.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7419812829956855"
        crossOrigin="anonymous"></script>  
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-BBM81R1SE7');
        </script>
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-BBM81R1SE7"
                strategy = "lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BBM81R1SE7');
          
          
          
          `}
        </Script>



      <div className="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12">

        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-6 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-6 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>

        <div className="col-span-6 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        

      </div>

      <div className="relative flex flex-col items-center">
        <div>
          <Image className="rounded-full" src="/pass-sim.png" width={300} height={300} />
        </div>
        <div className="flex flex-col items-center pt-10 text-white">
          <h1 className=" font-serif text-2xl font-bold italic pb-6 overflow-hidden whitespace-nowrap">
            Hi I am Rohan Sanghvi !
          </h1>
          <p className="font-serif text-sm font-bold italic pb-6 overflow-hidden whitespace-nowrap animate-bounce">
            &lt;Back-End developer &#38;&#38; NOT Front-End developer&gt;
          </p>
        </div>

        <div className="flex flex-col items-center justify-around max-w-4xl sm:w-full">
          <a
            href="https://www.linkedin.com/in/rohansanghvi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-48 py-2 px-4 rounded-full font-serif italic border-2 inline-flex justify-center items-center">

              <span>LinkedIn</span>
            </button>
          </a>
          <a
            href="https://github.com/rohansanghvi33"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-48 mt-4 py-2 px-4 rounded-full font-serif italic border-2">
              GitHub
            </button>
          </a>
          <a
            href="https://twitter.com/rohansanghvi33"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-48 mt-4 py-2 px-4 rounded-full font-serif italic border-2">
              Twitter
            </button>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
          <div className="mt-4 w-96">
            <Tweet tweetId="1474047312557056001" />
          </div>
          <div className="mt-1  w-96">
            <Tweet tweetId="1466596274803646468" />
          </div>
          <div className="mt-1 w-96">
            <Tweet tweetId="1465378244492808193" />
          </div>
          <div className="mt-1 w-96">
            <Tweet tweetId="1462497685282324480" />
          </div>
        </div>


        <footer className={styles.footer}>
          <a
            href="https://www.linkedin.com/in/rohansanghvi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by {' '}
            <span className={styles.logo}>
              <Image src="/linkedin.svg" alt="linkedin logo" width={32} height={16} />
            </span> <p>Rohan Sanghvi</p>
          </a>
        </footer>
      </div>


    </div>


  )
}
