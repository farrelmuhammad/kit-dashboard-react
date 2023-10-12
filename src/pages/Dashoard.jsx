import React from 'react';
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';

const Dashoard = () => {
  const isLoggedIn = useSelector(state => state.auth.accessToken);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
    </>
  )
}

export default Dashoard