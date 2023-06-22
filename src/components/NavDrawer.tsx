import { useState } from "react";
import Link from "next/link";
import { Box, Drawer, List, ListItem, SxProps, Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
import { themedStyles } from "@/themeStyles/themeStyles";

interface NavDrawerProps {
  responsiveDrawerWidth: number;
}

export default function NavDrawer({ responsiveDrawerWidth }: NavDrawerProps) {
  const [selectIcon, setSelectIcon] = useState("Home Icon");
  const theme = useTheme();

  return (
    <Drawer
      disableEnforceFocus={false}
      variant="permanent"
      open
      sx={themedStyles().drawer}
      PaperProps={{
        sx: themedStyles(theme, responsiveDrawerWidth)
          .drawerPaper as SxProps<Theme>,
      }}
    >
      <Box display="flex" justifyContent="center">
        <List sx={themedStyles().list}>
          <ListItem
            sx={{
              "& .MuiSvgIcon-root": {
                ...themedStyles().firstListItem,
                ...themedStyles(theme).listItem,
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
                  ...themedStyles(theme).listItem,
                  color: selectIcon === nav.text ? "#fff" : "#898989",
                },
              }}
              onClick={() => setSelectIcon(nav.text)}
            >
              <Link href={nav.route}>{nav.icon}</Link>
            </ListItem>
          ))}
          <ListItem
            sx={{
              position: "absolute",
              bottom: 5,
              "& .MuiSvgIcon-root": {
                ...themedStyles().lastListItem,
                ...themedStyles(theme).listItem,
                color: selectIcon === "Exit Icon" ? "#fff" : "#898989",
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
