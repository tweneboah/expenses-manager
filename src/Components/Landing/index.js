import React from "react";
import { Link } from "react-router-dom";
import "../../css/landing.css";
const Landing = props => {
  return (
    <div className="container-wrapper">
      <div className="wrapper">
        <h1>Welcome to Expensify</h1>
        <div>
          <Link className="btn btn-danger btn-lg" to="/create">
            Create an Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
