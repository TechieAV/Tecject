// components/CustomizedPortfolioSlider.jsx
import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CustomizedPortfolioSlider = ({ portfolios }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", mb: 8 }}>
      <Typography variant="h4" textAlign="center" fontWeight={600} gutterBottom>
        Customized Portfolio Highlights
      </Typography>

     <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  slidesPerView={3} // Show 3 slides
  centeredSlides={true}
  loop={true} // Infinite loop
  spaceBetween={30}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000 }}
  style={{ padding: "30px 0" }}
>

        {portfolios.map((item, index) => (
          <SwiperSlide key={index} style={{ width: 360 }}>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: 400,
                  mx: "auto",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  boxShadow: 6,
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    objectFit: "cover",
                    height: { xs: 200, md: "100%" },
                  }}
                />
                <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, alignSelf: "start" }}
                    onClick={() => navigate("/contact")}
                  >
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CustomizedPortfolioSlider;
