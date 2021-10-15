import React from "react";
import "./Hobbie.scss";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { editHobby } from "../../../actions/trigger";
import { deletePost, likePost } from "../../../actions/hobby";
import { useHistory } from "react-router";

const Hobbie = (props) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const updateHobby = () => {
    dispatch(editHobby(props, history));
  };

  return (
    <>
      <div className="card card-border-background-color mb-3">
        <div className="card-header">
          <span>{props.title}</span>
        </div>
        <div className="card-body ">
          <span className="card-tags">
            {props.tags.map((tag) => tag.split(",").map((el) => `#${el} `))}
          </span>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{
              __html:
                props.description.length > 350
                  ? props.description.slice(0, 350) + "..."
                  : props.description,
            }}
          ></p>
          <div className="card-actions-container">
            <button
              onClick={() => dispatch(likePost(props.id))}
              className="btn card-button-color mx-2 card-like-button"
            >
              <FavoriteIcon className="card-button-svg" />
              <span className="mx-2">{props.likes}</span>
            </button>
            {user?.result?._id === props?.creator && (
              <button
                onClick={updateHobby}
                className="btn card-button-color mx-2"
              >
                <ModeEditIcon className="card-button-svg" />
              </button>
            )}

            {user?.result?._id === props?.creator && (
              <button
                onClick={() => dispatch(deletePost(props.id))}
                className="btn card-button-color mx-2"
              >
                <DeleteIcon className="card-button-svg" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hobbie;
