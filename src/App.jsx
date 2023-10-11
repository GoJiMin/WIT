import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";

function App() {
  return (
    <section className={styles.main}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <section className={styles.App__body}>
        <Outlet />
      </section>
    </section>
  );
}

export default App;
