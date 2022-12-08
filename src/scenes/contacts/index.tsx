import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../config/theme";
import { mockDataContacts } from "../../data/mockData";

function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    { field: "email", headerName: "Email" },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      editable: true,
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "ZipCode", flex: 1 },
    { field: "registrarId", headerName: "Registrar ID" },
  ];
  return (
    <Box m="20px">
      <Header title="Contacts" subTitle="Future Reference List"></Header>
      <Box
        m="40px 0 0 0"
        sx={{
          width: "100%",
          height: "75vh",
          "& .MuiDataGrid-columnHeaders": {
            border: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-row": {
            border: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            border: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-virtualScroller": {
            borderBottom: 0,
          },
          "& .MuiDataGrid-cell": { border: 0 },
          "& .MuiDataGrid-root ": { border: 0 },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        ></DataGrid>
      </Box>
    </Box>
  );
}

export default Contacts;
