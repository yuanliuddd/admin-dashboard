import { Box, Typography, IconButton, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { tokens } from "../config/theme";

type headerType = {
  title: string;
  subTitle: string;
};

const Header = ({ title, subTitle }: headerType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box mb="30px">
        <Typography
          variant="h2"
          fontWeight="bold"
          color={colors.grey[100]}
          sx={{ mb: "5px" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>
          {subTitle}
        </Typography>
      </Box>
      {/* <Box>
        <IconButton disableRipple={true} size="large">
          <DownloadOutlinedIcon />
          <Typography>Download Reports</Typography>
        </IconButton>
      </Box> */}
    </>
  );
};

export default Header;
