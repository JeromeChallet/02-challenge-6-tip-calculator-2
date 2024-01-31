function calcTip(billValue) {
  let tip = 0;
  let total = 0;
  if (billValue >= 50 || billValue <= 300) {
    tip = (billValue * 20) / 100;
    total = billValue + tip;
    tips.push[tip];
    totals.push[total];
  } else {
    tip = (billValue * 15) / 100;
    total = billValue + tip;
    tips.push[tip];
    totals.push[total];
  }
}

const bills = [125, 555, 44];
let tips = [];
let totals = [];

for (i = 0; i <= bills.length; i++) {
  console.log(calcTip(bills[i]));
}
