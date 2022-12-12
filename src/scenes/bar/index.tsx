import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

export default function Bar() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subTitle="Country-Food Data " />
      <Box height='75vh'>
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  );
}
