import React, { useState } from 'react';
import axios from 'axios';

function AddInstructor({ onInstructorAdded }) {
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [deptName, setDeptName] = useState(''); // Assuming deptName is used for the department name in the schema
  const [salary, setSalary] = useState('');

  const handleAddInstructor = async () => {
    try {
      const response = await axios.post('http://localhost:4000/users/addInstructor', {ID, name, dept_name: deptName, salary });
      console.log(response.data);
      setName('');
      setID('');
      setDeptName('');
      setSalary('');

      // Invoke the callback function to trigger fetching of instructor list
      if (typeof onInstructorAdded === 'function') {
        onInstructorAdded();
      }
    } catch (error) {
      console.error('Error adding instructor:', error);
    }
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '10px' }}>Add Instructor</h2>
      <input 
        type="text" 
        value={ID} 
        onChange={(e) => setID(e.target.value)} 
        placeholder="Enter Instructor ID" 
        style={{ padding: '5px', marginRight: '10px' }} 
      />
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter Instructor name" 
        style={{ marginRight: '10px' }} 
      />
      <input 
        type="text" 
        value={deptName} 
        onChange={(e) => setDeptName(e.target.value)} 
        placeholder="Enter Department name" 
        style={{ marginRight: '10px' }} 
      />
      <input 
        type="text" 
        value={salary} 
        onChange={(e) => setSalary(e.target.value)} 
        placeholder="Enter Salary" 
        style={{ marginRight: '10px' }} 
      />
      <button 
        onClick={handleAddInstructor} 
        style={{ background: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Add Instructor
      </button>
    </div>
  );
}

export default AddInstructor;
