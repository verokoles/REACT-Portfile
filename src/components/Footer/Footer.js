// import React form 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import classes from "./Footer.module.css";

const handleURL = (url) => {
  return () => window.open(url, "_blank");
};
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.icons}>
        <FaLinkedin
          color="white"
          size="50px"
          style={{ padding: "3%" }}
          onClick={handleURL(
            "https://www.linkedin.com/in/veronica-kolesnikov-210237229/"
          )}
        />
        <FaGithub
          color="white"
          size="50px"
          style={{ padding: "3%" }}
          onClick={handleURL('https://github.com/verokoles')}
        />
        <FaInstagram
          color="white"
          size="50px"
          style={{ padding: "3%" }}
          onClick={handleURL("https://www.instagram.com/veronicakolesnikov/")}
        />
      </div>
    </div>
  );
};

export default Footer;
