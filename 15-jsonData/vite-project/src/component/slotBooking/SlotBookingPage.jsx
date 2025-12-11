import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";



export default function SlotBookingPage() {
  const { id } = useParams(); 
  const location = useLocation();
  const doctor = location.state?.doctor;

  
    const getDAteSlots=()=>{
      const dates=[]
      const today= new Date()

      for(let i=1; i<=20; i++){
        const date=new Date()
        date.setDate(today.getDate()+i)
        const formatted=date.toString()
        dates.push(formatted)
        
      }
      return dates
    }  
    const dateSlots=getDAteSlots()
    console.log(dateSlots)
  
  
  const [patient ,setPatient ]=useState({
    name:"",
    phone:"",
    email:"",
  })
  


  const handleConfirm = () => {
    if (!selectedSlot) return alert("Please select a slot first!");

  };


  if (!doctor) return <p>Doctor not found.</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Book a Slot with {doctor.name}
      </h1>
      <p className="text-gray-600 mb-6">{doctor.specialization}</p>

      <div>
        <h3>Available Slot</h3>
        <ul>
           {Array.isArray(dateSlots) && dateSlots.length > 0 ? (

           
          dateSlots.map((date,index)=>(
            <li key={index}>{date}</li>
           
          ))) : (
          <p>No doctors available.</p>
        )}
        </ul>
      </div>  
        <form
      className="flex flex-wrap bg-white shadow-md rounded-xl p-6 gap-6 max-w-6xl mx-auto">

       <input 
        type="text" 
        className='flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
        name="name"
        id="name" 
        placeholder='Enter Your Name' 
        onChange={(e)=>setPatient(e.target.value)}
        required
      />
        <input 
          type="number"
          className="block w-full text-sm border rounded-lg p-2 bg-gray-50"
          placeholder="Enter Your Number"
          id="phone"
          name="phone"
           onChange={(e)=>setPatient(e.target.value)}
          required
        />
        <input 
          type="text"
          className="block w-full text-sm border rounded-lg p-2 bg-gray-50"
          placeholder="Enter Your Email"
          name="email"
          id="email"
           onChange={(e)=>setPatient(e.target.value)}
          required
        />

     <button
        onClick={handleConfirm}
        className="px-60 py- bg-white-500 text-white rounded-lg hover:bg-white-600 transition"
      >
        submit
      </button> 
      </form>

      
    </div>
  );
}
