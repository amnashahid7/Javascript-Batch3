let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let result = document.getElementById("result");

  if (height == "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter a valid height ${height}`;
  }else
  if (weight == "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter a valid weight ${weight}`;
  } else{
    let bmi = (weight / ((height* height / 10000))).toFixed(2);
    result.innerHTML = `Your BMI is ${bmi}`;
  }
});
