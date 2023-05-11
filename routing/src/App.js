
// import './App.css';

import RoutingWithoutPackage from "./RoutingWithoutPackage";

function App() {
  return (
    <div className="App">
      <ul>
      <li><a href="/about">about</a></li>
      <li><a href="/">home</a></li>
      <li><a href="/contact">contact</a></li>
      </ul>
      <RoutingWithoutPackage></RoutingWithoutPackage>
    </div>
  );
}

export default App;
