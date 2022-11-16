import React from "react";

import "../styles/footer.scss";

import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h1>Teach Star</h1>
          <p>@all rights reserved by the creator</p>
        </div>

        <div className="iconss">
          <div>
          <h5>Follow Us</h5>
          </div>

          <a href="https://www.facebook.com/ujjal.roy.7862" target={"_blank"}>
            <AiFillFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/ujjal-kumar-roy-9385a71a7/"
            target={"_blank"}
          >
            <AiFillLinkedin />
          </a>

          <a href="https://github.com/Ujjal-ENG" target={"_blank"}>
            <AiFillGithub />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
