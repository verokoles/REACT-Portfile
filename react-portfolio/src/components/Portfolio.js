// page section that showcases 6 projects

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Project 1: Event Seeker",
    languages: "HTML, CSS, Bulma, OpenWeather API, TicketMaster API, Javascript",
    image: "react-portfolio/public/event-seeker.png",
    description: "A group worked together to make API requests using OpenWeather and TicketMaster. This application allows any user to search and attend a certains city's current local outdoor events and see what the weather will be like to plan and pack accordingly.",
    repo: "https://github.com/jwhitney2209/event-seeker",
    live: "https://jwhitney2209.github.io/event-seeker/",
  },
  {
    id: 1,
    title: "Work Day Scheduler",
    languages: "HTML, CSS/Bootstrap, Javascript, jQuery, Moment.js",
    image: "react-portfolio/public/scheduler.png",
    description:"A simple scheduler for anyone who wants to keep track of their plans during the work day.",
    repo: "https://github.com/verokoles/work-day-scheduler#built-with",
    live: "https://verokoles.github.io/work-day-scheduler/",
  },
  {
    id: 2,
    title: "Project 2: Chatter Verse",
    languages: "html, css, js, handlebars",
    packages: "bcrypt, express handlebars.js, sequelize, express, Jest, mysql2",
    image: "react-portfolio/public/chatter.png",
    description:
      "",
      repo: "https://github.com/c0y01202/veest-news-crunch",
    live: "https://still-citadel-61156.herokuapp.com/",
    
  },
  {
    id: 3,
    title: "Personal Basic Portfolio",
    languages: "HTML, CSS",
    image: "react-portfolio/public/profile.png",
    description: "A simply way to build a profile using only HTML and CSS.",
    repo: "https://github.com/verokoles/profile",
    live: "https://verokoles.github.io/profile/",
  },
  {
    id: 4,
    title: "NOTED",
    languages: "HTML, CSS, JavaScript",
    image: "react-portfolio/public/noted.png",
    packages: "Node.js, Jest, Express",
    description:
      "An application that allows you to add, edit, and delete tasks.",
    repo: "https://github.com/verokoles/NOTED",
    live: "https://mighty-sea-96505.herokuapp.com/",
  },
  {
    id: 5,
    title: "Java-Code-Quiz",
    languages: "HTML, CSS, Javascript",
    image: "react-portfolio/public/java-quiz.png",
    description:
      "A timed JavaScript-powered quiz about simple JS questions. Users can start, answer the questions, and see the highest score.",
    repo: "https://github.com/verokoles/java-code-quiz",
    live: "https://verokoles.github.io/java-code-quiz/",
  },

];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;