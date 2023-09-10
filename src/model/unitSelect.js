const toggleUnits = (currentUnit) => {
  if (currentUnit === 'C') return 'F';
  return 'C';
};

const updateButton = ({ target }) => {
  const current = document.querySelector('.unitsActive');
  const isActive = target.classList[1] === 'unitsActive';

  if (!isActive) {
    current.classList.remove('unitsActive');
    target.classList.add('unitsActive');
  }
};

const selectUnits = () => {
  const selectUnitsDiv = document.createElement('div');

  const celsiusBtn = document.createElement('button');
  celsiusBtn.classList.add('unitsBtn');
  celsiusBtn.classList.add('unitsActive');
  celsiusBtn.textContent = '°C, k/h';
  celsiusBtn.onclick = updateButton;

  selectUnitsDiv.append(celsiusBtn);

  const fahrenheitBtn = document.createElement('button');
  fahrenheitBtn.classList.add('unitsBtn');
  fahrenheitBtn.textContent = '°F, mph';
  fahrenheitBtn.onclick = updateButton;

  selectUnitsDiv.append(fahrenheitBtn);

  document.body.append(selectUnitsDiv);
};

export default selectUnits;
