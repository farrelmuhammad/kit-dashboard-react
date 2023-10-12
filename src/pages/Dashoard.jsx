import React from 'react';
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';

const Dashoard = () => {
  const isLoggedIn = useSelector(state => state.auth.accessToken);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <div class="flex p-10">
        <Sidebar />
      </div>
    </>
  )
}

export default Dashoard