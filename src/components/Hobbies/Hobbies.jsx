import React from "react";
import { help } from "../../Data/Data";
import Hobbie from "./Hobbie/Hobbie";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Hobbies = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-10">
          <h2>Hobbies</h2>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2">
          <Link to="/hobbies/create">
            <button className="btn heading-button-color">
              <AddIcon />
              <span className="d-none d-md-block">Add a hobby</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="row my-3">
        {help.map((element) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={element.id}>
              <Hobbie
                title={element.helpTitle}
                content={element.helpContent}
                tags={element.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hobbies;
