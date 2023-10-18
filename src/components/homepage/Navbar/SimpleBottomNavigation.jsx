import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottom-navbar">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Explore"
          icon={<SearchIcon id="Search-i"></SearchIcon>}
        />
        <BottomNavigationAction
          label="Wishlists"
          icon={<FavoriteBorderIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          icon={<AccountCircleOutlinedIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
