// Nav page props show about, portfolio, contact, and resume sections
import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={classes.NavBar} id="navigation">
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