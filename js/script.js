function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1; 
  }

let text1 = document.querySelector("#text1");

let clear = document.querySelector("#clear");
clear.addEventListener("click", () => location.reload());

let igual = document.querySelector("#igual");
igual.addEventListener("click", () => text1.value=eval(text1.value));

let btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    displaynum(btn.value)
  })
})