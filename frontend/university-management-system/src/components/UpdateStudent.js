import React, { useState } from 'react';
import axios from 'axios';

function UpdateStudent() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [dept, setDept] = useState(''); // Add state variable for department

    const handleUpdateStudent = async () => {
      try {
        // Send a POST request with the student's ID, name, and department to update
        const response = await axios.post('http://localhost:4000/users/updateStudent', { ID: id, name: name, dept: dept }); // Adjust payload to match backend schema
        console.log(response.data); 
        // Clear the input fields after update
        setId('');
        setName('');
        setDept('');
      } catch (error) {
        console.error('Error updating student:', error);
      }
    };
  
    return (
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '10px' }}>Update Student</h2>
        <input 
          type="text" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          placeholder="Enter student ID" 
          style={{ marginRight: '10px' }} 
        />
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter updated student name" 
          style={{ marginRight: '10px' }} 
        />
        <input 
          type="text" 
          value={dept} 
          onChange={(e) => setDept(e.target.value)} 
          placeholder="Enter updated department" 
          style={{ marginRight: '10px' }} 
        />
        <button 
          onClick={handleUpdateStudent} 
          style={{ background: 'rgb(23,23,23)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Update Student
        </button>
      </div>
    );
}

export default UpdateStudent;
