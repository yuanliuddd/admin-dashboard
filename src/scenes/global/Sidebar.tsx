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

interface itemTypes {
  title: string;
  icon: React.ReactNode;
  linkTo: string;
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const Item = ({
  title,
  icon,
  linkTo,
  selectedPage,
  setSelectedPage,
}: itemTypes) => {
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
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              icon={<PeopleOutlinedIcon />}
              linkTo="/team"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Item
              title="Contacts Information"
              icon={<ContactsOutlinedIcon />}
              linkTo="/contacts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Item
              title="Invoice Balances"
              icon={<ReceiptOutlinedIcon />}
              linkTo="/invoices"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              icon={<PersonOutlinedIcon />}
              linkTo="/form"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Item
              title="Calendar"
              icon={<CalendarTodayOutlinedIcon />}
              linkTo="/calendar"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Item
              title="FAQ"
              icon={<HelpOutlineOutlinedIcon />}
              linkTo="/faq"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              icon={<BarChartOutlinedIcon />}
              linkTo="/bar"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Item
              title="Pie Chart"
              icon={<PieChartOutlineOutlinedIcon />}
              linkTo="/pie"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Item
              title="Line Chart"
              icon={<TimelineOutlinedIcon />}
              linkTo="/faq"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Item
              title="Geography Chart"
              icon={<MapOutlinedIcon />}
              linkTo="/geography"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default Sidebar;
