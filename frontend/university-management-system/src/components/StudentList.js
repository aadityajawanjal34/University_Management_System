import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css'; // Import CSS file

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/users/allStudent')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching students:', error);
                console.error('Error response:', error.response); // Log detailed error response
            });
    }, []);

    return (
        <div className="student-list-container">
            <h2>Student Data:</h2>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Total Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.ID}>
                            <td>{student.ID}</td>
                            <td>{student.name}</td>
                            <td>{student.dept_name}</td>
                            <td>{student.tot_cred}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;
