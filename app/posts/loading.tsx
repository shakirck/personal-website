import React from 'react'
import Image from 'next/image'
export default function loading() {
  return (<div className='blog-container' style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
     
  }}>

    <Image  src="loading.svg"alt='loading' width={75} height={75}/>
    <h3>Loading Posts...</h3>
  </div>
   )
}
