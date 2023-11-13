import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/Inputs.css';
import trashIcon from '../icons/trash.png'
import showIcon from '../icons/show.png'
import hideIcon from '../icons/hide.png'

export default function Experience({ experience, setExperience }) {
  const [showForm, setShowForm] = useState(false);
  const [currentExperience, setCurrentExperience] = useState({});
  const [editingExperience, setEditingExperience] = useState(null);

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (editingExperience != null) {
      setEditingExperience({ ...editingExperience, [name]: value });
    }
    setCurrentExperience({ ...currentExperience, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editingExperience != null) {
      const updatedExperience = experience.map((exp) =>
        exp.id === editingExperience.id ? editingExperience : exp
      );
      setExperience(updatedExperience);
      setEditingExperience(null);
    } else {
      currentExperience.id = uuidv4();
      if (experience.length === 0) {
        setExperience([currentExperience]);
      } else {
        setExperience([...experience, currentExperience]);
      }
    }
    setCurrentExperience({});
    setShowForm(false);
  }

  function handleListClick(e) {
    setEditingExperience(experience.find((exp) => exp.id === e.target.id));
    setShowForm(true);
  }

  function deleteList(e) {
    const deletedId = e.target.id;
    const updatedExperience = experience.filter((exp) => exp.id !== deletedId);
    setExperience(updatedExperience);
    setCurrentExperience({});
    setShowForm(false);
  }

  return (
    <section>
      <h1>
        Experience
        <button onClick={() => setShowForm((prev) => !prev)}>
          {showForm ? <img src={hideIcon} className="icon"></img> : <img src={showIcon} className="icon"></img>}
        </button>
      </h1>
      <ul>
        {experience.map((exp) => (
          <li key={exp.id}>
            <p onClick={handleListClick} id={exp.id}>
              {exp.companyName}
            </p>
            <button>
              <img onClick={deleteList} id={exp.id} className='icon trash' src={trashIcon} alt="Trash Icon" />
            </button>
          </li>
        ))}
      </ul>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="company-name">Company Name:
            <input
              id="company-name"
              type="text"
              name="companyName"
              onChange={handleInputChange}
              required
              value={(editingExperience != null && editingExperience.companyName) || currentExperience.companyName || ''}
            ></input>
          </label>
          <label htmlFor="job-title">Job Title:
            <input
              id="job-title"
              type="text"
              name="jobTitle"
              onChange={handleInputChange}
              required
              value={(editingExperience != null && editingExperience.jobTitle) || currentExperience.jobTitle || ''}
            ></input>
          </label>
          <label htmlFor="start-date">Start Date:</label>
          <input
            type="text"
            id="start-date"
            name="startDate"
            required
            value={(editingExperience != null && editingExperience.startDate) || currentExperience.startDate || ''}
            onChange={handleInputChange}
          />
          <label htmlFor="end-date">End Date:</label>
          <input
            type="text"
            id="end-date"
            name="endDate"
            required
            value={(editingExperience != null && editingExperience.endDate) || currentExperience.endDate || ''}
            onChange={handleInputChange}
            min={currentExperience.startDate}
          />
          <label htmlFor="description">Description:
            <input
              id="description"
              type="text"
              name="description"
              onChange={handleInputChange}
              required
              value={(editingExperience != null && editingExperience.description) || currentExperience.description || ''}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}
