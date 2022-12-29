import { Sidebar as ProSidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import { Box, useTheme, Typography, IconButton } from "@mui/material"
import { tokens } from "../../theme"
import { ReactNode, useState } from "react"
import { Link } from 'react-router-dom';

interface ItemSidebarProps {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

const ItemSidebar = ({ title, to, icon, selected, setSelected }: ItemSidebarProps) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      rootStyles={{
        "& .pro-menu-item.active": "#6870fa"
      }}
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

export function Sidebar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [selected, setSelected] = useState("Dashboard")
  const { collapseSidebar, collapsed } = useProSidebar();


  return (
    <Box sx={{
      display: "flex",
      height: "100vh",
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important"
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important"
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important"
      },
      // "& .pro-menu-item.active": {
      //   color: "#6870fa !important"
      // }
    }}>

      <ProSidebar backgroundColor={colors.primary[400]}>
        <Menu>
          <MenuItem
            onClick={() => collapsed && collapseSidebar()}
            icon={collapsed && <MenuOutlinedIcon />}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant='h3' color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => !collapsed && collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        </Menu>

        {!collapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src="https://github.com/Vinicius-Holtman.png"
                alt="profile-user-image"
                width="100px"
                height="100px"
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>

            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Vinicius Holtman
              </Typography>
              <Typography variant='h5' color={colors.greenAccent[500]}>React Admin</Typography>
            </Box>
          </Box>
        )}
        <Menu style={{ paddingLeft: collapsed ? undefined : "10%" }}>
          <ItemSidebar
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemSidebar
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemSidebar
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemSidebar
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemSidebar
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemSidebar
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemSidebar
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemSidebar
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemSidebar
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemSidebar
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <ItemSidebar
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </ProSidebar>
    </Box>
  )
} 