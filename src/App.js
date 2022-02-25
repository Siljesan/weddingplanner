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
import Autumn from "./components/Autumn";
import Checklist from "./components/Checklist";
import Flowers from "./components/Flowers";
import Nav from "./components/Nav";
import Spring from "./components/Spring";
import Summer from "./components/Summer";
import { Title } from "./components/Title";
import Winter from "./components/Winter";
import Home from "./pages/Home";
import RickAndMorty from "./pages/RickAndMorty";
import Season from "./pages/Season";
import "./sass/style.scss";

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
          <Route path="ricky" element={<RickAndMorty />} />

          <Route path="season" element={<Season />}>
            <Route index element={<Flowers />} />
            <Route path="spring" element={<Spring />} />
            <Route path="summer" element={<Summer />} />
            <Route path="autumn" element={<Autumn />} />
            <Route path="winter" element={<Winter />} />
          </Route>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
