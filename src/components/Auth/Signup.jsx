import { Box, Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Auth.css';

export const SignUp = ({ setIsLoggedIn, yupResolver, submitForm, schema, fields }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#f5f5f5"
        >
            <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 600, minHeight: 400 }}>
                <form onSubmit={handleSubmit(submitForm)}>
                    <Typography variant="h4" gutterBottom>
                        Create Account
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Please enter your details
                    </Typography>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {fields.map((field) => (
                            <Grid item xs={12} sm={field.fieldId === 'age' || field.fieldId === 'gender' ? 6 : 12} key={field.fieldId}>
                                {!field.fieldOptions?.length ? (
                                    <TextField
                                        fullWidth
                                        label={field.fieldName}
                                        type={field.fieldType}
                                        placeholder={field.placeholder ? `e.g. ${field.placeholder}` : ''}
                                        {...register(field.fieldId)}
                                        error={!!errors[field.fieldId]}
                                        helperText={errors[field.fieldId]?.message}
                                    />
                                ) : (
                                    <TextField
                                        fullWidth
                                        select
                                        label={field.fieldName}
                                        {...register(field.fieldId)}
                                        error={!!errors[field.fieldId]}
                                        helperText={errors[field.fieldId]?.message}
                                    >
                                        {field.fieldOptions.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            </Grid>
                        ))}
                    </Grid>

                    <Box display="flex" justifyContent="space-between" mt={4}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: secondaryColor,
                                '&:hover': {
                                    backgroundColor: secondaryColor,
                                    filter: 'brightness(90%)',
                                },
                            }}
                        >
                            Sign up
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => setIsLoggedIn(true)}
                            sx={{
                                color: secondaryColor,
                                borderColor: secondaryColor,
                                '&:hover': {
                                    borderColor: secondaryColor,
                                    backgroundColor: `${secondaryColor}1A`, // 10% opacity
                                },
                            }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
};
