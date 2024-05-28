"use client";
import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsIcon from "@mui/icons-material/Settings";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Collapse } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import PropTypes from "prop-types";
import logo from "./alchemy.png";
import HeaderComponent from "./header";


const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const { children } = props;
  const [isCollapse, setIsCollapse] = React.useState();

  const router = useRouter();
  const pathname = usePathname();

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Image src={logo} width={135} alt="logo" className="my-1 ml-5"/>
      </Toolbar>
      <Divider />
      <List>
        {["Dashboard","Analytics","Users","Projects","Message","Settings",
        ].map((text, index) => (
          <ListItem key={text} disablePadding
          className={pathname.startsWith("/" + text.toLocaleLowerCase())? "text-sky-600 bg-slate-100":"text-slate-700"}
          onClick={()=>{router.push("/"+text.toLocaleLowerCase())}}
          >
            <ListItemButton>
              <ListItemIcon className={pathname.startsWith("/" + text.toLocaleLowerCase())? "text-sky-600":"text-slate-700"}>
                {index === 0 && <SpaceDashboardIcon />}
                {index === 1 && <QueryStatsIcon />}
                {index === 2 && <PeopleAltIcon />}
                {index === 3 && <WorkOutlineIcon />}
                {index === 4 && <MailIcon />}
                {index === 5 && <SettingsIcon />}
                {index === 6 && <AccountCircleIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem disablePadding onClick={handleCollapse} className={pathname.startsWith("/help")? "text-sky-600 bg-slate-100":"text-slate-700"}>
          <ListItemButton>
            <ListItemIcon className={pathname.startsWith("/help")? "text-sky-600 bg-slate-100":"text-slate-700"}>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
            {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={isCollapse} timeout="auto" unmountOnExit>
        <List className="ml-4">
          {["Support", "Contact", "Docs"].map((text, index) => (
            <ListItem key={text} disablePadding className={pathname.startsWith("/help")? "text-sky-600 bg-slate-100":"text-slate-700"}>
              <ListItemButton>
                <ListItemIcon className={pathname.startsWith("/help")? "text-sky-600 bg-slate-100":"text-slate-700"}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` },
          bgcolor: "#FFFFFF",color: "#2F2F2F",
          borderBottom: "1px solid #cbd5e1",boxShadow: "none",padding:'16.3px'}}>
          <HeaderComponent/>
        {/* </Toolbar> */}
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer container={container} variant="temporary"
          ModalProps={{ keepMounted: true}} sx={{ display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box",width: drawerWidth,}}}>
          {drawer}
        </Drawer>
        <Drawer variant="permanent" sx={{ display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth}}} open>
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },}}>
        <Toolbar />
        <main>{children}</main>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  window: PropTypes.func,
  children: PropTypes.array,
};

export default Layout;
