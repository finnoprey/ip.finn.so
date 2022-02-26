import { useEffect, useState } from 'react';
import './App.css';
import BoxBrowser from './components/BoxBrower';
import BoxLookup from './components/BoxLookup';
import BoxTitle from './components/BoxTitle';

function App() {
  const url = 'https://api.oprey.co/'
  const placeholder = {
    ip: '***.***.**.**',
    status: 'fetching',
    country: '*********',
    region: '*********',
    city: '*********',
    isp: '*********'
  }
  
  const [ipData, setIpData] = useState(placeholder)

  useEffect(() => {
    fetch (url + 'ip')
    .then(res => res.json())
    .then(json => {
      setIpData(json)
    })
  }, [ url ])

  return (
    <div className='container'>
      <BoxTitle ipData={ipData}/>
      <BoxLookup ipData={ipData}/>
      <BoxBrowser />
    </div>
  );
}

export default App;
