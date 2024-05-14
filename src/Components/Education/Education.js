import React from "react";
import { Bounce, Zoom } from "react-reveal";
import { EducationContainerWrapper } from "./EducationStyled";

const Education = () => {
  return (
    <EducationContainerWrapper>
      <div id="education">
        <Bounce>
          <h1 className="education-heading"> ACADEMICS AND CREDENTIALS </h1>
        </Bounce>

        <div id="education-card">
          <Zoom>
            <div className="educ">
              <h3> Bachelor of Technlogy </h3>
              <h6> PDM College Of Engineering </h6>
              <h6> 2017-2021 </h6>
            </div>
          </Zoom>

          <Zoom>
            <div className="educ">
              <h3> Senior Secondary </h3>
              <h6> Nav Bharti Public School </h6>
              <h6> 2016-2017 </h6>
            </div>
          </Zoom>

          <Zoom>
            <div className="educ">
              <h3> Secondary </h3>
              <h6> Nav Bharti Sr Sec School </h6>
              <h6> 2014-2015 </h6>
            </div>
          </Zoom>
        </div>
      </div>
    </EducationContainerWrapper>
  );
};

export default Education;
