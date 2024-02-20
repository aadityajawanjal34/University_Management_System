import React, { useState } from 'react';
import axios from 'axios';

function DeleteInstructor() {
  const [ID, setID] = useState('');

  const handleDeleteInstructor = async () => {
    try {
      // Send a POST request with the Instructor's ID to delete
      const response = await axios.post('http://localhost:4000/users/deleteInstructor', { ID }); // Adjust payload to match backend schema
      console.log(response.data); 
      // Clear the input field after deletion
      setID('');
    } catch (error) {
      console.error('Error deleting Instructor:', error);
    }
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '10px' }}>Delete Instructor</h2>
      <input 
        type="text" 
        value={ID} 
        onChange={(e) => setID(e.target.value)} 
        placeholder="Enter Instructor ID" 
        style={{ marginRight: '10px' }} 
      />
      <button 
        onClick={handleDeleteInstructor} 
        style={{ background: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Delete Instructor
      </button>
    </div>
  );
}

export default DeleteInstructor;
