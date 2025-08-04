const objects = ["AGRICULTURE", "ARCHITECTURE", "BLOODLINES", "BUSINESS", "ECONOMY", "EDUCATION", "ENTERTAINMENT_MEDIA", "LABOR", "MILITARY", "MYTHS", "NARRATIVES", "POLITICS", "PRISON", "RACE", "RELIGION", "WAR"];
const attributes = ["Class", "Consciousness", "Gender", "Governmentality", "Hierarchy", "Ideology", "Justice", "Professionalization", "Sex", "Subaltern"];
const gridBody = document.getElementById('gridBody');

objects.forEach(object => {
  const row = document.createElement('tr');
  const headerCell = document.createElement('th');
  headerCell.textContent = object;
  row.appendChild(headerCell);

  attributes.forEach(attribute => {
    const cell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = `${object}_${attribute}`;
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
  console.log("User Grid Score:", result);
  alert("Grid submitted! Check console for output.");
});