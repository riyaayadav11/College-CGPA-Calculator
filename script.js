// Grade -> grade point mapping (10-point scale). Edit to match your university.
const GRADES = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "D": 4,
  "F": 0
};

const rowsEl = document.getElementById("rows");
const addBtn = document.getElementById("addBtn");
const calcBtn = document.getElementById("calcBtn");
const resetBtn = document.getElementById("resetBtn");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
const cgpaEl = document.getElementById("cgpa");
const creditsEl = document.getElementById("credits");
const percentEl = document.getElementById("percent");

function addRow() {
  const row = document.createElement("div");
  row.className = "row";

  const gradeOptions = Object.keys(GRADES)
    .map((g) => `<option value="${g}">${g} (${GRADES[g]})</option>`)
    .join("");

  row.innerHTML = `
    <input type="text" class="subject" placeholder="e.g. Data Structures">
    <input type="number" class="credits" placeholder="4" min="0" step="0.5">
    <select class="grade">${gradeOptions}</select>
    <button class="remove" title="Remove">&times;</button>
  `;

  row.querySelector(".remove").addEventListener("click", () => {
    row.remove();
  });

  rowsEl.appendChild(row);
}

function calculate() {
  errorEl.hidden = true;
  const rows = rowsEl.querySelectorAll(".row");

  let totalPoints = 0;
  let totalCredits = 0;

  for (const row of rows) {
    const credits = parseFloat(row.querySelector(".credits").value);
    const grade = row.querySelector(".grade").value;

    if (isNaN(credits) || credits <= 0) {
      showError("Enter valid credits (greater than 0) for every subject.");
      return;
    }

    totalPoints += credits * GRADES[grade];
    totalCredits += credits;
  }

  if (totalCredits === 0) {
    showError("Add at least one subject.");
    return;
  }

  const cgpa = totalPoints / totalCredits;

  cgpaEl.textContent = cgpa.toFixed(2);
  creditsEl.textContent = totalCredits;
  percentEl.textContent = (cgpa * 9.5).toFixed(2) + "%";
  resultEl.hidden = false;
}

function showError(msg) {
  errorEl.textContent = msg;
  errorEl.hidden = false;
  resultEl.hidden = true;
}

function reset() {
  rowsEl.innerHTML = "";
  errorEl.hidden = true;
  resultEl.hidden = true;
  for (let i = 0; i < 5; i++) addRow();
}

addBtn.addEventListener("click", addRow);
calcBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset);

// Start with 5 empty subject rows
reset();
