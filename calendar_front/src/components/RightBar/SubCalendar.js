import { styled } from 'styled-components';
import React from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

const SubCalendarHeader = styled.div`
  height: 5vh;
  padding-left: 20px;
  border-bottom: 1px solid lightgrey;
  color: grey;
  margin-top: 13px;
`;
const SubCalendarBox = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
`;
function SubCalendar() {
  const calendars = [{ id: 'cal1', name: 'Personal' }];
  const initialEvents = [
    {
      id: '1',
      calendarId: 'cal1',
      title: 'Lunch',
      category: 'time',
      start: '2022-06-28T12:00:00',
      end: '2022-06-28T13:30:00',
    },
    {
      id: '2',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2022-06-28T15:00:00',
      end: '2022-06-28T15:30:00',
    },
  ];

  const onAfterRenderEvent = (event) => {
    console.log(event.title);
  };

  return (
    <>
      <SubCalendarHeader>SubCalender</SubCalendarHeader>
      <SubCalendarBox>
        <Calendar
          height="160px"
          view="month"
          month={{
            dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            visibleWeeksCount: 4,
          }}
          calendars={calendars}
          events={initialEvents}
          onAfterRenderEvent={onAfterRenderEvent}
        />
      </SubCalendarBox>
    </>
  );
}
export default SubCalendar;
