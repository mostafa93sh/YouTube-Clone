import React from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component='form'
      onSubmit={() => {}}
      sx={{ borderRadius: 20, border: "1px solid #e3e3e3", pl: 2 }}>
      <input
        type='text'
        className='search-bar'
        onChange={() => {}}
        placeholder='Search ....'
      />
      <IconButton sx={{ color: "red", p: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
