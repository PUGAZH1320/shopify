import { Button, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import phone from "../assets/phone.png"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import "../App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


const theme = createTheme({
  typography: {
    fontFamily: "ABeeZee, Arial",
  },
});


const CustomTextField = styled(TextField)({
  "& label": {
    color: "white",
    fontSize: "12px",
    opacity: 0.4,
    fontFamily: "Sailec, sans-serif",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "white",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiInput-input": {
    color: "white",
  },
});


const FifthPage = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
    const [showFitness, setShowFitness] =  useState((isMobile || isTablet) ?false : true)
    const [showSpa, setShowSpa] =   useState((isMobile || isTablet) ?false : true)
    const [showTonic, setShowTonic] =   useState((isMobile || isTablet) ?false : true)
    const [showAbout, setShowAbout] =   useState((isMobile || isTablet) ?false : true)
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
            lg={3}
            xl={3}
            sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)" }}
          >
            <Typography
              sx={{
                color: "#C79D5B",
                p: "10px 10px 10px 0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              FITNESS
              {showFitness && (isMobile || isTablet) && (
                <>
                  {" "}
                  <KeyboardArrowUpIcon
                    onClick={() => setShowFitness(!showFitness)}
                  />
                </>
              )}
              {!showFitness && (isMobile || isTablet) && (
                <>
                  <KeyboardArrowDownIcon
                    onClick={() => setShowFitness(!showFitness)}
                  />
                </>
              )}
            </Typography>
            {showFitness && (
              <>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  Spin
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  Yoga
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  HITT
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  All Classes{" "}
                </Typography>
              </>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={3}
            xl={3}
            sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)" }}
          >
            <Typography
              sx={{
                color: "#C79D5B",
                p: "10px 10px 10px 0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              SPA
              {showSpa && (isMobile || isTablet) && (
                <>
                  {" "}
                  <KeyboardArrowUpIcon onClick={() => setShowSpa(!showSpa)} />
                </>
              )}
              {!showSpa && (isMobile || isTablet) && (
                <>
                  <KeyboardArrowDownIcon onClick={() => setShowSpa(!showSpa)} />
                </>
              )}
            </Typography>
            {showSpa && (
              <>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  Restore & Recover{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  Infrared Sauna
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  Somadome Meditation{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  All Spa & Wellness Services{" "}
                </Typography>
              </>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={3}
            xl={3}
            sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)" }}
          >
            <Typography
              sx={{
                color: "#C79D5B",
                p: "10px 10px 10px 0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              TONIC HOUSE
              {showTonic && (isMobile || isTablet) && (
                <>
                  <KeyboardArrowUpIcon
                    onClick={() => setShowTonic(!showTonic)}
                  />
                </>
              )}
              {!showTonic && (isMobile || isTablet) && (
                <>
                  <KeyboardArrowDownIcon
                    onClick={() => setShowTonic(!showTonic)}
                  />
                </>
              )}
            </Typography>
            {showTonic && (
              <>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  Workspace
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  Bar & Cafe{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  Space Rental
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  Upcoming Events{" "}
                </Typography>
              </>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={3}
            xl={3}
            sx={{ borderBottom: "1px solid rgba(105, 105, 105, 0.5)" }}
          >
            <Typography
              sx={{
                color: "#C79D5B",
                p: "10px 10px 10px 0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              ABOUT S&T
              {showAbout && (isMobile || isTablet) && (
                <>
                  <KeyboardArrowUpIcon
                    onClick={() => setShowAbout(!showAbout)}
                  />
                </>
              )}
              {!showAbout && (isMobile || isTablet) && (
                <>
                  <KeyboardArrowDownIcon
                    onClick={() => setShowAbout(!showAbout)}
                  />
                </>
              )}
            </Typography>
            {showAbout && (
              <>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  Our Story{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  Locations
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    p: "10px 0px 10px 0px",
                    fontFamily: "Sailec, sans-serif",
                  }}
                >
                  FAQ
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          xs
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ p: "40px 0px 0px 20px" }}
        >
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={3}
            xl={3}
            sx={{
              borderTop: "1px solid rgba(105, 105, 105, 0.5)",
              borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
            }}
          >
            <Typography sx={{ color: "white", p: "10px 0px 10px 0px" }}>
              YONGE / SHUTER
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#C79D5B",
                p: "10px 0px 0px 0px",
                fontFamily: "Sailec, sans-serif",
              }}
            >
              225 Yonge Street, Toronto ON M5B 1N8
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#C79D5B",
                p: "0px 0px 0px 0px",
                fontFamily: "Sailec, sans-serif",
              }}
            >
              647-372-0225{" "}
            </Typography>

            <Typography sx={{ color: "white", p: "40px 0px 10px 0px" }}>
              THE WELL
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#C79D5B",
                p: "10px 0px 0px 0px",
                fontFamily: "Sailec, sans-serif",
              }}
            >
              486 Front St W, Toronto, ON M5V 0V2{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#C79D5B",
                p: "0px 0px 0px 0px",
                fontFamily: "Sailec, sans-serif",
              }}
            >
              647-372-0225{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={3}
            xl={3}
            sx={{
              borderTop: "1px solid rgba(105, 105, 105, 0.5)",
              borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
              borderRight: "1px solid rgba(105, 105, 105, 0.5)",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", color: "white", p: "10px 0px 0px 0px" }}
            >
              OPEN:
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                p: "0px 0px 0px 0px",
                opacity: 0.6,
                fontFamily: "Sailec, sans-serif",
              }}
            >
              {isMobile || isTablet
                ? "Mo – Th: 5:45 AM – 10 PM"
                : "Monday – Thursday: 5:45 AM – 10 PM"}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                p: "0px 0px 0px 0px",
                opacity: 0.6,
                fontFamily: "Sailec, sans-serif",
              }}
            >
              Friday: 5:45 AM – 9 PM{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                p: "0px 0px 0px 0px",
                opacity: 0.6,
                fontFamily: "Sailec, sans-serif",
              }}
            >
              Saturday: 7 AM – 7:30 PM{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                p: "0px 0px 0px 0px",
                opacity: 0.6,
                fontFamily: "Sailec, sans-serif",
              }}
            >
              Sunday: 7:45 AM – 9 PM{" "}
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                p: "45px 0px 0px 0px",
                fontFamily: "Sailec, sans-serif",
              }}
            >
              OPEN:
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                p: "0px 0px 0px 0px",
                opacity: 0.6,
                fontFamily: "Sailec, sans-serif",
              }}
            >
              Monday – Thursday: 5:45 AM – 10 PM
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                p: "0px 0px 0px 0px",
                opacity: 0.6,
                fontFamily: "Sailec, sans-serif",
              }}
            >
              Friday: 5:45 AM – 9 PM{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                p: "0px 0px 0px 0px",
                opacity: 0.6,
                fontFamily: "Sailec, sans-serif",
              }}
            >
              Saturday: 7 AM – 7:30 PM{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                p: "0px 0px 25px 0px",
                opacity: 0.6,
                fontFamily: "Sailec, sans-serif",
              }}
            >
              Sunday: 7:45 AM – 9 PM{" "}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={3}
            xl={3}
            sx={{
              borderTop: "1px solid rgba(105, 105, 105, 0.5)",
              borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
              // display:'flex',
              justifyContent: "center",
              alignItems: "center",
              p: "0px 20px 0px 20px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                textTransform: "uppercase",
                p: "10px 0px 10px 0px",
                fontSize: "24px",
              }}
            >
              Let’s get connected
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "white",
                p: "0px 0px 0px 0px",
                opacity: 0.6,
                fontFamily: "Sailec, sans-serif",
              }}
            >
              Receive news, special offers and other emails from Sweat and
              Tonic. Unsubscribe at any time. View our Terms and Privacy Policy.
            </Typography>
            <CustomTextField
              fullWidth
              id="standard-basic"
              label="Name"
              variant="standard"
              sx={{ p: "10px 0px 10px 0px" }}
            />
            <CustomTextField
              fullWidth
              id="standard-basic"
              label="Email"
              variant="standard"
              sx={{ p: "10px 0px 10px 0px" }}
            />
            <Grid sx={{ p: "0px 20px 0px 0px" }}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  color: "white",
                  borderRadius: "0px",
                  borderColor: "white",
                  fontSize: "12px",
                  mx: 1,
                }}
              >
                subscribe
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={3}
            xl={3}
            sx={{
              borderTop: "1px solid rgba(105, 105, 105, 0.5)",
              borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
              borderLeft: "1px solid rgba(105, 105, 105, 0.5)",
              backgroundColor: "#0D0D0D",
              p: "5px 0px 0px 10px",
            }}
          >
            <Typography
              sx={{
                lineHeight: "24px",
                fontSize: "24px",
                color: "white",
                p: "10px 0px 0px 0px",
              }}
            >
              YOUR FAVOURITE SWEAT AND TONIC CLASSES ANYTIME, ANYWHERE
            </Typography>
            {/* <img
              src={phone}
              alt="phonelogo"
              style={{
                display:'flex',
                justifyContent:'flex-end',
                alignItems:'right',
                padding:'10px 0px 0px 150px'
              }}
            /> */}
            <div
              style={{ position: "relative", padding: "10px 0px 0px 150px" }}
            >
              <img
                src={phone}
                alt="phonelogo"
                style={{
                  display: "block",
                }}
              />
              <Button
                variant="contained"
                endIcon={<EastOutlinedIcon sx={{ p: "0px 0px 3px 0px" }} />}
                color="primary"
                sx={{
                  position: "absolute",
                  top: "70%",
                  right: "1%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "white",
                  border: "0px",
                  color: "black",
                  width: "200px",
                }}
              >
                get 7 days for free
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default FifthPage;
