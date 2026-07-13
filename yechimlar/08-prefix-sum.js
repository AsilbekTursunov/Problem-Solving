// ============================================
// Mavzu 8: Prefix Sum — YECHIMLAR
// Tekshirish:  node yechimlar/08-prefix-sum.js
// ============================================

// 8.1 — Oraliq yig'indisi.
// Massiv va ikki indeks i, j berilgan.
// i-indeksdan j-indeksgacha (ikkalasi ham qo'shiladi) elementlar yig'indisini qaytaring.
// Misol: ([2,4,6,8], 1, 2) -> 10   (4+6)
function rangeSum(arr, i, j) {
  // TODO
  let result = 0
  for (let index = i; index <= j; index++) {
    result += arr[index]
  }
  return result
}

// 8.2 — Prefix (running sum) massivini tuzing.
// Yangi massiv qaytaring: har o'rinda "boshidan shu indeksgacha"
// (shu indeks ham qo'shilib) barcha elementlar yig'indisi tursin.
// Misol: [1,2,3,4,5,6] -> [1,3,6,10,15,21]   (1, 1+2=3, 1+2+3=6, ...)
function buildPrefix(arr) {
  // TODO
  let right = 1
  let result = [...arr]
  while (right < arr.length) {
    ;[result[right]] = [result[right] + result[right - 1]]
    right++
  }
  return result
}

// 8.3 — Running max — har indeksgacha eng katta qiymat.
// Yangi massiv qaytaring: har o'rinda "boshidan shu indeksgacha"
// ko'rilgan eng katta qiymat tursin.
// Misol: [3,1,4,1,5] -> [3,3,4,4,5]   (3, max(3,1)=3, max(3,4)=4, ...)
function prefixMax(arr) {
  // TODO
  let right = 1
  let result = [...arr]
  while (right < arr.length) {
    ;[result[right]] = [Math.max(result[right], result[right - 1])]
    right++
  }
  return result
}

// 8.4 — Pivot indeks.
// Shunday indeksni toping-ki, uning chap tomonidagi elementlar yig'indisi
// o'ng tomonidagi elementlar yig'indisiga teng bo'lsin (indeksning o'zi hisobga olinmaydi).
// Bunday indeks bo'lmasa -1 qaytaring.
// Misol: [1,7,3,6,5,6] -> 3   (chapi 1+7+3=11, o'ngi 5+6=11)
function pivotIndex(arr) {
  // TODO
  const length = arr.length

  for (const item of arr) {
    let acc = { resultLeft: 0, resultRight: 0, result: 0 }
    const index = arr.indexOf(item)
    for (let i = 0; i < index; i++) {
      acc.resultLeft += arr[i]
    }

    for (let i = index + 1; i < length; i++) {
      acc.resultRight += arr[i]
    }

    if (acc.resultLeft === acc.resultRight) {
      return index
    } else if (index === length && acc.resultLeft !== acc.resultRight) {
      return -1
    }
  }
}

// 8.5 — Maksimal pastki massiv yig'indisi (Kadane).
// "Pastki massiv" = massivning ketma-ket (uzluksiz) bo'lagi.
// Kamida bitta elementli bo'laklar orasidan eng katta yig'indini qaytaring.
// Misol: [-2,1,-3,4,-1,2,1,-5,4] -> 6   (eng yaxshi bo'lak [4,-1,2,1])
function maxSubArray(arr) {
  // TODO
  let maxValue = 0
  arr.forEach((_, index) => {
    let result = 0
    for (let i = index; i < arr.length; i++) {
      result += arr[i]
      if (result > maxValue) {
        maxValue = result
      }
    }
  })
  return maxValue
}

// 8.6 — Yig'indisi k ga teng pastki massivlar soni.
// Massiv va son k berilgan. Yig'indisi aynan k ga teng bo'lgan
// ketma-ket bo'laklar (pastki massivlar) nechtaligini qaytaring.
// Misol: ([1,1,1], 2) -> 2   (ikkita [1,1] bo'lagi bor)
function subarraySumK(arr, k) {
  // TODO
  let result = 0
  let count = 0
  for (const item of arr) {
    result += item
    count++
    if (result == k) {
      return count
    }
  }
}
// subarraySumK([1, 1, 1], 2)

