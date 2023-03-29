import React from "react";
import { Link } from "react-router-dom";

const HeaderAdd = () => {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <button className="btn-primary">Table List</button>
        </Link>
      </div>
      <div>
        <h1>TodoInput</h1>
      </div>
    </div>
  );
};

export default HeaderAdd;
