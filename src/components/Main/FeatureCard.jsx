import InteractionIcon from '@mui/icons-material/Forum';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';

function FeatureCard() {
  return (
    <div id="explore" className="container-fluid py-5 explore-section">
      <div className="container">
        <h4 className="text-center mb-4 text-white">How the Interest Sharing Platform Works</h4>
        <div className="row g-4">
          <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
            <div className="card shadow text-center h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="icon-container mb-3">
                  <VisibilityIcon className="icon" />
                </div>
                <h5 className="card-title">Explore Interests</h5>
                <p className="card-text flex-grow-1 text-center">
                  Browse through a diverse range of interests shared by our community. Get inspired and discover new passions without signing up.
                </p>
                <a href="/hobbies" className="btn mt-auto mb-3 feature-card-button">View Interests</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
            <div className="card shadow text-center h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="icon-container mb-3">
                  <PersonAddIcon className="icon" />
                </div>
                <h5 className="card-title">Join Our Community</h5>
                <p className="card-text flex-grow-1 text-center">
                  Sign up for free to unlock more features. Create your own posts, like, and comment on others&apos; content.
                </p>
                <a href="/login" className="btn mt-auto mb-3 feature-card-button">Sign Up Free</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
            <div className="card shadow text-center h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="icon-container mb-3">
                  <InteractionIcon className="icon" />
                </div>
                <h5 className="card-title">Interact and Share</h5>
                <p className="card-text flex-grow-1 text-center">
                  As a member, like, comment, and react to posts. Edit or delete your own content, and engage with the community.
                </p>
                <a href="/login" className="btn mt-auto mb-3 feature-card-button">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
