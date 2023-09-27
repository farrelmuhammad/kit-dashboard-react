import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Dashoard from './pages/Dashoard';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashoard />} />
      </Routes>
    </>
  );
}

export default App;
