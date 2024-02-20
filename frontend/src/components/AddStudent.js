import React, { useState } from 'react';
import axios from 'axios';

function AddStudent({ onStudentAdded }) {
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [deptName, setDeptName] = useState(''); // Add state for department name

  const handleAddStudent = async () => {
    try {
      const response = await axios.post('http://localhost:4000/users/addStudent', { ID, name, dept_name: deptName }); // Include dept_name in the data payload
      console.log(response.data);
      setName('');
      setID('');
      setDeptName('');

      // Invoke the callback function to trigger fetching of student list
      if (typeof onStudentAdded === 'function') {
        onStudentAdded();
      }
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '10px'}}>Add Student</h2>
      <input 
        type="text" 
        value={ID} 
        onChange={(e) => setID(e.target.value)} 
        placeholder="Enter student ID" 
        style={{ marginRight: '10px' }} 
      />
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter student name" 
        style={{ marginRight: '10px' }} 
      />
      <input 
        type="text" 
        value={deptName} 
        onChange={(e) => setDeptName(e.target.value)} 
        placeholder="Enter department name" // Add input field for department name
        style={{ marginRight: '10px' }} 
      />
      <button 
        onClick={handleAddStudent} 
        style={{ background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Add Student
      </button>
    </div>
  );
}

export default AddStudent;
