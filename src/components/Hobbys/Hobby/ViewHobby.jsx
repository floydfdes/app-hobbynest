import "./Hobby.scss"

import React, { useEffect, useState } from 'react'

import Avatar from '@mui/material/Avatar';
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SendIcon from '@mui/icons-material/Send';
import ThumbDown from "@mui/icons-material/ThumbDown";
import ThumbUp from "@mui/icons-material/ThumbUp";
import moment from "moment";
import { useSelector } from 'react-redux';

const ViewHobby = () => {
    const userId = '662cca6a868e8e0071fd5faa'
    const initialState = {
        title: "",
        description: "",
        tags: [],
        creatorName: "",
        date: "",
        comments: [],
    };

    const formatDate = (commentDate) => {
        return moment(commentDate).fromNow();
    };

    const [formData, setFormData] = useState(initialState);
    const currentHobby = useSelector((state) => state.formReducer);

    useEffect(() => {
        if (currentHobby.formData) setFormData(currentHobby.formData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { title, description, tags, creatorName, date, comments } = formData;

    return (
        <>
            {formData ?
                <div className="container container-bg page-height">
                    <div className="card login-card-margin">
                        <div className="row view-hobby-form">
                            <div className="col-md-6">
                                {/* Left column for post details */}
                                <div className='d-flex align-items-center'>
                                    <Avatar
                                        className="profile-avatar mx-2"
                                        alt={creatorName[0]}
                                        src={
                                            creatorName[0]
                                        }
                                    />
                                    <h1>{creatorName}</h1>
                                </div>


                                <div className="post-details">
                                    <h2>{title}</h2>
                                    <div>{tags.join(', ')}</div>
                                    <div>{description}</div>
                                    <div>{creatorName}</div>
                                    <div>{formatDate(date)}</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* Right column for comments */}
                                <div className="comments-section">
                                    <div>{comments.length} comments on the post</div>
                                    <div className="comment-list">
                                        {comments.map(comment => (
                                            <div key={comment._id} className="comment px-1">
                                                <div className='d-flex justify-content-between'>
                                                    <div>{comment.content}</div>
                                                    <div className="d-flex">
                                                        {userId === comment.userId && (
                                                            <>
                                                                <ModeEditIcon className="card-button-svg icon-edit" />
                                                                <DeleteIcon className="card-button-svg icon-delete" />
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div>
                                                    <ThumbUp className="card-button-svg icon-like" />
                                                    <span className="mx-2">{comment.likes.length}</span>
                                                    <ThumbDown className="card-button-svg icon-like" />
                                                    <span className="mx-2">{comment.dislikes.length}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="input-group mt-4">
                                        <input type="text" className="form-control" placeholder="Add comment" />
                                        <div className="input-group-append">
                                            <span className="input-group-text h-100">  <SendIcon className="card-button-svg icon-edit" /></span>
                                        </div>
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

