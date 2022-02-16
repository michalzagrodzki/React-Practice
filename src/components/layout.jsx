import React from "react";
import { Box } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        height: "100vh",
        background: `linear-gradient(0.35turn, #015f92, #0a4260);`
      }}
    >
      { children }
    </Box>
  )
}