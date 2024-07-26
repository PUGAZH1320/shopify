import { Grid, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "ABeeZee, Arial",
  },
});

const FifthPage = () => {
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
        sx={{ height: "100vh", backgroundColor: "black" }}
      >
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ p: "40px 0px 40px 20px" }}
        >
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <Typography sx={{ color: "#C79D5B", p: "10px 0px 10px 0px" }}>
              FITNESS
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Spin
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Yoga
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              HITT
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              All Classes{" "}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <Typography sx={{ color: "#C79D5B", p: "10px 0px 10px 0px" }}>
              SPA
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Restore & Recover{" "}
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Infrared Sauna
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Somadome Meditation{" "}
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              All Spa & Wellness Services{" "}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <Typography sx={{ color: "#C79D5B", p: "10px 0px 10px 0px" }}>
              TONIC HOUSE
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Workspace
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Bar & Cafe{" "}
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Space Rental
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Upcoming Events{" "}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <Typography sx={{ color: "#C79D5B", p: "10px 0px 10px 0px" }}>
              ABOUT S&T{" "}
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Our Story{" "}
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Locations
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              FAQ
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ p: "40px 0px 40px 20px" }}
        >
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            sx={{
              borderTop: "1px solid rgba(105, 105, 105, 0.5)",
              borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
            }}
          >
            <Typography sx={{ color: "#C79D5B", p: "10px 0px 10px 0px" }}>
              FITNESS
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Spin
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Yoga
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              HITT
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              All Classes{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            sx={{
              borderTop: "1px solid rgba(105, 105, 105, 0.5)",
              borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
              borderRight: "1px solid rgba(105, 105, 105, 0.5)",
            }}
          >
            <Typography sx={{ color: "#C79D5B", p: "10px 0px 10px 0px" }}>
              SPA
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Restore & Recover{" "}
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Infrared Sauna
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Somadome Meditation{" "}
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              All Spa & Wellness Services{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            sx={{
              borderTop: "1px solid rgba(105, 105, 105, 0.5)",
              borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
            }}
          >
            <Typography sx={{ color: "#C79D5B", p: "10px 0px 10px 0px" }}>
              TONIC HOUSE
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Workspace
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Bar & Cafe{" "}
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Space Rental
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Upcoming Events{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            sx={{
              borderTop: "1px solid rgba(105, 105, 105, 0.5)",
              borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
              borderLeft: "1px solid rgba(105, 105, 105, 0.5)",
            }}
          >
            <Typography sx={{ color: "#C79D5B", p: "10px 0px 10px 0px" }}>
              ABOUT S&T{" "}
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Our Story{" "}
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              Locations
            </Typography>
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              FAQ
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default FifthPage;
