import React from "react";
import { Box, Stack, Avatar, Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import CreateSvgIcon from "@/components/CreateSvgIcon";
import { themedStyles } from "@/theme/themeStyles";

interface UserProps {}

export default function User() {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={themedStyles().notificationUnread}
        ></Box>
        <NotificationsNoneOutlinedIcon />
      </Box>
      <Stack direction="row" gap={1} alignItems="center">
        <Box>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
        <Typography>Alex</Typography>
        <CreateSvgIcon
          sx={{ color: "#858586" }}
          icon={<ExpandMoreOutlinedIcon />}
        />
      </Stack>
    </Stack>
  );
}
