import { Box, IconButton, useTheme, Tooltip } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../config/theme";
import { InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* ////////////////////////////////////////////////////////////// */}
      {/*//////////////// Search Bar Input  //////////////////////////*/}
      {/* ////////////////////////////////////////////////////////////// */}

      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <Tooltip title="Search history">
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Box>
      {/* ////////////////////////////////////////////////////////////// */}
      {/*//////////////// Search Bar Icons Section  /////////////////////*/}
      {/* ////////////////////////////////////////////////////////////// */}

      <Box>
        <IconButton onClick={() => colorMode.toggleColorMode()}>
          {theme.palette.mode === "dark" ? (
            <Tooltip title="Light Mode ">
              <LightModeOutlinedIcon />
            </Tooltip>
          ) : (
            <Tooltip title="Dark Mode ">
              <DarkModeOutlinedIcon />
            </Tooltip>
          )}
        </IconButton>
        <IconButton>
          <Tooltip title="Notification">
            <NotificationsOutlinedIcon />
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Setting">
            <SettingsOutlinedIcon />
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Profile">
            <PersonOutlinedIcon />
          </Tooltip>
        </IconButton>
      </Box>
    </Box>
  );
}
