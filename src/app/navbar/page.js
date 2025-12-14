'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  IconButton,
  Paper,
  Divider,
  Badge,
  Tooltip,
  Stack,
  Drawer,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import Link from 'next/link';
import { styled, alpha } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import BentoIcon from '@mui/icons-material/Bento';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigationItems = [
    { icon: <HomeIcon />, label: 'Home', path: '/component' },
    { icon: <PeopleAltIcon />, label: 'Network', path: '/Network' },
    { icon: <BusinessCenterIcon />, label: 'Jobs', path: '/job' },
    { icon: <MailIcon />, label: 'Messaging', path: '/message' },
    { icon: <NotificationsIcon />, label: 'Notifications', path: '/notification' },
    { icon: <AccountCircleIcon />, label: 'Me', path: '/profile' },
    { icon: <AppsTwoToneIcon />, label: 'Business', path: '/' },
    { icon: <BentoIcon />, label: 'Learning', path: '/' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Desktop Navigation
  const desktopNav = (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
      {/* Logo */}
      <Tooltip title="LinkedIn">
        <Typography
          variant="h5"
          sx={{
            bgcolor: '#0072B1',
            color: 'white',
            width: 45,
            height: 45,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1,
            fontWeight: 'bold',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          in
        </Typography>
      </Tooltip>

      {/* Search Bar - Hide on mobile */}
      <SearchBar sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
      </SearchBar>

      {/* Navigation Items - Desktop */}
      <Stack
        direction="row"
        spacing={0.5}
        sx={{
          display: { xs: 'none', md: 'flex' },
          ml: 'auto',
          alignItems: 'center',
        }}
      >
        {navigationItems.map((item) => (
          <Tooltip key={item.label} title={item.label}>
            <Link href={item.path} style={{ textDecoration: 'none' }}>
              <IconButton
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontSize: '0.7rem',
                  color: '#666',
                  '&:hover': {
                    color: '#0072B1',
                    bgcolor: 'action.hover',
                  },
                }}
              >
                {item.icon}
                <Typography variant="caption" sx={{ mt: 0.5 }}>
                  {item.label}
                </Typography>
              </IconButton>
            </Link>
          </Tooltip>
        ))}
      </Stack>

      {/* Mobile Menu Button */}
      <IconButton
        sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}
        onClick={handleDrawerToggle}
      >
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </Toolbar>
  );

  // Mobile Navigation Drawer
  const mobileNav = (
    <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
      <Box
        sx={{
          width: 280,
          p: 2,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            LinkedIn
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Mobile Search */}
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            p: 1,
            bgcolor: '#f0f0f0',
          }}
        >
          <SearchIcon fontSize="small" sx={{ ml: 1, color: '#666' }} />
          <InputBase
            placeholder="Search"
            sx={{
              ml: 1,
              flex: 1,
              fontSize: '0.9rem',
            }}
          />
        </Paper>

        <Divider sx={{ mb: 2 }} />

        {/* Mobile Navigation Items */}
        <Stack spacing={1}>
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              style={{ textDecoration: 'none' }}
              onClick={() => setMobileOpen(false)}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  p: 1.5,
                  borderRadius: 1,
                  color: '#666',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: '#f0f0f0',
                    color: '#0072B1',
                  },
                }}
              >
                {item.icon}
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {item.label}
                </Typography>
              </Box>
            </Link>
          ))}
        </Stack>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          bgcolor: 'white',
          color: '#666',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        {desktopNav}
      </AppBar>
      {mobileNav}
      {/* Spacer for fixed navbar */}
      <Box sx={{ height: { xs: '56px', sm: '64px' } }} />
    </>
  );
}

export default Navbar;
