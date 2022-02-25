import React from 'react'
import './BoxLookup.css'

export default function BoxLookup() {
  return (
    <div class='box-lookup'>
      <h1>Address Lookup</h1>
      <p1><strong>Country </strong></p1>
      <p1 id='country-placeholder'>*********</p1>
      
      <br />
      <p1><strong>Region </strong></p1>
      <p1 id='region-placeholder'>*********</p1>
      
      <br />
      <p1><strong>City </strong></p1>
      <p1 id='city-placeholder'>*********</p1>

      <br />
      <p1><strong>ISP </strong></p1>
      <p1 id='isp-placeholder'>*********</p1>
    </div>
  )
}
