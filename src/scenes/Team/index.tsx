import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { DataGrid } from "@mui/x-data-grid"
import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";

export function Team() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />

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
        }
      }}>
        <DataGrid
          rows={mockDataTeam}
          columns={[
            {
              field: "id",
              headerName: "ID"
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
              field: "access",
              headerName: "Access Level",
              flex: 1,
              renderCell: ({ row: { access } }) => {
                return (
                  <Box
                    width="60%"
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    sx={{
                      backgroundColor: access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]
                    }}
                    borderRadius="4px"
                  >
                    {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                    {access === "manager" && <SecurityOutlinedIcon />}
                    {access === "user" && <LockOpenOutlinedIcon />}
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                      {access}
                    </Typography>
                  </Box>
                )
              }
            },
          ]}
        />
      </Box>
    </Box>
  )
}