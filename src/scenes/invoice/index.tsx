import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../config/theme";
import Header from "../../components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";

function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "phone", headerName: "Phone Number ", editable: true, flex: 1 },
    { field: "email", headerName: "Email", editable: true, flex: 1.5 },
    {
      field: "cost",
      headerName: "Cost",
      editable: true,
      flex: 0.5,
      renderCell: (params) => (
        <Typography
          color={colors.greenAccent[500]}
        >{`€${params.row.cost}`}</Typography>
      ),
    },
    { field: "date", headerName: "Date", editable: true, flex: 0.5 },
  ];

  return (
    <Box m="20px">
      <Header title="Invoices" subTitle="Invoice Balance List " />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: 0 },
          "& .MuiDataGrid-cell": { border: 0 },
          "& .name-column-cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-row": { border: 0 },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            border: "none",
          },
          "& .MuiDataGrid-vitualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[100]} !important`,
          },
        }}
      >
        <DataGrid
          columns={columns}
          rows={mockDataInvoices}
          checkboxSelection
        ></DataGrid>
      </Box>
    </Box>
  );
}

export default Invoices;
