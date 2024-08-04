import "./Hobby.scss";

import React, { useState } from "react";
import { deletePost, likePost } from "../../../actions/hobby";
import { editHobby, viewHobby } from "../../../actions/trigger";

import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

ReactModal.setAppElement("#root");

const Hobbie = ({ id, title, creatorName, tags, description, likes, creator }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [confirmDelete, setConfirmDelete] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();

  const updateHobby = (event) => {
    event.stopPropagation();
    dispatch(editHobby({ id, title, creatorName, tags, description, likes, creator }, history));
  };

  const deleteHobby = (event) => {
    event.stopPropagation();
    dispatch(deletePost(id));
  };

  const view = () => {
    dispatch(viewHobby({ id, title, creatorName, tags, description, likes, creator }, history));
  };

  const splitTags = tags.map((tag) => tag.split(",").map((el) => `#${el} `));

  return (
    <>
      <ReactModal id="delete-modal" isOpen={confirmDelete}>
        <div>
          <strong>Are you sure you want to permanently delete this hobby?</strong>
        </div>
        <div className="my-2 modal-button-div">
          <button onClick={deleteHobby} className="btn btn-danger">Delete hobby</button>
          <button className="btn btn-primary mx-2" onClick={() => setConfirmDelete(false)}>Cancel</button>
        </div>
      </ReactModal>
      <div onClick={view} className="card card-border-background-color mb-3 shadow">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <span className="card-author">created by: {creatorName || "unknown"}</span>
        </div>
        <div className="card-body">
          <span className="card-tags">{splitTags}</span>
          <p className="card-text" dangerouslySetInnerHTML={{ __html: description.length > 350 ? `${description.slice(0, 350)}...` : description }}></p>
          <div className="card-actions-container">
            <button onClick={(event) => { event.stopPropagation(); dispatch(likePost(id)); }} className="btn card-button-color mx-2 card-like-button">
              <FavoriteIcon className="card-button-svg icon-like" />
              <span className="mx-2">{likes}</span>
            </button>
            {user?.result?._id === creator && (
              <>
                <button onClick={updateHobby} className="btn card-button-color mx-2">
                  <ModeEditIcon className="card-button-svg icon-edit" />
                </button>
                <button onClick={(event) => { event.stopPropagation(); setConfirmDelete(true); }} className="btn card-button-color mx-2">
                  <DeleteIcon className="card-button-svg icon-delete" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hobbie;
