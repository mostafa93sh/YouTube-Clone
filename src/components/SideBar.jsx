import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = () => {
  const selectedCategory = "New";
  return (
    <Stack
      direction='row'
      sx={{
        flexDirection: { md: "column" },
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
      }}>
      {categories.map((category) => (
        <button
          className='category-btn'
          style={{
            backgroundColor: category.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}>
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}>
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
