
// import React from "react";


import classes from './Home.module.css';


const Home= () => {
  return (
    <div className={classes.Home}>
<div className={classes.Container}>
<h1 className={classes.Hello}>Hello, there.</h1>
<h2>Welcome to my portfolio!</h2>
</div>
</div>
  )
}

export default Home;


// const [currentPage, handlePageChange] = useState("About");

// // The renderPage method uses a switch statement to render the appropriate current page
// const renderPage = () => {
//   switch (currentPage) {
//     case "About":
//       return <About />;
//     case "Portfolio":
//       return <Portfolio />;
//     case "Contact":
//       return <Contact />;
//     case "Resume":
//       return <Resume />;
// // default page set to About Me section when user first views 
//     default:
//       return <About />;
//   }
// };
// // 