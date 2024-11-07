import { useEffect, useState } from "react";
import { Avatar, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import getJobs from "./api";
import { Job } from "./types/Job";
import JobItem from "./components/JobItem";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await getJobs();
      setJobs(response);
    };

    fetchJobs();
  });

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
          sx={{ justifyItems: "center", px: { xs: 1, sm: 2, md: 6 } }}
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

          <Typography variant="body2">
            Created meaningful user experiences for products across various
            industries. Using research, new technologies and user experience
            design, I enjoy building brands and products into apps. My deepest
            expertise is in front end web development, currently delving into
            fullstack skills.
          </Typography>
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

          {jobs.map((job) => (
            <JobItem key={job.id} job={job} mb={{ xs: 3, md: 4 }} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

const boxShadow = { boxShadow: "rgba(149, 157, 165, 0.3) 0px 0px 50px" };

export default App;
