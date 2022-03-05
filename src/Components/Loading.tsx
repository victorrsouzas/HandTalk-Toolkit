import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Icon from "../Assets/img/icon2.png";
function Loading() {
  return (
    <Box
      sx={{
        zIndex: 3000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        margin: "0 auto",
        
        width: "100%",
        maxWidth: "max-content",
        // height: "100vh",
        backgroundColor: "transparent",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
      }}
    >
      <Box marginTop={1.5} position="absolute" style={{
      }}>
        <img src={Icon}/>
      </Box>
      <CircularProgress size={80}></CircularProgress>
    </Box>
  );
}

export default Loading;
