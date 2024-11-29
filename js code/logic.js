// Get references to the buttons
const employeesButton = document.getElementById('employees-btn');
const companiesButton = document.getElementById('companies-btn');
const tableContainer = document.getElementById('table-container');

// Function to fetch and display employees
employeesButton.addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/users')  // API URL to fetch employee data
    .then(response => response.json())
    .then(data => {
      let tableHtml = '<table><tr><th>Name</th><th>Email</th><th>Phone</th></tr>';
      data.forEach(employee => {
        tableHtml += `
          <tr>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.phone}</td>
          </tr>
        `;
      });
      tableHtml += '</table>';
      tableContainer.innerHTML = tableHtml;  // Insert the table into the page
    })
    .catch(error => {
      tableContainer.innerHTML = 'Error fetching employee data.';
      console.error('Error fetching employee data:', error);
    });
});

// Function to fetch and display companies
companiesButton.addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/users')  // API URL to fetch employee data
    .then(response => response.json())
    .then(data => {
      let tableHtml = '<table><tr><th>Company Name</th><th>Company Data</th></tr>';
      data.forEach(employee => {
        tableHtml += `
          <tr>
            <td>${employee.company.name}</td>
            <td>${employee.company.companyData}</td>
          </tr>
        `;
      });
      tableHtml += '</table>';
      tableContainer.innerHTML = tableHtml;  // Insert the table into the page
    })
    .catch(error => {
      tableContainer.innerHTML = 'Error fetching company data.';
      console.error('Error fetching company data:', error);
    });
});
