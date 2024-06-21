import "./App.css";
import Body from "./components/body/Body";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Body />
      </div>
    </Router>
  );
}

export default App;
