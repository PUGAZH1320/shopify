import { Grid, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import home4 from "../assets/home4.png";
import home5 from "../assets/home5.png";
import CheckIcon from "@mui/icons-material/Check";

const theme = createTheme({
  typography: {
    fontFamily: "ABeeZee, Arial",
  },
});

const FourthPage = () => {
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
        sx={{ height: "150vh" }}
      >
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ p: "170px 0px 0px 20px" }}
        >
          <Typography>GEOSIST Locations</Typography>
        </Grid>
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ p: "0px 0px 70px 0px" }}
        >
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
              <img
                src={home4}
                alt="melo logo"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid
                item
                xs={8}
                sm={8}
                md={8}
                lg={8}
                xl={8}
                sx={{
                  borderRight: "1px solid rgba(105, 105, 105, 0.5)",
                  borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
                  p: "20px 0px 0px 20px",
                }}
              >
                <Typography sx={{ fontSize: "32px" }}>
                  YONGE / SHUTER
                </Typography>
                <Typography sx={{ fontSize: "16px", p: "10px 0px 0px 0px" }}>
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "black",
                    opacity: 0.4,
                    p: "10px 0px 0px 0px",
                  }}
                >
                  225 Yonge Street, Toronto ON M5B 1N8
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "black",
                    opacity: 0.4,
                    p: "0px 0px  40px 0px",
                  }}
                >
                  647-372-0225{" "}
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  borderRight: "1px solid rgba(105, 105, 105, 0.5)",
                  borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: " #C79D5B",
                    p: "20px 0px 0px 20px",
                  }}
                >
                  Exclusive services:
                </Typography>
                <Typography sx={{ fontSize: "14px", p: "20px 0px 0px 20px" }}>
                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    sx={{ display: "flex" }}
                  >
                    <Grid style={{ padding: "0px 0px 0px 0px" }}>
                      <CheckIcon sx={{ color: " #C79D5B", fontSize: "20px" }} />
                    </Grid>
                    <Grid>Service 1</Grid>
                  </Grid>
                </Typography>
                <Typography sx={{ fontSize: "14px", p: "0px 0px 0px 20px" }}>
                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    sx={{ display: "flex" }}
                  >
                    <Grid style={{ padding: "0px 0px 0px 0px" }}>
                      <CheckIcon sx={{ color: " #C79D5B", fontSize: "20px" }} />
                    </Grid>
                    <Grid>Service 2</Grid>
                  </Grid>
                </Typography>
                <Typography sx={{ fontSize: "14px", p: "0px 0px 0px 20px" }}>
                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    sx={{ display: "flex" }}
                  >
                    <Grid style={{ padding: "0px 0px 0px 0px" }}>
                      <CheckIcon sx={{ color: " #C79D5B", fontSize: "20px" }} />
                    </Grid>
                    <Grid>Service 3</Grid>
                  </Grid>
                </Typography>
                <Typography sx={{ fontSize: "14px", p: "0px 0px 0px 20px" }}>
                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    sx={{ display: "flex" }}
                  >
                    <Grid style={{ padding: "0px 0px 0px 0px" }}>
                      <CheckIcon sx={{ color: " #C79D5B", fontSize: "20px" }} />
                    </Grid>
                    <Grid>Service 4</Grid>
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
              <img
                src={home5}
                alt="melo logo"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid
                item
                xs={8}
                sm={8}
                md={8}
                lg={8}
                xl={8}
                sx={{
                  borderRight: "1px solid rgba(105, 105, 105, 0.5)",
                  borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
                  p: "20px 0px 0px 20px",
                }}
              >
                <Typography sx={{ fontSize: "32px" }}>THE WALL</Typography>
                <Typography sx={{ fontSize: "16px", p: "10px 0px 0px 0px" }}>
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "black",
                    opacity: 0.4,
                    p: "10px 0px 0px 0px",
                  }}
                >
                  486 Front St W, Toronto, ON M5V 0V2
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "black",
                    opacity: 0.4,
                    p: "0px 0px  40px 0px",
                  }}
                >
                  647-372-0225{" "}
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  borderRight: "1px solid rgba(105, 105, 105, 0.5)",
                  borderBottom: "1px solid rgba(105, 105, 105, 0.5)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: " #C79D5B",
                    p: "20px 0px 0px 20px",
                  }}
                >
                  Exclusive services:
                </Typography>
                <Typography sx={{ fontSize: "14px", p: "20px 0px 0px 20px" }}>
                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    sx={{ display: "flex" }}
                  >
                    <Grid style={{ padding: "0px 0px 0px 0px" }}>
                      <CheckIcon sx={{ color: " #C79D5B", fontSize: "20px" }} />
                    </Grid>
                    <Grid>Service 1</Grid>
                  </Grid>
                </Typography>
                <Typography sx={{ fontSize: "14px", p: "0px 0px 0px 20px" }}>
                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    sx={{ display: "flex" }}
                  >
                    <Grid style={{ padding: "0px 0px 0px 0px" }}>
                      <CheckIcon sx={{ color: " #C79D5B", fontSize: "20px" }} />
                    </Grid>
                    <Grid>Service 2</Grid>
                  </Grid>
                </Typography>
                <Typography sx={{ fontSize: "14px", p: "0px 0px 0px 20px" }}>
                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    sx={{ display: "flex" }}
                  >
                    <Grid style={{ padding: "0px 0px 0px 0px" }}>
                      <CheckIcon sx={{ color: " #C79D5B", fontSize: "20px" }} />
                    </Grid>
                    <Grid>Service 3</Grid>
                  </Grid>
                </Typography>
                <Typography sx={{ fontSize: "14px", p: "0px 0px 0px 20px" }}>
                  <Grid
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    sx={{ display: "flex" }}
                  >
                    <Grid style={{ padding: "0px 0px 0px 0px" }}>
                      <CheckIcon sx={{ color: " #C79D5B", fontSize: "20px" }} />
                    </Grid>
                    <Grid>Service 4</Grid>
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default FourthPage;
