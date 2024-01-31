let tips = [];
let totals = [];

function calcTip(billValue) {
  let tip = 0;
  let total = 0;
  if (billValue >= 50 && billValue <= 300) {
    tip = (billValue * 15) / 100;
    total = billValue + tip;
  } else {
    tip = (billValue * 20) / 100;
    total = billValue + tip;
  }
  tips.push(tip);
  totals.push(total);
}

const bills = [125, 555, 44];

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
  console.log(
    `The Bill is: ${bills[i]}, Tip is ${tips[i]} and Total is ${totals[i]}`
  );
}
