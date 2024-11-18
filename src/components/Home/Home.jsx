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
const Hobbies = React.lazy(() => import('../Hobbys/Hobbies'));
const Main = React.lazy(() => import('../Main/Main'));
const Auth = React.lazy(() => import('../Auth/Auth'));
const CreateHobby = React.lazy(() => import('../Hobbys/Hobby/CreateHobby'));
const ViewHobby = React.lazy(() => import('../Hobbys/Hobby/ViewHobby'));
//const About2 = React.lazy(() => import('../About/About2'));

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
            <Route path="/hobbies" element={<Hobbies />} exact />
            <Route path="/hobbies/create" element={<CreateHobby />} exact />
            <Route path="/hobbies/update" element={<CreateHobby />} exact />
            <Route path="/admin" element={<AdminDashboard />} exact />

            <Route
              path="/hobbies/view/:hobbyid"
              element={<ViewHobby />}
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
