// ============================================
// Mavzu 6: Binary Search — YECHIMLAR
// Tekshirish:  node yechimlar/06-binary-search.js
// ============================================

// 6.1 — indeks (yo'q -> -1).  ([2,5,8,12,16], 12) -> 3
function binarySearch(arr, target) {
  // TODO
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // o'rta indeks (overflow'dan himoya uchun shunday yoziladi)
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;            // topildi
    } else if (arr[mid] < target) {
      left = mid + 1;        // o'ng yarmga o'tamiz
    } else {
      right = mid - 1;       // chap yarmga o'tamiz
    }
  }

  return -1;                 // topilmadi
}


// 6.2 — bormi (true/false).  ([1,2,3,4,5], 4) -> true
function bormi(arr, target) {
  // TODO
  return arr.includes(target)
}

// 6.3 — insert pozitsiya.  ([1,3,5,6], 5) -> 2
function insertPoz(arr, target) {
  // TODO
  return arr.indexOf(target)
}


// 6.4 — to'liq kvadratmi.  16 -> true, 14 -> false
function toliqKvadrat(n) {
  // TODO
  return Math.sqrt(n) ** 2 === n
}

// 6.5 — kvadrat ildiz (butun).  8 -> 2, 16 -> 4
function kvadratIldiz(n) {
  // TODO
  return Math.sqrt(n)
}

// 6.6 — birinchi uchragan indeks.  ([5,7,7,8,8,10], 8) -> 3
function birinchiIndeks(arr, target) {
  // TODO
  for (const number of arr) {
    if (number === target) return arr.indexOf(number)
  }
}

// 6.7 — necha marta.  ([1,2,2,2,3], 2) -> 3
function nechaMarta(arr, target) {
  // TODO
  return arr.reduce((acc, item) => {
    if (item === target) {
      acc++
    }
    return acc
  }, 0)
}

// 6.8 — ceiling.  ([1,3,5,7], 4) -> 5
function ceiling(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
  let ans = -1; // topilmasa -1 (yoki null)

  while (lo <= hi) {
    const mid = (lo + hi) >> 1; // (lo+hi)/2 ning butun qismi

    if (arr[mid] >= target) {
      ans = arr[mid];  // candidate — saqlab qo'yamiz
      hi = mid - 1;    // lekin balki chapda yana kichigi bordir
    } else {
      lo = mid + 1;    // arr[mid] juda kichik — o'ngga suriladi
    }
  }

  return ans;
}

// 6.9 — yagona element (saralangan).  [1,1,2,3,3,4,4] -> 2
function yagona(arr) {
  // TODO
  const results = []
  const counts = arr.reduce((acc, item) => {
    return { ...acc, [item]: ((acc[item] || 0) + 1) }
  }, {})

  Object.entries(counts).map(([key, value]) => {
    if (value === 1) {
      results.push(Number(key))
    }
  })

  return results
}

yagona([1, 1, 2, 3, 3, 4, 4])

// 6.10 — BONUS peak indeksi.  [1,2,3,1] -> 2
function peak(arr) {
  // TODO 
  let largeOne = arr?.[0]

  for (const num of arr) {
    if (num > largeOne) {
      largeOne = num
    }
  }

  return arr.indexOf(largeOne)
}

// ---------------- TEST ----------------
console.log("6.1 ", binarySearch([2, 5, 8, 12, 16], 12), "| kutilgan: 3");
console.log("6.2 ", bormi([1, 2, 3, 4, 5], 4), "| kutilgan: true");
console.log("6.3 ", insertPoz([1, 3, 5, 6], 5), "| kutilgan: 2");
console.log("6.4 ", toliqKvadrat(16), toliqKvadrat(14), "| kutilgan: true false");
console.log("6.5 ", kvadratIldiz(4), kvadratIldiz(16), "| kutilgan: 2 4");
console.log("6.6 ", birinchiIndeks([5, 7, 7, 8, 8, 10], 8), "| kutilgan: 3");
console.log("6.7 ", nechaMarta([1, 2, 2, 2, 3], 2), "| kutilgan: 3");
console.log("6.8 ", ceiling([1, 3, 5, 7], 4), "| kutilgan: 5");
console.log("6.9 ", yagona([1, 1, 2, 3, 3, 4, 4]), "| kutilgan: 2");
console.log("6.10", peak([1, 2, 3, 1]), "| kutilgan: 2 (bonus)");
