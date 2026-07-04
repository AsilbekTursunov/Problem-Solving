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

// 12.1 — tugunlar soni.  buildTree([1,2,3]) -> 3
function nodeSoni(root) {
  // TODO
}

// 12.2 — barcha qiymatlar yig'indisi.  buildTree([1,2,3]) -> 6
function yigindi(root) {
  // TODO
}

// 12.3 — eng katta qiymat.  buildTree([3,9,20,null,null,15,7]) -> 20
function maxQiymat(root) {
  // TODO
}

// 12.4 — simmetrikmi.  buildTree([1,2,2,3,4,4,3]) -> true
function simmetrikmi(root) {
  // TODO
}

// 12.5 — inorder traversal massivi.  buildTree([1,null,2,3]) -> [1,3,2]
function inorder(root) {
  // TODO
}

// 12.6 — ikki daraxt bir xilmi.  (buildTree([1,2,3]), buildTree([1,2,3])) -> true
function birxilmi(a, b) {
  // TODO
}

// 12.7 — ildizdan-bargcha yig'indisi target bo'lgan yo'l bormi.
//        (buildTree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22) -> true
function pathSumBor(root, target) {
  // TODO
}

// 12.8 — minimal chuqurlik.  buildTree([3,9,20,null,null,15,7]) -> 2
function minChuqurlik(root) {
  // TODO
}

// 12.9 — level order (massivlar massivi).  buildTree([3,9,20,null,null,15,7]) -> [[3],[9,20],[15,7]]
function levelOrder(root) {
  // TODO
}

// 12.10 — BONUS diametr (qirralar soni).  buildTree([1,2,3,4,5]) -> 3
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
