import { Box, Container, Typography, Stack } from '@mui/material';
import { Business, School, Person } from '@mui/icons-material';
import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Section = () => {
  return (
    <Box py={10} px={2} bgcolor="white" color="black">
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="nowrap"
          columnGap={13}
        >
          {/* Left Column */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ flex: '1 1 52%', minWidth: '500px', marginBottom: '2rem' }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Empowering Enterprises, Students, and Professionals
            </Typography>
            <Typography variant="h6" gutterBottom>
              10+ years in delivering innovative and practical tech solutions
            </Typography>
            <Typography color="text.secondary">
              At <strong>Tectject</strong>, we work with enterprise clients to modernize their digital infrastructure,
              assist students with real-world final-year projects, and help professionals stand out with stunning,
              responsive portfolios.
            </Typography>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ flex: '1 1 48%', minWidth: '300px' }}
          >
            <Typography variant="h4" fontWeight="medium" gutterBottom>
              Our Core Services
            </Typography>

            <Stack spacing={3} mt={4}>
              {[
                { icon: <Business sx={{ color: 'primary.main' }} />, text: 'Enterprise Software Development' },
                { icon: <School sx={{ color: 'primary.main' }} />, text: 'Major & Minor Final Year Projects' },
                { icon: <Person sx={{ color: 'primary.main' }} />, text: 'Professional Portfolio Websites' },
                { icon: <Business sx={{ color: 'primary.main' }} />, text: 'Custom APIs & Backend Systems' },
                { icon: <Person sx={{ color: 'primary.main' }} />, text: 'UI/UX Design & Web Development' },
              ].map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  {item.icon}
                  <Typography fontSize="1rem">{item.text}</Typography>
                </Stack>
              ))}
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Section;
