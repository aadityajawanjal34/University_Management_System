// components/CourseList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CourseList.css'; // Import CSS file

function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/users/allcourse')
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error('Error fetching Courses:', error);
                console.error('Error response:', error.response); // Log detailed error response
            });
    }, []);

    return (
        <div className="Course-list-container"> {/* Apply CSS class */}
            <h2>Course Data:</h2>
            <ul className="Course-list"> {/* Apply CSS class */}
                {courses.map(course => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;
