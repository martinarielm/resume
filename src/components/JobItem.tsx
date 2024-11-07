import { Box, BoxProps, Typography } from "@mui/material";
import { Job } from "../types/Job";

interface Props extends BoxProps {
  job: Job;
}

export default function JobItem({
  job: { company, position, dates, features },
  ...boxProps
}: Props) {
  return (
    <Box {...boxProps}>
      <Typography variant="subtitle1" fontWeight={500}>
        {company} | {position}
      </Typography>

      <Typography
        fontSize={12}
        sx={{ mb: 1.5 }}
      >{`${dates[0]} - ${dates[1]}`}</Typography>

      {features.map((feature, id) => (
        <Typography key={id} variant="body2" gutterBottom>
          {feature}
        </Typography>
      ))}
    </Box>
  );
}
