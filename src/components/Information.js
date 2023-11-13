import React from "react";
import { useState } from "react";
import '../styles/Inputs.css'
import showIcon from '../icons/show.png'
import hideIcon from '../icons/hide.png'

export default function Information({information, setInformation}) {  
  const [showForm, setShowForm] = useState(false)

  function handleInputChange(e) {
    const {name, value} = e.target
    setInformation({...information, [name]:value})
  }

  return(
  <section className="user-info">
    <h1>Personal Information
       <button onClick={() => setShowForm(!showForm)}>
       {showForm ? <img src={hideIcon} className="icon"></img> : <img src={showIcon} className="icon"></img>}
       </button>
       </h1>
    {showForm && <form>
      <label htmlFor="username">Full Name:
        <input
         id="username"
         type="text"
         name="name"
         onChange={handleInputChange}
         value={information.name}
         ></input>
      </label>
      <label htmlFor="description">Title:
        <input
         id="description"
         type="text"
         name="description"
         onChange={handleInputChange}
         value={information.description}
         ></input>
      </label>
      <label htmlFor="email">Email:
      <input
         id="email"
         name="email"
         type="text"
         onChange={handleInputChange}
         value={information.email}
         ></input>
      </label>
      <label htmlFor="phone-number" >Phone Number: 
      <input
         id="phone-number"
         type="text"
         name="phoneNumber"
         onChange={handleInputChange}
         value={information.phoneNumber}
         ></input>
      </label>
      <label htmlFor="address" >Address: 
      <input
         id="address"
         type="text"
         name="address"
         onChange={handleInputChange}
         value={information.address}
         ></input>
      </label>
    </form>}
    
  </section>)
}