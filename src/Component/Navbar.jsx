import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import EditIcon from "@mui/icons-material/Edit";

import  { useState } from "react";

import { useNavigate } from "react-router-dom";

import { UsemovieContext } from "../Context/movieContext";

function Navbar() {
  const { sorting }= UsemovieContext();
  const [value, setValue] = useState(0);
  const [sort, setSort] = useState();
  const navigate = useNavigate();
  return (
    <>
      <BottomNavigation
        showLabels
        style={{ borderRadius: "5px" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (newValue === 2) {
            navigate("edit");
          }
          if (newValue === 1) {
            setSort((val) => (val === true ? false : true));
            sorting(sort);
          }
          if (newValue === 0) {
            navigate("/");
          }
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Sorting" icon={<SwapVertIcon />} />
        <BottomNavigationAction label="Edit" icon={<EditIcon />} />
      </BottomNavigation>
    </>
  );
}

export default Navbar;
