import { useState } from "react";
import Signup from "./Pages/Auth";
import { Signin } from "./Pages/Auth";
import Headers from "./Components/Headers";
import Home from "./Pages/Home";
import Calendar from "./Pages/Calendar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/meetspace" element={<Layout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route path="home" element={<Home />} />
            <Route path="bookaspace" element={<Calendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
}

export default App;
