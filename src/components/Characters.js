import React from "react";
import { Link } from "react-router-dom";

function Characters({ id, name, status, location }) {
  return (
    <Link to={`/ricky/${id}`}>
      <div key={id}>
        <h2>{name}</h2>
        <p>{status}</p>
        <p>{location}</p>
      </div>
    </Link>
  );
}

export default Characters;
