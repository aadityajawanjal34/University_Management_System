// components/TeacherList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TeacherList.css'; // Import CSS file

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/users/allInstructor')
            .then(response => {
                setTeachers(response.data);
            })
            .catch(error => {
                console.error('Error fetching Teachers:', error);
                console.error('Error response:', error.response); // Log detailed error response
            });
    }, []);

    return (
        <div className="teacher-list-container"> {/* Apply CSS class */}
            <h2>Teacher Data:</h2>
            <table className="teacher-table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        {teachers.map(teacher => (
            <tr key={teacher.ID}>
                <td>{teacher.ID}</td>
                <td>{teacher.name}</td>
                <td>{teacher.dept_name}</td>
                <td>{teacher.salary}</td>
            </tr>
        ))}
    </tbody>
</table>

        </div>
    );
}

export default TeacherList;
