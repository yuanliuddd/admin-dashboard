import { Box, Typography, IconButton , useTheme} from '@mui/material'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import {tokens }from '../config/theme'


function Header() {
  const theme = useTheme(); 
  const colors = tokens(theme.palette.mode)
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h2" fontWeight="bold">
            DashBoard
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[400]}>
            Welcome to your dashboard
          </Typography>
        </Box>
        <Box>
          <IconButton disableRipple={true} size="large">
            <DownloadOutlinedIcon />
            <Typography>Download Reports</Typography>
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

export default Header