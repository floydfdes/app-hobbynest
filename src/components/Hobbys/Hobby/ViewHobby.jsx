import {
  ArrowBack,
  ChevronLeft, ChevronRight,
  Comment as CommentIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Favorite,
  Send as SendIcon,
  ThumbDown,
  ThumbUp,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createNewComment,
  deleteComment,
  dislikeComment,
  likeComment,
  updateComment,
} from '../../../actions/comment';
import { getPost, getPosts, likePost } from '../../../actions/hobby';
import './Hobby.scss';

const initialState = {
  title: '',
  description: '',
  tags: [],
  creatorName: '',
  date: '',
  comments: [],
};

const initialCommentState = { commentId: '', commentData: '', postId: '' };

const formatDate = (date) => moment(date).format('MMM D, YYYY');

const Comment = ({ comment, userId, postId, dispatch, setNewComment }) => {
  const handleUpdate = () => {
    setNewComment({
      postId,
      commentData: comment.content,
      commentId: comment._id,
    });
  };

  return (
    <Box sx={{ mb: 2, pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Typography variant="body2" gutterBottom>
        {comment.content}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <Box>
          <IconButton size="small" onClick={() => dispatch(likeComment(postId, comment._id))}>
            <ThumbUp fontSize="small" />
          </IconButton>
          <Typography variant="caption" sx={{ mx: 1 }}>
            {comment?.likes?.length}
          </Typography>
          <IconButton size="small" onClick={() => dispatch(dislikeComment(postId, comment._id))}>
            <ThumbDown fontSize="small" />
          </IconButton>
          <Typography variant="caption" sx={{ mx: 1 }}>
            {comment?.dislikes?.length}
          </Typography>
        </Box>
        {userId?.result?._id === comment.userId && (
          <Box>
            <IconButton size="small" onClick={handleUpdate}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" onClick={() => dispatch(deleteComment(postId, comment._id))}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'var(--primary-color)',
  minHeight: '100vh',
  padding: theme.spacing(4, 0),
}));

const ViewHobby = () => {
  const { hobbyid } = useParams();
  const userId = JSON.parse(localStorage.getItem('profile'));
  const currentHobby = useSelector((state) => state.formReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [newComment, setNewComment] = useState(initialCommentState);
  const [otherHobbies, setOtherHobbies] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const otherHobbiesRef = useRef(null);

  useEffect(() => {
    if (hobbyid) {
      dispatch(getPost(hobbyid));
    }
  }, [dispatch, hobbyid]);

  useEffect(() => {
    if (currentHobby.formData) setFormData(currentHobby.formData);
  }, [currentHobby]);

  useEffect(() => {
    // Fetch other hobbies only once when the component mounts
    dispatch(getPosts()).then((posts) => {
      const filteredPosts = posts.filter((post) => post._id !== hobbyid);
      setOtherHobbies(filteredPosts);
    });
  }, [dispatch]);

  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const createUpdateComment = (e) => {
    e.preventDefault();
    if (newComment.commentData) {
      if (newComment.postId && newComment.commentId)
        dispatch(
          updateComment(
            newComment.postId,
            newComment.commentId,
            newComment.commentData,
          ),
        );
      else
        dispatch(
          createNewComment(formData.id || formData._id, newComment.commentData),
        );
    }
    setNewComment(initialCommentState);
  };

  const { title, description, tags, creatorName, date, comments, id, _id } =
    formData;

  const handleLikePost = () => {
    dispatch(likePost(formData.id || formData._id));
  };

  const handleDislikePost = () => {
    dispatch(likePost(formData.id || formData._id));
  };

  const handleOtherHobbyClick = (hobbyId) => {
    const selectedHobby = otherHobbies.find(hobby => hobby._id === hobbyId);
    if (selectedHobby) {
      setFormData(selectedHobby);
      navigate(`/hobbies/view/${hobbyId}`, { replace: true });
      setOtherHobbies(prevHobbies =>
        prevHobbies.filter(hobby => hobby._id !== hobbyId).concat(formData)
      );
    }
  };

  const handleScroll = (direction) => {
    const container = otherHobbiesRef.current;
    if (container) {
      const scrollAmount = 220; // Adjust this value based on your card width + margin
      const newPosition = direction === 'next'
        ? scrollPosition + scrollAmount
        : scrollPosition - scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });

      setScrollPosition(newPosition);
    }
  };

  const handleBackToHobbies = () => {
    navigate('/hobbies');
  };

  return (
    <BackgroundBox>
      <Container maxWidth="xl">
        {formData ? (
          <Card elevation={3} sx={{ mx: 2 }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex' }}>
                {/* Left column: Post details */}
                <Box sx={{ flex: 1, pr: 3, width: '50%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar sx={{ width: 56, height: 56, mr: 2 }}>{creatorName[0]}</Avatar>
                    <Box>
                      <Typography variant="h6">{creatorName}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formatDate(date)}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h4" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {description}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {tags.map((tag) => (
                      <Chip key={tag} label={tag} variant="outlined" size="small" sx={{ mr: 1, mb: 1 }} />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <IconButton onClick={handleLikePost}>
                      <ThumbUp />
                    </IconButton>
                    <Typography variant="body2" sx={{ mr: 2 }}>
                      {formData.likes?.length || 0}
                    </Typography>
                    <IconButton onClick={handleDislikePost}>
                      <ThumbDown />
                    </IconButton>
                    <Typography variant="body2">
                      {formData.dislikes?.length || 0}
                    </Typography>
                  </Box>

                  {/* Other Hobbies Section */}
                  <Typography variant="h6" gutterBottom>
                    Other Hobbies
                  </Typography>
                  <Box sx={{ position: 'relative' }}>
                    <IconButton
                      sx={{
                        position: 'absolute',
                        left: -20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        bgcolor: 'background.paper',
                        '&:hover': { bgcolor: 'action.hover' },
                      }}
                      onClick={() => handleScroll('prev')}
                    >
                      <ChevronLeft />
                    </IconButton>
                    <Box
                      ref={otherHobbiesRef}
                      sx={{
                        display: 'flex',
                        overflowX: 'hidden',
                        scrollBehavior: 'smooth',
                        pb: 2,
                        mx: 3,
                      }}
                    >
                      {otherHobbies.map((hobby) => (
                        <Box
                          key={hobby._id}
                          sx={{
                            minWidth: 220,
                            maxWidth: 220,
                            mr: 2,
                            p: 2,
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                            cursor: 'pointer',
                            '&:hover': { boxShadow: 1 }
                          }}
                          onClick={() => handleOtherHobbyClick(hobby._id)}
                        >
                          <Typography variant="subtitle1" noWrap fontWeight="bold">
                            {hobby.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" noWrap>
                            by {hobby.creatorName}
                          </Typography>
                          <Box sx={{ my: 1, height: 40, overflowY: 'hidden' }}>
                            {hobby.tags.slice(0, 3).map((tag) => (
                              <Chip
                                key={`${hobby._id}-${tag}`}
                                label={tag}
                                size="small"
                                sx={{ mr: 0.5, mb: 0.5, fontSize: '0.7rem' }}
                              />
                            ))}
                          </Box>
                          <Divider sx={{ my: 1 }} />
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Favorite fontSize="small" color="error" />
                              <Typography variant="body2" sx={{ ml: 0.5 }}>
                                {hobby.likes?.length || 0}
                              </Typography>
                            </Box>
                            <Typography variant="caption" color="text.secondary">
                              {formatDate(hobby.date)}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                    <IconButton
                      sx={{
                        position: 'absolute',
                        right: -20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        bgcolor: 'background.paper',
                        '&:hover': { bgcolor: 'action.hover' },
                      }}
                      onClick={() => handleScroll('next')}
                    >
                      <ChevronRight />
                    </IconButton>
                  </Box>

                  {/* Back to Hobbies button */}
                  <Button
                    startIcon={<ArrowBack />}
                    onClick={handleBackToHobbies}
                    sx={{ mt: 2 }}
                    color="secondary"
                    variant="contained"
                  >
                    Back to Hobbies
                  </Button>
                </Box>

                {/* Right column: Comments */}
                <Box sx={{ flex: 1, pl: 3, borderLeft: 1, borderColor: 'divider', width: '50%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CommentIcon sx={{ mr: 1 }} />
                    <Typography variant="h6">
                      {comments?.length} Comments
                    </Typography>
                  </Box>
                  <Box sx={{ height: '60vh', overflowY: 'auto', mb: 2 }}>
                    {comments?.map((comment) => (
                      <Comment
                        key={comment._id}
                        comment={comment}
                        userId={userId}
                        postId={id || _id}
                        dispatch={dispatch}
                        setNewComment={setNewComment}
                      />
                    ))}
                  </Box>
                  <Box component="form" onSubmit={createUpdateComment}>
                    <TextField
                      fullWidth
                      name="commentData"
                      placeholder="Add a comment..."
                      variant="outlined"
                      size="small"
                      value={newComment.commentData}
                      onChange={handleChange}
                      sx={{ mb: 2 }}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      endIcon={<SendIcon />}
                      type="submit"
                    >
                      Send
                    </Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="h5" align="center" sx={{ color: 'common.white' }}>
            Post not found
          </Typography>
        )}
      </Container>
    </BackgroundBox>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    dislikes: PropTypes.array.isRequired,
  }).isRequired,
  userId: PropTypes.shape({
    result: PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  postId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  setNewComment: PropTypes.func.isRequired,
};

export default ViewHobby;
