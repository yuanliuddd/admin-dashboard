import { tokens } from "../../config/theme";
import { mockTransactions } from "../../data/mockData";

import Header from "../../components/Header";
import StateBox from "../../components/StateBox";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import GeographyChart from "../../components/GeographyChart";
import ProgressCircle from "../../components/ProgressCircle";

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
        <Button
          sx={{
            bgcolor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          <Typography variant="h6">Download Reports</Typography>
        </Button>
      </Box>
      {/* //////////////////////////////////////////////// */}
      {/* Grid /////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////// */}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 1  */}
        <Box
          gridColumn="span 3"
          bgcolor={`${colors.primary[400]}`}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StateBox
            title="12,361"
            subTitle="Emails Sent"
            progress={75}
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={`${colors.primary[400]}`}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StateBox
            title="12,361"
            subTitle="Emails Sent"
            progress={75}
            increase="+14%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={`${colors.primary[400]}`}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StateBox
            title="12,361"
            subTitle="Emails Sent"
            progress={75}
            increase="+14%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={`${colors.primary[400]}`}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StateBox
            title="12,361"
            subTitle="Emails Sent"
            progress={75}
            increase="+14%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
      {/* Row 2 */}

    </Box>
  );
}

export default Dashboard;