// photo and bio on this page 
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Junior Developer</p>
      <hr />
      <img
        className="my-pic"
        src={process.env.PUBLIC_URL + "react-portfolio/public/prof.jpg"}
        alt="Veronica Kolesnikov"
      />
      <p className="content is-italic mt-4">
      Hello and welcome! 
      <br>
      I am a junior web developer in San Antonio, TX
      <br> 
      with a passion for problem solving.
      <br>
      On a journey to creating
      <br>
      <span>simplicity in accessability</span>
      <br>
      with an aesthetic touch.
      </p>
    </div>
  );
}

export default About;