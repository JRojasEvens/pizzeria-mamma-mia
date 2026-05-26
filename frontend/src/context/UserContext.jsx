import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (emailInput, passwordInput) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, message: data.message || "Error al iniciar sesión" };
      }
    } catch (error) {
      return { success: false, message: "Error de conexión" };
    }
  };

  const register = async (emailInput, passwordInput) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, message: data.message || "Error al registrarse" };
      }
    } catch (error) {
      return { success: false, message: "Error de conexión" };
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const getProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);