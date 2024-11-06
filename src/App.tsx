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

          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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

          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

const boxShadow = { boxShadow: "rgba(149, 157, 165, 0.3) 0px 0px 50px" };

export default App;
