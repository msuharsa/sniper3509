// components/DynamicCircle.js
import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const DynamicCircle = ({ percent, size = 80, thickness = 5 }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={percent}
        size={size}
        thickness={thickness}
        sx={{
          color: percent >= 0 ? "success.main" : "error.main",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" color="textSecondary">
          {`${percent}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default DynamicCircle;
