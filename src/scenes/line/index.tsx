import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import Header from "../../components/Header";

export default function Line() {
  return (
    <Box m="20px">
      <Header title="Line Chart" subTitle="Line Chart View " />
      <Box height="75vh">
        <LineChart isDashboard={false}></LineChart>
      </Box>
    </Box>
  );
}
