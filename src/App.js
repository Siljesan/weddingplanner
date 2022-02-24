import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Checklist from "./components/Checklist";
import Flowers from "./components/Flowers";
import { Title } from "./components/Title";
import "./sass/style.scss";
import { baseUrl, populate, seasonUrl } from "./utils/app";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl + seasonUrl + populate)
      .then((response) => setData(response.data.data));
  }, []);

  console.log(data);

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
        <Title>Welcome!</Title>
        <Checklist />
        <Flowers />
      </Router>
    </>
  );
}

export default App;
