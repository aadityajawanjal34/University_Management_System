
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/AdminLogin';
import TeacherLogin from './components/TeacherLogin';
import StudentLogin from './components/StudentLogin';
import StudentList from './components/StudentList'; 
import TeacherDashboard from './components/TeacherDashboard'; 
import StudentDashboard from './components/StudentDashboard'; 
import AdminDashboard from './components/AdminDashboard'; 
import TeacherList from './components/TeacherList';
import CourseList from './components/CourseList';
function App() {

  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/admin-login" element={<AdminLogin/>} />
        <Route path="/teacher-login" element={<TeacherLogin/>} />
        <Route path="/student-login" element={<StudentLogin/>} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard/>} />
        <Route path="/student-dashboard" element={<StudentDashboard/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/all-students" element={<StudentList/>} />
        <Route path="/all-instructors" element={<TeacherList/>} />
        <Route path="/all-course" element={<CourseList/>} />
      </Routes>
      {/* Display fetched student data */}
      {/* <div>
      <StudentList/>
      </div> */}
    </div>
  );
}

export default App;
