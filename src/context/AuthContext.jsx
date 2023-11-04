import { useContext } from "react";
import { createContext } from "react";
import { login, logout, onUserStateChange } from "../services/firebase";
import { useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvier({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
