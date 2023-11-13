import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Information from "./Information";
import '../styles/UserInputs.css'
import refreshIcon from '../icons/refresh.png'

export default function UserInputs({information, setInformation, education, setEducation, experience, setExperience}) {
  function clearAll() {
    setInformation({
      name: '',
      email: '',
      phoneNumber: '',
      address: ''})
      setEducation([])
      setExperience([])
    }
  return(
    <section className="user-inputs">
      <h1>CV Creator <button onClick={clearAll}><img src={refreshIcon} className="icon"></img></button> </h1>
      <Information information = {information} setInformation={setInformation}/>
      <Education education={education} setEducation={setEducation}/>
      <Experience experience={experience} setExperience={setExperience}/>
    </section>
  )
}