import { Button } from '@mui/material'
import React from 'react'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <div id='page-not-found'>
      <h1> 404 </h1>
      <h1> Sorry, Page Not Found..! </h1>
      {/* <Button variant='contained' onClick={()=>history.push('/')}> Go Back </Button> */}
    </div>
  )
}

export default PageNotFound