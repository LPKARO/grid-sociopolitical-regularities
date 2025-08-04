const forces = ["Education", "Religion", "Military", "Labor", "Race", "Economy", "Media", "Politics"];
const conditions = ["Gender", "Subaltern", "Justice", "Governmentality", "Ideology", "Class", "Professionalization", "Consciousness"];
const gridBody = document.getElementById('gridBody');

forces.forEach(force => {
  const row = document.createElement('tr');
  const headerCell = document.createElement('th');
  headerCell.textContent = force;
  row.appendChild(headerCell);

  conditions.forEach(condition => {
    const cell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = `${force}_${condition}`;
    checkbox.value = '1';
    cell.appendChild(checkbox);
    row.appendChild(cell);
  });

  gridBody.appendChild(row);
});

const form = document.getElementById('gridForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const result = {};
  formData.forEach((val, key) => result[key] = parseInt(val));
  console.log("User Confrontation Grid Score:", result);
  alert("Grid submitted! Check console for output.");
});