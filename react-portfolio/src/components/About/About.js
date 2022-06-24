// photo and bio on this page
// import React from "react";
import classes from "./About.module.css";
import prof from "./../../img/prof.jpg";

const About = () => {
  return (
    <div className={classes.About}>
      <div className={classes.Container}>
        <h1 className={classes.Hello}>Hello, there.</h1>
        <h1 className={classes.Name}>
         I'm Veronica Kolesnikov
        </h1>
        <h2>
          A junior web developer in San Antonio, TX <br></br>
          with a passion for
          creating. <br></br> I'm currently on a journey to develop <br></br>
          simplicity in accessability with an aesthetic touch.
        </h2>
        <img className={classes.Profile} src={prof} alt="profile"></img>
        
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
