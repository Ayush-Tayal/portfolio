import styled from "styled-components";

export const ProjectsContainerWrapper = styled.div`
  #projects {
    color: white;
    padding-top: 5%;
  }

  #projects h1 {
    text-align: center;
  }

  #projects_card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: column;
    gap: 4px;
    align-items: center;
    justify-items: center;
    margin-top: 30px;
  }

  .project_image {
    padding-top: 10px;
  }

  .project_title {
    padding: 20px;
  }

  .project_button {
    display: flex;
    justify-content: space-around;
  }

  @media screen and (max-width: 768px) {
    #projects_card {
      display: inline;
    }

    .MuiPaper-root {
      margin: 0 auto 30px auto;
      // margin-bottom: 50px;
    }
  }
`;
