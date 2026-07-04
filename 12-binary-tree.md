# Mavzu 12: Binary Tree (Ikkilik daraxt) 🌳

Daraxt — `root` (ildiz) dan boshlanadigan tuzilma. Har bir tugunda ko'pi bilan ikkita bola bo'ladi: `left` (chap) va `right` (o'ng). Daraxt bilan ishlash **rekursiya** orqali juda tabiiy chiqadi.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Daraxt maksimal chuqurligi

> **Masala:** Ikkilik daraxt berilgan. Eng uzun yo'l bo'yicha tugunlar sonini (maksimal chuqurlik) qaytaring.
> `buildTree([3, 9, 20, null, null, 15, 7])` → `3`

### 1-qadam: O'QI va TUSHUN
- **Input:** daraxt ildizi `root`
- **Output:** ildizdan eng chuqur bargacha bo'lgan tugunlar soni
- **Kalit:** daraxtning chuqurligi = bolalarining chuqurligidan kelib chiqadi

### 2-qadam: QO'LDA YECH
```
      3
     / \
    9   20
       /  \
      15   7
```
- `3` ning chuqurligi = `1 + (eng katta bola chuqurligi)`
- `9` — bargcha, chuqurligi `1`
- `20` ning chuqurligi = `1 + max(15, 7)` = `1 + 1` = `2`
- Demak `3` ning chuqurligi = `1 + max(9_chuqurligi=1, 20_chuqurligi=2)` = `1 + 2` = **`3`** ✅

Har tugun "o'zining chuqurligini" bolalaridan so'rab oladi — bu rekursiya!

### 3-qadam: REJA
1. **Base case:** agar tugun `null` bo'lsa → `0` qaytar (bo'sh daraxt chuqurligi 0)
2. **Recursive:** `1 + Math.max(chap chuqurlik, o'ng chuqurlik)` qaytar

### 4-qadam: KOD
```javascript
class TreeNode { constructor(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; } }

function depth(node) {
  if (!node) return 0;                                       // base — bo'sh
  return 1 + Math.max(depth(node.left), depth(node.right));  // o'zi + chuqur bola
}
```

### 5-qadam: TEKSHIR
- `depth(buildTree([3,9,20,null,null,15,7]))` → `3` ✅
- `depth(buildTree([1]))` → `1` ✅ (bitta tugun)
- `depth(buildTree([]))` → `0` ✅ (bo'sh)

> 🔑 **PATTERN — "rekursiv bo'l":** daraxt masalalarining aksariyati shu qolipda: **`if (!node) return ...`** (base case — bo'sh tugun), keyin **chap va o'ng uchun o'zini chaqirib**, natijalarni birlashtirish. Har doim avval `null` holatini yozing — bu cheksiz rekursiyadan saqlaydi.

---

## 📝 10 ta mashq

`yechimlar/12-binary-tree.js` da yeching. Fayl boshidagi `buildTree`, `TreeNode` yordamchilaridan foydalaning.

**12.1.** 🟢 Daraxtdagi tugunlar soni.
`buildTree([1,2,3])` → `3`

**12.2.** 🟢 Barcha qiymatlar yig'indisi.
`buildTree([1,2,3])` → `6`

**12.3.** 🟡 Eng katta qiymat.
`buildTree([3,9,20,null,null,15,7])` → `20`

**12.4.** 🟡 Daraxt simmetrikmi (o'rta o'qqa nisbatan oyna kabi)?
`buildTree([1,2,2,3,4,4,3])` → `true`  *(LeetCode 101)*

**12.5.** 🟡 Inorder traversal (chap → ildiz → o'ng) massivi.
`buildTree([1,null,2,3])` → `[1,3,2]`  *(LeetCode 94)*

**12.6.** 🟡 Ikki daraxt bir xilmi (tuzilish va qiymatlar)?
`(buildTree([1,2,3]), buildTree([1,2,3]))` → `true`  *(LeetCode 100)*

**12.7.** 🟡 Ildizdan-bargcha yig'indisi `target` bo'lgan yo'l bormi (`true`/`false`)?
`(buildTree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22)` → `true`  *(LeetCode 112)*

**12.8.** 🟡 Minimal chuqurlik (ildizdan eng yaqin **bargcha**gacha).
`buildTree([3,9,20,null,null,15,7])` → `2`  *(LeetCode 111)*

**12.9.** 🔴 Level order — daraja bo'yicha qiymatlar (massivlar massivi).
`buildTree([3,9,20,null,null,15,7])` → `[[3],[9,20],[15,7]]`  *(LeetCode 102)*

**12.10.** 🔴 BONUS — Diametr: ixtiyoriy ikki tugun orasidagi eng uzun yo'ldagi **qirralar** soni.
`buildTree([1,2,3,4,5])` → `3`  *(LeetCode 543)*
