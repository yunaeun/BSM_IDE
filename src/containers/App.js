import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { ContestHold } from "../pages/hold/ContestHold";
import { Home } from "../pages/home/ProblemList";
import { ContestList } from "../pages/list/ContestList";
import { MyProfile } from "../pages/profile/MyProfile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/hold" element={<ContestHold />} />
        <Route path="/list" element={<ContestList />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
