import React from 'react';
import Sidenav from '../Pages/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../Pages/Navbar';

export default function Closed() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Closed</h1>
        </Box>
      </Box>
    </>

  )
}
