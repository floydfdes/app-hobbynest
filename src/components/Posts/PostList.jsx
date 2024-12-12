import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../actions/postActions';
import { createNewPost } from '../../actions/trigger';
import PostCard from './Post/PostCard';

function PostList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const filteredPosts = useMemo(() => {
    if (!searchValue) return posts;
    return posts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase())
      || post.description.toLowerCase().includes(searchValue.toLowerCase())
      || post.tags.some((tag) => tag.toLowerCase().includes(searchValue.toLowerCase())));
  }, [posts, searchValue]);

  const handleCreatePost = () => {
    dispatch(createNewPost(0, navigate));
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const clearSearch = () => {
    setSearchValue('');
  };

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h4" component="h2" color="primary">
              Interests
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search Interests..."
              value={searchValue}
              onChange={handleSearch}
              InputProps={{
                startAdornment: <SearchIcon color="action" />,
                endAdornment: searchValue && (
                  <ClearIcon
                    color="action"
                    style={{ cursor: 'pointer' }}
                    onClick={clearSearch}
                  />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleCreatePost}
              startIcon={<AddIcon />}
              sx={{
                height: '56px',
                textTransform: 'none',
                backgroundColor: 'var(--secondary-color)',
                '&:hover': {
                  backgroundColor: 'var(--secondary-color-dark, var(--secondary-color))',
                },
                color: 'var(--secondary-color-text, #ffffff)',
              }}
            >
              Add Interest
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={3}>
        {filteredPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <PostCard
              title={post.title}
              description={post.description}
              tags={post.tags}
              id={post._id}
              likes={post.likes.length}
              creator={post.creator}
              creatorName={post.creatorName}
              date={post.date}
              comments={post.comments}
              postImage={post.postImage}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PostList;
