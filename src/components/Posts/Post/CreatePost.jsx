import { Box, Button, Chip, Paper, TextField, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createPost, updatePost } from '../../../Actions/postActions';

import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const initialFormState = {
  title: '',
  tags: '',
  description: '',
  postImage: null, // Add postImage to the initial form state
};

const initialErrorState = {
  title: '',
  tags: '',
  description: '',
  postImage: '',
};

const CreatePost = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorState);
  const [imagePreview, setImagePreview] = useState(null); // For previewing the selected image
  const currentPost = useSelector((state) => state.formReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fieldPattern = useMemo(() => ({
    title: /^[A-Za-z .,]+$/,
    tags: /^[A-Za-z]+(, ?[A-Za-z]+)*$/,
    description: /^[A-Za-z0-9 .,]+$/,
  }), []);

  useEffect(() => {
    if (currentPost.formData) setFormData(currentPost.formData);
  }, [currentPost.formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleImageChange = useCallback(async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setFormData((prev) => ({ ...prev, postImage: reader.result }));
        setImagePreview(reader.result);
      };
      reader.onerror = () => {
        setErrors((prev) => ({ ...prev, postImage: 'Error uploading image' }));
      };
    } else {
      setFormData((prev) => ({ ...prev, postImage: null }));
      setImagePreview(null);
    }
  }, []);

  const validate = useCallback((data) => {
    const newErrors = {};
    let isValid = true;

    for (const [key, pattern] of Object.entries(fieldPattern)) {
      const value = data[key];
      if (!value || !pattern.test(value)) {
        newErrors[key] = `${key} is ${!value ? 'required' : 'invalid'}`;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [fieldPattern]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!validate(formData)) return;
    const action = currentPost.formData
      ? updatePost(currentPost.formData.id, formData, navigate)
      : createPost(formData, navigate);

    dispatch(action);
  }, [formData, currentPost.formData, dispatch, navigate, validate]);

  const handleTagChange = useCallback((e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, tags: value }));
  }, []);

  const handleTagDelete = useCallback((tagToDelete) => {
    setFormData((prev) => ({
      ...prev,
      tags: Array.isArray(prev.tags)
        ? prev.tags.filter(tag => tag !== tagToDelete).join(',')
        : typeof prev.tags === 'string'
          ? prev.tags.split(',').filter(tag => tag !== tagToDelete).join(',')
          : ''
    }));
  }, []);

  const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();

  const formContent = useMemo(() => (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        {formData.id ? 'Update your' : 'Add a'} Interest
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Please specify your Interest
      </Typography>

      <Box mb={3}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          error={!!errors.title}
          helperText={errors.title}
        />
      </Box>

      <Box mb={3}>
        <TextField
          fullWidth
          label="Tags (comma-separated)"
          name="tags"
          value={Array.isArray(formData.tags) ? formData.tags.join(',') : formData.tags || ''}
          onChange={handleTagChange}
          error={!!errors.tags}
          helperText={errors.tags}
        />
        <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
          {(Array.isArray(formData.tags) ? formData.tags : (formData.tags || '').split(','))
            .filter(Boolean)
            .map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onDelete={() => handleTagDelete(tag)}
                sx={{
                  color: secondaryColor,
                  borderColor: secondaryColor,
                  '&:hover': {
                    backgroundColor: `${secondaryColor}1A`,
                  },
                }}
                variant="outlined"
              />
            ))}
        </Box>
      </Box>

      <Box mb={3}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
        />
      </Box>

      <Box mb={3}>
        <Button variant="contained" component="label">
          Upload Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </Button>
        {errors.postImage && (
          <Typography color="error" variant="body2">
            {errors.postImage}
          </Typography>
        )}
        {imagePreview && (
          <Box mt={2}>
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          </Box>
        )}
      </Box>

      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" gap={2}>
        <Button
          component={Link}
          to="/posts"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          fullWidth
          sx={{
            color: secondaryColor,
            borderColor: secondaryColor,
            '&:hover': {
              borderColor: secondaryColor,
              backgroundColor: `${secondaryColor}1A`,
            },
          }}
        >
          Back to Interests
        </Button>
        <Button
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          fullWidth
          sx={{
            backgroundColor: secondaryColor,
            '&:hover': {
              backgroundColor: secondaryColor,
              filter: 'brightness(90%)',
            },
          }}
        >
          {formData.id ? 'Update' : 'Create'} Interest
        </Button>
      </Box>
    </form>
  ), [formData, errors, handleChange, handleSubmit, handleTagChange, handleTagDelete, handleImageChange, imagePreview, secondaryColor]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 600 }}>
        {formContent}
      </Paper>
    </Box>
  );
};

export default CreatePost;
