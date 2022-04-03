import "./App.css";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Main from "./components/Main";
function App() {
  const name = "suzy";
  return (
    <div className="App">
      <Header />
      <LeftSide />
      <Main name={"Max Morrow"} />
      <RightSide />
    </div>
  );
}

export default App;
