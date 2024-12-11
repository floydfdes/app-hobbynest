import 'react-toastify/dist/ReactToastify.css';
import './Home.scss';

import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import AdminDashboard from '../Admin/AdminDashboard';
import Loading from '../UniversalLoading/UniversalLoading';

const Profile = React.lazy(() => import('../Profile/Profile'));
const PostList = React.lazy(() => import('../Posts/PostList'));
const Main = React.lazy(() => import('../Main/Main'));
const Auth = React.lazy(() => import('../Auth/Auth'));
const CreatePost = React.lazy(() => import('../Posts/Post/CreatePost'));
const PostDetails = React.lazy(() => import('../Posts/Post/PostDetails'));
// const About2 = React.lazy(() => import('../About/About2'));

function Home() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const notification = useSelector((state) => state.toastNotificationReducer);

  const notify = (notification) => {
    if (notification.message) toast[notification.color](notification.message);
  };
  useEffect(() => {
    setScreenHeight();
    window.addEventListener('resize', setScreenHeight);
  }, []);

  useEffect(() => {
    notify(notification);
  }, [notification]);
  const setScreenHeight = () => {
    const heightOfScreen = window.innerHeight;
    document.documentElement.style.setProperty(
      '--screen-height',
      heightOfScreen + 'px',
    );
  };

  return (
    <>
      <div
        id="main-container"
        className="container container-bg page-height container-margin-mobile"
      >
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/home" element={<Main />} exact />
            <Route path="/login" element={<Auth />} exact />
            <Route path="/profile" element={<Profile />} exact />
            <Route path="/posts" element={<PostList />} exact />
            <Route path="/posts/create" element={<CreatePost />} exact />
            <Route path="/posts/update" element={<CreatePost />} exact />
            <Route path="/admin" element={<AdminDashboard />} exact />

            <Route
              path="/posts/view/:postId"
              element={<PostDetails />}
              exact
            />
            <Route path="/*" element={<Main />} exact />
            <Route path="/" element={<Main />} exact />
          </Routes>
        </Suspense>
        <ToastContainer position="bottom-center" autoClose={3000} />
      </div>
    </>
  );
}

export default Home;
