import React from "react";
import { Button, Typography, Box, Grid, Container, Stack, Card, CardContent } from "@mui/material";
import { Business, School, Person, CheckCircleOutline } from "@mui/icons-material";
import image from '../../assets/Home/MainPage.jpg';
import "../MainPage/mainPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import FAQSection from "../FAQSection/FAQSection";
import  Session  from "../MainPage/Session.js";
import { motion } from "framer-motion";
import HomePageSection from "./HomePageSection.js";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInSlow = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, // slower (default is ~0.5–0.8)
      ease: "easeOut",
    },
  },
};


const MainPage = () => {
    const navigate = useNavigate();
  return (
    <Box fontFamily="sans-serif">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: 14,
          px: 2,
          textAlign: "center"
        }}
      >
        <Container className="fade-in-up">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome to Tecject – Your Trusted Enterprise Tech Partner
          </Typography>
          <Typography variant="h6" paragraph>
            We specialize in building enterprise software, final year major projects, mini-projects, and personal portfolios for professionals.
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={2} className="zoom-in">
<Button variant="contained" color="primary" onClick={() => navigate("/login")}>
  Start Your Project
</Button>
            <Button variant="outlined" color="inherit">View Our Work</Button>
          </Stack>
        </Container>
      </Box>
      </motion.div>



      {/* About Section */}
<Session/>




{/* Cards Section */}
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }} // triggers when 30% is visible
>
<Box py={10} px={2} bgcolor="#f4f6f8">
  <Container>
    <Typography
      variant="h4"
      textAlign="center"
      fontWeight="bold"
      gutterBottom
      className="fade-in-up"
    >
      Tailored Solutions For Every Need
    </Typography>

    <Grid container spacing={4} justifyContent="space-between" alignItems="stretch" mt={4}>
      
      {/* Enterprises Card */}
      <Grid item xs={12} md={4} display="flex" justifyContent="flex-start">
        <Link to="/enterprises" style={{ textDecoration: 'none' }}>
          <Card elevation={6} sx={{ width: "100%", maxWidth: 300, cursor: 'pointer',
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: 10,
    }, }}>
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Business fontSize="large" color="primary" />
              <Box>
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                  Enterprises
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Scalable, reliable digital products tailored to your industry.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </Grid>

      {/* Students Card */}
      <Grid item xs={12} md={4} display="flex" justifyContent="center">
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <Card elevation={6} sx={{ width: "100%", maxWidth: 300, cursor: 'pointer',
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: 10,
    }, }}>
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <School fontSize="large" color="primary" />
              <Box>
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                  Students
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Final year and mini-projects that deliver real-world impact.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </Grid>

      {/* Professionals Card */}
      <Grid item xs={12} md={4} display="flex" justifyContent="flex-end">
        <Link to="/professionals" style={{ textDecoration: 'none' }}>
          <Card elevation={6} sx={{ width: "100%", maxWidth: 300, cursor: 'pointer',
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: 10,
    }, }}>
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Person fontSize="large" color="primary" />
              <Box>
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                  Professionals
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Showcase your skills with a powerful portfolio site.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </Grid>
  </Container>
</Box>
</motion.div>
 
 <motion.div
  variants={fadeInSlow}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }} // triggers when 30% is visible
>
{/* Commitment Section */}
<Box py={10} px={2} bgcolor="#000" color="#fff">
  <Container>
    <Typography
      variant="h4"
      fontWeight="bold"
      textAlign="center"
      gutterBottom
      sx={{ fontSize: "2.2rem" }}
      className="fade-in-up"
    >
      Our Commitment as a Startup IT Solutions & Services Partner
    </Typography>

    <Grid container spacing={4} alignItems="center" mt={4}>
      {/* Left Points */}
      <Grid item xs={12} md={6}>
        <Grid container spacing={2} columnGap={13}>
          <Grid item xs={6}>
            <Stack spacing={2}>
              {[
                "Transparent Communication",
                "Agile Development",
                "User-Centric Design",
                "Scalability & Flexibility",
              ].map((text, index) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  key={index}
                  className="fade-in-up"
                >
                  <CheckCircleOutline color="success" />
                  <Typography sx={{ fontSize: "1.1rem" }}>{text}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} columnGap={13}>
            <Stack spacing={2}>
              {[
                "On-Time Delivery",
                "Transparent Execution",
                "Market Research & Analysis",
                "Feedback Integration",
              ].map((text, index) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  key={index}
                  className="fade-in-up"
                >
                  <CheckCircleOutline color="success" />
                  <Typography sx={{ fontSize: "1.1rem" }}>{text}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      {/* Right Image */}
      <Grid item xs={12} md={6} sx={{ pl: { md: 6, xs: 0 }, mt: { xs: 4, md: 0 } }}>

        <Box
          component="img"
          src={require('../../assets/Home/TecjectProcess.png')}
          alt="Tecject Process"
          sx={{
            width: "100%",
            maxWidth: 350,
            maxHeight: 300,
            borderRadius: 2,
            boxShadow: 4,
            animation: "zoomIn 1s ease",
          }}
        />
      </Grid>
    </Grid>
  </Container>
</Box>
</motion.div>
<HomePageSection/>

<FAQSection/>
    </Box>
  );
};

export default MainPage;
