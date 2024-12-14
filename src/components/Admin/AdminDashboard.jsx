import './AdminDashboard.scss'; // Import the SCSS file

import { Comment, ExpandLess, ExpandMore, Tag, ThumbUp } from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardContent,
    Collapse,
    Grid,
    IconButton,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Tooltip,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, deleteUser, fetchPosts, fetchUsers } from '../../Actions/adminActions';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.admin.users);
    const posts = useSelector((state) => state.admin.posts);
    const [value, setValue] = useState(0);
    const [expandedPostId, setExpandedPostId] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const togglePostDetails = (postId) => {
        setExpandedPostId((prev) => (prev === postId ? null : postId));
    };

    const handleDeletePost = (postId) => {
        dispatch(deletePost(postId));
    };

    const handleDeleteUser = (userId) => {
        dispatch(deleteUser(userId));
    };

    const renderComments = (comments) => {
        return comments.map((comment) => {
            // Find the user associated with the comment
            const user = users.find((user) => user._id === comment.userId);

            return (
                <Box key={comment._id} sx={{ marginBottom: '0.5rem' }}>
                    <Typography variant="body2">
                        <strong>{comment.content}</strong> by {user?.firstName || "Unknown User"} (
                        {comment.likes.length} like(s), {comment.dislikes.length} dislike(s))
                    </Typography>
                </Box>
            );
        });
    };

    return (
        <div className="admin-dashboard">
            <Typography variant="h4" className="dashboard-title">
                Admin Dashboard
            </Typography>
            <Paper elevation={3} className="tabs-container">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Manage Posts" />
                    <Tab label="Manage Users" />
                </Tabs>
            </Paper>
            {value === 0 && (
                <div>
                    <Typography variant="h6" gutterBottom>
                        Posts Management
                    </Typography>
                    <TableContainer component={Paper} className="post-table-container">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="tabs-head">Title</TableCell>
                                    <TableCell className="tabs-head">Description</TableCell>
                                    <TableCell className="tabs-head">Creator</TableCell>
                                    <TableCell className="tabs-head">Date</TableCell>
                                    <TableCell className="tabs-head">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {posts.map((post) => (
                                    <React.Fragment key={post._id}>
                                        <TableRow>
                                            <TableCell>{post.title}</TableCell>
                                            <TableCell>{post.description}</TableCell>
                                            <TableCell>{post.creatorName}</TableCell>
                                            <TableCell>{new Date(post.date).toLocaleString()}</TableCell>
                                            <TableCell className="post-actions">
                                                <Button
                                                    variant="contained"
                                                    color="error"
                                                    onClick={() => handleDeletePost(post._id)}
                                                >
                                                    Delete
                                                </Button>
                                                <Tooltip title="More Details" arrow>
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => togglePostDetails(post._id)}
                                                        color="primary"
                                                        className="more-details-button"
                                                    >
                                                        {expandedPostId === post._id ? <ExpandLess /> : <ExpandMore />}
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={5} style={{ padding: 0 }}>
                                                <Collapse in={expandedPostId === post._id} timeout="auto" unmountOnExit>
                                                    <Box className="collapse-container">
                                                        <Grid container spacing={2} alignItems="stretch">
                                                            <Grid item xs={12} md={4}>
                                                                <Card variant="outlined" className="card-likes-tags">
                                                                    <CardContent>
                                                                        <Typography variant="h6" gutterBottom>
                                                                            <ThumbUp /> Likes
                                                                        </Typography>
                                                                        {post.likes.length > 0 ? (
                                                                            <Typography>{post.likes.length} like(s)</Typography>
                                                                        ) : (
                                                                            <Typography color="textSecondary">No likes yet</Typography>
                                                                        )}
                                                                        <Typography variant="h6" gutterBottom>
                                                                            <Tag /> Tags
                                                                        </Typography>
                                                                        {post.tags.length > 0 ? (
                                                                            <Typography>{post.tags.join(', ')}</Typography>
                                                                        ) : (
                                                                            <Typography color="textSecondary">
                                                                                No tags available
                                                                            </Typography>
                                                                        )}
                                                                    </CardContent>
                                                                </Card>
                                                            </Grid>
                                                            <Grid item xs={12} md={8}>
                                                                <Card variant="outlined" className="card-comments">
                                                                    <CardContent>
                                                                        <Typography variant="h6" gutterBottom>
                                                                            <Comment /> Comments
                                                                        </Typography>
                                                                        {post.comments.length > 0 ? (
                                                                            <Box className="comments-container">
                                                                                {renderComments(post.comments)}
                                                                            </Box>
                                                                        ) : (
                                                                            <Box className="comments-empty">
                                                                                <Typography color="textSecondary">
                                                                                    No comments yet
                                                                                </Typography>
                                                                            </Box>
                                                                        )}
                                                                    </CardContent>
                                                                </Card>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Collapse>
                                            </TableCell>
                                        </TableRow>
                                    </React.Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}
            {value === 1 && (
                <div>
                    <Typography variant="h6" gutterBottom>
                        Users Management
                    </Typography>
                    <TableContainer component={Paper} className="table-container">
                        <Table>
                            <TableHead className="table-head">
                                <TableRow>
                                    <TableCell className="table-cell-head">First Name</TableCell>
                                    <TableCell className="table-cell-head">Last Name</TableCell>
                                    <TableCell className="table-cell-head">Email</TableCell>
                                    <TableCell className="table-cell-head">Age</TableCell>
                                    <TableCell className="table-cell-head">Gender</TableCell>
                                    <TableCell className="table-cell-head">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user._id}>
                                        <TableCell>{user.firstName}</TableCell>
                                        <TableCell>{user.lastName}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.age}</TableCell>
                                        <TableCell>{user.gender}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() => handleDeleteUser(user._id)}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}

        </div>
    );
};

export default AdminDashboard;
