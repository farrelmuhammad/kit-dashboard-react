import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Dashoard from "./pages/Dashoard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Notfound from "./pages/Notfound";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.accessToken);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {isLoggedIn ? (
          <>
            <Route exact path="/dashboard" element={<Dashoard />} />
          </>
        ) : (
          <>
            <Route exact path="*" element={<Notfound title="401 Unauthorized" body="Access Not Allowed: Please log in or register with an account that has access permissions." />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
