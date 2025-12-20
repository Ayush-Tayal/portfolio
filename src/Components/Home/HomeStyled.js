import styled from "styled-components";

export const HomeContainerWrapper = styled.div`
  #img-icon img {
    max-width: 550px;
  }

  #home {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px;
  }

  #home-content {
    margin-left: 10px;
    color: whitesmoke;
  }

  #greeting {
    display: inline-block;
    background-color: #2ca46d;
    font-weight: 600;
    padding: 16px;
    font-size: 25px;
    margin-bottom: 5px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .Typewriter {
    text-align: start;
    margin-left:50px;
  }

  #profile-links {
    margin-top: 30px;
  }

  #profile-links svg {
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 30px;
    font-size: 20px;
    transition: transform 250ms ease;
  }

  #profile-links svg:hover {
    transform: scale(1.4);
  }

  .git_icn {
    background-color: #171515;
    color: #ffffff;
  }

  .ldn_icn {
    background-color: #0072b1;
    color: #ffffff;
  }

  .ph_icn {
    color: #ffffff;
    background-color: #1794EB;
  }
  .whatsapp_icn {
    background-color: #54CA45;
    color: #ffffff;
  }

  .mail_icn {
    color: #bb001b;
    background-color: white;
  }

  .scroll_to_top {
    color: #2ca46d;
    font-size: 60px;
    position: fixed;
    bottom: 6%;
    right: 2%;
    margin-left: 93%;
    cursor: pointer;
    z-index: 10;
  }

  .scroll_to_top:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 768px) {
    #home {
      display: flex;
      flex-direction: column;
      margin: auto;
      padding-top: 40px;
      padding-bottom: 5vh;
    }

    #img-icon img {
      max-width: 400px;
      margin-bottom: 20px;
    }

    #home-content {
      margin: 20px;
    }

    #profile-links {
      text-align: center;
    }

    #profile-links svg {
      margin-bottom: 20px;
    }

  }
`;
