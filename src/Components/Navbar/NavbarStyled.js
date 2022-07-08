import styled from "styled-components";

export const NavbarContainerWrapper = styled.div`
  #navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 30px;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #2ca46d;
    flex-wrap: wrap;
  }

  #navbar a {
    color: whitesmoke;
    font-size: 24px;
    background-color: #2ca46d;
    font-family: "Poppins";
    font-weight: 900;
  }

  #left-nav a {
    font-weight: 800;
  }

  #right-nav a {
    font-weight: 500;
    padding-right: 20px;
  }

  #mobile-navbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    #mobile-navbar {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      background-color: #2ca46d;
    }

    #navbar {
      display: none;
    }

    #left-menu a {
      color: whitesmoke;
      font-size: 24px;
      // background-color: #2ca46d;
      font-family: "Poppins";
      font-weight: 900;
    }

    .menu-icon {
      color: whitesmoke;
      font-size: 25px;
      cursor: pointer;
    }
  }
`;
