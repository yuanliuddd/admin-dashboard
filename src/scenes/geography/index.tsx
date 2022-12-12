import { Box } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";

export default function Geography() {
  return (
    <Box>
      <Box m="20px">
        <Header title="Geography Chart" subTitle="Geography View  " />
        <Box height="75vh">
          <GeographyChart />
        </Box>
      </Box>
    </Box>
  );
}
