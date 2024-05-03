import "./Hobby.scss"

import React, { useEffect, useState } from 'react'
import { createNewComment, deleteComment, dislikeComment, likeComment, updateComment } from "../../../actions/comment";
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SendIcon from '@mui/icons-material/Send';
import ThumbDown from "@mui/icons-material/ThumbDown";
import ThumbUp from "@mui/icons-material/ThumbUp";
import moment from "moment";

const ViewHobby = () => {
    const userId = JSON.parse(localStorage.getItem('profile'))
    const initialState = {
        title: "", description: "", tags: [], creatorName: "", date: "", comments: [],
    };
    const currentHobby = useSelector((state) => state.formReducer);
    const initialCommentState = { commentId: '', commentData: '', postId: '' }
    const [formData, setFormData] = useState(initialState);
    const [newComment, setNewComment] = useState(initialCommentState);



    const formatDate = (commentDate) => moment(commentDate).fromNow();
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
        setNewComment(initialCommentState)
    }

    const updateNewComment = (data) => {
        setNewComment({
            postId: id || _id,
            commentData: data.content,
            commentId: data._id
        })
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentHobby.formData) setFormData(currentHobby.formData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentHobby]);

    const { title, description, tags, creatorName, date, comments, id, _id } = formData;

    return (
        <>
            {formData ?
                <div className="container container-bg page-height">
                    <div className="card login-card-margin">
                        <div className="row view-hobby-form">
                            <div className="col-md-6">
                                {/* Left column for post details */}
                                <div className='d-flex align-items-center post-title'>
                                    <Avatar
                                        className="profile-avatar mx-2"
                                        alt={creatorName[0]}
                                        src={creatorName[0]} />
                                    <h1>{creatorName}</h1>
                                </div>
                                <div className="post-details">
                                    <h4>{title}</h4>
                                    <div>{tags.join(', ')}</div>
                                    <div>{description}</div>
                                    <div>{creatorName}</div>
                                    <div>{formatDate(date)}</div>
                                </div>
                            </div>
                            <div className="col-md-6 comments-div">
                                {/* Right column for comments */}
                                <h5>{comments.length} comments on the post</h5>
                                <div className="comments-section">

                                    <div className="comment-list">
                                        {comments.map(comment => (
                                            <div key={comment._id} className="comment px-1 comment-size">
                                                <div className='d-flex justify-content-between'>
                                                    <div>{comment.content}</div>
                                                    <div className="d-flex">
                                                        {userId?.result?._id === comment.userId && (
                                                            <>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => updateNewComment(comment)}
                                                                    className="btn card-button-color card-like-button py-0 px-0">
                                                                    <ModeEditIcon className="comment-button-svg icon-edit" />
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => dispatch(deleteComment(id || _id, comment._id))}
                                                                    className="btn card-button-color card-like-button py-0 px-0">
                                                                    <DeleteIcon className="comment-button-svg icon-delete" />
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <button
                                                        onClick={() => dispatch(likeComment(id || _id, comment._id))}
                                                        className="btn card-button-color card-like-button py-0 px-0">
                                                        <ThumbUp className="comment-button-svg icon-like" />
                                                        <div className="mx-2">{comment.likes.length}</div>
                                                    </button>
                                                    <button
                                                        onClick={() => dispatch(dislikeComment(id || _id, comment._id))}
                                                        className="btn card-button-color card-like-button py-0 px-0">
                                                        <ThumbDown className="comment-button-svg icon-like" />
                                                        <div className="mx-2">{comment.dislikes.length}</div>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <div className="input-group mt-4">
                                    <input name="commentData" type="text" className="form-control" placeholder="Add comment" onChange={handleChange} value={newComment.commentData} />
                                    <div className="input-group-append">
                                        <span onClick={createUpdateComment} className="input-group-text h-100">  <SendIcon className="comment-button-svg icon-edit" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>
                    Post not found
                </div>
            }
        </>
    )
}

export default ViewHobby

