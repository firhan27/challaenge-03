import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/addlist">
          <button>Add List</button>
        </Link>
      </div>
      <div>
        <h1>Table List</h1>
      </div>
    </div>
  );
};

export default Header;
