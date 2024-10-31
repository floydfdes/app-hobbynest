import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, fetchPosts, fetchUsers } from '../../actions/adminActions';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.admin.users);
    const posts = useSelector((state) => state.admin.posts);
    const comments = useSelector((state) => state.admin.comments);

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchPosts());
        dispatch(fetchComments());
    }, [dispatch]);

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <section>
                <h2>User Management</h2>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>{user.name} - {user.email}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Post Management</h2>
                <ul>
                    {posts.map(post => (
                        <li key={post._id}>{post.title}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Comment Moderation</h2>
                <ul>
                    {comments.map(comment => (
                        <li key={comment._id}>{comment.text}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AdminDashboard;
