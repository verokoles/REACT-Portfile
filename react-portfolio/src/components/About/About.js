// photo and bio on this page
// import React from "react";
import classes from "./About.module.css";
import me from "./../../img/prof.jpg";
import PageHeader from "./../PageHeader/PageHeader";

const About = () => {
  return (
    <div className={classes.AboutMe}>
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
          <img className={classes.Me} src={me} alt="profile"></img>
        </div>
        </div>
    </div>
  );
};
export default About;
// const About() {
//   return (
//     <div>
//       <p className="content is-medium">Hello, I'm</p>
//       <strong>Veronica Kolesnikov</strong>
//       <hr />
//       <img
//         className="my-pic"
//         src={process.env.PUBLIC_URL + "react-portfolio/public/prof.jpg"}
//         alt="Veronica Kolesnikov"
//       />
//       <p className="content mt-4">
//       I am a junior web developer in San Antonio, TX
//       with a passion for problem solving.
//       I'm currently on a journey to develop
//       <span>simplicity in accessability</span>
//       with an aesthetic touch.
//       </p>
//     </div>
//   )
// }

// export default About;
