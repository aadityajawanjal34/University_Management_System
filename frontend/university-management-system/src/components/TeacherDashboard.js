import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './TeacherDashboard.css'; // Import CSS file for styling

function TeacherDashboard() {
    const [department, setDepartment] = useState('');
    const [students, setStudents] = useState([]);
    const name = localStorage.getItem('username');

    useEffect(() => {
        // Fetch department data for the current teacher
        axios.get('http://localhost:4000/users/teacherDepartment', {
            params: {
                name: name
            }
        })
        .then(response => {
            setDepartment(response.data.department);
        })
        .catch(error => {
            console.error('Error fetching teacher department:', error);
        });
    }, [name]);

    useEffect(() => {
        // Fetch students belonging to the department
        axios.get('http://localhost:4000/users/studentsByDepartment', {
            params: {
                department: department
            }
        })
        .then(response => {
            setStudents(response.data);
        })
        .catch(error => {
            console.error('Error fetching students:', error);
        });
    }, [department]);

    return (
        <div className="teacher-dashboard-container">
            <h2 className="dashboard-title">Hello {name}</h2>
            <div className="department-container">
                <h1 className="department-title">{department}</h1>
            </div>
            <div className="students-container">
                <h3 className="students-heading">Students in Department:</h3>
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Credits</th>
                            {/* Add more table headers as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.ID}>
                                <td>{student.ID}</td>
                                <td>{student.name}</td>
                                <td>{student.tot_cred}</td>
                                {/* Add more table data as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Additional content */}
            <div className="quick-links-container">
            <h3>Quick Links</h3>
                <div className="quick-links">

                    <ul>
                        <li><Link to="/all-students">Students</Link></li>
                        <li><Link to="/all-course">Courses</Link></li>
                        <li><a href="/assignments">Assignments</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TeacherDashboard;
