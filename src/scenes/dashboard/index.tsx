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
import LineChart from "../../components/LineChart";

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
        gap="12px"
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
            title="161"
            subTitle="Network"
            progress={75}
            increase="-15%"
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
            title="2,361"
            subTitle="CRM"
            progress={75}
            increase="+24%"
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
            title="1,190"
            subTitle="Traffic"
            progress={75}
            increase="+4%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Row 2 */}
        <Box gridColumn="span 8" gridRow="span 2" bgcolor={colors.primary[400]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenu Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.greenAccent[500]}
              >
                60.8762€
              </Typography>
            </Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Transaction */}
        <Box
          gridColumn="Span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight={600}>
              Recent Transactions{" "}
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              key={transaction.txId + i}
              borderBottom={`1px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box flex="1">
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight={600}
                  flex="auto"
                >
                  {transaction.txId}
                </Typography>
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight={600}
                >
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]} flex="1" textAlign="center">
                {transaction.date}
              </Box>
              <Box flex="1" textAlign="end" color={colors.greenAccent[500]}>
                {transaction.cost}€
              </Box>
            </Box>
          ))}
        </Box>

        {/* Row 3  */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight={600}>
            Campaign
          </Typography>

          <PieChart isDashboard={true} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight={600}>
            Sales Qty
          </Typography>

          <BarChart isDashboard={true} />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          bgcolor={colors.primary[400]}
          gridColumn="span 4"
          gridRow="span 2"
          p="30px"
        >
          <Typography variant="h5" fontWeight={600}>
            Country view Sales Traffic
          </Typography>
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
