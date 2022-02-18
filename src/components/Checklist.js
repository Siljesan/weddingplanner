import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, checklistUrl, populate } from "../utils/app";

function Checklist() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl + checklistUrl + populate)
      .then((response) => setData(response.data.data));
  }, []);

  console.log(data);

  return (
    <div>
      <h2>Wedding checklist:</h2>
      <div className="checklist">
        {data.length > 0
          ? data.map((checklist, idx) => {
              return (
                <div className="checklistCard" key={idx}>
                  <div>
                    <h3>{checklist.attributes.title}</h3>
                    <p>{checklist.attributes.description}</p>
                  </div>
                  <div>
                    <p>Priority: {checklist.attributes.priority}</p>
                    <p>Done: {checklist.attributes.done ? "yes" : "no"}</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Checklist;
