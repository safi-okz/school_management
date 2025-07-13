"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Event 1",
    time: "10:00 to 11:00",
    description: "Description event one done by me",
  },
  {
    id: 2,
    title: "Event 2",
    time: "10:00 to 11:00",
    description: "Description event two done by me",
  },
  {
    id: 3,
    title: "Event 3",
    time: "10:00 to 11:00",
    description: "Description event three done by me",
  },
  {
    id: 4,
    title: "Event 4",
    time: "10:00 to 11:00",
    description: "Description event four done by me",
  },
  {
    id: 5,
    title: "Event 5",
    time: "10:00 to 11:00",
    description: "Description event five done by me",
  },
  {
    id: 6,
    title: "Event 6",
    time: "10:00 to 11:00",
    description: "Description event six done by me",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white rounded-md p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Events</h1>
          <Image src="/moreDark.png" width={20} height={20} alt="More" />
        </div>
        {events.map((event) => (
          <div key={event.id} className="">
            <div className="flex justify-between items-center">
              <h1>{event.title}</h1>
              <span>{event.time}</span>
            </div>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
