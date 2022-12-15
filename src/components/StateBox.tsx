import ProgressCircle from "./ProgressCircle";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../config/theme";

interface IStateBox {
  title: string;
  subTitle: string;
  icon: any;
  progress: number;
  increase: string;
}

const StateBox = ({ title, subTitle, icon, progress, increase }: IStateBox) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {subTitle}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProgressCircle progress={progress} />
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.grey[100], margin: "10px" }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StateBox;
