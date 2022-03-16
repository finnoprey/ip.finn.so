import Head from 'next/head'
import BoxBrowser from '../components/BoxBrowser/BoxBrowser';
import BoxLookup from '../components/BoxLookup/BoxLookup';
import BoxTitle from '../components/BoxTitle/BoxTitle';

import { useEffect, useState } from 'react';

function Main() {
  const placeholder = {
    ip: '***.***.**.**',
    status: 'fetching',
    country: '*********',
    region: '*********',
    city: '*********',
    isp: '*********'
  }
  
  const [data, setData] = useState(placeholder)

  useEffect(() => {
    fetch ('/api/ip')
    .then(res => res.json())
    .then(json => {
      if (json.status !== 'error') {
        setData(json)
      }
    })
  }, [ ])

  return (
    <>
      <Head>
        <title>Address Lookup</title>
        <meta
          name="description"
          content="Find information about your IP."
        />
        <meta name="theme-color" content="#89c13c" />

        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="icon" href="/favicon.ico" />

        <script data-no-cookie async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <div className='container'>
        <BoxTitle data={data}/>
        <BoxLookup data={data}/>
        <BoxBrowser />
      </div>
    </>
  )
}

export default Main
