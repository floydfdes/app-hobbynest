import React from "react";
import "./Hobbie.scss";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { editHobby } from "../../../actions/trigger";
import { useHistory } from "react-router";

const Hobbie = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const updateHobby = () => {
    dispatch(editHobby(props.id, history));
  };
  return (
    <>
      <div className="card card-border-background-color mb-3">
        <div className="card-header">
          <span className="hobbies-heading">{props.title}</span>
        </div>
        <div className="card-body ">
          <span className="">{props.tags.map((tag) => `#${tag} `)}</span>
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
            <button
              onClick={updateHobby}
              className="btn card-button-color mx-2"
            >
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
