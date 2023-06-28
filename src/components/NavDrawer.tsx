import { useState } from "react";
import Link from "next/link";
import { Box, Drawer, List, ListItem, SxProps, Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";

import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

import { themedStyles } from "@/theme/themeStyles";
import { navDrawerItems } from "@/utils/Data";

interface NavDrawerProps {
  responsiveDrawerWidth: number | string;
}

export default function NavDrawer({ responsiveDrawerWidth }: NavDrawerProps) {
  const [selectIcon, setSelectIcon] = useState("Home Icon");
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      open
      sx={themedStyles(theme).drawer}
      PaperProps={{
        sx: themedStyles(theme, { responsiveDrawerWidth })
          .drawerPaper as SxProps<Theme>,
      }}
    >
      <Box display="flex" justifyContent="center">
        <List sx={themedStyles().drawerList}>
          <ListItem
            sx={{
              "& .MuiSvgIcon-root": {
                ...themedStyles().drawerFirstItem,
                ...themedStyles(theme).drawerItem,
              },
            }}
          >
            <AudiotrackOutlinedIcon />
          </ListItem>
          {navDrawerItems.map((nav) => (
            <ListItem
              key={nav.text}
              sx={{
                "& .MuiSvgIcon-root": {
                  ...themedStyles(theme).drawerItem,
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
                ...themedStyles().drawerLastItem,
                ...themedStyles(theme).drawerItem,
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
