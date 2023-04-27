import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import VideoDetails from "./components/VideoDetails";
import ChannelDetails from "./components/ChannelDetails";
import SearchFeed from "./components/SearchFeed";
const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/videos/:id' element={<VideoDetails />} />
          <Route path='/channel/:id' element={<ChannelDetails />} />
          <Route path='/search/:searchterm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
