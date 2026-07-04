// ============================================
// Mavzu 11: Linked List — YECHIMLAR
// Tekshirish:  node yechimlar/11-linked-list.js
// ============================================

// --- Yordamchilar (testlar shu orqali ishlaydi) ---
class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function build(arr) { let d = new ListNode(0), c = d; for (const v of arr) { c.next = new ListNode(v); c = c.next; } return d.next; }
function toArr(head) { const r = []; while (head) { r.push(head.val); head = head.next; } return r; }

// 11.1 — uzunlik.  build([1,2,3]) -> 3
function uzunlik(head) {
  // TODO
}

// 11.2 — qiymatlar yig'indisi.  build([1,2,3,4]) -> 10
function yigindi(head) {
  // TODO
}

// 11.3 — o'rtadagi tugun qiymati (toq).  build([1,2,3,4,5]) -> 3
function ortaQiymat(head) {
  // TODO
}

// 11.4 — qiymat bormi (true/false).  (build([1,2,3]), 2) -> true
function bormi(head, val) {
  // TODO
}

// 11.5 — oxiridan n-tugun qiymati.  (build([1,2,3,4,5]), 2) -> 4
function oxirdanN(head, n) {
  // TODO
}

// 11.6 — qiymatli tugunlarni o'chir (toArr).  (build([1,2,6,3,6]), 6) -> [1,2,3]
function ochir(head, val) {
  // TODO
}

// 11.7 — ikki saralangan ro'yxatni birlashtir (toArr).  (build([1,3,5]), build([2,4])) -> [1,2,3,4,5]
function birlashtir(a, b) {
  // TODO
}

// 11.8 — saralangan ro'yxatdan dublikatlarni o'chir (toArr).  build([1,1,2,3,3]) -> [1,2,3]
function dupOchir(head) {
  // TODO
}

// 11.9 — palindrommi.  build([1,2,2,1]) -> true
function palindromList(head) {
  // TODO
}

// 11.10 — BONUS ikki sonni qo'sh (teskari, toArr).  (build([2,4,3]), build([5,6,4])) -> [7,0,8]
function qoshSon(a, b) {
  // TODO
}

// ---------------- TEST ----------------
console.log("11.1 ", uzunlik(build([1,2,3])),                              "| kutilgan: 3");
console.log("11.2 ", yigindi(build([1,2,3,4])),                            "| kutilgan: 10");
console.log("11.3 ", ortaQiymat(build([1,2,3,4,5])),                       "| kutilgan: 3");
console.log("11.4 ", bormi(build([1,2,3]), 2),                             "| kutilgan: true");
console.log("11.5 ", oxirdanN(build([1,2,3,4,5]), 2),                      "| kutilgan: 4");
console.log("11.6 ", JSON.stringify(toArr(ochir(build([1,2,6,3,6]), 6))),  "| kutilgan: [1,2,3]");
console.log("11.7 ", JSON.stringify(toArr(birlashtir(build([1,3,5]), build([2,4])))), "| kutilgan: [1,2,3,4,5]");
console.log("11.8 ", JSON.stringify(toArr(dupOchir(build([1,1,2,3,3])))),  "| kutilgan: [1,2,3]");
console.log("11.9 ", palindromList(build([1,2,2,1])),                      "| kutilgan: true");
console.log("11.10", JSON.stringify(toArr(qoshSon(build([2,4,3]), build([5,6,4])))), "| kutilgan: [7,0,8]");
