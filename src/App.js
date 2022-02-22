import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checklist from "./components/Checklist";
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

  //Tried to render season relations below.

  return (
    <>
      <Router>
        <h1>Welcome!</h1>
        <Checklist />
        <div className="flowers">
          <div>
            {data.length > 0
              ? data.map((season, idx) => {
                  return (
                    <div key={idx}>
                      <h3>{season.attributes.title}</h3>
                      <ul>
                        {season.attributes.flowers.data.map((flower) => {
                          return <li>{flower.attributes.title}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
