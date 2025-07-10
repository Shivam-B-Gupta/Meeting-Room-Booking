import { useState } from "react";
import Auth from "./Pages/Auth";
import Headers from "./Components/Headers";
import Home from "./Pages/Home";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Auth /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/meetspace" element={<Layout />}>
            <Route path="home" element={<Home />} />
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
