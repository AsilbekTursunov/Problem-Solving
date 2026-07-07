// ============================================
// Mavzu 12: Binary Tree — YECHIMLAR
// Tekshirish:  node yechimlar/12-binary-tree.js
// ============================================

// --- Yordamchilar (testlar shu orqali ishlaydi) ---
class TreeNode { constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }
function buildTree(arr) {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]); const q = [root]; let i = 1;
  while (i < arr.length) {
    const node = q.shift();
    if (arr[i] != null) { node.left = new TreeNode(arr[i]); q.push(node.left); } i++;
    if (i < arr.length && arr[i] != null) { node.right = new TreeNode(arr[i]); q.push(node.right); } i++;
  }
  return root;
}

// 12.1 — Tugunlar soni.
// Ikkilik daraxt ildizi berilgan (har tugunning left/right bolasi
// bo'lishi mumkin). Daraxtda jami nechta tugun borligini qaytaring.
// Test uchun buildTree([...]) massivdan daraxt yasab beradi.
// Misol: buildTree([1,2,3]) -> 3   (ildiz 1 va ikki bolasi 2, 3)
function nodeSoni(root) {
  // TODO
}

// 12.2 — Qiymatlar yig'indisi.
// Ikkilik daraxt berilgan. Barcha tugunlarning qiymatlarini
// qo'shib, umumiy yig'indini qaytaring.
// Misol: buildTree([1,2,3]) -> 6   (1+2+3 = 6)
function yigindi(root) {
  // TODO
}

// 12.3 — Eng katta qiymat.
// Ikkilik daraxt berilgan. Barcha tugunlar orasidan eng katta
// qiymatni topib qaytaring.
// Misol: buildTree([3,9,20,null,null,15,7]) -> 20
function maxQiymat(root) {
  // TODO
}

// 12.4 — Simmetrikmi?
// Ikkilik daraxt berilgan. Chap va o'ng qismlari o'rta o'qqa
// nisbatan oyna kabi aks etsa true, aks holda false qaytaring.
// Misol: buildTree([1,2,2,3,4,4,3]) -> true
function simmetrikmi(root) {
  // TODO
}

// 12.5 — Inorder aylanib chiqish.
// Ikkilik daraxt berilgan. Tugunlarni inorder tartibda
// (chap tarmoq -> ildiz -> o'ng tarmoq) aylanib, qiymatlarni
// shu tartibda massiv qilib qaytaring.
// Misol: buildTree([1,null,2,3]) -> [1,3,2]
function inorder(root) {
  // TODO
}

// 12.6 — Ikki daraxt bir xilmi?
// Ikkita daraxt ildizi berilgan. Ular ham tuzilishi, ham
// qiymatlari bilan to'liq bir xil bo'lsa true, aks holda false.
// Misol: (buildTree([1,2,3]), buildTree([1,2,3])) -> true
function birxilmi(a, b) {
  // TODO
}

// 12.7 — Yo'l yig'indisi.
// Ikkilik daraxt va target soni berilgan. Ildizdan bargchagacha
// (bolasi yo'q tugun) yuriladigan biror yo'ldagi qiymatlar yig'indisi
// aynan target ga teng bo'lsa true, aks holda false qaytaring.
// Misol: (buildTree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22) -> true
function pathSumBor(root, target) {
  // TODO
}

// 12.8 — Minimal chuqurlik.
// Ikkilik daraxt berilgan. Ildizdan eng yaqin bargchagacha
// (bolasi yo'q tugun) bo'lgan yo'ldagi tugunlar sonini qaytaring.
// Misol: buildTree([3,9,20,null,null,15,7]) -> 2
function minChuqurlik(root) {
  // TODO
}

// 12.9 — Daraja bo'yicha aylanish (level order).
// Ikkilik daraxt berilgan. Tugunlarni daraja-daraja (avval ildiz,
// keyin bolalari, keyin nabiralari...) aylanib, har darajaning
// qiymatlarini alohida massivda, hammasini massivlar massivida qaytaring.
// Misol: buildTree([3,9,20,null,null,15,7]) -> [[3],[9,20],[15,7]]
function levelOrder(root) {
  // TODO
}

// 12.10 — BONUS: Diametr (qirralar soni).
// Ikkilik daraxt berilgan. Ixtiyoriy ikki tugunni tutashtiruvchi
// eng uzun yo'lni topib, undagi qirralar sonini qaytaring.
// Bu yo'l ildizdan o'tmasligi ham mumkin.
// Misol: buildTree([1,2,3,4,5]) -> 3
function diametr(root) {
  // TODO
}

// ---------------- TEST ----------------
console.log("12.1 ", nodeSoni(buildTree([1,2,3])),                          "| kutilgan: 3");
console.log("12.2 ", yigindi(buildTree([1,2,3])),                           "| kutilgan: 6");
console.log("12.3 ", maxQiymat(buildTree([3,9,20,null,null,15,7])),         "| kutilgan: 20");
console.log("12.4 ", simmetrikmi(buildTree([1,2,2,3,4,4,3])),               "| kutilgan: true");
console.log("12.5 ", JSON.stringify(inorder(buildTree([1,null,2,3]))),      "| kutilgan: [1,3,2]");
console.log("12.6 ", birxilmi(buildTree([1,2,3]), buildTree([1,2,3])),      "| kutilgan: true");
console.log("12.7 ", pathSumBor(buildTree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22), "| kutilgan: true");
console.log("12.8 ", minChuqurlik(buildTree([3,9,20,null,null,15,7])),      "| kutilgan: 2");
console.log("12.9 ", JSON.stringify(levelOrder(buildTree([3,9,20,null,null,15,7]))), "| kutilgan: [[3],[9,20],[15,7]]");
console.log("12.10", diametr(buildTree([1,2,3,4,5])),                       "| kutilgan: 3");
