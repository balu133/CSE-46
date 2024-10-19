import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import teacherImage from './smith.jpeg';
import axios from 'axios';
function TeacherDetails() {
  const {id}=useParams()
  const navigate=useNavigate();
  const [teacher, setTeacher] = useState({});

  useEffect(() => {
      axios.get(`http://localhost:8080/api/teacher/${id}`)
          .then(res => {
              setTeacher(res.data);
          })
          .catch(err => {
              console.error("Error fetching teacher data:", err); // Log the error details
          });
  }, [id]); 
  return (
    <>
        <div>
            <div className='photo'>
               <img src={teacherImage} className='box'/>
            </div>
            <div className='photo-data'>
                <div>
                <label>Name</label>
                <input type='text' className='form-control form-control-lg' value={teacher.name}/>
                </div>
                <div>
                 <label>Faculty ID</label>
                 <input type='text' className='form-control form-control-lg' value={teacher.facultyId} />
                </div>
                <div>
                 <label>Designation</label>
                 <input type='text' className='form-control form-control-lg' value={teacher.designation}/>
                </div>
                <div>
                 <label>Department</label>
                 <input type='text' className='form-control form-control-lg'  value={teacher.department}/>
                </div>
                <div>
                 <label>Rating</label> <br />
                 <div className="star-rating">
                 ★★★★☆
                </div>
                </div>
                <input type='button' className='btn btn-success' value='Go To Homepage' onClick={()=> navigate("/")} />
            </div>
        </div>
    </>
  )
}

export default TeacherDetails
