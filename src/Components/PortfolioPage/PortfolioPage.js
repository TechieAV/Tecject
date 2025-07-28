import React from "react";
import { Box, Typography, Grid, Container, Card, CardContent, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomizedPortfolioSlider from "./CustomizedPortfolioSlider";
import heroImage from "../../assets/Portfolio/BgImage.png";
import { useRef } from "react";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const samplePortfolios = [
  {
    title: "Full Stack Developer Portfolio",
    description: "Modern React + Node.js portfolio with blogging and GitHub integration.",
    image: require("../../assets/Portfolio/portfolio1.png"),
  },
  {
    title: "Data Scientist Portfolio",
    description: "Beautiful layout with project visuals, Jupyter links, and Tableau dashboards.",
    image: require("../../assets/Portfolio/portfolio2.webp"),
  },
  {
    title: "UI/UX Designer Portfolio",
    description: "Figma showcase with animations, client testimonials, and Dribbble sync.",
    image: require("../../assets/Portfolio/portfolio3.png"),
  },
  {
    title: "Chartered Accountant Portfolio",
    description: "Professional layout highlighting certifications, client testimonials, and services offered.",
    image: require("../../assets/Portfolio/Charted Accountants.jpg"),
  },
  {
    title: "Designer Portfolio",
    description: "Creative and colorful UI to showcase design projects and client feedback.",
    image: require("../../assets/Portfolio/Designer.webp"),
  },
  {
    title: "Manager Portfolio",
    description: "Elegant layout focusing on leadership achievements, project stats, and teams led.",
    image: require("../../assets/Portfolio/Manager.webp"),
  },
  {
    title: "Freelancer Portfolio",
    description: "Minimal design with project-based pricing, reviews, and service categories.",
    image: require("../../assets/Portfolio/Freelancer.webp"),
  },
  {
    title: "Social Media Manager Portfolio",
    description: "Dynamic site featuring campaign results, engagement metrics, and client brands.",
    image: require("../../assets/Portfolio/Social Media Manager.webp"),
  },
  {
  title: "Marketing Specialist Portfolio",
  description: "Interactive layout with campaign stats, email funnel designs, and ROI graphs.",
  image: require("../../assets/Portfolio/Customized portfolio.webp"),
},
];

const ProfessionalsPage = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);


  return (
    <Box sx={{ bgcolor: "#f5f7fa", fontFamily: "sans-serif" }}>
      {/* Hero */}
      <Box
  sx={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    py: 14,
    px: 2,
    textAlign: "center"
  }}
>
  <Container>
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Build Your Personal Brand with a Stunning Portfolio
      </Typography>
      <Typography variant="h6" paragraph>
        Let us design a digital presence that speaks your skills.
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Button variant="contained" color="primary" onClick={() => navigate("/contact")}>
          Get Started
        </Button>
        <Button
  variant="outlined"
  color="inherit"
  onClick={() => {
    sliderRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }}
>
  View Samples
</Button>

      </Stack>
    </motion.div>
  </Container>
</Box>



      {/* Portfolio Samples */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" fontWeight={600} gutterBottom>
          Recent Portfolio Designs
        </Typography>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={12} mt={3}>
            {samplePortfolios.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <motion.div
                  variants={fadeIn}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      height: "100%",
                      maxWidth: 320,
                      minHeight: 360,
                      margin: "0 auto",
                      boxShadow: 5,
                      borderRadius: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: 180,
                        objectFit: "cover",
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Stack alignItems="center" mt={6}>
          <Button variant="outlined" color="primary" onClick={() => navigate("/portfolio-gallery")}>
            View Full Gallery
          </Button>
        </Stack>
      </Container>

      {/* Promotion content */}
<Container sx={{ mt: -10, mb: 8, position: "relative", zIndex: 2 }}>
  <motion.div
    variants={fadeIn}
    initial="hidden"
    animate="visible"
  >
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        mt: 11,
        p: 4,
        borderRadius: "24px",
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        textAlign: "center",
        backgroundImage: "linear-gradient(145deg, #0f2027, #08303cff, #56b0d7ff)",
        color: "#fff",
        transform: "rotateX(0deg)",
        transition: "transform 0.4s ease",
        "&:hover": {
          transform: "scale(1.02) rotateX(2deg)",
        },
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: "1.4rem", md: "2rem" } }}>
        Want a Portfolio That Reflects *Your* Style?
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "#ddd" }}>
        We craft premium, tailor-made portfolio websites — you choose the theme, colors, and tone. <br />
        Boost your professional identity with a design that speaks *you*.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#ffffff",
          color: "#0f2027",
          fontWeight: "bold",
          px: 5,
          py: 1.5,
          borderRadius: 50,
          boxShadow: "0 4px 15px rgba(255,255,255,0.3)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#f1f1f1",
            transform: "scale(1.05)",
          },
        }}
        onClick={() => navigate("/contact")}
      >
        Design My Portfolio
      </Button>
    </Box>
  </motion.div>
</Container>

{/* Slide that custom sample */}
<Box ref={sliderRef}>
  <CustomizedPortfolioSlider portfolios={samplePortfolios.slice(0, 6)} />
</Box>



      {/* Call to Action */}
      <Box sx={{ bgcolor: "#000", color: "white", py: 8, textAlign: "center" }}>
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Ready to Launch Your Personal Portfolio Website?
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => navigate("/contact")}>
            Let’s Talk
          </Button>
          <p>Contact : +91 9345202170</p>
        </motion.div>
      </Box>
      <Box height={50}></Box>
      
    </Box>
  );
};

export default ProfessionalsPage;
