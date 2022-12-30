import { formatDate } from "@fullcalendar/core"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";
import { Header } from "../../components/Header"


interface EventsProps {
  id: string;
  title: string;
  start: Date
  end: Date
  allDay: Date;
}

export function Calendar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState<EventsProps[]>([])

  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event")
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  const handleEventClick = (selected: any) => {
    if (window.confirm(`Are you sure want to delete the event '${selected.event.title}'`)) {
      selected.event.remove()
    }
  }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interative Page" />

      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          sx={{
            backgroundColor: colors.primary[400],
            p: "15px",
            borderRadius: "4px"
          }}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event: EventsProps) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px"
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      })}
                    </Typography>
                  }
                >

                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}