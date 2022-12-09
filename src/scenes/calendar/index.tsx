import { useState } from "react";
import Header from "../../components/Header";
import { tokens } from "../../config/theme";
///////////////// Full Calendar
import FullCalendar, { formatDate } from "@fullcalendar/react";
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

  const dateClickHandler = (selected): void => {
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

  const eventClickHandler = (selected): void => {
    if (window.confirm(`Delete ${selected.event.title}?`)) {
      selected.event.removed();
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subTitle="Interactive Calendar View" />
      <Box display="flex" justifyContent="space-between">
        {/* ///////////////////////////////////// */}
        {/* Calendar List SideBar  */}
        {/* ///////////////////////////////////// */}
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <List>
                <ListItem
                  key={event.id}
                  sx={{
                    bgcolor: colors.greenAccent[500],
                    margin: "10px",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            ))}
          </List>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};
export default Caldendar;
