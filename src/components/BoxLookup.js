import React from 'react'
import './BoxLookup.css'

export default function BoxLookup(props) {
  return (
    <div className='box-lookup'>
      <h1>Address Lookup</h1>
      <p><strong>Country </strong> { props.ipData.country }</p>
      <p><strong>Region </strong> { props.ipData.region }</p>
      <p><strong>City </strong> { props.ipData.city }</p>
      <p><strong>ISP </strong> { props.ipData.isp }</p>
    </div>
  )
}
