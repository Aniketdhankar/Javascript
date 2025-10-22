const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height (${height})`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight (${weight})`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
      results.innerHTML = `<span style="color:blue">${bmi}</span> - Underweight`;
    } else if (bmi < 25) {
      results.innerHTML = `<span style="color:green">${bmi}</span> - Normal weight`;
    } else if (bmi < 30) {
      results.innerHTML = `<span style="color:orange">${bmi}</span> - Overweight`;
    } else {
      results.innerHTML = `<span style="color:red">${bmi}</span> - Obese`;
    }
  }
});
