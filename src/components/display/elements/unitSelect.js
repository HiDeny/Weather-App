// const selectUnits = () => {
//   const current = document.querySelector('.unitsActive');
// };

const selectUnits = () => {
  const selectUnitsDiv = document.createElement('div');

  const celsiusBtn = document.createElement('button');
  celsiusBtn.classList.add('cBtn');
  celsiusBtn.classList.add('unitsActive');
  celsiusBtn.textContent = '°C, k/h';
  selectUnitsDiv.append(celsiusBtn);

  const fahrenheitBtn = document.createElement('button');
  fahrenheitBtn.classList.add('fBtn');
  fahrenheitBtn.textContent = '°F, mph';
  selectUnitsDiv.append(fahrenheitBtn);

  document.body.append(selectUnitsDiv);
};

export default selectUnits;
