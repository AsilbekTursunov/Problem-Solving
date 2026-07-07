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

**12.1.** 🟢 **Tugunlar soni.** Ikkilik daraxt (`root`/ildiz — eng yuqoridagi tugun, har tugunning `left`/chap va `right`/o'ng bolasi bo'lishi mumkin) ning ildizi berilgan. Daraxtda jami nechta tugun borligini sanab qaytaring. Test uchun `buildTree([...])` yordamchisi massivdan daraxt yasab beradi.
   - **Misol:** `buildTree([1,2,3])` → `3` — ildiz `1` va uning ikki bolasi `2`, `3`, jami 3 ta.

**12.2.** 🟢 **Qiymatlar yig'indisi.** Ikkilik daraxt berilgan. Barcha tugunlarning qiymatlarini qo'shib, umumiy yig'indini qaytaring.
   - **Misol:** `buildTree([1,2,3])` → `6` — chunki `1+2+3 = 6`.

**12.3.** 🟡 **Eng katta qiymat.** Ikkilik daraxt berilgan. Barcha tugunlar orasidan eng katta qiymatni topib qaytaring.
   - **Misol:** `buildTree([3,9,20,null,null,15,7])` → `20` — daraxtdagi qiymatlar `3,9,20,15,7`, eng kattasi `20`.

**12.4.** 🟡 **Simmetrikmi?** Ikkilik daraxt berilgan. Uning chap va o'ng qismlari o'rta o'qqa nisbatan **oyna kabi** aks etsa (bir-birining ko'zgudagi tasviri bo'lsa) `true`, aks holda `false` qaytaring.
   - **Misol:** `buildTree([1,2,2,3,4,4,3])` → `true` — chap tarmoq `2,3,4` va o'ng tarmoq `2,4,3` bir-birining oynasi.
   - *(LeetCode 101)*

**12.5.** 🟡 **Inorder aylanib chiqish.** Ikkilik daraxt berilgan. Tugunlarni **inorder** tartibda (avval chap tarmoq → keyin ildiz → keyin o'ng tarmoq) aylanib chiqib, qiymatlarni shu tartibda massiv qilib qaytaring.
   - **Misol:** `buildTree([1,null,2,3])` → `[1,3,2]` — `1` ning chapi yo'q, o'zi olinadi; keyin o'ng tarmoqda `3` (chap) → `2` (ildiz).
   - *(LeetCode 94)*

**12.6.** 🟡 **Ikki daraxt bir xilmi?** Ikkita ikkilik daraxtning ildizi berilgan. Ular **ham tuzilishi, ham qiymatlari** bilan to'liq bir xil bo'lsa `true`, aks holda `false` qaytaring.
   - **Misol:** `(buildTree([1,2,3]), buildTree([1,2,3]))` → `true` — ikkala daraxt ham aynan bir xil.
   - *(LeetCode 100)*

**12.7.** 🟡 **Yo'l yig'indisi.** Ikkilik daraxt va `target` soni berilgan. Ildizdan boshlab bargcha (`leaf` — bolasi yo'q tugun) gacha yuriladigan biror yo'ldagi qiymatlar yig'indisi aynan `target` ga teng bo'lsa `true`, aks holda `false` qaytaring.
   - **Misol:** `(buildTree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22)` → `true` — `5 → 4 → 11 → 2` yo'li yig'indisi `22`.
   - *(LeetCode 112)*

**12.8.** 🟡 **Minimal chuqurlik.** Ikkilik daraxt berilgan. Ildizdan eng yaqin **bargcha** (bolasi yo'q tugun) gacha bo'lgan yo'ldagi tugunlar sonini qaytaring.
   - **Misol:** `buildTree([3,9,20,null,null,15,7])` → `2` — eng yaqin bargcha `9` (ildiz `3` dan bittagina qadam), yo'lda 2 ta tugun.
   - *(LeetCode 111)*

**12.9.** 🔴 **Daraja bo'yicha aylanish (level order).** Ikkilik daraxt berilgan. Tugunlarni **daraja-daraja** (avval ildiz, keyin uning bolalari, keyin nabiralari...) aylanib chiqib, har darajaning qiymatlarini alohida massivda, hammasini bitta massivlar massivi ichida qaytaring.
   - **Misol:** `buildTree([3,9,20,null,null,15,7])` → `[[3],[9,20],[15,7]]` — 0-daraja `[3]`, 1-daraja `[9,20]`, 2-daraja `[15,7]`.
   - *(LeetCode 102)*

**12.10.** 🔴 BONUS — **Diametr.** Ikkilik daraxt berilgan. Ixtiyoriy ikki tugunni tutashtiruvchi eng uzun yo'lni toping va undagi **qirralar** (tugunlar orasidagi bog'lanishlar) sonini qaytaring. Bu yo'l ildizdan o'tmasligi ham mumkin.
   - **Misol:** `buildTree([1,2,3,4,5])` → `3` — eng uzun yo'l `4 → 2 → 1 → 3` (yoki `5 → 2 → 1 → 3`), unda 3 ta qirra bor.
   - *(LeetCode 543)*
