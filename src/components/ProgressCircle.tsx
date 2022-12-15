import { Stack, useTheme, CircularProgress } from "@mui/material";
import { tokens } from "../config/theme";

type IprogressType = {
  progress: number;
};

const ProgressCircle = ({ progress }: IprogressType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Stack spacing={2} direction="row">
      <CircularProgress
        variant="determinate"
        value={progress}
        size="40px"
        sx={{
          color: colors.greenAccent[600],
        }}
      />
    </Stack>
  );
};

export default ProgressCircle;
