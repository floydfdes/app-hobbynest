import InteractionIcon from '@mui/icons-material/Forum';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingImage from '../../assets/images/hobby-nest-bird.svg';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function Main() {
  const history = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="row main-page mx-0">
        <div className="col-md-6 col-sm-12">
          <div className="main-page-mobile-center main-page-web">
            <div className="main-page-sub-div">
              <h1 className="main-page-heading my-3">
                Discover and Share Hobbies on HobbyNest
              </h1>
              <p className="main-page-sub-heading my-0">
                Explore a world of hobbies, connect with enthusiasts, and share your passions. Join our free community to unlock more features and interactions.
              </p>
              <div className="my-3 main-page-button-div">
                <a href="/hobbies" className="btn main-page-button" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>Explore Hobbies</a>
                <a href="/login" className="btn main-page-button-secondary">Sign Up Free</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 text-center display-none-mobile">
          <img
            src={LandingImage}
            loading="lazy"
            alt="HobbyNest Community"
            width={650}
            height={450}
          />
        </div>
      </div>

      {/* Feature Cards */}
      <div id="explore" className="main-page-card-div container-fluid my-5">
        <h4 className="text-center mb-4">How HobbyNest Works</h4>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
            <div className="card shadow text-center h-100">
              <VisibilityIcon style={{ fontSize: '4rem', fill: 'var(--secondary-color)', marginTop: '1rem' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Explore Hobbies</h5>
                <p className="card-text flex-grow-1">
                  Browse through a diverse range of hobbies shared by our community. Get inspired and discover new interests without signing up.
                </p>
                <a href="/hobbies" className="btn mt-auto" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>View Hobbies</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
            <div className="card shadow text-center h-100">
              <PersonAddIcon style={{ fontSize: '4rem', fill: 'var(--secondary-color)', marginTop: '1rem' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Join Our Community</h5>
                <p className="card-text flex-grow-1">
                  Sign up for free to unlock more features. Create your own hobby posts, like, and comment on others&apos; content.
                </p>
                <a href="/login" className="btn mt-auto" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>Sign Up Free</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
            <div className="card shadow text-center h-100">
              <InteractionIcon style={{ fontSize: '4rem', fill: 'var(--secondary-color)', marginTop: '1rem' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Interact and Share</h5>
                <p className="card-text flex-grow-1">
                  As a member, like, comment, and react to posts. Edit or delete your own content, and engage with the community.
                </p>
                <a href="/login" className="btn mt-auto" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">What You Can Do on HobbyNest</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">For All Visitors</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">🔍 Browse and view hobby posts</li>
                  <li className="list-group-item">🌟 Explore diverse interests</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">For Registered Members</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">✍️ Create your own hobby posts</li>
                  <li className="list-group-item">👍 Like and dislike posts</li>
                  <li className="list-group-item">💬 Comment on posts</li>
                  <li className="list-group-item">❤️ Like other people&apos;s comments</li>
                  <li className="list-group-item">✏️ Edit or delete your own posts and comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </>
  );
}

export default Main;
