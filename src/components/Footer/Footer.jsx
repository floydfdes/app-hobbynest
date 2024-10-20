import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';

const socialLinks = [
  { icon: LinkedIn, url: 'https://in.linkedin.com/in/floyd-fernandes' },
  { icon: Twitter, url: 'https://twitter.com/floydintech' },
  { icon: GitHub, url: 'https://github.com/floydfdes' },
  { icon: Instagram, url: 'https://www.instagram.com/floyd_fernandes_24/' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        backgroundColor: 'var(--secondary-color)',
        color: 'var(--primary-color)'
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2">
          &#169; {new Date().getFullYear()} Designed and Developed by Floyd Fernandes
        </Typography>
        <Box>
          {socialLinks.map(({ icon: Icon, url }) => (
            <IconButton
              key={url}
              onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
              sx={{ color: 'inherit' }}
              size="small"
            >
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
