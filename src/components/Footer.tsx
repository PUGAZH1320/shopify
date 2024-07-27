import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import "../App.css";

const theme = createTheme({
  typography: {
    fontFamily: "ABeeZee, Arial",
  },
});

const Footer = () => {
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
        sx={{ backgroundColor: "black" }}
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
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <img
              src={facebook}
              alt="phonelogo"
              style={{
                padding: "0px 20px 0px 0px",
              }}
            />
            <img
              src={instagram}
              alt="phonelogo"
              style={{
                padding: "0px 20px 0px 0px",
              }}
            />
            <img
              src={youtube}
              alt="phonelogo"
              style={{
                padding: "0px 20px 0px 0px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "flex-end",
                xl: "flex-end",
              },
              color: "white",
              p: "10px 0px 0px 0px",
            }}
          >
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              sx={{
                display:'flex',
                justifyContent: {
                  xs: "space-between",
                  sm: "space-between",
                  md: "space-between",
                  lg: "flex-end",
                  xl: "flex-end",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "12px",
                    xl: "12px",
                  },
                  p: {
                    xs: "5px 0px 0px 0px",
                    sm: "5px 0px 0px 0px",
                    md: "5px 0px 0px 0px",
                    lg: "5px 10px 0px 20px",
                    xl: "5px 10px 0px 20px",
                  },
                }}
              >
                © Geosist {new Date().getFullYear()}
              </Typography>
            </Grid>

            <Grid item>
              {" "}
              <Typography
                sx={{
                  p: {
                    xs: "5px 10px 0px 0px",
                    sm: "5px 10px 0px 0px",
                    md: "5px 10px 0px 0px",
                    lg: "5px 10px 0px 20px",
                    xl: "5px 10px 0px 20px",
                  },
                  fontSize: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "12px",
                    xl: "12px",
                  },
                }}
              >
                |
              </Typography>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <Link
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "12px",
                    xl: "12px",
                  },

                  color: "white",
                  p: {
                    xs: "0px 0px 0px 0px",
                    sm: "0px 0px 0px 0px",
                    md: "0px 0px 0px 0px",
                    lg: "0px 0px 0px 0px",
                    xl: "0px 0px 0px 0px",
                  },
                  fontFamily: "Sailec, sans-serif",
                }}
              >
                Terms and Conditions
              </Link>
            </Grid>

            <Grid item xs={4} sm={4} md={4}>
              <Link
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "12px",
                    xl: "12px",
                  },
                  color: "white",
                  p: {
                    xs: "0px 0px 0px 0px",
                    sm: "0px 0px 0px 0px",
                    md: "0px 0px 0px 0px",
                    lg: "20px 0px 20px 0px",
                    xl: "20px 0px 20px 0px",
                  },
                  fontFamily: "Sailec, sans-serif",
                }}
              >
                Privacy Policy
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Footer;
