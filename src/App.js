// import section
import "./App.css";
import NavBar from "./components/NavBar";
// import LeftSide from "./components/LeftSide";
// import RightSide from "./components/RightSide";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";


// app function
export default function App() {
// vanilla JS section




// JSX return
  return (
    <div className="App">
      <NavBar/>
      <Main />
      <AboutMe/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

