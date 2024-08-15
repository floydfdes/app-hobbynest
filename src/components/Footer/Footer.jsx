import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="row page-footer">
        <div className="col-md-6 col-sm-12 text-start">
          &#169; Designed and Developed by Floyd Fernandes
        </div>
        <div className="col-md-6 col-sm-12 text-end">
          <div>
            <p className="about-icons">
              <IconButton
                onClick={() =>
                  window.open(
                    'https://in.linkedin.com/in/floyd-fernandes-03b771121',
                  )
                }
              >
                <LinkedIn />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <GitHub />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open('https://www.instagram.com/floyd_fernandes_24/')
                }
              >
                <Instagram />
              </IconButton>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
