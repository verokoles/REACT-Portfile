// Nav page props show about, portfolio, contact, and resume sections
import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <nav>
        <ul>
        <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/#about">ABOUT</a>
          </li>
          <li>
            <a href="/#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="/#contact">CONTACT</a>
          </li>
          <li>
            <a href="/#resume">RESUME</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
// function Navigation(props) {
//   const tabs = ["About Me", "Portfolio", "Get In Touch", "Resume"];
//   return (
//     <div className="tabs is-centered">
//       <ul className="nav nav-tabs">
//         {tabs.map((tab) => (
//           <li
//             className={
//               props.currentPage === tab ? "nav-item is-active" : "nav-item"
//             }
//             key={tab}
//           >
//             <a
//               href={"#" + tab.toLowerCase()}
//               // Whenever a tab is clicked on, page handles thorugh HandlePage function
//               onClick={() => props.handlePageChange(tab)}
//               className={
//                 props.currentPage === tab ? "nav-link active" : "nav-link"
//               }
//             >
//               {tab}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Navigation;
