import { useState } from "react";
import Signup from "./Pages/Auth";
import { Signin } from "./Pages/Auth";
import Headers from "./Components/Headers";
import Home from "./Pages/Home";
import Calendar from "./Pages/Calendar";
import PopUp from "./Components/PopUp";
import Oops from "./Pages/Oops";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { RoomsProvider } from "./hooks/RoomContext";
import { UserProvider } from "./hooks/UserContext";
import UserNavigation from "./Components/UserNavigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          {/*  Wraping everything inside context provider */}
          <RoomsProvider>
            <Routes>
              <Route path="/meetspace" element={<Layout />}>
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
                <Route path="home" element={<Home />} />
                <Route path="bookaspace" element={<Calendar />} />
                <Route path="addroom" element={<PopUp />} />
                {/* <Route path="test" element={<UserNavigation />} />{" "} */}
                {/* testing route */}
              </Route>
              <Route path="*" element={<Oops />} />
            </Routes>
          </RoomsProvider>
        </UserProvider>
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
