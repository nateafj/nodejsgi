const express = require('express');
const app = express();
const employees = require('./hard.json');

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/employees/:employeeID', (req, res) => {
  const { employeeID } = req.params;
  const employee = employees.employees.find((emp) => emp.employeeID == employeeID);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
