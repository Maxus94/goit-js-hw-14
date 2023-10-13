const decrBut = document.querySelector('button[data-action ="decrement"]');
const incrBut = document.querySelector('button[data-action ="increment"]');
const output = document.querySelector("#value");
let counterValue = 0;

const decr = (evt) => {
  counterValue -= 1;
  output.textContent = counterValue;
};

const incr = () => {
  counterValue += 1;
  output.textContent = counterValue;
};

decrBut.addEventListener("click", decr);
incrBut.addEventListener("click", incr);
