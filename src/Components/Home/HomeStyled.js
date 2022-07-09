import styled from "styled-components";

export const HomeContainerWrapper = styled.div`
  #img-icon img {
    height: 60vh;
    border-radius: 50%;
  }

  #home {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin-top: -3.5rem;
    height: 100vh;
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
    text-align: center;
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
    transform: scale(1.2);
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
    background-color: #00c3005c;
  }

  .mail_icn {
    color: #bb001b;
    background-color: white;
  }

  @media screen and (max-width: 768px) {
    #home {
      display: flex;
      flex-direction: column;
      margin: auto;
    }

    #img-icon img {
      height: 30vh;
    }

    #home-content {
      margin: 20px;
    }
  }
`;
