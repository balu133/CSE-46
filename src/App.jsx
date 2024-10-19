import React, { useEffect, useState } from 'react';
import TeacherProfiles from './TeacherProfiles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Feedback from './Feedback';
import Performance  from './Performance';
import axios from 'axios'
// Mock Data for Courses and Teachers
const courses = [
  { id: 1, name: "Advanced Algorithms" },
  { id: 2, name: "Data Structures" },
  { id: 3, name: "Machine Learning" },
  { id: 4, name: "Artificial Intelligence" },
];

const labCourses = [
  { id: 1, name: "Machine Learning Lab" },
  { id: 2, name: "AI Lab" },
];

const teachers=[
  {
      "id": 1,
      "name": "John Doe",
      "facultyId": "F001",
      "designation": "Professor",
      "department": "Computer Science",
      "rating": 4.5
  },
  {
      "id": 2,
      "name": "Jane Smith",
      "facultyId": "F002",
      "designation": "Assistant Professor",
      "department": "Mathematics",
      "rating": 4.2
  },
  {
      "id": 3,
      "name": "Alice Johnson",
      "facultyId": "F003",
      "designation": "Lecturer",
      "department": "Physics",
      "rating": 4.8
  },
  {
      "id": 4,
      "name": "Bob Brown",
      "facultyId": "F004",
      "designation": "Professor",
      "department": "Chemistry",
      "rating": 4.6
  },
  {
      "id": 5,
      "name": "Emily Davis",
      "facultyId": "F005",
      "designation": "Assistant Professor",
      "department": "Biology",
      "rating": 4.7
  },
  {
      "id": 6,
      "name": "Michael Wilson",
      "facultyId": "F006",
      "designation": "Lecturer",
      "department": "History",
      "rating": 4.3
  },
  {
      "id": 7,
      "name": "Sarah Taylor",
      "facultyId": "F007",
      "designation": "Professor",
      "department": "Literature",
      "rating": 4.9
  },
  {
      "id": 8,
      "name": "David Lee",
      "facultyId": "F008",
      "designation": "Assistant Professor",
      "department": "Economics",
      "rating": 4.4
  },
  {
      "id": 9,
      "name": "Jessica White",
      "facultyId": "F009",
      "designation": "Lecturer",
      "department": "Philosophy",
      "rating": 4.1
  },
  {
      "id": 10,
      "name": "Daniel Clark",
      "facultyId": "F010",
      "designation": "Professor",
      "department": "Engineering",
      "rating": 4.7
  }
]

const App = () => {

  const [selectedCourses, setSelectedCourses] = useState({
    theoryCourses: {},
    labCourses: {},    
  });

  // Handle course and teacher selection
  const handleCourseChange = (e, courseId, courseType) => {
    const selectedTeacher = e.target.value;
    setSelectedCourses(prev => ({
      ...prev,
      [courseType]: {
        ...prev[courseType],
        [courseId]: selectedTeacher, // Store selected teacher by course ID
      },
    }));
  };
  console.log(teachers)
  return (
    <div className="container">
      <h2 className="text-center my-4">STUDENT COURSE DASHBOARD</h2>

      {/* Notifications */}
      <div className="card mb-4">
        <div className="card-body">
        <marquee>
          <div className='img-adjust'>
          <img src='https://eapcet-sche.aptonline.in/EAPCET/images/new.gif' /><h3 className="card-title" style={{color:'red'}}>NOTIFICATION</h3><img src='https://eapcet-sche.aptonline.in/EAPCET/images/new.gif' />
          </div>
          </marquee>
          <p className="card-text">Enrollment Deadline: March 15</p>
          <p className="card-text">Feedback Submission Due: April 10</p>
        </div>
      </div>

      <div className="mb-4">
        <h5>Select Your Courses for the Semester</h5>
        <div className="row">
          {courses.map((course) => (
            <div className="col-md-6 mb-3" key={course.id}>
              <label>{course.name}</label>
              <select
                className="form-control"
                value={selectedCourses.theoryCourses[course.id] || ''}
                onChange={(e) => handleCourseChange(e, course.id, 'theoryCourses')}
              >
                <option value="">Select Teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {labCourses.map((lab) => (
            <div className="col-md-6 mb-3" key={lab.id}>
              <label>{lab.name}</label>
              <select
                className="form-control"
                value={selectedCourses.labCourses[lab.id] || ''} 
                onChange={(e) => handleCourseChange(e, lab.id, 'labCourses')}
              >
                <option value="">Select Teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      <TeacherProfiles teachers={teachers} />
      
      <Feedback courses={courses}/>

     <div className='adjust-submit'>
      <div>
      <input type='submit' className="btn btn-dark" value='submit' />
      </div>
      </div>
      <Performance />
    </div>
  );
};

export default App;
