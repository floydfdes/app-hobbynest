import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  ExpandMore as ExpandMoreIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon
} from '@mui/icons-material';
import {
  Avatar, Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost, likePost } from '../../../actions/hobby';
import { editHobby, viewHobby } from '../../../actions/trigger';
import './Hobby.scss';

const Hobby = ({ id, title, creatorName, tags, description, likes, creator }) => {
  const [expanded, setExpanded] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const updateHobby = useCallback((event) => {
    event.stopPropagation();
    dispatch(editHobby({ id, title, creatorName, tags, description, likes, creator }, navigate));
  }, [id, title, creatorName, tags, description, likes, creator, dispatch, navigate]);

  const deleteHobby = useCallback(() => {
    dispatch(deletePost(id));
    setConfirmDelete(false);
  }, [id, dispatch]);

  const view = useCallback(() => {
    dispatch(viewHobby({ id, title, creatorName, tags, description, likes, creator }, navigate));
  }, [id, title, creatorName, tags, description, likes, creator, dispatch, navigate]);

  const handleLike = useCallback((event) => {
    event.stopPropagation();
    dispatch(likePost(id));
  }, [id, dispatch]);

  const userIsCreator = user?.result?._id === creator;

  return (
    <>
      <Card className="hobby-card" elevation={3}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h5" component="div" className="hobby-title">
              {title}
            </Typography>
            <Avatar className="creator-avatar">
              {creatorName ? creatorName[0].toUpperCase() : '?'}
            </Avatar>
          </Box>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Created by: {creatorName || 'unknown'}
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} my={2}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                className="tag-chip"
              />
            ))}
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            className={`hobby-description ${expanded ? 'expanded' : ''}`}
          >
            {expanded ? description : `${description.slice(0, 150)}...`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like" onClick={handleLike}>
            {userIsCreator ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <Typography variant="body2">{likes} likes</Typography>
          {userIsCreator && (
            <>
              <IconButton aria-label="edit" onClick={updateHobby}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => setConfirmDelete(true)}>
                <DeleteIcon />
              </IconButton>
            </>
          )}
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            className={`expand-icon ${expanded ? 'expanded' : ''}`}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Dialog open={confirmDelete} onClose={() => setConfirmDelete(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permanently delete this hobby?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteHobby} color="error">Delete</Button>
          <Button onClick={() => setConfirmDelete(false)} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default React.memo(Hobby);
