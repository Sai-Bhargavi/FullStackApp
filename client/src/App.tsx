import React from "react";
import './App.css';
import logo from "./logo.svg";

function App() {
  const [data, setData] = React.useState(null);
  const [data1, setData1] = React.useState([]);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  React.useEffect(() => {
    fetch("/plant")
      .then((res) => res.json())
      .then((js) => setData1(js));
  });

  const hi = (data1.map(ele => ele.name)).toString();
  console.log(hi);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>{!data1 ? "Loading..." : hi}</p>

      </header>
    </div>
  );
}

export default App;
