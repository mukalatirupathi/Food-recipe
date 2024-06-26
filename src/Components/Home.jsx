import React from "react";
import { Link } from "react-router-dom";

const Home = ({setsearch}) => {

  return (
    <div className="form12">
      <form>
        <h2 className="mt-1">Food recipe</h2>
        <input
          type="text"
          className="form-control  w-50"
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Enter your fav food.."
        ></input>
        <br />
        <Link to="/recipes">
          <button className="btn btn-primary button mb-4">
            submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
