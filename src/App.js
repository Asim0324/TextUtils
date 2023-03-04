import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Javascript from "./Components/hooks/Javascript";
import { Routes, Route } from "react-router-dom";

function App() {
  const { theme, toggleTheme, alert, toggleAlert } = Javascript();
  return (
    <>
      <Navbar title="Asim Mehmood" homePage="Home" theme={theme} toggleTheme={toggleTheme}/>
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<><TextForm heading="Type any text below" button1="Convert to Uppercase" theme={theme} toggleAlert={toggleAlert}/></>}/>
        <Route path="/about" element={ <><About theme={theme} /></>}/>
      </Routes>
    </>
  );
}

export default App;