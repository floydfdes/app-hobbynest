import React from "react";
import "./Hobbie.scss";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Hobbie = (props) => {
  return (
    <>
      <div className="card card-border-background-color mb-3">
        <div className="card-header">
          <span className="text-warning">{props.title}</span>
        </div>
        <div className="card-body ">
          <span className="card-title">{props.tags}</span>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{
              __html:
                props.content.length > 350
                  ? props.content.slice(0, 350) + "..."
                  : props.content,
            }}
          ></p>
          <div className="card-actions-container">
            <button className="btn card-button-color mx-2">
              <FavoriteIcon className="card-button-svg" />
            </button>
            <button className="btn card-button-color mx-2">
              <ModeEditIcon className="card-button-svg" />
            </button>
            <button className="btn card-button-color mx-2">
              <DeleteIcon className="card-button-svg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hobbie;
