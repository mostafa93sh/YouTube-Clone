import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}>
      <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: 358,
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight={`bold`} color={`#FFF`}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `channel/${snippet?.channelId}`
              : demoChannelUrl
          }>
          <Typography variant='subtitle1' color={`#FFF`}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: 5 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
