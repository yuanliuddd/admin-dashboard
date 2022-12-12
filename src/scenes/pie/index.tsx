import { Box } from "@mui/material";
import PieChart  from "../../components/PieChart";
import Header from "../../components/Header";

export default function Pie() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subTitle="Pie View  " />
      <Box height="75vh">
        <PieChart isDashboard={false} />
      </Box>
    </Box>
  );
}
