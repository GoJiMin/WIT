import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvier } from "./context/AuthContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // window focus 설정
    },
  },
});

function App() {
  return (
    <AuthContextProvier>
      <section className={styles.main}>
        <header className={styles.header}>
          <Navbar />
        </header>
        <section className={styles.App__body}>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </section>
      </section>
    </AuthContextProvier>
  );
}

export default App;
