import express from "express";
import cors from "cors";
import mockedJobs from "./data/jobs.js";

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

app.get("/api/jobs", async (req, res) => {
  // Simulate a delay
  await new Promise((r) => setTimeout(r, 500));
  res.json(mockedJobs);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
