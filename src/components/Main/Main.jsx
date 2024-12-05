import './Main.scss';

import CommentIcon from '@mui/icons-material/Comment';
import CreateIcon from '@mui/icons-material/Create';
import EditIcon from '@mui/icons-material/Edit';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InteractionIcon from '@mui/icons-material/Forum';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';
import LandingImage from '../../assets/images/interest-sharing-bird.svg';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const featureSections = [
  {
    id: "visitors",
    title: "For All Visitors",
    features: [
      { id: "browse", icon: <SearchIcon />, text: "Browse and view posts" },
      { id: "explore", icon: <ExploreIcon />, text: "Explore diverse interests" }
    ]
  },
  {
    id: "members",
    title: "For Registered Members",
    features: [
      { id: "create", icon: <CreateIcon />, text: "Create your own posts" },
      { id: "like", icon: <ThumbUpIcon />, text: "Like and dislike posts" },
      { id: "comment", icon: <CommentIcon />, text: "Comment on posts" },
      { id: "likeComments", icon: <FavoriteIcon />, text: "Like other people's comments" },
      { id: "edit", icon: <EditIcon />, text: "Edit or delete your own posts and comments" }
    ]
  }
];

function Main() {
  return (
    <>
      {/* Hero Section */}
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

      {/* Feature Cards */}
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
                  <a href="/hobbies" className="btn mt-auto mb-3">View Interests</a>
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
                  <a href="/login" className="btn mt-auto mb-3">Sign Up Free</a>
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
                  <a href="/login" className="btn mt-auto mb-3">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="container mt-5 px-4">
        <h2 className="text-center mb-4 feature-list-heading">What You Can Do on the Interest Sharing Platform</h2>
        <div className="row g-4">
          {featureSections.map((section) => (
            <div key={section.id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">{section.title}</h5>
                  <ul>
                    {section.features.map((feature) => (
                      <li key={feature.id}>
                        <div className="icon-container">{feature.icon}</div>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Main;
