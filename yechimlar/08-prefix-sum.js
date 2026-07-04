// ============================================
// Mavzu 8: Prefix Sum — YECHIMLAR
// Tekshirish:  node yechimlar/08-prefix-sum.js
// ============================================

// 8.1 — oraliq yig'indisi.  ([2,4,6,8], 1, 2) -> 10
function rangeSum(arr, i, j) {
  // TODO
}

// 8.2 — prefix (running sum).  [1,2,3,4] -> [1,3,6,10]
function buildPrefix(arr) {
  // TODO
}

// 8.3 — running max.  [3,1,4,1,5] -> [3,3,4,4,5]
function prefixMax(arr) {
  // TODO
}

// 8.4 — pivot indeks.  [1,7,3,6,5,6] -> 3
function pivotIndex(arr) {
  // TODO
}

// 8.5 — max pastki massiv yig'indisi (Kadane).  [-2,1,-3,4,-1,2,1,-5,4] -> 6
function maxSubArray(arr) {
  // TODO
}

// 8.6 — yig'indisi k bo'lgan pastki massivlar soni.  ([1,1,1], 2) -> 2
function subarraySumK(arr, k) {
  // TODO
}

// 8.7 — o'zidan boshqa ko'paytma.  [1,2,3,4] -> [24,12,8,6]
function productExceptSelf(arr) {
  // TODO
}

// 8.8 — bir nechta oraliq savoli.  ([1,2,3,4,5], [[0,1],[2,4]]) -> [3,12]
function rangeSumQueries(arr, queries) {
  // TODO
}

// 8.9 — eng kichik boshlang'ich qiymat.  [-3,2,-3,4,2] -> 5
function minStartValue(arr) {
  // TODO
}

// 8.10 — BONUS yig'indisi k bo'lgan eng uzun pastki massiv.  ([1,-1,5,-2,3], 3) -> 4
function maxSubArrayLen(arr, k) {
  // TODO
}

// ---------------- TEST ----------------
console.log("8.1 ", rangeSum([2,4,6,8], 1, 2),       "| kutilgan: 10");
console.log("8.2 ", JSON.stringify(buildPrefix([1,2,3,4])), "| kutilgan: [1,3,6,10]");
console.log("8.3 ", JSON.stringify(prefixMax([3,1,4,1,5])),  "| kutilgan: [3,3,4,4,5]");
console.log("8.4 ", pivotIndex([1,7,3,6,5,6]),       "| kutilgan: 3");
console.log("8.5 ", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), "| kutilgan: 6");
console.log("8.6 ", subarraySumK([1,1,1], 2),        "| kutilgan: 2");
console.log("8.7 ", JSON.stringify(productExceptSelf([1,2,3,4])), "| kutilgan: [24,12,8,6]");
console.log("8.8 ", JSON.stringify(rangeSumQueries([1,2,3,4,5], [[0,1],[2,4]])), "| kutilgan: [3,12]");
console.log("8.9 ", minStartValue([-3,2,-3,4,2]),    "| kutilgan: 5");
console.log("8.10", maxSubArrayLen([1,-1,5,-2,3], 3), "| kutilgan: 4 (bonus)");
