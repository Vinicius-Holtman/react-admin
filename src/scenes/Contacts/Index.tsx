import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

export function Contacts() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contacts for Future Referency" />

      <Box m="40px" height="75vh" sx={{
        "& .MuiDataGrid-root": {
          border: "none"
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none"
        },
        "& .name-column-cell": {
          color: colors.greenAccent[300]
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400]
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700]
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`
        }
      }}>
        <DataGrid
          rows={mockDataContacts}
          columns={[
            {
              field: "id",
              headerName: "ID",
              flex: 0.5
            },
            {
              field: "registrarId", headerName: "Registrar ID"
            },
            {
              field: "name",
              headerName: "Name",
              flex: 1,
              cellClassName: "name-column--cell"
            },
            {
              field: "age",
              headerName: "Age",
              type: "number",
              headerAlign: "left",
              align: "left",
            },
            {
              field: "phone",
              headerName: "Phone Number",
              flex: 1
            },
            {
              field: "email",
              headerName: "Email",
              flex: 1
            },
            {
              field: "address",
              headerName: "Address",
              flex: 1
            },
            {
              field: "city",
              headerName: "City",
              flex: 1
            },
            {
              field: "zipCode",
              headerName: "ZipCode",
              flex: 1
            },
          ]}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}