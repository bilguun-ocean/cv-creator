import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/Inputs.css';
import trashIcon from '../icons/trash.png'
import showIcon from '../icons/show.png'
import hideIcon from '../icons/hide.png'

export default function Education({ education, setEducation }) {
  const [showForm, setShowForm] = useState(false);
  const [currentEducation, setCurrentEducation] = useState({});
  const [editingEducation, setEditingEducation] = useState(null);

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (editingEducation != null) {
      setEditingEducation({ ...editingEducation, [name]: value });
    }
    setCurrentEducation({ ...currentEducation, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editingEducation != null) {
      const updatedEducation = education.map((edu) =>
        edu.id === editingEducation.id ? editingEducation : edu
      );
      setEducation(updatedEducation);
      setEditingEducation(null);
    } else {
      currentEducation.id = uuidv4();
      if (education.length === 0) {
        setEducation([currentEducation]);
      } else {
        setEducation([...education, currentEducation]);
      }
    }
    setCurrentEducation({});
    setShowForm(false);
  }

  function handleListClick(e) {
    setEditingEducation(education.find((edu) => edu.id === e.target.id));
    setShowForm(true);
  }

  function deleteList(e) {
    const deletedId = e.target.id;
    const updatedEducation = education.filter((edu) => edu.id !== deletedId);
    setEducation(updatedEducation);
    setShowForm(false);
  }

  return (
    <section>
      <h1>
        Education
        <button onClick={() => setShowForm((prev) => !prev)}>
        {showForm ? <img src={hideIcon} className="icon"></img> : <img src={showIcon} className="icon"></img>}
        </button>
      </h1>
      <ul>
        {education.map((edu) => (
          <li key={edu.id}>
            <p onClick={handleListClick} id={edu.id}>
              {edu.schoolName}
            </p>
            <button>
              <img onClick={deleteList} id={edu.id} className='icon trash' src={trashIcon} alt="Trash Icon" />
            </button>
          </li>
        ))}
      </ul>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="school-name">School Name:
            <input
              id="school-name"
              required
              type="text"
              name="schoolName"
              onChange={handleInputChange}
              value={(editingEducation != null && editingEducation.schoolName) || currentEducation.schoolName || ''}
            ></input>
          </label>
          <label htmlFor="major">Major:
            <input
              id="major"
              required
              type="text"
              name="major"
              onChange={handleInputChange}
              value={(editingEducation != null && editingEducation.major) || currentEducation.major || ''}
            ></input>
          </label>
          <label htmlFor="description">Description:
            <input
              id="description"
              type="text"
              name="description"
              onChange={handleInputChange}
              value={(editingEducation != null && editingEducation.description) || currentEducation.description || ''}
            ></input>
          </label>
          <label htmlFor="start-date">Start Date:
            <input
              required
              type="text"
              id="start-date"
              name="startDate"
              value={(editingEducation != null && editingEducation.startDate) || currentEducation.startDate || ''}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="end-date">End Date:
            <input
              required
              type="text"
              id="end-date"
              name="endDate"
              value={(editingEducation != null && editingEducation.endDate) || currentEducation.endDate || ''}
              onChange={handleInputChange}
              min={currentEducation.startDate}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}
