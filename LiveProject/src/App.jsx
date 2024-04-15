// import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Menu />
      <Home />
      <Footer appName="LiveProject" />
    </>
  );
}

export default App;
