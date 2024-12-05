import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts, fetchUsers, updatePost } from '../../actions/adminActions';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.admin.users);
    const posts = useSelector((state) => state.admin.posts);
    const [value, setValue] = useState(0);
    const [editedPost, setEditedPost] = useState({});
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentPostId, setCurrentPostId] = useState(null);
    const [dialogType, setDialogType] = useState(''); // 'update' or 'delete'

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // const handleEditPost = (postId, field, value) => {
    //     setEditedPost((prev) => ({
    //         ...prev,
    //         [postId]: {
    //             ...prev[postId],
    //             [field]: value,
    //         },
    //     }));
    // };

    const openDialog = (postId, type) => {
        setCurrentPostId(postId);
        setDialogType(type);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setCurrentPostId(null);
        setDialogType('');
    };

    const handleConfirmAction = async () => {
        if (dialogType === 'update') {
            const postToUpdate = editedPost[currentPostId];
            if (postToUpdate) {
                await dispatch(updatePost(currentPostId, postToUpdate));
                setEditedPost((prev) => {
                    const { [currentPostId]: _, ...rest } = prev;
                    return rest;
                });
            }
        } else if (dialogType === 'delete') {
            await dispatch(deletePost(currentPostId));
        }
        closeDialog();
    };

    // const handleBlur = (postId) => {
    //     openDialog(postId, 'update');
    // };
    const handleDeletePost = (postId) => {
        openDialog(postId, 'delete');
    };

    const handleDeleteUser = (postId) => {
        openDialog(postId, 'delete');
    };

    return (
        <div className="admin-dashboard" style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom align="center" style={{ fontWeight: 'bold', color: '#1976d2' }}>
                Admin Dashboard
            </Typography>
            <Paper elevation={3} style={{ marginBottom: '2rem', padding: '1rem' }}>
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
            <TabPanel value={value} index={0}>
                <Typography variant="h6" gutterBottom>
                    Posts Management
                </Typography>
                {posts.map((post) => (
                    <Accordion key={post._id} elevation={3} style={{ marginBottom: '1rem', borderRadius: '8px' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={{ fontWeight: 'bold' }}>{post.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>
                                <Typography variant="body1">
                                    <strong>Description:</strong> {post.description}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Creator:</strong> {post.creatorName}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Tags:</strong> {post.tags.join(', ')}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Likes:</strong> {post.likes.length}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Date:</strong> {new Date(post.date).toLocaleString()}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Comments:</strong>
                                </Typography>
                                <ul>
                                    {post.comments.map((comment) => (
                                        <li key={comment._id}>
                                            <Typography variant="body2">
                                                <strong>{comment.content}</strong> by User {comment.userId} (
                                                {comment.likes.length} likes, {comment.dislikes.length} dislikes)
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                                <Box display="flex" justifyContent="space-between" marginTop="1rem">
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => handleDeletePost(post._id)}
                                    >
                                        Delete Post
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => openDialog(post._id, 'update')}
                                    >
                                        Edit Post
                                    </Button>
                                </Box>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant="h6" gutterBottom>
                    Users Management
                </Typography>
                <TableContainer component={Paper} elevation={3} style={{ borderRadius: '8px' }}>
                    <Table>
                        <TableHead style={{ backgroundColor: '#1976d2' }}>
                            <TableRow>
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
                                <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user._id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
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
            </TabPanel>
            <Dialog open={isDialogOpen} onClose={closeDialog}>
                <DialogTitle>
                    {dialogType === 'update' ? 'Confirm Update' : 'Confirm Delete'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dialogType === 'update'
                            ? 'Do you want to commit this update?'
                            : 'Are you sure you want to delete this item?'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmAction} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
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
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};

export default AdminDashboard;
