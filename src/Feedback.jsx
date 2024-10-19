import React, { useState } from 'react';

const Feedback = ({ courses }) => {
  const [feedback, setFeedback] = useState({});

  const handleFeedbackChange = (e, courseId) => {
    setFeedback(prev => ({
      ...prev,
      [courseId]: e.target.value,
    }));
  };

  return (
    <div className="mb-4">
      <h5>Submit Feedback</h5>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-6 mb-3" key={course.id}>
            <label>{course.name}</label>
            <select
              className="form-control"
              value={feedback[course.id] || ''}
              onChange={(e) => handleFeedbackChange(e, course.id)}
            >
              <option value="">Rate the Teacher</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
