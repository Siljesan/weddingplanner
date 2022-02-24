import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, populate, seasonUrl } from "../utils/app";
import { InheritedTitle } from "./Title";

function Flowers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl + seasonUrl + populate)
      .then((response) => setData(response.data.data));
  }, []);

  console.log(data);

  return (
    <div className="flowers">
      <InheritedTitle as="h2">Flowers by season</InheritedTitle>
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
  );
}

export default Flowers;
