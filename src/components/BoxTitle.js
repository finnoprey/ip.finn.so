import React from 'react'
import './BoxTitle.css'

export default function BoxTitle(props) {
  return (
    <div className='box-primary'>
      <h1>Public Address</h1>
			<p>{ props.ipData.ip }</p>
    </div>
  )
}
