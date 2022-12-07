import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  Box,
  IconButton,
  SvgIconTypeMap,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../config/theme";
import "react-pro-sidebar/dist/css/styles.css";

//////////////////Icons Collections
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface itemType {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  } & React.ReactNode;
  linkTo: string;
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const Item = <itemType,>({
  title,
  icon,
  linkTo,
  selectedPage,
  setSelectedPage,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      icon={icon}
      active={selectedPage === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelectedPage(title)}
    >
      <Typography>{title}</Typography>
      <Link to={linkTo} />
    </MenuItem>
  );
};

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* ///////////////////////////////////////////////////////////////////////////// */}
          {/* Admin § Logo  */}
          {/* ///////////////////////////////////////////////////////////////////////////// */}

          <MenuItem
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
            icon={isCollapsed ? <MenuOutlinedIcon /> : null}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3">Admin</Typography>
                <IconButton
                  onClick={() => {
                    setIsCollapsed(!isCollapsed);
                  }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* ///////////////////////////////////////////////////////////////////////////// */}
          {/* Admin User Profile */}
          {/* ///////////////////////////////////////////////////////////////////////////// */}

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  width="100px"
                  height="100px"
                  alt="user-profile"
                  src={"../../asset/user-profile.jpg"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Neo
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                  Matrix Admin User
                </Typography>
              </Box>
            </Box>
          )}
          {/* ///////////////////////////////////////////////////////////////////////////// */}
          {/* List Items : DashBoard § Pages § Charts   */}
          {/* ///////////////////////////////////////////////////////////////////////////// */}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem
              onClick={() => <Link to="/" />}
              icon={!isCollapsed && <HomeOutlinedIcon />}
            >
              {!isCollapsed && (
                <>
                  <Typography>DashoBoard</Typography>
                </>
              )}
            </MenuItem>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default Sidebar;
