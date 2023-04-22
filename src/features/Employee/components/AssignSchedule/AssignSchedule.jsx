import React from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./styles.css";

const localizer = momentLocalizer(moment);

const events = [
    {
        title: "Josh",
        start: new Date('2023-04-21T07:00:00'),
        end: new Date('2023-04-21T11:00:00')
    },
    {
        title: "Jame",
        start: new Date('2023-04-21T07:00:00'),
        end: new Date('2023-04-21T11:00:00')
    },
    {
        title: "Jack",
        start: new Date('2023-04-21T07:00:00'),
        end: new Date('2023-04-21T11:00:00')
    },
    {
        title: "Victor",
        start: new Date('2023-04-21T07:00:00'),
        end: new Date('2023-04-21T11:00:00')
    },
    {
        title: "Victor",
        start: new Date('2023-04-19T07:00:00'),
        end: new Date('2023-04-19T11:00:00')
    },
    {
        title: "Victor",
        start: new Date('2023-04-19T07:00:00'),
        end: new Date('2023-04-19T11:00:00')
    },
    {
        title: "Victor",
        start: new Date('2023-04-18T07:00:00'),
        end: new Date('2023-04-18T11:00:00')
    },
    {
        title: "Vicky",
        start: new Date('2023-04-18T13:00:00'),
        end: new Date('2023-04-18T17:00:00')
    },
    {
        title: "Vicky",
        start: new Date('2023-04-25T13:00:00'),
        end: new Date('2023-04-25T17:00:00')
    },
    {
        title: "Vicky",
        start: new Date('2023-04-25T13:00:00'),
        end: new Date('2023-04-25T17:00:00')
    },
    {
        title: "Jenny",
        start: new Date('2023-04-25T13:00:00'),
        end: new Date('2023-04-25T17:00:00')
    },
];

function WatchCalendar() {
    return (
        <div className="WatchCalendar" style={{display: 'inline-block', position: 'absolute', paddingTop: '80px', marginLeft:'20px'}} >
            <h1>Lịch làm việc</h1>
            <Calendar localizer={localizer} events={events} style={{ height: "1000px",width: "1900px", margin: "10px" }} views={['month', 'week']} />
        </div>
    );
}

export default WatchCalendar;