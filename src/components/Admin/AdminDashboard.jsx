import { Box, Button, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchUsers, updatePost } from '../../actions/adminActions';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.admin.users);
    const posts = useSelector((state) => state.admin.posts);
    const [value, setValue] = useState(0);
    const [editedPost, setEditedPost] = useState({});

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleEditPost = (postId, field, value) => {
        setEditedPost((prev) => ({
            ...prev,
            [postId]: {
                ...prev[postId],
                [field]: value,
            },
        }));
    };

    const handleBlur = async (postId) => {
        const postToUpdate = editedPost[postId];
        if (postToUpdate) {
            const confirm = window.confirm("Do you want to commit this update?");
            if (confirm) {
                await dispatch(updatePost(postId, postToUpdate));
                setEditedPost((prev) => {
                    const { [postId]: _, ...rest } = prev;
                    return rest;
                });
            } else {
                setEditedPost((prev) => {
                    const { [postId]: _, ...rest } = prev;
                    return rest;
                });
            }
        }
    };

    const handleDeletePost = (postId) => {
        // Logic to delete post
    };

    const handleEditUser = (userId) => {
        // Logic to edit user
    };

    const handleDeleteUser = (userId) => {
        // Logic to delete user
    };

    return (
        <div className="admin-dashboard">
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>
            <Paper>
                <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
                    <Tab label="Manage Posts" />
                    <Tab label="Manage Users" />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                <Typography variant="h6">Posts Management</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Creator</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {posts.map(post => (
                                <TableRow key={post._id}>
                                    <TableCell>
                                        <input
                                            type="text"
                                            defaultValue={post.title}
                                            onBlur={() => handleBlur(post._id)}
                                            onChange={(e) => handleEditPost(post._id, 'title', e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <input
                                            type="text"
                                            defaultValue={post.description}
                                            onBlur={() => handleBlur(post._id)}
                                            onChange={(e) => handleEditPost(post._id, 'description', e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell>{post.creatorName}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="error" onClick={() => handleDeletePost(post._id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant="h6">Users Management</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(user => (
                                <TableRow key={user._id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" onClick={() => handleEditUser(user._id)}>Edit</Button>
                                        <Button variant="contained" color="error" onClick={() => handleDeleteUser(user._id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </TabPanel>
        </div>
    );
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
};

export default AdminDashboard;
