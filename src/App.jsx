import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

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
