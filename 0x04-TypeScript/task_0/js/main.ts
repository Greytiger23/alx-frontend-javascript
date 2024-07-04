interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Location'];

headers.forEach(headerText => {
  const header = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});

tableHead.appendChild(headerRow);
table.appendChild(tableHead);

const tableBody = document.createElement('tbody');
studentsList.forEach(student => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.locaton;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
