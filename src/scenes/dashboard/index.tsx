import { tokens } from "../../config/theme";
import { mockTransactions } from "../../data/mockData";

import Header from "../../components/Header";
import StateBox from "../../components/StateBox";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import GeographyChart from "../../components/GeographyChart";

///////////// Mui ////////////////////////////////////
import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
}

export default Dashboard;