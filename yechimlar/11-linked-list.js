// ============================================
// Mavzu 11: Linked List — YECHIMLAR
// Tekshirish:  node yechimlar/11-linked-list.js
// ============================================

// --- Yordamchilar (testlar shu orqali ishlaydi) ---
class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function build(arr) { let d = new ListNode(0), c = d; for (const v of arr) { c.next = new ListNode(v); c = c.next; } return d.next; }
function toArr(head) { const r = []; while (head) { r.push(head.val); head = head.next; } return r; }

// 11.1 — Ro'yxat uzunligi.
// Bog'langan ro'yxat boshi berilgan (tugunlar `next` orqali bog'langan).
// Ro'yxatda nechta tugun borligini sanab, shu sonni qaytaring.
// Misol: build([1,2,3]) -> 3   (zanjirda 3 ta tugun)
function uzunlik(head) {
  // TODO
}

// 11.2 — Qiymatlar yig'indisi.
// Bog'langan ro'yxat berilgan. Barcha tugunlarning qiymatlarini
// qo'shib, umumiy yig'indini qaytaring.
// Misol: build([1,2,3,4]) -> 10   (1+2+3+4 = 10)
function yigindi(head) {
  // TODO
}

// 11.3 — O'rtadagi tugun qiymati.
// Toq uzunlikdagi bog'langan ro'yxat berilgan. Aniq o'rtada
// turgan tugunning qiymatini qaytaring.
// Misol: build([1,2,3,4,5]) -> 3   (5 tugundan o'rtadagisi 3)
function ortaQiymat(head) {
  // TODO
}

// 11.4 — Qiymat bormi?
// Bog'langan ro'yxat va val soni berilgan. Shu qiymatga teng
// tugun ro'yxatda uchrasa true, aks holda false qaytaring.
// Misol: (build([1,2,3]), 2) -> true   (2 qiymatli tugun bor)
function bormi(head, val) {
  // TODO
}

// 11.5 — Oxiridan n-chi tugun qiymati.
// Bog'langan ro'yxat va n soni berilgan. Oxiridan sanaganda
// n-o'rinda turgan tugun qiymatini qaytaring (oxirgisi 1-o'rin).
// Misol: (build([1,2,3,4,5]), 2) -> 4   (oxiridan 2-tugun 4)
function oxirdanN(head, n) {
  // TODO
}

// 11.6 — Qiymatli tugunlarni o'chirish.
// Bog'langan ro'yxat va val soni berilgan. Qiymati val ga teng
// barcha tugunlarni olib tashlab, natijani toArr bilan massiv qiling.
// Misol: (build([1,2,6,3,6]), 6) -> [1,2,3]   (ikkala 6 o'chdi)
function ochir(head, val) {
  // TODO
}

// 11.7 — Ikki saralangan ro'yxatni birlashtirish.
// O'sish tartibida saralangan ikkita ro'yxat berilgan. Ularni
// bitta saralangan ro'yxatga birlashtirib, toArr bilan massiv qiling.
// Misol: (build([1,3,5]), build([2,4])) -> [1,2,3,4,5]
function birlashtir(a, b) {
  // TODO
}

// 11.8 — Dublikatlarni o'chirish.
// O'sish tartibida saralangan ro'yxat berilgan. Takrorlangan
// qiymatlardan bittasini qoldirib, natijani toArr bilan massiv qiling.
// Misol: build([1,1,2,3,3]) -> [1,2,3]
function dupOchir(head) {
  // TODO
}

// 11.9 — Palindrom ro'yxat.
// Bog'langan ro'yxat berilgan. Uning qiymatlari oldidan ham,
// orqadan ham bir xil o'qilsa true, aks holda false qaytaring.
// Misol: build([1,2,2,1]) -> true   (teskari o'qilsa ham aynan o'zi)
function palindromList(head) {
  // TODO
}

// 11.10 — BONUS: Ikki sonni qo'shish.
// Har biri bitta sonni ifodalovchi ikki ro'yxat berilgan, raqamlar
// teskari tartibda (birinchi tugun — birlar xonasi). Sonlarni qo'shib,
// natijani xuddi shunday teskari tartibda toArr bilan massiv qiling.
// Misol: (build([2,4,3]), build([5,6,4])) -> [7,0,8]   (342+465=807)
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
