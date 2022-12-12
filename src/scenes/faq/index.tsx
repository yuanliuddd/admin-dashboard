import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../config/theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Ask Questions" />
      <Box>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color={colors.greenAccent[300]} variant="h5">
              Why Admin Data is not updated ?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Multiple Reasons can cause this kind of problem : Bad Internet
              connection , please refresh your screen later
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography color={colors.greenAccent[300]} variant="h5">
              Contact Info 
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Email: yuanliu0120@gmail.com</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography color={colors.redAccent[300]} variant="h5">
            Danger Zone :  Disabled Your Dashboard Account
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Please contact our client service hotline +33 12.34.56.78.90
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
