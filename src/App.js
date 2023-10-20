import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import SinglePost from "./pages/singlePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/single-post" exact Component={SinglePost} />
      </Routes>
    </>
  );
}

export default App;
