// components/layouts/AdminLayout.js
import React from "react";
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import "./scss/adminSideBar.scss"

const AdminSideBar = () => {
  return (
    <>
      <div className="admin-sidebar-container">
        <List>
          <ListItem component={Link} to="/admin/GetUsers">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="User List" />
          </ListItem>
          <ListItem component={Link} to="/admin/CreateUser">
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Create User" />
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default AdminSideBar;
