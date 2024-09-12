import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import iCalendarPlugin from '@fullcalendar/icalendar'
import theme from '@/config/theme.json'

// This function safely decodes HTML, avoiding potential XSS attacks
const htmlDecode = (html: string) => new DOMParser()
    .parseFromString(html, 'text/html')
    .documentElement.textContent;

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

        alert(`Calendar: ${info.event.source?.id}\n\nEvent: ${htmlDecode(info.event.title)}\n\nLocation: ${htmlDecode(info.event.extendedProps.location)}\n\n${htmlDecode(info.event.extendedProps.description)}`);
      }}
    />
  );
};

export default Calendar;
