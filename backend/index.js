const express = require('express');
const app = express();
const userController = require('./controllers/userController');
const resultController = require('./controllers/resultController');
const cors = require('cors');
require('dotenv').config();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// database.js
const mysql = require('mysql');
require('dotenv').config();

// Connection Pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports = pool;

// Routes
app.get('/users/allStudent', userController.studentview);
app.post('/users/updateStudent', userController.updateStudent);
app.post('/users/addStudent', userController.addStudent);
app.post('/users/deleteStudent', userController.deleteStudent);

app.get('/users/allInstructor', userController.instructorview); 
app.post('/users/updateInstructor', userController.updateInstructor); 
app.post('/users/addInstructor', userController.addInstructor); 
app.post('/users/deleteInstructor', userController.deleteInstructor); 

app.get('/users/allCourse', userController.courseview);
app.get('/users/teacherDepartment', userController.teacherDepartment);
app.get('/users/studentsByDepartment',userController.studentsByDepartment);
// app.post('/results/add', resultController.creates);
// Add more routes as needed

app.get('/', (req, res) => {
    res.send('Welcome to University Management System');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
