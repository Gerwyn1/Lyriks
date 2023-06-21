import { useState } from "react";
import Link from "next/link";
import { Box, Drawer, List, ListItem } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import VerticalAlignBottomOutlinedIcon from "@mui/icons-material/VerticalAlignBottomOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

import CreateSvgIcon from "@/components/CreateSvgIcon";

const themedStyles = (theme: Theme, mobileResponsiveWidth: string | number) => {
  return {
    drawer: {
      "& .MuiBackdrop-root": {
        display: "none",
      },
    },
    drawerPaper: {
      width: mobileResponsiveWidth,
      backgroundColor: "#131313",
      overflowX: "hidden",
    },
    list: {
      minHeight: "100vh",
    },
    listItem: {
      p: "6px",
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  };
};

export default function NavDrawer() {
  const [selectIcon, setSelectIcon] = useState("Home Icon");

  const theme = useTheme();

  const greaterThan375 = useMediaQuery("(min-width:376px)");
  const drawerWidth = 120;
  const responsiveDrawerWidth = greaterThan375 ? drawerWidth : drawerWidth - 40;

  return (
    <Drawer
      disableEnforceFocus={false}
      open
      sx={themedStyles(theme, responsiveDrawerWidth).drawer}
      PaperProps={{
        sx: themedStyles(theme, responsiveDrawerWidth).drawerPaper,
      }}
    >
      <Box display="flex" justifyContent="center">
        <List sx={themedStyles(theme, responsiveDrawerWidth).list}>
          {/* first item */}
          <ListItem
            sx={{
              "& .MuiSvgIcon-root": {
                color: "#fff",
                borderRadius: "50%",
                backgroundColor: "#00B3FF",
                ...themedStyles(theme, responsiveDrawerWidth).listItem,
              },
            }}
          >
            <AudiotrackOutlinedIcon />
          </ListItem>
          {[
            {
              text: "Home Icon",
              icon: <CreateSvgIcon icon={<HomeOutlinedIcon />} />,
              route: "/",
            },
            {
              text: "Search Icon",
              icon: <CreateSvgIcon icon={<SearchOutlinedIcon />} />,
              route: "/search",
            },
            {
              text: "Favorites Icon",
              icon: <CreateSvgIcon icon={<FavoriteBorderOutlinedIcon />} />,
              route: "/favorites",
            },
            {
              text: "Voice Icon",
              icon: <CreateSvgIcon icon={<KeyboardVoiceOutlinedIcon />} />,
              route: "/voice",
            },
            {
              text: "Moving Icon",
              icon: <CreateSvgIcon icon={<MovingOutlinedIcon />} />,
              route: "/moving",
            },
            {
              text: "Download Icon",
              icon: (
                <CreateSvgIcon icon={<VerticalAlignBottomOutlinedIcon />} />
              ),
              route: "/download",
            },
            {
              text: "Toc Icon",
              icon: <CreateSvgIcon icon={<TocOutlinedIcon />} />,
              route: "/toc",
            },
            {
              text: "Add Icon",
              icon: <CreateSvgIcon icon={<AddOutlinedIcon />} />,
              route: "/add",
            },
          ].map((nav) => (
            <ListItem
              key={nav.text}
              sx={{
                "& .MuiSvgIcon-root": {
                  color: selectIcon === nav.text ? "#fff" : "#898989",
                  ...themedStyles(theme, responsiveDrawerWidth).listItem,
                },
              }}
              onClick={() => setSelectIcon(nav.text)}
            >
              <Link href={nav.route}>{nav.icon}</Link>
            </ListItem>
          ))}
          {/* last item */}
          <ListItem
            sx={{
              position: "absolute",
              bottom: 5,
              "& .MuiSvgIcon-root": {
                color: selectIcon === "Exit Icon" ? "#fff" : "#898989",
                transform: "rotate(180deg)",
                ...themedStyles(theme, responsiveDrawerWidth).listItem,
              },
            }}
            onClick={() => setSelectIcon("Exit Icon")}
          >
            <Link href="/exit">
              <ExitToAppOutlinedIcon />
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
