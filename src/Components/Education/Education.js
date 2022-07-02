import React from 'react'
import { Bounce} from 'react-reveal'
import './Education.css'

const Education = () => {
  return (
    <div id='education'>
      <Bounce>
        <h1 className='education-heading'> MY EDUCATION </h1>
      </Bounce>

      <div id='educations'>
        <div className='educ'>
          <h4> Bachelor of  Technlogy </h4>
          <h6> PDM College Of Engineering </h6>
          <h6> 20017-2021 </h6>
        </div>

        <div className='educ'>
          <h4> Senior Secondary </h4>
          <h6> Nav Bharti Public School </h6>
          <h6> 20016-2017 </h6>
        </div>

        <div className='educ'>
          <h4> Secondary </h4>
          <h6> Nav Bharti Sr Sec School </h6>
          <h6> 20014-2015 </h6>
        </div>
      </div>
    </div>
  )
}

export default Education