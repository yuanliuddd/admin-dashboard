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
  const colors = tokens(theme.palette.mode);

  //////////////////////////////////////////////////////////////////////////////
  // Defind DataGrid columns
  //////////////////////////////////////////////////////////////////////////////

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", editable: true },
    {
      field: "name",
      headerName: "Name",
      editable: true,
      flex: 1,
      cellClassName: "name-column-cell", //custom cell style
    },
    { field: "email", headerName: "Email", editable: true, flex: 1 },
    {
      field: "age",
      headerName: "Age",
      editable: true,
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number ", editable: true, flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      editable: true,
      renderCell: ({ row: { access } }) => {
        // render React.node to Cell , access row object for data
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor:
                access === "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700],
            }}
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subTitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: 0 },
          "& .MuiDataGrid-cell": { borderBottom: 0 },
          "& .name-column-cell": { color: colors.greenAccent[300] },
        }}
      >
        <DataGrid columns={columns} rows={mockDataTeam}></DataGrid>
      </Box>
    </Box>
  );
};

export default Team;
