// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

const App = ()  => {
  return (
    <div className="App">
        <NavBar />
        <About/>
        <Portfolio/>
        <Contact/>
        <Resume/>
        </div>
        
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
