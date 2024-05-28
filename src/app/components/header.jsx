import * as React from 'react';
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Badge, Box, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

const HeaderComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box>
        <Grid container>
          <Grid item xs={11.9} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="EmailIcon">
                <EmailIcon />
              </IconButton>
              <IconButton aria-label="NotificationsIcon">
                {/* <NotificationsIcon /> */}
                <Badge badgeContent={4} color="primary">
                    <NotificationsIcon color="action" />
                </Badge>
              </IconButton>
              <IconButton onClick={handleClick}>
                <Avatar alt="Remy Sharp" src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg" sx={{width:26,height:26}}/>
              </IconButton>
            </Stack>
            <Menu id="demo-positioned-menu" aria-labelledby="demo-positioned-button" anchorEl={anchorEl} open={open} onClose={handleClose}
              anchorOrigin={{vertical:"top",horizontal:"left",}} transformOrigin={{vertical:"top",horizontal:"left"}} style={{marginTop:'3.5rem',marginLeft:'0.5rem'}}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HeaderComponent;
