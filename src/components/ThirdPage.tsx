import { Paper, Grid, Typography, Button } from "@mui/material";
import React from "react";
import home3 from "../assets/home3.png";
import frame from "../assets/frame.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const theme = createTheme({
  typography: {
    fontFamily: "ABeeZee, Arial",
  },
});

const ThirdPage = () => {
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
            backgroundImage: `url(${home3})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            borderRadius: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid
              container
              xs={6}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                p: 2,
              }}
            >
              <Typography sx={{ fontSize: "12px", textTransform: "uppercase" }}>
                wellness & Spa services
              </Typography>
              <Typography sx={{ fontSize: "40px", textTransform: "uppercase" }}>
                Take wellness & recovery
              </Typography>
              <Typography
                sx={{
                  lineHeight: "10px",
                  fontSize: "40px",
                  textTransform: "uppercase",
                }}
              >
                to a whole new level
              </Typography>
              <Typography sx={{ lineHeight: "60px", fontSize: "12px" }}>
                Full-service premium amenities. Just bring you, and we do the
                rest!
              </Typography>
              <Grid>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    borderRadius: "0px",
                    borderColor: "white",
                    fontSize: "12px",
                    mx: 1,
                    backgroundColor: "white",
                  }}
                >
                  EXPLORE SPA & WELLNESS
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              xs={6}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                p: 4,
              }}
            >
              <Grid
                item
                sx={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "left",
                  flexDirection: "column",
                  p: "0px 0px 0px 20px",
                }}
              >
                <Grid
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  sx={{ p: "10px 0px 10px 0px" }}
                >
                  <Typography
                    sx={{ fontSize: "12px", textTransform: "uppercase" }}
                  >
                    Sauna
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "left",
                  flexDirection: "column",
                  p: "0px 0px 0px 20px",
                }}
              >
                <Grid
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  sx={{ p: "10px 0px 10px 0px" }}
                >
                  <Typography
                    sx={{ fontSize: "12px", textTransform: "uppercase" }}
                  >
                    Somadome Mediations
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                sx={{
                  minHeight: "2%",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "left",
                  flexDirection: "column",
                  p: "0px 0px 0px 20px",
                }}
              >
                <Grid
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  sx={{ p: "10px 0px 10px 0px" }}
                >
                  <Typography
                    sx={{ fontSize: "12px", textTransform: "uppercase" }}
                  >
                    Massage Therapy
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  minHeight: "2%",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "left",
                  flexDirection: "column",
                  p: "0px 0px 0px 20px",
                }}
              >
                <Grid
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  sx={{ p: "10px 0px 10px 0px" }}
                >
                  <Typography
                    sx={{ fontSize: "12px", textTransform: "uppercase" }}
                  >
                    physiotherapy{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  minHeight: "2%",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "left",
                  //   flexDirection: "column",
                  p: "0px 0px 0px 20px",
                }}
              >
                <Grid
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  sx={{ display: "flex" }}
                >
                  <Grid
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    xl={6}
                    sx={{
                      p: "10px 0px 0px 0px",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      Saltwater lap pool
                    </Typography>
                  </Grid>
                  <Grid
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    xl={6}
                    sx={{
                      p: "10px 0px 0px 0px",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px", opacity: 0.5 }}>
                      The Well Exclusive
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  minHeight: "2%",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "left",
                  //   flexDirection: "column",
                  p: "0px 0px 0px 20px",
                  "&:hover": {
                    backgroundImage: `url(${frame})`,
                    color: "black",
                  },
                }}
              >
                <Grid
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  sx={{
                    p: "10px 0px 0px 0px",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "12px", textTransform: "uppercase" }}
                  >
                    Hydrotherapy
                  </Typography>
                </Grid>
                <Grid
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  sx={{
                    p: "10px 0px 0px 0px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography sx={{ fontSize: "12px", opacity: 0.5 }}>
                    The Well Exclusive
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  minHeight: "2%",

                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "left",
                  //   flexDirection: "column",
                  p: "0px 0px 0px 20px",
                  "&:hover": {
                    backgroundImage: `url(${frame})`,
                    color: "black",
                  },
                }}
              >
                <Grid
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  sx={{
                    p: "10px 0px 10px 0px",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "12px", textTransform: "uppercase" }}
                  >
                    + 12 More{" "}
                  </Typography>
                </Grid>
                <Grid
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  sx={{
                    p: "10px 0px 10px 0px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="text"
                    endIcon={<EastOutlinedIcon sx={{ p: "0px 0px 3px 0px" }} />}
                    sx={{
                      color: "white",
                      borderRadius: "0px",
                      fontSize: "12px",
                      p: "0px 0px 0px 0px",
                    }}
                  >
                    see al services
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default ThirdPage;
