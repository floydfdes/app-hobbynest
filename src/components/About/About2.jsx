import './about.scss';

import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';

import React from 'react';
import MyImage from '../../assets/images/my_image.png';

const socialLinks = [
  { icon: LinkedIn, url: 'https://www.linkedin.com/in/floyd-fernandes/', label: 'LinkedIn' },
  { icon: Twitter, url: 'https://twitter.com/floydintech', label: 'Twitter' },
  { icon: GitHub, url: 'https://github.com/floydfdes', label: 'GitHub' },
  { icon: Instagram, url: 'https://www.instagram.com/floyd_fernandes_24/', label: 'Instagram' },
];

const About2 = function About2() {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <img
                loading="lazy"
                className="about-image"
                src={MyImage}
                alt="Floyd Fernandes"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Floyd Fernandes
            </Typography>
            <Typography paragraph>
              Hello! I&apos;m a 25-year-old software developer from Goa, India. I specialize in
              Angular, React, and Python-based projects. My passion lies in creating innovative
              digital solutions and bringing people together through technology.
            </Typography>
            <Box mt={2}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.label}
                  aria-label={link.label}
                  onClick={() => window.open(link.url, '_blank')}
                  color="primary"
                >
                  <link.icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            About InterestHub
          </Typography>
          <Typography paragraph>
            InterestHub is a dynamic platform for individuals to share their interests, built with ReactJS, ExpressJS,
            MongoDB, and Bootstrap. It&apos;s designed to empower users to showcase their passions and connect with
            like-minded individuals.
          </Typography>
          <Typography paragraph>
            Key features:
          </Typography>
          <ul>
            <li>
              <Typography>
                Share your interests and experiences through engaging posts
              </Typography>
            </li>
            <li>
              <Typography>
                Discover new passions and get inspired by our diverse community
              </Typography>
            </li>
            <li>
              <Typography>
                Connect with fellow enthusiasts and make meaningful connections
              </Typography>
            </li>
            <li>
              <Typography>
                100% free to join and use
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            My Vision
          </Typography>
          <Typography paragraph>
            As a developer, my goal is to create applications that not only showcase technical
            excellence but also bring value to users&apos; lives. InterestHub is a testament to
            this vision, combining my skills in web development with my passion for fostering
            communities.
          </Typography>
          <Typography paragraph>
            I believe in the power of shared interests to enrich our lives and bring people together.
            Through InterestHub, I aim to provide a platform where everyone can celebrate their
            passions, learn from others, and find joy in shared experiences.
          </Typography>
          <Typography>
            Join us on this exciting journey of exploration and connection!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About2;
