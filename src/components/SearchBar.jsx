import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };
  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{ borderRadius: 20, border: "1px solid #e3e3e3", pl: 2 }}>
      <input
        type='text'
        className='search-bar'
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder='Search ....'
      />
      <IconButton sx={{ color: "red", p: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
