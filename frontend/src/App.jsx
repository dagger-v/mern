import { Outlet } from "react-router-dom";
import { Container, Toast } from "react-bootstrap";
import Header from "./components/header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";
import { createContext, useState } from "react";
import useLocalStorage from "use-local-storage";

export const ThemeContext = createContext(null);

function App(props) {
  const [theme, setTheme] = useLocalStorage("light", true);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log(theme);
  };

  return (
    <div id={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <ToastContainer />
        <Container className="my-2">
          <Outlet />
        </Container>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
