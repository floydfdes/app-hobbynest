import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';

const ViewHobby = () => {
    const initialState = {
        title: "",
        description: "",
        tags: [],
        creatorName: "",
        date: "",
        comments: [],

    };

    const [formData, setFormData] = useState(initialState);
    const currentHobby = useSelector((state) => state.formReducer);

    useEffect(() => {
        if (currentHobby.formData) setFormData(currentHobby.formData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { title, description, tags, creatorName, date, comments } = formData;
    console.log(formData);
    console.log({ title, description, tags, creatorName, date, comments });

    return (
        <>
            {formData ?
                <div className="container container-bg page-height">
                    <div className="card login-card-margin">
                        <div className="row view-hobby-form">
                            <div className="col-md-6">
                                {/* Left column for post details */}
                                <div className="post-details">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                    <p>Tags: {tags.join(', ')}</p>
                                    <p>Creator: {creatorName}</p>
                                    <p>Date: {new Date(date).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* Right column for comments */}
                                <div className="comments-section">
                                    <h3>Comments ({comments.length})</h3>
                                    <div className="comment-list">
                                        {comments.map(comment => (
                                            <div key={comment._id} className="comment">
                                                <p>{comment.content}</p>
                                                <p>User: {comment.userId}</p>
                                                <p>Likes: {comment.likes.length}</p>
                                                <p>Dislikes: {comment.dislikes.length}</p>
                                                <p>Date: {new Date(comment.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        ))}
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

