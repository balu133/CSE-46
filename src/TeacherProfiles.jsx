import React from 'react';
import { Link } from 'react-router-dom';

const TeacherProfiles = ({ teachers }) => {
  return (
    <div className="mb-4">
      <h5>View Teacher Profiles</h5>
      {teachers.length > 0 ? (
        <div className="row">
          {teachers.map((teacher) => (
            <div className="col-md-6 mb-3" key={teacher.id}>
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">{teacher.name}</h6>
                  <p className="card-text">Rating: {teacher.rating} / 5</p>
                  <Link className='btn btn-info' to={`/teacher/${teacher.id}`}>More Info</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No teachers found.</p> 
      )}
    </div>
  );
};

export default TeacherProfiles;
