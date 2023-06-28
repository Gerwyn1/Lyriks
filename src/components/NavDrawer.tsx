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
  const theme = useTheme();
  const [navIcon, setNavIcon] = useState("Home Icon");

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
          <ListItem sx={themedStyles(theme).drawerFirstItem}>
            <AudiotrackOutlinedIcon />
          </ListItem>
          {navDrawerItems.map((nav) => (
            <ListItem
              key={nav.text}
              sx={themedStyles(theme, { navIcon, nav }).drawerItem}
              onClick={() => setNavIcon(nav.text)}
            >
              <Link href={nav.route}>{nav.icon}</Link>
            </ListItem>
          ))}
          <ListItem
            sx={themedStyles(theme, { navIcon }).drawerLastItem}
            onClick={() => setNavIcon("Exit Icon")}
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
