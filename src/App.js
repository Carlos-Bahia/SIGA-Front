import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../src/pages/login/login";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate to="/login"/>} path="/"/>;
        <Route element={<Navigate to="/login"/>} path="/sair"/>;
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
