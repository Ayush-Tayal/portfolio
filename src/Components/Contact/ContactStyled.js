import styled from "styled-components";

export const ContactContainerWrapper = styled.div`
  #contact h1 {
    text-align: center;
    padding-top: 5%;
    color:#66B3FF;
  }

  #contact_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 5%;
  }
  #contact-me input,textarea {
    text-decoration: none;
    outline: none;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
    border: none;
    color: whitesmoke;
    background-color: #2d343e;
  }

  .textarea textarea {
    width: 93%;
    height: 15vh;
    font-family: sans-serif;
    textarea: none;
    resize:none;
  }

  #contact-me input::placeholder,textarea::placeholder {
    color: white;
  }

  #send-message {
    text-align: center;
  }

  #contact-me button {
    color: whitesmoke;
    font-weight: 600;
    background-color: #2ca46d;
    margin-top: 20px;
    padding: 12px;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    #contact_section {
      display: flex;
      flex-direction: column;
    }

    #google-map iframe {
      height: 40vh;
      width: 85vw;
    }

    #contact-me {
      text-align: center;
    }

    #contact-me input,.textarea textarea {
      width: 80%;
    }
  }
`;
