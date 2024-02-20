import React, { useState } from 'react';
import TeacherList from './TeacherList';
import AddInstructor from './AddInstructor';
import UpdateInstructor from './UpdateInstructor';
import DeleteInstructor from './DeleteTeacher';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
import DeleteStudent from './DeleteStudent';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

function AdminDashboard(){
    const name = localStorage.getItem('username');
    return(

    <div>
        <div>
        <h2 style={{ textAlign: 'center' }}>Hello {name}</h2>
        <div className='operations'>
            <div className='operation-container'>
                <h2>Instructor Operations</h2>
                {/* <TeacherList /> */}
                <AddInstructor/>
                <UpdateInstructor/>
                <DeleteInstructor/>
            </div>

            <div className='operation-container'>
                <h2>Student Operations</h2>
                {/* <StudentList /> */}
                <AddStudent />
                <UpdateStudent />
                <DeleteStudent />
            </div>

        </div >
        <h3 style={{justifyContent:'center',textAlign:'center', marginBottom:'10px'}}>Quick Links</h3>
<div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }} >

                    <ul>
                        <li style={{justifyContent:'center',textAlign:'center', marginBottom:'10px'}}>
                            <Link to="/all-students">View All Students</Link></li>
                        <li><Link to="/all-Instructors">View All Instructors</Link></li>
                    </ul>
</div>

    </div>
    </div>
    );
}

export default AdminDashboard;