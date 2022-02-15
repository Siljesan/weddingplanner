import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, checklistUrl, populate } from "./utils/app";
import "./sass/style.scss";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl + checklistUrl + populate)
      .then((response) => setData(response.data.data));
  }, []);

  const getData = (url) => {
    axios.get(url).then((response) => console.log(response.data.data));
  };

  const getChecklist = () => {
    getData(baseUrl + checklistUrl + populate);
  };

  console.log(data);

  return (
    <>
      <h1>Welcome!</h1>
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
    </>
  );
}

export default App;
