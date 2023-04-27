import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  console.log("videos", videos);
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard />}
          {/* {item.id.channelId && <ChannelCard />} */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
