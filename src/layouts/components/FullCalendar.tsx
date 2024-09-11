import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import iCalendarPlugin from '@fullcalendar/icalendar'

const Calendar = ({}: {}) => {
  return (
    <FullCalendar
    plugins={[ dayGridPlugin, iCalendarPlugin ]}
    initialView="dayGridMonth"
    eventSources={[
      {
        url: '/calendar/150',
        format: 'ics'
      },
      {
        url: '/calendar/5150',
        format: 'ics'
      }
    ]}
    eventClick={info => {
      info.jsEvent.preventDefault();

      alert(`${info.event.title}\n\nLocation: ${info.event.extendedProps.location}\n\n${info.event.extendedProps.description}`);
    }}
    />
  );
};

export default Calendar;
