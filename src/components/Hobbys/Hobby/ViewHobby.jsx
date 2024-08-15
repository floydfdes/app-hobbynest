import "./Hobby.scss";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewComment, deleteComment, dislikeComment, likeComment, updateComment } from "../../../actions/comment";

import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SendIcon from '@mui/icons-material/Send';
import ThumbDown from "@mui/icons-material/ThumbDown";
import ThumbUp from "@mui/icons-material/ThumbUp";
import Avatar from '@mui/material/Avatar';
import moment from "moment";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { getPost } from "../../../actions/hobby";

const initialState = {
    title: "", description: "", tags: [], creatorName: "", date: "", comments: [],
};

const initialCommentState = { commentId: '', commentData: '', postId: '' };

const formatDate = (commentDate) => moment(commentDate).fromNow();

const Comment = ({ comment, userId, postId, dispatch, setNewComment }) => {
    const handleUpdate = () => {
        setNewComment({
            postId,
            commentData: comment.content,
            commentId: comment._id
        });
    };

    return (
        <div key={comment._id} className="comment px-1 comment-size">
            <div className='d-flex justify-content-between'>
                <div>{comment.content}</div>
                <div className="d-flex">
                    {userId?.result?._id === comment.userId && (
                        <>
                            <button
                                type="button"
                                onClick={handleUpdate}
                                className="btn card-button-color card-like-button py-0 px-0">
                                <ModeEditIcon className="comment-button-svg icon-edit" />
                            </button>
                            <button
                                type="button"
                                onClick={() => dispatch(deleteComment(postId, comment._id))}
                                className="btn card-button-color card-like-button py-0 px-0">
                                <DeleteIcon className="comment-button-svg icon-delete" />
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className="d-flex">
                <button
                    onClick={() => dispatch(likeComment(postId, comment._id))}
                    className="btn card-button-color card-like-button py-0 px-0">
                    <ThumbUp className="comment-button-svg icon-like" />
                    <div className="mx-2">{comment?.likes?.length}</div>
                </button>
                <button
                    onClick={() => dispatch(dislikeComment(postId, comment._id))}
                    className="btn card-button-color card-like-button py-0 px-0">
                    <ThumbDown className="comment-button-svg icon-like" />
                    <div className="mx-2">{comment?.dislikes?.length}</div>
                </button>
            </div>
        </div>
    );
};

const ViewHobby = () => {
    const { hobbyid } = useParams();
    const userId = JSON.parse(localStorage.getItem('profile'));
    const currentHobby = useSelector((state) => state.formReducer);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(initialState);
    const [newComment, setNewComment] = useState(initialCommentState);

    useEffect(() => {
        if (hobbyid && !currentHobby.formData) {
            dispatch(getPost(hobbyid));
        }
    }, [dispatch, hobbyid, currentHobby.formData]);

    useEffect(() => {
        if (currentHobby.formData) setFormData(currentHobby.formData);
    }, [currentHobby]);

    const handleChange = (e) => {
        setNewComment({ ...newComment, [e.target.name]: e.target.value });
    };

    const createUpdateComment = (e) => {
        e.preventDefault();
        if (newComment.commentData) {
            if (newComment.postId && newComment.commentId)
                dispatch(updateComment(newComment.postId, newComment.commentId, newComment.commentData));
            else dispatch(createNewComment(formData.id || formData._id, newComment.commentData));
        }
        setNewComment(initialCommentState);
    };

    const { title, description, tags, creatorName, date, comments, id, _id } = formData;

    return (
        <>
            {formData ? (
                <div className="container container-bg page-height">
                    <div className="card login-card-margin">
                        <div className="row view-hobby-form">
                            <div className="col-md-6 comments-div">
                                {/* Left column for post details */}

                                <div className="post-details">
                                    <div className='d-flex align-items-center'>
                                        <Avatar
                                            className="profile-avatar mx-2"
                                            alt={creatorName[0]}
                                            src={creatorName[0]} />
                                        <h1>{creatorName}</h1>
                                    </div>
                                    <h4>{title}</h4>
                                    <div>{tags.join(', ')}</div>
                                    <div>{description}</div>
                                    <div>{creatorName}</div>
                                    <div>{formatDate(date)}</div>
                                </div>
                            </div>
                            <div className="col-md-6 comments-div">
                                {/* Right column for comments */}
                                <h5>{comments?.length} comments on the post</h5>
                                <div className="comments-section">
                                    <div className="comment-list">
                                        {comments?.map(comment => (
                                            <Comment
                                                key={comment._id}
                                                comment={comment}
                                                userId={userId}
                                                postId={id || _id}
                                                dispatch={dispatch}
                                                setNewComment={setNewComment}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="input-group mt-4">
                                    <input name="commentData" type="text" className="form-control" placeholder="Add comment" onChange={handleChange} value={newComment.commentData} />
                                    <div className="input-group-append">
                                        <span onClick={createUpdateComment} className="input-group-text h-100">
                                            <SendIcon className="comment-button-svg icon-edit" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    Post not found
                </div>
            )}
        </>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        likes: PropTypes.array.isRequired,
        dislikes: PropTypes.array.isRequired
    }).isRequired,
    userId: PropTypes.shape({
        result: PropTypes.shape({
            _id: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    postId: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    setNewComment: PropTypes.func.isRequired
};

export default ViewHobby;
