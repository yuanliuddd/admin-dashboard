import { Box, Typography, useTheme, IconButton } from "@mui/material";
import Header from "../../components/Header";

import { tokens } from "../../config/theme";

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
