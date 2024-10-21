import { Backdrop, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const UniversalLoading = () => {
  const isLoading = useSelector((state) => state.loading);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => setShowLoader(true), 300);
    } else {
      setShowLoader(false);
    }
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <Backdrop
      sx={{ color: 'var(--secondary-color)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={showLoader}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default UniversalLoading;
