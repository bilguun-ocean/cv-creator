import React from "react";
import '../styles/Display.css';


export default function Display({informations, educations, experiences}) {
  return(
    <section className='display' id="cv-page">
        <section className="info">
          <section>
            <h1>{informations.name}</h1>
            <p>{informations.description}</p>
          </section>
          <section className="contact">
            <p>{informations.address}</p>
            <p><b>{informations.phoneNumber}</b></p>
            <p><b>{informations.email}</b></p>
          </section>
        </section>
        <section className="education">
          <h3>Education</h3>
        <section className="edu-list">
          {educations &&  educations.map(education => (
            <div key={education.id}>
              <p><b>{education.schoolName}</b> - {education.major}</p>
                <p className="less-imp">{education.startDate} - {education.endDate}</p>
                <p className="less-imp">{education.description}</p>

            </div>
          ))}
        </section>
        </section>
        <section className="experience">
          <h3>Experience</h3>
        <section className="edu-list">
          {experiences &&  experiences.map(experience => (
            <div key={experience.id}>
              <p><b>{experience.companyName}</b> - {experience.jobTitle}</p>
              <p className="less-imp">{experience.startDate} - {experience.endDate}</p>
              <p className="less-imp">{experience.description}</p>
            </div>
          ))}
        </section>
        </section>
    </section>
  )
}