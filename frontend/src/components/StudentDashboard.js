import React, { useState } from 'react';
import StudentList from './StudentList';

function StudentDashboard() {
    const name = localStorage.getItem('username');

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Hello {name}</h2>
        </div>
    );
}

export default StudentDashboard;
