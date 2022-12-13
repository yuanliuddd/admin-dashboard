import { Stack, Box, useTheme, CircularProgress } from "@mui/material";
import { useState } from "react";
import { tokens } from "../config/theme";

type IprogressType = {
  progress: number;
};

const ProgressCircle = ({ progress }: IprogressType) => {
  return (
    <Stack spacing={2} direction="row">
      <CircularProgress variant="determinate" value={progress} size="40px" />
    </Stack>
  );
};

export default ProgressCircle;
