// photo and bio on this page 
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Hello, I'm</p>
      <strong>Veronica Kolesnikov</strong>
      <hr />
      <img
        className="my-pic"
        src={process.env.PUBLIC_URL + "react-portfolio/public/prof.jpg"}
        alt="Veronica Kolesnikov"
      />
      <p className="content mt-4">
      I am a junior web developer in San Antonio, TX
      with a passion for problem solving.
      I'm currently on a journey to develop
      <span>simplicity in accessability</span>
      with an aesthetic touch.
      </p>
    </div>
  )
}

export default About;