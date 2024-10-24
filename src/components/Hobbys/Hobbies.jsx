import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
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
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../actions/hobby';
import { createNewHobby } from '../../actions/trigger';
import Hobbie from './Hobby/Hobby';

function Hobbies() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const hobbies = useSelector((state) => state.hobby);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const filteredHobbies = useMemo(() => {
    if (!searchValue) return hobbies;
    return hobbies.filter((hobby) => hobby.title.toLowerCase().includes(searchValue.toLowerCase())
      || hobby.description.toLowerCase().includes(searchValue.toLowerCase())
      || hobby.tags.some((tag) => tag.toLowerCase().includes(searchValue.toLowerCase())));
  }, [hobbies, searchValue]);

  const handleCreateHobby = () => {
    dispatch(createNewHobby(0, navigate));
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
              Hobbies
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search hobbies..."
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
              onClick={handleCreateHobby}
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
              Add Hobby
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={3}>
        {filteredHobbies.map((hobby) => (
          <Grid item xs={12} sm={6} md={4} key={hobby._id}>
            <Hobbie
              title={hobby.title}
              description={hobby.description}
              tags={hobby.tags}
              id={hobby._id}
              likes={hobby.likes.length}
              creator={hobby.creator}
              creatorName={hobby.creatorName}
              date={hobby.date}
              comments={hobby.comments}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Hobbies;
