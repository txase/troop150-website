import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import iCalendarPlugin from '@fullcalendar/icalendar'
import theme from '@/config/theme.json'

const Calendar = ({}: {}) => {
  return (
    <FullCalendar
    viewClassNames={"fullcalendar-view"}
    plugins={[ dayGridPlugin, iCalendarPlugin ]}
    initialView="dayGridMonth"
    eventSources={[
      {
        id: 'Troop 150',
        url: '/calendar/150',
        format: 'ics',
        color: theme.colors.bsa.blue
      },
      {
        id: 'Troop 5150',
        url: '/calendar/5150',
        format: 'ics',
        color: theme.colors.bsa.yellow
      }
    ]}
    eventClick={info => {
      info.jsEvent.preventDefault();

      alert(`${info.event.source?.id} - ${info.event.title}\n\nLocation: ${info.event.extendedProps.location}\n\n${info.event.extendedProps.description}`);
    }}
    />
  );
};

export default Calendar;
