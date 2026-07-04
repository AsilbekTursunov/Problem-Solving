# Mavzu 9: Stack (Stek) 🥞

Stack — "oxirgi kirgan, birinchi chiqadi" (LIFO) tuzilma. Tarelkalar uyumi: faqat tepasidan qo'yasiz (`push`) va tepasidan olasiz (`pop`). JS'da oddiy massiv: `arr.push(x)`, `arr.pop()`.

Qachon kerak? Qavslarni tekshirish, ortga qaytarish (undo), oxirgi ko'rilganni eslab turish kerak bo'lganda.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Qavslar to'g'rimi? (Valid Parentheses)

> **Masala:** `()[]{}` qavslari to'g'ri yopilganmi? `true`/`false`.
> `"()[]{}"` → `true`, `"(]"` → `false`, `"([)]"` → `false`

### 1-qadam: O'QI va TUSHUN
- **Input:** faqat qavslardan iborat string
- **Output:** `true`/`false`
- Har bir **yopuvchi** qavs eng **oxirgi ochilgan** qavsga mos kelishi kerak → LIFO → stack!

### 2-qadam: QO'LDA YECH
`"([)]"`:
- `(` → ochildi, stekka qo'yaman → `[ ( ]`
- `[` → stekka → `[ (, [ ]`
- `)` → yopuvchi. Stek tepasida `[` turibdi, lekin `)` ga `(` kerak edi → mos emas → **`false`** ✅

`"()"`: `(` push → `[(]`; `)` → tepada `(`, mos! pop → stek bo'sh → **`true`**

### 3-qadam: REJA
1. Bo'sh `stek` ochaman
2. Har bir belgi bo'yicha:
   - ochuvchi (`( [ {`) bo'lsa → `stek.push`
   - yopuvchi bo'lsa → `stek.pop()` qilib, mosini tekshiraman; mos emas → `false`
3. Oxirida stek **bo'sh** bo'lsa → `true` (hammasi yopilgan)

### 4-qadam: KOD
```javascript
function validParentheses(s) {
  const stek = [];
  const juft = { ')': '(', ']': '[', '}': '{' };   // yopuvchi -> ochuvchi
  for (let c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stek.push(c);
    } else {
      if (stek.pop() !== juft[c]) return false;     // mos ochuvchi emas
    }
  }
  return stek.length === 0;                          // hammasi yopildimi
}
```

### 5-qadam: TEKSHIR
- `"()[]{}"` → `true` ✅
- `"(]"` → `false` ✅
- `"([)]"` → `false` ✅
- `"("` → `false` ✅ (stek bo'sh qolmadi)

> 🔑 **PATTERN — "oxirgisini eslab tur":** eng oxirgi ochilgan/ko'rilgan narsaga qarab qaror qilinadigan masalalarda stack ishlating. `push` bilan eslab tur, `pop` bilan tekshir. "Monotonic stack" (🔴) — keyingi katta/kichik elementni topishda shu g'oyaning kuchli varianti.

---

## 📝 10 ta mashq

`yechimlar/09-stack.js` da yeching.

**9.1.** 🟢 Stack yordamida string'ni teskari aylantiring.
`"abc"` → `"cba"`

**9.2.** 🟢 Faqat `()` qavslari balansmi? (`true`/`false`)
`"(())"` → `true`, `"())"` → `false`

**9.3.** 🟡 Yonma-yon bir xil harflarni o'chiring (toza bo'lguncha).
`"abbaca"` → `"ca"`  *(LeetCode 1047)*

**9.4.** 🟡 Har element uchun o'ngdagi birinchi **kattaroq** element (yo'q → -1).
`[2,1,2,4,3]` → `[4,2,4,-1,-1]`

**9.5.** 🟡 RPN (teskari polyak) ifodani hisoblang.
`["2","1","+","3","*"]` → `9`  *(LeetCode 150)*

**9.6.** 🟡 Beysbol o'yini ballari yig'indisi (`+`, `C`, `D`, son amallari).
`["5","2","C","D","+"]` → `30`  *(LeetCode 682)*

**9.7.** 🟡 Yonma-yon bir xil harfning katta+kichik juftini o'chiring.
`"leEeetcode"` → `"leetcode"`  *(LeetCode 1544)*

**9.8.** 🟡 `#` — "backspace" deb hisoblab, ikki string teng chiqadimi?
`("ab#c", "ad#c")` → `true`  *(LeetCode 844)*

**9.9.** 🔴 Har kun uchun nechа kundan keyin harorat oshadi (yo'q → 0).
`[73,74,75,71,69,72,76,73]` → `[1,1,4,2,1,1,0,0]`  *(LeetCode 739)*

**9.10.** 🔴 BONUS — Unix yo'lini soddalashtiring.
`"/home//foo/"` → `"/home/foo"`  *(LeetCode 71)*
