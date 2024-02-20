import React, { useState } from 'react';
import axios from 'axios';

function DeleteStudent() {
  const [ID, setID] = useState(''); // Update state variable name to match backend schema

  const handleDeleteStudent = async () => {
    try {
      // Send a POST request with the student's ID to delete
      const response = await axios.post('http://localhost:4000/users/deleteStudent', { ID }); // Update payload to match backend schema
      console.log(response.data); 
      // Clear the input field after deletion
      setID('');
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '10px' }}>Delete Student</h2>
      <input 
        type="number" 
        value={ID} 
        onChange={(e) => setID(e.target.value)} 
        placeholder="Enter student ID" 
        style={{ marginRight: '10px' }} 
      />
      <button 
        onClick={handleDeleteStudent} 
        style={{  background: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Delete Student
      </button>
    </div>
  );
}

export default DeleteStudent;
