import React, { useState } from 'react';
import axios from 'axios';

function UpdateInstructor() {
    const [ID, setID] = useState('');
    const [name, setName] = useState('');
    const [deptName, setDeptName] = useState('');
    const [salary, setSalary] = useState('');

    const handleUpdateInstructor = async () => {
      try {
        // Send a POST request with the Instructor's ID to Update
        const response = await axios.post('http://localhost:4000/users/updateInstructor', { ID, name, deptName, salary });
        console.log(response.data); 
        // Clear the input fields after update
        setID('');
        setName('');
        setDeptName('');
        setSalary('');
      } catch (error) {
        console.error('Error updating Instructor:', error);
      }
    };
  
    return (
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '10px' }}>Update Instructor</h2>
        <input 
          type="text" 
          value={ID} 
          onChange={(e) => setID(e.target.value)} 
          placeholder="Enter Instructor ID" 
          style={{ marginRight: '10px' }} 
        />
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter updated Instructor name" 
          style={{ marginRight: '10px' }} 
        />
        <input 
          type="text" 
          value={deptName} 
          onChange={(e) => setDeptName(e.target.value)} 
          placeholder="Enter updated Department name" 
          style={{ marginRight: '10px' }} 
        />
        <input 
          type="number" 
          value={salary} 
          onChange={(e) => setSalary(e.target.value)} 
          placeholder="Enter updated Salary" 
          style={{ marginRight: '10px' }} 
        />
        <button 
          onClick={handleUpdateInstructor} 
          style={{  background: 'rgb(23,23,23)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Update Instructor
        </button>
      </div>
    );
}

export default UpdateInstructor;
