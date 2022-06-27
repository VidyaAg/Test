import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles({
  search: {
    fontSize: '13px',
    display: 'flex',
    background: '#80808036',
    borderRadius: "20px",
    padding: "5px",
    alignItems: "center",
  },
  SearchIcon: {

  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
    color: "gray",
    fontWeight: "600",
    letterSpacing: '1px',
  },

})

const pages = ['My items', 'Following', 'Activity', 'How it works'];  //Page

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" sx={{ background: "white", color: "#1d1c1c", boxShadow: 'none', borderBottom: '1px solid #80808061' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo & SearchBar */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <BarChartIcon sx={{ mr: 1, background: 'linear-gradient(135deg,#b2e7f0,#0c76a6)', color: 'white', padding: '3px', borderRadius: '3px' }} />
            <Typography variant="h5" sx={{ mr: { md: 1, lg: 3 }, fontWeight: 700, color: '#1d1c1c', textDecoration: 'none', }}>
              Fungy
            </Typography>
            <SearchBar
              sx={{ mr: { md: 1, lg: 3 }, display: { md: 'none', lg: 'flex' } }}
              placeholder="Search by Creator, Collection or Collaboration"
              style={{ fontSize: "12px", borderRadius: '25px', height: "35px", boxShadow: 'none', background: "#8080801a", width: '90%' }}
            />
          </div>
          {/* Links */}
          <div>
            <Box sx={{ display: 'flex' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: '#1d1c1c', display: 'block', textTransform: 'none', fontWeight: "600", letterSpacing: "1px" }}>
                  {page}
                </Button>
              ))}
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem>
                  <em style={{ color: '#1d1c1c', fontSize: "14px", textTransform: 'none', fontWeight: "600", letterSpacing: "1px", background: "none", fontStyle: "normal" }}>Community</em>
                </MenuItem>
              </Select>
            </Box>
          </div>
          {/* Settings, Notifications Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ mr: 2 }}>
              <IconButton sx={{ border: "1px solid gray" }}><NotificationsNoneIcon /></IconButton>
            </Box>
            <Box sx={{ mr: 2 }}>
              <IconButton sx={{ fontSize: "15px", border: "1px solid blue", borderRadius: "20px" }}><span>0 Token</span></IconButton>
            </Box>
            <Box >
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
              </IconButton>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
