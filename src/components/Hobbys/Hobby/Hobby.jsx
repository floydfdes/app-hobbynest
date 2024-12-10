import './Hobby.scss';

import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  ExpandMore as ExpandMoreIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { deletePost, likePost } from '../../../actions/hobby';
import { editHobby, viewHobby } from '../../../actions/trigger';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Hobby = ({ id, title, creatorName, tags, description, likes, creator }) => {
  const [expanded, setExpanded] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleExpandClick = useCallback((event) => {
    event.stopPropagation();
    setExpanded(!expanded);
  }, [expanded]);

  const updateHobby = useCallback((event) => {
    event.stopPropagation();
    dispatch(editHobby({ id, title, creatorName, tags, description, likes, creator }, navigate));
  }, [id, title, creatorName, tags, description, likes, creator, dispatch, navigate]);

  const deleteHobby = useCallback((event) => {
    event.stopPropagation();
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
    <div onClick={view} className="hobby-card">
      <Card elevation={3}>
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
            {tags.map((tag) => (
              <Chip
                key={`${id}-${tag}`}
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
              <IconButton
                aria-label="delete"
                onClick={(event) => {
                  event.stopPropagation();
                  setConfirmDelete(true);
                }}>
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
            Are you sure you want to permanently delete this interest?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteHobby} color="error">Delete</Button>
          <Button onClick={() => setConfirmDelete(false)} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default React.memo(Hobby);
