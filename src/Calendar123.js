import React, { useState } from "react";
import Calendar from "react-calendar";
import "./App.css";
import Description from "./description";

export default function Calendar123() {
  const [value, setDate] = useState(new Date());
  const [toggle, setToggle] = useState(true);
  const [nameReceived, setnameReceived] = useState();
  const [dateReceived, setdateReceived] = useState();
  const [namelocateReceived, setlocateReceived] = useState();
  const [dayVal, setDayVal] = useState();
  const toggleChecked = () => {
    // e.preventDefault();
    setToggle((toggle) => !toggle);
  };

  let obj = JSON.parse(localStorage.getItem("events"));
  // for(let i=0;i<obj.length;i++){
  //   console.log(obj[i].title);
  // }
  // console.log(dayVal);
  const toggleChecked1 = () => {
    setToggle((toggle) => !toggle);
  };

  

  return (
    <div>
      {toggle && (
        <Calendar
      
          tileContent={({date, view }) => view === 'month' && date.getDate() === value.getDate()? <p>It's Sunday!</p> : null}
        
          // onClickDay={toggleChecked}
          onClickDay={(value, event) => {
            console.log(value.getDate());
            if (event.type === "click") {
              console.log(event.target.innerHTML);
              // event.target.innerText += "";
              // setDayVal(value);
              toggleChecked();
            }
          }}
        />
      )}
      {!toggle && <Description toggleChecked1={toggleChecked1} />}
      {nameReceived}
    </div>
  );
}



// const [value, onChange] = useState();
// const show = ({ date, view }) => {
//   if (view === "month") {
//     const today = ["2022-12-20", "2022-12-21", "2022-12-22"];
//     today.filter((x) => {
//       if(date.getDate()==x.getDate())
//       return <div>Today!</div>;
//     });
//   }
//   return null;
// };


// https://codesandbox.io/s/react-calendar-show-tilecontent-forked-blvlpq?file=/src/index.js:249-557