# Alexey Lavrishin

## To contact me:

- **phone: +375293385529**
- **Discord (rs-school): Alexey(@LavrishinA)**
- **e-mail: iHasher007@gmail.com**
- **GitHub: [LavrishinA](https://github.com/LavrishinA)**
- **Facebook: [Alexey Lavrishin](https://www.facebook.com/profile.php?id=100007686042012)**

---

## About me:

**I am 35 years old and am currently dedicated to teaching the technologies necessary for the position of front-end junior developer. This is the main goal for the near future in life.**

> **My strengths:**
>
> > - **Discipline and Perseverance**
> > - **Good learnability**
> > - **Team player**

---

> **My slogan:**
>
> > **Forget about motivation and talent, and focus on discipline - your life will begin to change almost instantly.**

---

## Skills:

- **HTML**
- **CSS**
- **JavaScript**
- **Ehglish (Intermediate)**

---

## Code example:

```
const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTips(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const averageSumTotals = calcAverage(totals);
const averageSumTips = calcAverage(tips);
console.log(`${averageSumTips}`);
```

---
