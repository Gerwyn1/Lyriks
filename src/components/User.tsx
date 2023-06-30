import React from "react";
import { Box, Stack, Avatar, Typography, useTheme } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { themedStyles } from "@/theme/themeStyles";
import UserMenu from "./UserMenu";

interface UserProps {
    lessThan425: boolean;
}

export default function User({ lessThan425 }: UserProps) {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Box sx={{ position: "relative" }}>
        <Box sx={themedStyles().notificationUnread}></Box>
        <NotificationsNoneOutlinedIcon sx={{ cursor: "pointer" }} />
      </Box>
      <Stack direction="row" gap={1} alignItems="center">
        <Box>
          <Avatar
            sx={{
              width: lessThan425
                ? theme?.typography.pxToRem(24)
                : theme?.typography.pxToRem(40),
              height: lessThan425
                ? theme?.typography.pxToRem(24)
                : theme?.typography.pxToRem(40),
            }}
            sizes="small"
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
        </Box>
        <Typography>Travis</Typography>
        <UserMenu />
      </Stack>
    </Stack>
  );
}
