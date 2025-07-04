import { Button } from "@mui/material";
import React from "react";
import { Bounce, Flip } from "react-reveal";
import { PublicationContainerWrapper } from "./PublicationStyled";

const Publication = () => {
  return (
    <PublicationContainerWrapper>
      <div id="publication">
        <Bounce>
          <h1 className="publication-heading"> PUBLICATION </h1>
        </Bounce>

        <Flip left>
          <div id="publication-info">
            <h2> HYPERLOOP TRANSPORTATION SYSTEM | IJRESM | May 2020 </h2>
            <h4>
              Published a research paper on the potential of Hyperloop as the 5th mode of transportation.
            </h4>

            <Button
              style={{ backgroundColor: "#2ca46d", color: "whitesmoke" }}
              variant="outlined"
              href="https://www.ijresm.com/Vol.3_2020/Vol3_Iss5_May20/IJRESM_V3_I5_160.pdf"
              target={"_blank"}
            >
              See Publication
            </Button>
          </div>
        </Flip>
      </div>
    </PublicationContainerWrapper>
  );
};

export default Publication;
