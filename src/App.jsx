import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvier } from "./context/AuthContext";
import { useRef } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // window focus 설정
    },
  },
});

function App() {
  const outlet = useRef();

  const scrollToTop = () => {
    outlet?.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AuthContextProvier>
      <section className={styles.main}>
        <header className={styles.header}>
          <Navbar />
        </header>
        <section className={styles.App__body} ref={outlet}>
          <QueryClientProvider client={queryClient}>
            <Outlet context={{ scrollToTop }} />
          </QueryClientProvider>
        </section>
      </section>
    </AuthContextProvier>
  );
}

export default App;
