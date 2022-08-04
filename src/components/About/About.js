// photo and bio on this page
import React from "react";
import classes from "./About.module.css";
// import me from "/img/prof.jpg";
import PageHeader from "./../PageHeader/PageHeader";

const About = () => {
  return (
    <div className={classes.AboutMe} id="about">
      <PageHeader title={"ABOUT ME"} />
      <div className={classes.Container}>
      <div className={classes.text}>
        <h1> I'm Veronica Kolesnikov</h1>
        <p>
          A junior web developer based in San Antonio, TX. Passionate about
          learning & creating. Check out my work and reach out!
        </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={process.env.PUBLIC_URL + '/img/prof.jpg'} alt="profile"></img>
        </div>
        </div>
    </div>
  );
};
export default About;