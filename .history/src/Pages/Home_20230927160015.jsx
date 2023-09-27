import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Home/Header";
import Content from "../components/Home/Content";

const Home = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <Header />
      <Content data={menus} loading={loading} />
    </>
  );
};

export default Home;
