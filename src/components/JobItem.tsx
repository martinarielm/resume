import {
  Box,
  BoxProps,
  Chip,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import { Job } from "../types/Job";

interface Props extends BoxProps {
  job: Job;
}

export default function JobItem({
  job: { company, position, dates, features, skills },
  ...boxProps
}: Props) {
  return (
    <Box {...boxProps}>
      <Typography variant="subtitle1" fontWeight={500}>
        {company} <span style={{ color: "#7899D9" }}>|</span> {position}
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

      <Stack direction="row" spacing={1} sx={{ mt: 1.5, alignItems: "center" }}>
        <IntegrationInstructionsOutlinedIcon
          fontSize="small"
          color="secondary"
        />
        {skills.map((skill) => (
          <Chip key={skill} label={skill} size="small" sx={{ fontSize: 11 }} />
        ))}
      </Stack>
    </Box>
  );
}

export function JobItemSkeleton({ ...boxProps }: BoxProps) {
  return (
    <Box {...boxProps}>
      <Skeleton>
        <Typography variant="subtitle1" fontWeight={500}>
          PlatformX Solutions | Frontend Developer
        </Typography>
      </Skeleton>

      <Skeleton sx={{ mb: 1.5 }}>
        <Typography fontSize={12}>may. 2019 - jul. 2023</Typography>
      </Skeleton>

      <Skeleton variant="rounded" sx={{ mb: 1.5 }}>
        <Typography variant="body2" gutterBottom>
          Lead conceptualization, design and development of mxHero Mail2Cloud
          administration panel, as a frontend developer and web designer.
          Designed UI for different mxHero applications (web, chrome extension
          and Outlook plugin).
        </Typography>
      </Skeleton>
      <Skeleton variant="rounded">
        <Typography variant="body2" gutterBottom>
          Lead conceptualization, design and development of mxHero Mail2Cloud
          administration panel, as a frontend developer and web designer.
        </Typography>
      </Skeleton>
    </Box>
  );
}
