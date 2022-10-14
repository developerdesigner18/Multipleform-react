import React from "react";
import { Box, Typography } from "@mui/material";
import { FormButton } from "../../styles/theme/styledComponents";
import { NavLink } from "react-router-dom";

const SuccessRegistration = ({ personalAccountData }) => {
  function handleclick() {
    localStorage.setItem("alldata", JSON.stringify(personalAccountData));

    const items = JSON.parse(localStorage.getItem("alldata"));
    alert(items.username);
    alert(items.email);
    alert(items.age);
  }

  return (
    <Box
      sx={{
        minHeight: "500px",
        height: "100%",
        justifyContent: "center",
        margin: "auto 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        
      }}
    >
      <Typography
        sx={{ fontSize: { xs: "40px", xl: "40px" }, textAlign: "center" ,
        color: "#31476E"}}
      >
        Congratulations! Your account has been successfully created.
      </Typography>
      <NavLink
        to={"/login"}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <FormButton
          sx={{ backgroundColor: "#FEE040", color: "inherit" }}
          onClick={handleclick}
        >
          Continue
        </FormButton>
      </NavLink>
    </Box>
  );
};

export default SuccessRegistration;
