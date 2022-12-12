import { Box,useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../config/theme";

export default function Geography() {
  const theme = useTheme(); 
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box m="20px">
        <Header title="Geography Chart" subTitle="Geography View  " />
        <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="5px">
          <GeographyChart />
        </Box>
      </Box>
    </Box>
  );
}
