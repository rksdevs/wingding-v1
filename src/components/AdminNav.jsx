import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Tooltip from "@mui/material/Tooltip";
// import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
// import { Button } from "@mui/material";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import Login from "./user/Login";
import AccountSettings from "./user/settings/AccountSettings";
// import Profile from "./user/Profile";

const Styledtext = styled.p`
    color: var(--pink2);
    font-size: 15px;
    border-bottom: 1px solid var(--pink2);
    transition: 0.2s;

    &:hover {
      color: var(--yellow);
    
`;

export default function AdminNav() {
  // const [currentUser, setCurrentUser] = React.useState(true);
  const { currentUser, setModal, logout, setAlert } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openLogin = () => {
    setModal({ isOpen: true, title: "Login", content: <Login /> });
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setAlert({
        isAlert: true,
        severity: "error",
        message: error.message,
        timeout: 8000,
        location: "main",
      });
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {!currentUser ? (
          <Styledtext onClick={openLogin}>Admin Mode</Styledtext>
        ) : (
          <Styledtext onClick={handleClick}>Admin Settings</Styledtext>
        )}
        {/* <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip> */}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
        // onClick={() =>
        //   setModal({
        //     isOpen: true,
        //     title: "Update Profile",
        //     content: <Profile />,
        //   })
        // }
        >
          <Avatar src={currentUser?.photoURL} /> Profile
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() =>
            setModal({
              isOpen: true,
              title: "Account Settings",
              content: <AccountSettings />,
            })
          }
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
