import React from "react";
import classes from './Resume.module.css';
import PageHeader from "../PageHeader/PageHeader";
// import resume from './vkres';

const Resume = () => {
  return (
    <div className={classes.resume} id="resume">
      <PageHeader title={"RESUME"} />
      <div className={classes.container}>
           <hr />
   <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "https://drive.google.com/file/d/1BMGvTu2hNtBLzvsieMGc-HKrCfP-DRIM/view?usp=sharing"}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills/Proficiences</p>
        <hr />
        <ul>
          <li>HTML, CSS, Javascript</li>
          <li>OpenWeatherAPI, JSON</li>
          <li>Sequelize, MySQL</li>
          <li>React.js</li>
          <li>Markdown</li>
          <li>Git Commands</li>
          <li>Github Repo Management</li>
        </ul>
      </div>
    </div>
  );
}
export default Resume;