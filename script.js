const consumedInput = document.getElementById('consumed');
const limitInput = document.getElementById('limit');
const submit = document.querySelector('button');
const gradeOutput = document.getElementById('grade');

const calc = () => {
  const limit = limitInput.value;
  const consumed = consumedInput.value;
  if (limit == 0) {
    if (consumed <= 0) return 100;
    if (consumed > 0) return 0;
  }
  const gradePercent = 100 - (consumed / (limit * (10 / 3))) * 100;
  return gradePercent;
};

const getLetter = (grade) => {
  if (grade >= 97) return 'A+';
  if (grade < 97 && grade >= 94) return 'A';
  if (grade < 94 && grade >= 90) return 'A-';
  if (grade < 90 && grade >= 87) return 'B+';
  if (grade < 87 && grade >= 84) return 'B';
  if (grade < 84 && grade >= 80) return 'B-';
  if (grade < 80 && grade >= 77) return 'C+';
  if (grade < 77 && grade >= 74) return 'C';
  if (grade < 74 && grade >= 70) return 'C-';
  if (grade < 70 && grade >= 67) return 'D+';
  if (grade < 67 && grade >= 64) return 'D';
  if (grade < 64 && grade >= 60) return 'D-';
  if (grade < 60) return 'F';
  return 'Error';
};

const showGrade = () => {
  if (!consumedInput.value || !limitInput.value) return;
  const grade = calc();
  const letter = getLetter(grade);
  gradeOutput.textContent = `your grade is ${grade}%, which is a${
    grade >= 90 || grade < 60 ? 'n ' : ''
  } ${letter}.`;
};

submit.addEventListener('click', showGrade);
