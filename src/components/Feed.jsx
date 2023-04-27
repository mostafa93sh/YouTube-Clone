import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";

const Feed = () => {
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}>
      <Box
        sx={{
          height: { sx: "auto", md: "88vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}>
        <SideBar />
        <Typography
          variant='body2'
          className='copyright'
          sx={{ color: "#fff" }}>
          Copyright 2022 JSM
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "86vh", flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' sx={{ color: "white" }}>
          New <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
