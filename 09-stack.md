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

**9.1.** 🟢 **Stack yordamida string'ni teskari aylantiring.** String berilgan. Uning harflarini teskari tartibda joylashtirilgan yangi string qaytaring. Har bir harfni stekka `push` qilib, keyin `pop` bilan chiqarsangiz — tabiiy ravishda teskari chiqadi.
   - **Misol:** `"abc"` → `"cba"` — oxirgi harf birinchi bo'lib chiqadi.

**9.2.** 🟢 **Faqat `()` qavslari balansmi?** Faqat `(` va `)` belgilaridan iborat string berilgan. Har bir ochilgan qavsga to'g'ri tartibda yopiluvchi juftlik bormi? Bo'lsa `true`, aks holda `false` qaytaring.
   - **Misol:** `"(())"` → `true` (hammasi yopilgan), `"())"` → `false` (bitta ortiqcha yopuvchi qavs bor).

**9.3.** 🟡 **Yonma-yon bir xil harflarni o'chiring (toza bo'lguncha).** String berilgan. Ketma-ket kelgan **ikkita bir xil** harfni o'chiring; o'chirgandan keyin yana yonma-yon juftlik hosil bo'lsa, uni ham o'chiring — boshqa o'chirib bo'lmaydigan holatgacha davom eting. Qolgan stringni qaytaring.
   - **Misol:** `"abbaca"` → `"ca"` — avval `bb` o'chadi (`aaca`), keyin `aa` o'chadi (`ca`).
   - *(LeetCode 1047)*

**9.4.** 🟡 **O'ngdagi birinchi kattaroq element.** Massiv berilgan. Har bir element uchun undan **o'ngroqda turgan** birinchi **kattaroq** qiymatni toping. Bunday element bo'lmasa `-1` qo'ying. Natijani massiv sifatida qaytaring.
   - **Misol:** `[2,1,2,4,3]` → `[4,2,4,-1,-1]` — masalan 0-indeks `2` dan o'ngdagi birinchi kattaroq `4`; oxirgi ikki elementdan o'ngda kattaroq yo'q, shuning uchun `-1`.

**9.5.** 🟡 **RPN (teskari polyak) ifodani hisoblang.** "Teskari polyak yozuvi" — amal belgisi o'zi ta'sir qiladigan ikki sondan **keyin** yoziladi (masalan `2 1 +` degani `2+1`). Tokenlar massivi (sonlar va `+ - * /` belgilari) berilgan; ifodaning natijasini son sifatida qaytaring.
   - **Misol:** `["2","1","+","3","*"]` → `9` — avval `2+1=3`, so'ng `3*3=9`.
   - *Ipuchi:* son ko'rsangiz stekka qo'ying; amal ko'rsangiz tepadagi ikki sonni oling, hisoblang, natijani qaytarib qo'ying.
   - *(LeetCode 150)*

**9.6.** 🟡 **Beysbol o'yini ballari yig'indisi.** Har biri quyidagi amallardan biri bo'lgan tokenlar massivi berilgan: **son** — o'sha ballni yozing; **`+`** — oxirgi ikki balning yig'indisini yangi ball qilib yozing; **`D`** — oxirgi balni ikkilantirib yozing; **`C`** — oxirgi yozilgan balni bekor qiling (o'chiring). Barcha yozib qolgan ballar yig'indisini qaytaring.
   - **Misol:** `["5","2","C","D","+"]` → `30` — `5`; `2`; `C` (2 o'chadi → `5`); `D` (`5·2=10` → `5,10`); `+` (`5+10=15` → `5,10,15`); yig'indi `5+10+15=30`.
   - *(LeetCode 682)*

**9.7.** 🟡 **Yonma-yon bir xil harfning katta+kichik juftini o'chiring.** String berilgan. Ketma-ket kelgan **bir xil harfning** katta va kichik varianti (masalan `sS` yoki `Ss`) "yomon" juftlik hisoblanadi — ularni o'chiring. O'chirgandan keyin yana shunday juftlik hosil bo'lsa, uni ham o'chiring. Toza stringni qaytaring.
   - **Misol:** `"leEeetcode"` → `"leetcode"` — o'rtadagi `Ee` (yoki `eE`) juftligi o'chib ketadi.
   - *(LeetCode 1544)*

**9.8.** 🟡 **Backspace bilan solishtiring.** Ikkita string berilgan; ulardagi `#` belgisi "backspace" (oldingi bitta harfni o'chirish) deb qaraladi. Har ikkala stringni shu qoida bo'yicha "yozib bo'lgach", natijalar bir xil chiqadimi? Bir xil bo'lsa `true`, aks holda `false` qaytaring.
   - **Misol:** `("ab#c", "ad#c")` → `true` — birinchisi `ac` ga (`b` o'chadi), ikkinchisi ham `ac` ga (`d` o'chadi) aylanadi.
   - *(LeetCode 844)*

**9.9.** 🔴 **Nechа kundan keyin harorat oshadi.** Kunlik haroratlar massivi berilgan. Har bir kun uchun: undan **kechroq** kelib harorati **yuqoriroq** bo'lgan eng yaqin kungacha necha kun kutish kerakligini toping. Bunday kun bo'lmasa `0` qo'ying. Natijani massiv sifatida qaytaring.
   - **Misol:** `[73,74,75,71,69,72,76,73]` → `[1,1,4,2,1,1,0,0]` — masalan 0-kun `73` dan issiqroq keyingi kun `74`, u 1 kun keyin; oxirgi ikki kundan keyin issiqroq kun yo'q, shuning uchun `0`.
   - *(LeetCode 739)*

**9.10.** 🔴 BONUS — **Unix yo'lini soddalashtiring.** Unix uslubidagi mutlaq fayl yo'li (string) berilgan. Uni soddalashtirilgan **kanonik** ko'rinishga keltiring: ketma-ket `/` larni bittaga qisqartiring, oxiridagi ortiqcha `/` ni olib tashlang (agar bu ildiz `/` bo'lmasa). Natijaviy yo'l `/` bilan boshlanadi.
   - **Misol:** `"/home//foo/"` → `"/home/foo"` — qo'sh `//` bitta bo'ladi va oxirgi `/` olib tashlanadi.
   - *(LeetCode 71)*
