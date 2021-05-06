import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { io } from "socket.io-client";


const socket = io("http://localhost:4030");


function App() {

  const verifyIdNumber = () => {
    socket.emit('verify-user-in-queue', { idNumber: "2514724", idType: 1 } , (data) => {
      console.log(data)
    })
  }

  const generateTicket = () => {
    socket.emit('generate-ticket', 
    { 
      idNumber: "25147875",
      priorityId: 1,
      idType: 1,
      isUnderage: false,
    }, 
    (data) => {
      console.log(data)
    })
  }

  return (
    <div className="App">
      <button onClick={() =>  verifyIdNumber()}>
        verify-user-in-queue
      </button>
      <button onClick={() =>  generateTicket()}>
        generate-ticket
      </button>
    </div>
  )
}

export default App
