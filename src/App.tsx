import { useEffect, useState } from "react";
import { Avatar, Box, Container, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import RoomIcon from "@mui/icons-material/RoomOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import getJobs, { mockedJobs } from "./api";
import { Job } from "./types/Job";
import JobItem, { JobItemSkeleton } from "./components/JobItem";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const response = await getJobs();
      setJobs(response);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 5, sm: 6, md: 8, lg: 9 },
        backgroundColor: "white",
        boxShadow,
      }}
    >
      <Grid
        container
        rowSpacing={{ xs: 5 }}
        columnSpacing={{ xs: 3, sm: 5, md: 7 }}
        sx={{ px: { xs: 0, sm: 1, md: 2, lg: 4 } }}
      >
        <Grid
          size={{ xs: 4 }}
          sx={{ justifyItems: "center", px: { xs: 2, sm: 3, md: 8 } }}
        >
          <Avatar
            alt="Martín Mármol"
            src="martin-marmol_avatar.jpg"
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>

        <Grid size={{ xs: 8 }} sx={{ textAlign: "left", alignSelf: "center" }}>
          <Typography
            variant="h3"
            fontWeight={400}
            color="primary"
            fontSize={{ xs: 36, sm: 46, md: 50, lg: 60 }}
          >
            Martín Mármol
          </Typography>

          <Typography variant="subtitle2" fontWeight={400} sx={{ ml: 0.5 }}>
            Frontend Developer
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography
            letterSpacing={1}
            variant="subtitle1"
            fontWeight={500}
            fontSize={18}
            gutterBottom
          >
            SUMMARY
          </Typography>

          <Typography variant="body2" mb={{ xs: 3, md: 4 }}>
            Created meaningful user experiences for products across various
            industries. Using research, new technologies and user experience
            design, I enjoy building brands and products into apps. My deepest
            expertise is in front end web development, currently delving into
            fullstack skills.
          </Typography>

          <Typography
            letterSpacing={1}
            variant="subtitle1"
            fontWeight={500}
            fontSize={18}
            gutterBottom
          >
            EDUCATION
          </Typography>

          <Typography variant="subtitle1" fontWeight={500}>
            Diseñador de Imagen y Sonido
          </Typography>
          <Typography variant="body2">
            Universidad de Palermo (college)
          </Typography>
          <Typography fontSize={12}>2005 - 2010</Typography>

          <Typography
            letterSpacing={0.5}
            variant="subtitle2"
            fontWeight={500}
            mt={{ xs: 3, md: 4 }}
            mb={1}
            gutterBottom
          >
            CONTACT INFO
          </Typography>

          <Stack spacing={1}>
            <Box>
              <RoomIcon
                color="secondary"
                sx={{ mr: 1.5, verticalAlign: "bottom" }}
              />
              <Typography variant="body2" display="inline-block">
                Buenos Aires, Argentina
              </Typography>
            </Box>

            <Box>
              <EmailIcon
                color="secondary"
                sx={{ mr: 1.5, verticalAlign: "bottom" }}
              />
              <Typography variant="body2" display="inline-block">
                martinmarmol.ar@gmail.com
              </Typography>
            </Box>

            <Box>
              <LinkedInIcon
                color="secondary"
                sx={{ mr: 1.5, verticalAlign: "bottom" }}
              />
              <Link
                href="https://www.linkedin.com/in/martinarielm/"
                target="_blank"
              >
                <Typography variant="body2" display="inline">
                  martinarielm
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 8 }}>
          <Typography
            letterSpacing={1}
            variant="subtitle1"
            fontWeight={500}
            fontSize={18}
            gutterBottom
          >
            WORK EXPERIENCE
          </Typography>

          {loading
            ? mockedJobs.map(() => <JobItemSkeleton mb={{ xs: 3, md: 4 }} />)
            : jobs.map((job) => (
                <JobItem key={job.id} job={job} mb={{ xs: 3, md: 4 }} />
              ))}
        </Grid>
      </Grid>
    </Container>
  );
}

const boxShadow = { boxShadow: "rgba(149, 157, 165, 0.3) 0px 0px 50px" };

export default App;
