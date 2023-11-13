import { useState } from 'react'
import '../styles/App.css';
import Display from './Display'
import UserInputs from './UserInputs';
import Footer from './Footer'
import { v4 as uuidv4 } from 'uuid';


function App() {
  // sample data
  const [information, setInformation] = useState({
    name: 'Bilguundalai Bat-Erdene',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, viverra eget est nec, tempus vestibulum leo. Nunc efficitur commodo arcu, quis volutpat lectus pellentesque nec.',
    email: 'johnwickkk20023@gmail.com',
    phoneNumber: '(001)843-219-223',
    address: 'Doswell RD 9900 Kings Dominion Employee Housing '
  });

  // SchoolName Major Date
  const [education, setEducation] = useState([
    {id: uuidv4(), schoolName: 'Harvard University', major: 'Economics / Biology', startDate:'2020', endDate:'2024', description: "Graduated with Honors and more than couple of Interns"},
    {id: uuidv4(), schoolName: 'National University Of Mongolia', major: 'Computer Science', startDate:'2016', endDate:'2020', description: "Specializing in optimization of AI"},
    {id: uuidv4(), schoolName: 'Berkeley Law University', major: 'Amendment Law / Lawyer', startDate:'2012', endDate:'2016', description: "Passed the bar exam with profiency"}
  ]) 
  const [experience, setExperience] = useState([    { id: uuidv4(), companyName: 'Google ', jobTitle: 'Software Engineer', startDate:'2020', endDate:'2022', description: "Search Engine Optimization and AI"},
  {id: uuidv4(), companyName: 'National University Of Mongolia', jobTitle: 'Professor / AI', startDate:'2016', endDate:'2020', description: "Full Time teaching as well as research in AI"},
  {id: uuidv4(), companyName: 'Twitter', jobTitle: 'Senior Developer', startDate:'2012', endDate:'2016', description: "Senior Developer as team lead."}]) 

  console.log(education)
  
  return (<div className='container'>
    <section className='main'>
      <UserInputs 
        information={information}
        setInformation={setInformation}
        education={education}
        setEducation={setEducation}
        experience={experience}
        setExperience={setExperience}
        />
      <Display informations={information} educations={education} experiences={experience} />
    </section>
    <Footer/>
  </div>);
}


// User inputs
// CV Display
// Footer
export default App;
