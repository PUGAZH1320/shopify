import { Paper, Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import home2 from "../assets/home2.png";
import homeHover1 from "../assets/homeHover1.png";
import homeHover2 from "../assets/homeHover2.png";
import frame from "../assets/frame.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const theme = createTheme({
  typography: {
    fontFamily: "ABeeZee, Arial",
  },
});

const SecondPage = () => {
  const [hovered, setHovered] = useState(0);

  let backgroundImage;
  if (hovered === 3) {
    backgroundImage = `url(${homeHover2})`;
  } else if (hovered === 2) {
    backgroundImage = `url(${homeHover1})`;
  } else {
    backgroundImage = `url(${home2})`;
  }

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
            backgroundImage: backgroundImage,
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
              <Typography sx={{ fontSize: "12px" }}>
                FITNESS & WORKOUT
              </Typography>
              <Typography sx={{ fontSize: "40px", textTransform: "uppercase" }}>
                over 200 all inclusive
              </Typography>
              <Typography
                sx={{
                  lineHeight: "10px",
                  fontSize: "40px",
                  textTransform: "uppercase",
                }}
              >
                classes weekly
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
                  book classes
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
              }}
            >
              <Grid
                item
                sx={{
                  minHeight: "33.33%",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "left",
                  flexDirection: "column",
                  p: "60px 0px 0px 20px",
                  "&:hover": {
                    backgroundImage: `url(${frame})`,
                    color: "black",
                  },
                }}
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(0)}
              >
                <Grid sx={{ p: "0px 0px 0px 0px" }}>
                  <Typography sx={{ fontSize: "24px" }}>FYOGA</Typography>
                </Grid>
                <Grid sx={{ p: "20px 0px 0px 0px" }}>
                  <Typography sx={{ fontSize: "16px" }}>
                    Find your breath, flow, and turn up the heat!
                  </Typography>
                </Grid>
                <Grid sx={{ p: "30px 0px 0px 0px" }}>
                  <Button
                    variant="text"
                    endIcon={<EastOutlinedIcon sx={{ p: "0px 0px 3px 0px" }} />}
                    sx={{
                      color: hovered === 1 ? "black" : "white",
                      borderRadius: "0px",
                      borderColor: "white",
                      fontSize: "12px",
                      p: "0px 0px 0px 0px",
                    }}
                  >
                    join us
                  </Button>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  minHeight: "33.33%",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "left",
                  flexDirection: "column",
                  p: "60px 0px 0px 20px",
                  "&:hover": {
                    backgroundImage: `url(${frame})`,
                    color: "black",
                  },
                }}
                onMouseEnter={() => setHovered(2)}
                onMouseLeave={() => setHovered(0)}
              >
                <Grid sx={{ p: "0px 0px 0px 0px" }}>
                  <Typography sx={{ fontSize: "24px" }}>HIIT</Typography>
                </Grid>
                <Grid sx={{ p: "20px 0px 0px 0px" }}>
                  <Typography sx={{ fontSize: "16px" }}>
                    HIIT hard while having the time of your life.{" "}
                  </Typography>
                </Grid>
                <Grid sx={{ p: "30px 0px 0px 0px" }}>
                  <Button
                    variant="text"
                    endIcon={<EastOutlinedIcon sx={{ p: "0px 0px 3px 0px" }} />}
                    sx={{
                      color: hovered === 2 ? "black" : "white",
                      borderRadius: "0px",
                      borderColor: "white",
                      fontSize: "12px",
                      p: "0px 0px 0px 0px",
                    }}
                  >
                    join us
                  </Button>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  minHeight: "33.33%",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "left",
                  flexDirection: "column",
                  p: "60px 0px 0px 20px",
                  "&:hover": {
                    backgroundImage: `url(${frame})`,
                    color: "black",
                  },
                }}
                onMouseEnter={() => setHovered(3)}
                onMouseLeave={() => setHovered(0)}
              >
                <Grid sx={{ p: "0px 0px 0px 0px" }}>
                  <Typography sx={{ fontSize: "24px" }}>RIDE</Typography>
                </Grid>
                <Grid sx={{ p: "20px 0px 0px 0px" }}>
                  <Typography sx={{ fontSize: "16px" }}>
                    Race past your goals and get lost in the beat.{" "}
                  </Typography>
                </Grid>
                <Grid sx={{ p: "30px 0px 0px 0px" }}>
                  <Button
                    variant="text"
                    endIcon={<EastOutlinedIcon sx={{ p: "0px 0px 3px 0px" }} />}
                    sx={{
                      color: hovered === 3 ? "black" : "white",
                      borderRadius: "0px",
                      fontSize: "12px",
                      p: "0px 0px 0px 0px",
                    }}
                  >
                    join us
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

export default SecondPage;
