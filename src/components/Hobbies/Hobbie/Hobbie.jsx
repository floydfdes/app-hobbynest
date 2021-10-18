import React, { useState } from "react";
import "./Hobbie.scss";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { editHobby } from "../../../actions/trigger";
import { deletePost, likePost } from "../../../actions/hobby";
import { useHistory } from "react-router";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
const Hobbie = (props) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [confirmDelete, setConfirmDelete] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const updateHobby = () => {
    dispatch(editHobby(props, history));
  };
  const deleteHobby = () => {
    dispatch(deletePost(props.id));
  };

  return (
    <>
      <ReactModal id="delete-modal" isOpen={confirmDelete}>
        <div>
          <strong>
            Are you sure you want to permanently delete this hobby?
          </strong>
        </div>
        <div className="my-2 modal-button-div">
          <button onClick={deleteHobby} className="btn btn-danger">
            Delete hobby
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              setConfirmDelete(false);
            }}
          >
            Cancel
          </button>
        </div>
      </ReactModal>
      <div className="card card-border-background-color mb-3 shadow">
        <div className="card-header">
          <h3 className="card-title">{props.title}</h3>
          <span className="card-author">
            created by: {props.creatorName ? props.creatorName : "unknown"}
          </span>
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
              <FavoriteIcon className="card-button-svg icon-like" />
              <span className="mx-2">{props.likes}</span>
            </button>
            {user?.result?._id === props?.creator && (
              <button
                onClick={updateHobby}
                className="btn card-button-color mx-2"
              >
                <ModeEditIcon className="card-button-svg icon-edit" />
              </button>
            )}

            {user?.result?._id === props?.creator && (
              <button
                onClick={() => {
                  setConfirmDelete(true);
                }}
                className="btn card-button-color mx-2"
              >
                <DeleteIcon className="card-button-svg icon-delete" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hobbie;
