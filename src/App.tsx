import { Avatar, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: 7, backgroundColor: "white", boxShadow, height: "100vh" }}
    >
      <Grid
        container
        rowSpacing={{ xs: 5, md: 7 }}
        columnSpacing={{ xs: 5, md: 7 }}
        sx={{ px: { sx: 2, md: 5 } }}
      >
        <Grid
          size={{ xs: 4, md: 3 }}
          sx={{ justifyItems: "center", p: { xs: 2, md: 3 } }}
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

        <Grid
          size={{ xs: 8, md: 9 }}
          sx={{ textAlign: "left", alignSelf: "center" }}
        >
          <Typography variant="h3" fontWeight={400} color="primary">
            Martín Mármol
          </Typography>

          <Typography variant="subtitle2" fontWeight={400} sx={{ ml: 0.5 }}>
            Frontend Developer
          </Typography>
        </Grid>

        <Grid size={{ xs: 4, md: 3 }}>
          <Typography
            letterSpacing={2}
            variant="subtitle1"
            fontWeight={500}
            gutterBottom
          >
            SUMMARY
          </Typography>
        </Grid>

        <Grid size={{ xs: 8, md: 9 }}>
          <Typography
            letterSpacing={2}
            variant="subtitle1"
            fontWeight={500}
            gutterBottom
          >
            WORK EXPERIENCE
          </Typography>

          <Typography variant="subtitle2">MXHERO</Typography>
          <Typography variant="body2">
            - Participated in the development of mxHERO's new client dashboard
            from scratch. First as a frontend developer and later on as a
            fullstack developer too. Including UX and UI's design (Material UI)
            and wireframing.
          </Typography>
          <Typography variant="body2">
            - Programming languages used: Javascript and Typescript. NodeJS for
            server environment. ReactJS for building the user interface and its
            components. Unit tests with Jest. Git for version control. i18next
            framework for localization.
          </Typography>
          <Typography variant="body2">
            - 15 days scrum working framework.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

const boxShadow = { boxShadow: "rgba(149, 157, 165, 0.3) 0px 0px 50px" };

export default App;
