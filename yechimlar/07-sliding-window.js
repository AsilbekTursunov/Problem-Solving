// ============================================
// Mavzu 7: Sliding Window — YECHIMLAR
// Tekshirish:  node yechimlar/07-sliding-window.js
// ============================================

// 7.1 — k ta ketma-ketning min yig'indisi.  ([3,1,4,1,5,9,2], 2) -> 4
function minSumK(arr, k) {
  // TODO
  let result = 0
  for (i = 0; i <= k - 1; i++) {
    result += arr[i]
  }
  return result
}

// 7.2 — har oyna yig'indisi.  ([1,2,3,4,5], 2) -> [3,5,7,9]
function windowSums(arr, k) {
  // TODO
  const result = []
  let start = arr.indexOf(k) || 0
  while (start <= arr.length - 1) {
    result.push(arr[start - 1] + arr[start])
    start++
  }
  return result
}

// 7.3 — max o'rtacha.  ([1,12,-5,-6,50,3,6,7,23], 4) -> 12.75
function maxAverageK(arr, k) {
  // TODO
  const length = arr.length
  let left = 0
  let right = k - 1
  let maxAverage = 0
  while (right <= length) {
    let result = 0
    for (i = left; i <= right; i++) {
      result += arr[i]
      if (maxAverage < result) {
        maxAverage = result
      }
    }
    left++
    right++
  }

  return maxAverage / k
}


// 7.4 — eng uzun ketma-ket 1 lar.  [1,1,0,1,1,1] -> 3
function maxKetmaKetBir(arr) {
  // TODO
  const result = arr.reduce((acc, item) => {
    if (item === 1) {
      acc++
    } else {
      acc = 0
    }
    return acc
  }, 0)
  return result
}


// 7.5 — k masofada takror bormi.  ([1,2,3,1], 3) -> true
function yaqinTakror(arr, k) {
  // TODO 
  const result = arr.some((item, index, arr) => (item === arr[index + k]) ? true : false)
  return result
}


// 7.6 — oynada max unli.  ("abciiidef", 3) -> 3
function maxUnli(s, k) {
  // TODO
  const result = new Set()
  const unlilar = ['a', 'i', 'o', 'e', 'u']

  for (const item of s) {
    if (unlilar.includes(item)) {
      result.add(item)
    }
  }

  return result.size
}

// 7.7 — o'rtachasi threshold dan kichik bo'lmagan oynalar soni.  ([2,2,2,2,5,5,5,8], 3, 4) -> 3
function ortachaGE(arr, k, threshold) {
  // TODO

  const length = arr.length
  let left = 0
  let right = k - 1
  let maxAverage = 0
  while (right < length) {
    let result = 0
    for (i = left; i <= right; i++) {
      result += arr[i]
    }
    if (result / k >= threshold) {
      maxAverage += 1
    }
    left++
    right++
  }

  return maxAverage
}

// 7.8 — takrorsiz eng uzun pastki satr.  "abcabcbb" -> 3
function engUzunTakrorsiz(s) {
  // TODO
  let lastLetter = ''
  let result = 0
  for (const item of s) {
    if (item !== lastLetter) {
      result++
    }
    lastLetter = item
  }
  return result
}

console.log("7.8 ", engUzunTakrorsiz("abcabcbb"), "| kutilgan: 3");


// 7.9 — yig'indisi >= target eng qisqa uzunlik.  (7, [2,3,1,2,4,3]) -> 2
function minUzunlik(target, arr) {
  // TODO
  let result = 0
  for (const item of arr) {
    result += item
    if (result >= target) {
      return arr.indexOf(item)
    }
  }
}



// 7.10 — BONUS k ta 0 ni almashtirib eng uzun 1 lar.  ([1,1,1,0,0,0,1,1,1,1,0], 2) -> 6
function longestOnes(arr, k) {
  // TODO
}

// ---------------- TEST ----------------
console.log("7.1 ", minSumK([3, 1, 4, 1, 5, 9, 2], 2), "| kutilgan: 4");
console.log("7.2 ", JSON.stringify(windowSums([1, 2, 3, 4, 5], 2)), "| kutilgan: [3,5,7,9]");
console.log("7.3 ", maxAverageK([1, 12, -5, -6, 50, 3], 4), "| kutilgan: 12.75");
console.log("7.4 ", maxKetmaKetBir([1, 1, 0, 1, 1, 1]), "| kutilgan: 3");
console.log("7.5 ", yaqinTakror([1, 2, 3, 1], 3), "| kutilgan: true");
console.log("7.6 ", maxUnli("abciiidef", 3), "| kutilgan: 3");
console.log("7.7 ", ortachaGE([2, 2, 2, 2, 5, 5, 5, 8], 3, 4), "| kutilgan: 3");
console.log("7.8 ", engUzunTakrorsiz("abcabcbb"), "| kutilgan: 3");
console.log("7.9 ", minUzunlik(7, [2, 3, 1, 2, 4, 3]), "| kutilgan: 2");
console.log("7.10", longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2), "| kutilgan: 6 (bonus)");
