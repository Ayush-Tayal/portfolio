import { Button } from '@mui/material'
import React from 'react'
import { Bounce, Flip } from 'react-reveal'
import './Publication.css'

const Publication = () => {
  return (
    <div id='publication'>
      <Bounce>
        <h1 className='publication-heading'> PUBLICATION </h1>
      </Bounce>
        

      <div id='publication-info'>
        <h2> HYPERLOOP TRANSPORTATION SYSTEM </h2>
        <h5>  The research paper is all about the 5th mode of transportation i.e., Hyperloop
          and published at IJRESM.
        </h5>

        <Button 
          style = {{backgroundColor:'#2ca46d', color : 'whitesmoke'}}
          variant='outlined' 
          href='https://www.ijresm.com/Vol.3_2020/Vol3_Iss5_May20/IJRESM_V3_I5_160.pdf'
          target={'_blank'}
        >
          See Publication
        </Button>
      </div>

    </div>
  )
}

export default Publication
