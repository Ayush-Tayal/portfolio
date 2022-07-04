import React from 'react'
import { Bounce} from 'react-reveal'
import './Education.css'

const Education = () => {
  return (
    <div id='education'>
      <Bounce>
        <h1 className='education-heading'> MY EDUCATION </h1>
      </Bounce>

      <div id='education-card'>
        <div className='educ'>
          <h3> Bachelor of  Technlogy </h3>
          <h6> PDM College Of Engineering </h6>
          <h6> 2017-2021 </h6>
        </div>

        <div className='educ'>
          <h3> Senior Secondary </h3>
          <h6> Nav Bharti Public School </h6>
          <h6> 2016-2017 </h6>
        </div>

        <div className='educ'>
          <h3> Secondary </h3>
          <h6> Nav Bharti Sr Sec School </h6>
          <h6> 2014-2015 </h6>
        </div>
      </div>
    </div>
  )
}

export default Education