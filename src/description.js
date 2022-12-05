import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "./description.css";
import 'react-datepicker/dist/react-datepicker.css'
// import styles from "./AddEventForm.module.css";
import DatePicker from 'react-datepicker'
import "./App.css";
import styles from "./AddEventForm.module.css";
// import App from "./App";
import Calendar123 from "./Calendar123";
// import Description from './description';
export default function Description() {
  // const { toggleChecked1 } = props;
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    id: 1,
  });
  const [allEvents, setAllEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );

  const handleAddEvent = () => {
    setAllEvents((prev) => {
      let ev = { ...newEvent };

      let dt = new Date(ev.end);
      dt.setDate(dt.getDate() + 1);
      ev.end = dt;
      console.log("ev", ev);
      console.log("prev", newEvent);
      return [...prev, ev];
    });
    setNewEvent({
      title: "",
      start: "",
      end: "",
      id: 1,
    });
  };

  localStorage.setItem("events", JSON.stringify(allEvents));
  return (
    <div className="form1" style={{backgroundColor:'lightgrey'}}>
      <form style={{backgroundColor:'lightgrey'}}>
        <label>Event Name:</label>
        <br />
        <input
            type="text"
            placeholder="Add title"
            value={newEvent?.title}
            style={{fontSize:1.4+'rem'}}
            onChange={(e) => {
              setNewEvent((p) => {
                return {
                  ...p,
                  id: new Date().getMilliseconds(),
                  title: e.target.value,
                };
              });
            }}
          />
        <br />
        <br />
        <label>DataTime:</label>
        <br />
        <DatePicker
          placeholderText="Start date"
          selected={newEvent?.start}
          styles={{fontSize:1.4+'rem'}}
          onChange={(start) => {
            setNewEvent((p) => {
              return { ...p, start };
            });
          }}
          // allowSameDay={true}
        />
        <br />
        <br />
        {/* <DatePicker
        placeholderText="End date"
        selected={newEvent?.end}
        onChange={(end) => {
          let dt = new Date(end);
          dt.setDate(dt.getDate() + 1);
          setNewEvent((p) => {
            return { ...p, end };
          });
        }} */}
        {/* // allowSameDay={true}
        /> */}
        <br />
        <br />
        <label>Note:</label>
        <br />
        <textarea
          type="text"
          // value={meetAbout}
          style={{fontSize:1.4+'rem'}}
          required
          onChange={(e) => {
            // setMeetingDetail(e.target.value);
            // obj.setMeetingDetail = e.target.value;
          }}
        /> 
         <br />
        <button style={{padding:10+'px',borderRadius:5+'px'}} onClick={handleAddEvent}>Submit</button>
      </form>
    </div>
  );
}
