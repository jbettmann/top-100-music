import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Button } from "bootstrap";
import { NavBar } from "./components/NavBar";
import { MainView } from "./components/MainView";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch} />
      <div className="row ">
        <MainView search={search} setSearch={setSearch} />
      </div>
    </div>
  );
}

export default App;
