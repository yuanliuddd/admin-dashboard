import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../config/theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  
  const columns: GridColDef[] = [
    {field,headerName,width,editable}
  ]
  
  return (
    <Box m="20px">
      <Header title="TEAM" subTitle="Managing the Team Members" />
      <Box>
        <DataGrid></DataGrid>
      </Box>
    </Box>
  );
};

export default Team;
 