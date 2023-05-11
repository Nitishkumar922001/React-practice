
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
      <p> this page is exmaple of routing  in react client side without using react-router package which makes thing complex to achive this we have used window object and switch case</p>
      <RoutingWithoutPackage></RoutingWithoutPackage>
    </div>
  );
}

export default App;
