import { Paper, Button, Grid, Typography } from "@mui/material";
import React from "react";
import home1 from "../assets/home1.png";
import ham from "../assets/ham.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const theme = createTheme({
  typography: {
    fontFamily: "ABeeZee, Arial",
  },
});

const MainPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{ height: "100vh" }}
      >
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${home1})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            borderRadius: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Grid container sx={{ color: "white", mb: 2 }}>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <img src={ham} alt="ham" style={{ height: "20px" }} />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                variant="text"
                startIcon={
                  <PermIdentityOutlinedIcon sx={{ p: "0px 0px 3px 0px" }} />
                }
                sx={{
                  color: "white",
                  borderRadius: "0px",
                  borderColor: "white",
                  fontSize: "12px",
                  p: "0px 0px 0px 60px",
                }}
              >
                log in
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderRadius: "0px",
                  borderColor: "white",
                  fontSize: "12px",
                  mx: 1,
                }}
              >
                book classes
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  borderRadius: "0px",
                  borderColor: "white",
                  backgroundColor: "white",
                  fontSize: "12px",
                }}
              >
                buy classes
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ color: "white", mb: 2 }}
          >
            <Typography sx={{ lineHeight: "54px", fontSize: "40px" }}>
              S W E A T.
            </Typography>
            <Typography sx={{ lineHeight: "10px", fontSize: "40px" }}>
              R E C O V E R.
            </Typography>
            <Typography sx={{ lineHeight: "54px", fontSize: "40px" }}>
              C O N N E C T.
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Button
              variant="outlined"
              sx={{ color: "white", borderRadius: "0px", borderColor: "white" }}
            >
              join us
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default MainPage;