// 8.7 — O'zidan boshqa hammaning ko'paytmasi (bo'lishsiz).
// Yangi massiv qaytaring: har o'rinda o'sha element bundan mustasno
// qolgan barcha elementlar ko'paytmasi tursin. Bo'lish (/) ishlatmang.
// Misol: [1,2,3,4] -> [24,12,8,6]   (2*3*4=24, 1*3*4=12, ...)
function productExceptSelf(arr) {
  // TODO
  const result = arr.map((_, index) => {
    let multiplication = 1
    arr.forEach((gth, gthIndex) => {
      if (gthIndex !== index) {
        multiplication *= gth
      }
    })
    return multiplication
  })
}

// 8.8 — Bir nechta oraliq savoliga javob bering.
// Massiv va savollar ro'yxati berilgan; har savol [i, j] ko'rinishida (ikkalasi ham hisobga olinadi).
// Har savol uchun [i..j] oraliq yig'indisini hisoblab, javoblar massivini qaytaring.
// Misol: ([1,2,3,4,5], [[0,1],[2,4]]) -> [3,12]   (1+2=3, 3+4+5=12)
function rangeSumQueries(arr, queries) {
  // TODO
  const result = queries.reduce((acc, item, index) => {
    const [from, to] = item
    let result = 0
    for (let i = from; i <= to; i++) {
      result += arr[i]
    }
    acc.push(result)
    return acc
  }, [])

  return result
}

// 8.9 — Eng kichik boshlang'ich qiymat.
// startValue sonidan boshlab massiv elementlarini chapdan o'ngga ketma-ket qo'shib borasiz.
// Shunday eng kichik MUSBAT startValue ni toping-ki, joriy yig'indi hech qachon 1 dan pastga tushmasin.
// Misol: [-3,2,-3,4,2] -> 5   (5 dan boshlasak yig'indi doim >= 1 qoladi)
function minStartValue(arr) {
  // TODO
  // TODO
  let startValue = 0

  for (let i = 1; true; i++) {
    let result = i
    for (let i = 0; i < arr.length - 1; i++) {
      result += arr[i]
      if (result > 0) {
        continue
      } else {
        break
      }
    }
    if (result > 0) {
      startValue = i
      break
    }
  }
  return startValue
}

// 8.10 — BONUS: yig'indisi k bo'lgan eng uzun pastki massiv uzunligi.
// Massiv va son k berilgan. Yig'indisi aynan k ga teng bo'lgan ketma-ket bo'laklar
// orasidan eng uzunining uzunligini qaytaring (bunday bo'lak bo'lmasa 0).
// Misol: ([1,-1,5,-2,3], 3) -> 4   (bo'lak [1,-1,5,-2], yig'indisi 3, uzunligi 4)
function maxSubArrayLen(arr, k) {
  // TODO
  const result = arr.reduce(
    (acc, item, index) => {
      acc.result += item
      if (acc.result === k) {
        acc.index = index + 1
      }
      return acc
    },
    { result: 0, index: 0 },
  )
  return result.index
}

// ---------------- TEST ----------------
console.log('8.1 ', rangeSum([2, 4, 6, 8], 1, 2), '| kutilgan: 10')
console.log('8.2 ', JSON.stringify(buildPrefix([1, 2, 3, 4])), '| kutilgan: [1,3,6,10]')
console.log('8.3 ', JSON.stringify(prefixMax([3, 1, 4, 1, 5])), '| kutilgan: [3,3,4,4,5]')
console.log('8.4 ', pivotIndex([1, 7, 3, 6, 5, 6]), '| kutilgan: 3')
console.log('8.5 ', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), '| kutilgan: 6')
console.log('8.6 ', subarraySumK([1, 1, 1], 2), '| kutilgan: 2')
console.log('8.7 ', JSON.stringify(productExceptSelf([1, 2, 3, 4])), '| kutilgan: [24,12,8,6]')
console.log(
  '8.8 ',
  JSON.stringify(
    rangeSumQueries(
      [1, 2, 3, 4, 5],
      [
        [0, 1],
        [2, 4],
      ],
    ),
  ),
  '| kutilgan: [3,12]',
)
console.log('8.9 ', minStartValue([-3, 2, -3, 4, 2]), '| kutilgan: 5')
console.log('8.10', maxSubArrayLen([1, -1, 5, -2, 3], 3), '| kutilgan: 4 (bonus)')
