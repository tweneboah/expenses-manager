import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning text-primary">
        <a class="navbar-brand" href="/">
          Expenses-App
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav text-white">
            <Link class="nav-item nav-link active" href="/">
              Home <span class="sr-only">(current)</span>
            </Link>
            <Link class="nav-item nav-link " to="/create">
              Create Expenses
            </Link>
            <Link class="nav-item nav-link" to="/dashboard">
              Dashboard
            </Link>
            <Link
              class="nav-item nav-link"
              to="/notes"
              tabindex="-1"
              aria-disabled="true"
            >
              Notes
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
