import React from 'react';
import LandingImage from '../../assets/images/interest-sharing-bird.svg';

function HeroSection() {
  return (
    <div className="row main-page mx-0">
      <div className="col-md-6 col-sm-12">
        <div className="main-page-mobile-center main-page-web">
          <div className="main-page-sub-div">
            <h1 className="main-page-heading my-3">
              Discover and Share Interests on the Interest Sharing Platform
            </h1>
            <p className="main-page-sub-heading my-0">
              Explore a world of interests, connect with like-minded people, and share your passions. Join our free community to unlock more features and interactions.
            </p>
            <div className="my-3 main-page-button-div">
              <a href="/hobbies" className="btn main-page-button">Explore Interests</a>
              <a href="/login" className="btn main-page-button-secondary">Sign Up Free</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 text-center display-none-mobile">
        <img
          src={LandingImage}
          loading="lazy"
          alt="Interest Sharing Platform Community"
          width={650}
          height={450}
        />
      </div>
    </div>
  );
}

export default HeroSection;
