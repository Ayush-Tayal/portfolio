import React from "react";
import "./Project.css";
import projects_data from "./Projects_Data";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Bounce } from "react-reveal";

const Project = () => {
  // console.log("projeect data", projects_data);

  return (
    <div id="projects">
      <Bounce>
        <h1> PERSONAL PROJECTS </h1>
      </Bounce>

      <div id="projects_card">
        {projects_data &&
          projects_data.map((project, i) => (
              <Card sx={{ maxWidth: 345 }} key={i}>
                <CardMedia
                  className="project_image"
                  component="img"
                  alt="project image"
                  height="140"
                  image={project.thumbnail}
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="project_title"
                  >
                    {project.title}
                  </Typography>

                  {/* {
                <Typography variant="body2" color="text.secondary">
                  {project.desc}
                </Typography> 
              } */}
                </CardContent>

                <CardActions className="project_button">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => window.open(project.github)}
                  >
                    {" "}
                    View Code{" "}
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => window.open(project.live)}
                  >
                    {" "}
                    Live{" "}
                  </Button>
                </CardActions>
              </Card>
          ))}
      </div>
    </div>
  );
};

export default Project;
