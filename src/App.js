import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Checklist from "./components/Checklist";
import Flowers from "./components/Flowers";
import Nav from "./components/Nav";
import { Title } from "./components/Title";
import Home from "./pages/Home";
import Season from "./pages/Season";
import "./sass/style.scss";
import { baseUrl, populate, seasonUrl } from "./utils/app";

function App() {
  const GlobalStyle = createGlobalStyle`
  body{
    background-color: lightpink;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }`;

  return (
    <>
      <Router>
        <GlobalStyle />
        <Nav />
        <Title>Welcome!</Title>
        <Routes>
          <Route path="season" element={<Season />} />
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
