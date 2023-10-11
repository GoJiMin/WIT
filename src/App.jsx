import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Outlet />
      </header>
    </>
  );
}

export default App;
