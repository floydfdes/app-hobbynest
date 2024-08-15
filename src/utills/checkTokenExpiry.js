const checkTokenExpiry = () => {
  const profileData = JSON.parse(localStorage.getItem('profile'));
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
  const decodedJwt = parseJwt(profileData?.token);

  if (decodedJwt && decodedJwt.exp * 1000 < Date.now()) {
    localStorage.clear();
  }
};

export default checkTokenExpiry;
