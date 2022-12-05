import React from "react";
import Calendar123 from "./Calendar123";
import ListMeet from './ListMeet'
import "./App.css";
import {
  Route,Router,Routes
} from "react-router-dom";
import Dashboard from "./Dashboard";
export default function App(){
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Calendar123' element={<Calendar123/>}/>
      <Route path='/ListMeet' element={<ListMeet/>}/>
    </Routes>
    </>
  )

}

