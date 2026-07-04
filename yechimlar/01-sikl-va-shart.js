
// 1.1 — 1 dan n gacha yig'indi.  n=5 -> 15
function yigindi(n) {
  // TODO
  let finish = 0
  for (let i = 1; i <= n; i++) {
    finish += i
  }
  return finish
}

// 1.2 — 1 dan n gacha juft sonlar yig'indisi.  n=6 -> 12
function juftYigindi(n) {
  // TODO
  let result = 0
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      result += i
    }
  }
  return result
}

// 1.3 — n faktorial.  n=5 -> 120
function faktorial(n) {
  // TODO
  if (n <= 1) return 1
  return n * faktorial(n - 1)
}

// 1.4 — raqamlar yig'indisi.  1234 -> 10
function raqamlarYigindisi(n) {
  // TODO
  let result = 0
  String(n).split('').map(number => {
    result += Number(number)
  })
  return result
}

// 1.5 — tub sonmi.  7 -> true, 8 -> false
function tubmi(n) {
  if (n < 2) return false;          // 0 va 1 tub emas
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;  // bo'linsa — tub emas
  }
  return true;
}


// 1.6 — FizzBuzz massiv.  5 -> ["1","2","Fizz","4","Buzz"]
function fizzBuzz(n) {
  // TODO
  const arr = Array.from({ length: n }).map((_, index) => index + 1)
  return arr.map(item => (item % 3 == 0 && item % 5 == 0) ? 'FizzBuzz' : item % 3 == 0 ? 'Fizz' : item % 5 == 0 ? 'Buzz' : String(item))
}

// 1.7 — raqamlar soni.  2026 -> 4
function raqamlarSoni(n) {
  // TODO
  return n.toString().length
}

// 1.8 — 3 yoki 5 ga bo'linadiganlar yig'indisi.  10 -> 33
function uchYokiBesh(n) {
  let result = 0
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i
    }
  }
  return result
}

// 1.9 — eng katta raqam.  2719 -> 9
function engKattaRaqam(n) {
  // TODO
  const biggest = Math.max(...String(n).split(''))
  return biggest
}

// 1.10 — sonni teskari aylantirish.  1234 -> 4321
function teskariSon(n) {
  // TODO
  return String(n).split('').reverse().join('')
}

// ---------------- TEST ----------------
console.log("1.1 ", yigindi(5), "| kutilgan: 15");
console.log("1.2 ", juftYigindi(6), "| kutilgan: 12");
console.log("1.3 ", faktorial(5), "| kutilgan: 120");
console.log("1.4 ", raqamlarYigindisi(1234), "| kutilgan: 10");
console.log("1.5 ", tubmi(7), tubmi(8), "| kutilgan: true false");
console.log("1.6 ", JSON.stringify(fizzBuzz(5)), '| kutilgan: ["1","2","Fizz","4","Buzz"]');
console.log("1.7 ", raqamlarSoni(2026), "| kutilgan: 4");
console.log("1.8 ", uchYokiBesh(10), "| kutilgan: 33");
console.log("1.9 ", engKattaRaqam(2719), "| kutilgan: 9");
console.log("1.10", teskariSon(1234), "| kutilgan: 4321");
