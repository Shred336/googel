import "./App.css";
import GoogleSearchForm from "./googel.jsx";
import GoogelText from "./header.jsx";
import WebsiteRenderer from "./renderer.jsx";
function App() {
  return (
    <div className="App">
      <div id="container">
        <div>
          <GoogelText />
        </div>
        <div>
          <GoogleSearchForm />
        </div>
        <div>{/* <WebsiteRenderer /> */}</div>
      </div>
    </div>
  );
}

export default App;
