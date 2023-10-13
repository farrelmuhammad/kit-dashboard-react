import React from 'react';
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DataTable from '../components/Backoffice/DataTable';

const Dashoard = () => {
  const isLoggedIn = useSelector(state => state.auth.accessToken);

  return (
    <>
      {/* <Navbar isLoggedIn={isLoggedIn} />
      <div class="flex p-10">
        <Sidebar />
      </div> */}
      <div className="flex h-screen">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5">
          <div className="px-6 py-4">
            <Header isLoggedIn={isLoggedIn} />
          </div>
          <div className="px-6 py-4">
            <div className='bg-gray-200 p-2 rounded-lg'>
              <DataTable />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashoard