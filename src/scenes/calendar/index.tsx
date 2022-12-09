import { useState } from "react";
import Header from "../../components/Header";
import { tokens } from "../../config/theme";
///////////////// Full Calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
////////////////// MUI
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

const Caldendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const dateClickHandler = (selected) => {
    const title = prompt("please enter a new title for your event ");
    const calendarApi = selected.view.calendar;
    calendarApi.unselected();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}- ${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const eventClickHandler = (selected) => {
    if (window.confirm("Delete Event ?")) selected.event.removed();
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subTitle="Calendar View Page " />
      <Box width="300px">
        <List>
          <ListItem>
            <ListItemText>s</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default Caldendar;
