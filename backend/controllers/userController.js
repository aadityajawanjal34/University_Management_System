// controllers/userController.js
const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

exports.studentview = (req, res) => {
    // Execute SQL query to select all data from student table
    pool.query('SELECT * FROM student', (err, rows) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      // Send the retrieved data as JSON response
      res.json(rows);
    });
}

exports.addStudent = (req, res) => {
  const { ID,name, dept_name, tot_cred } = req.body;

  pool.query('INSERT INTO student (ID, name, dept_name, tot_cred) VALUES (?, ?, ?, ?)', 
             [ID, name, dept_name, tot_cred], 
             (err, rows) => {
    if (err) {
      console.error('Error executing adding query', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(rows);
  });
};

exports.updateStudent = (req, res) => {
  const { ID, name } = req.body;

  pool.query('UPDATE student SET name=? WHERE ID=?', [name, ID], (err, result) => {
    if (err) {
      console.error('Error executing update query', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(result);
  });
};

exports.deleteStudent = (req, res) => {
  const { ID } = req.body;

  pool.query('DELETE FROM student WHERE ID = ?', [ID], (err, result) => {
    if (err) {
      console.error('Error executing deletion query', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(result);
  });
};

exports.instructorview = (req, res) => {
  // Execute SQL query to select all data from instructor table
  pool.query('SELECT * FROM instructor', (err, rows) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Send the retrieved data as JSON response
    res.json(rows);
  });
}

exports.addInstructor = (req, res) => {
const { name, ID ,dept_name, salary} = req.body;

pool.query('INSERT INTO instructor (ID, name, dept_name, salary) VALUES (?, ?, ?, ?)', 
           [ID, name, dept_name, salary], 
           (err, rows) => {
  if (err) {
    console.error('Error executing adding query', err);
    res.status(500).send('Internal Server Error');
    return;
  }
  res.json(rows);
});
};

exports.updateInstructor = (req, res) => {
const { ID, name } = req.body;

pool.query('UPDATE instructor SET name=? WHERE ID=?', [name, ID], (err, result) => {
  if (err) {
    console.error('Error executing update query', err);
    res.status(500).send('Internal Server Error');
    return;
  }
  res.json(result);
});
};

exports.deleteInstructor = (req, res) => {
const { ID } = req.body;

pool.query('DELETE FROM instructor WHERE ID = ?', [ID], (err, result) => {
  if (err) {
    console.error('Error executing deletion query', err);
    res.status(500).send('Internal Server Error');
    return;
  }
  res.json(result);
});
};

exports.courseview = (req, res) => {
  // Execute SQL query to select all data from course table
  pool.query('SELECT * FROM course', (err, rows) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Send the retrieved data as JSON response
    res.json(rows);
  });
}

exports.teacherDepartment = (req, res) => {
  const { name } = req.query; // Access the teacher's name from query parameters

  pool.query('SELECT dept_name FROM instructor WHERE TRIM(name) = TRIM(?)', [name], (err, rows) => {
      if (err) {
          console.error('Error executing SQL query:', err);
          res.status(500).send('Internal Server Error');
          return;
      }

      if (rows.length === 0) {
          res.status(404).json({ error: 'Teacher not found' });
          return;
      }

      // Extract department name from the query result
      const department = rows[0].dept_name;

      // Send the department name as JSON response
      res.json({ department });
  });
};

exports.studentsByDepartment = (req, res) => {
  const { department } = req.query;

  pool.query('SELECT * FROM student WHERE dept_name = ?', [department], (err, rows) => {
      if (err) {
          console.error('Error executing SQL query:', err);
          res.status(500).send('Internal Server Error');
          return;
      }

      // Send the retrieved students as JSON response
      res.json(rows);
  });
};



// Implement other controller functions...
