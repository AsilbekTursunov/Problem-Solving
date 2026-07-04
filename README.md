# 🧠 LeetCode Problem Solving — 1×10 Metodi

## Bu nima?

Har bir mavzu uchun: **1 ta to'liq yechilgan misol** (fikrlash jarayoni bilan) + **10 ta mustaqil mashq**. Jami **5 mavzu × 10 = 50 masala**.

Maqsad — "logic kelmayapti" muammosini yo'qotish. Logika tug'ma narsa emas, u **takrorlanadigan fikrlash jarayoni**. Quyidagi 5 qadamni har bir masalada qo'llang. 50 marta takrorlagandan keyin u avtomatik bo'lib qoladi.

---

## 🪜 5 qadamli fikrlash ramkasi (ENG MUHIM QISM)

Masalani ko'rib **darrov kod yozishga oshiqmang**. Mana shu tartibda fikrlang:

### 1-qadam: O'QI va TUSHUN
- Input (kirish) nima? Qanday tur — son, massiv, string?
- Output (chiqish) nima bo'lishi kerak?
- Masalani **o'z so'zing bilan** qayta ayt.

### 2-qadam: QO'LDA YECH
- Kichik misol ol (masalan `[3, 1, 2]`).
- Kompyutersiz, **qog'ozda** qo'lda yech.
- "Men buni qanday qildim?" — miyang qanday qadamlarni bajarganiga e'tibor ber.

### 3-qadam: REJA (pseudokod)
- 2-qadamdagi qo'l harakatlaringni **oddiy o'zbekcha gaplar** bilan yoz:
  - "Eng katta sonni saqlash uchun o'zgaruvchi ochaman"
  - "Har bir elementni aylanib chiqaman"
  - "Agar element kattadan katta bo'lsa, yangilayman"
- Bu hali kod EMAS — oddiy qadamlar.

### 4-qadam: KOD
- Endi rejani JavaScript'ga o'gir. Har bir gap ≈ 1–2 qator kod.

### 5-qadam: TEKSHIR
- Misollarda kodni qo'lda "yur" (trace).
- Chekka holatlar: bo'sh massiv? bitta element? manfiy son? nol?

> 💡 **Sir:** Sizning muammoyingiz odatda 4-qadamda (kod) emas, balki **2 va 3-qadamda** (qo'lda yechish + reja). Shuning uchun har doim **qog'oz-qalam** bilan boshlang. Kod — eng oxirgi qadam.

---

## 📚 20 mavzu (200 masala)

**🟢 Asoslar (1–5)** — bu yerdan boshlang:

| № | Mavzu | Nima o'rgatadi |
|---|-------|----------------|
| 1 | [Sikl va Shart](01-sikl-va-shart.md) | Eng asosiy logika: takror + qaror |
| 2 | [Massiv bilan ishlash](02-massiv.md) | max, min, yig'indi, qidiruv |
| 3 | [Hash Map / Chastota](03-hash-map.md) | Sanash va tez qidirish (ENG muhim pattern) |
| 4 | [Ikki ko'rsatkich](04-ikki-korsatkich.md) | Palindrom, teskari, saralangan massiv |
| 5 | [Satrlar](05-satrlar.md) | Belgilar bilan ishlash |

**🟢 O'rta-boshlang'ich (6–10):**

| № | Mavzu | Nima o'rgatadi |
|---|-------|----------------|
| 6 | [Binary Search](06-binary-search.md) | Saralangan massivda tez qidiruv |
| 7 | [Sliding Window](07-sliding-window.md) | Ketma-ket bo'lak ustida ishlash |
| 8 | [Prefix Sum](08-prefix-sum.md) | Oraliq yig'indilarini oldindan tayyorlash |
| 9 | [Stack](09-stack.md) | LIFO: qavslar, monotonic stack |
| 10 | [Recursion](10-recursion.md) | Funksiya o'zini chaqiradi (base + kichraytir) |

**🟡 O'rta — interviewlarda ko'p (11–15):**

| № | Mavzu | Nima o'rgatadi |
|---|-------|----------------|
| 11 | [Linked List](11-linked-list.md) | Bog'langan ro'yxat, `next` ko'rsatkichi |
| 12 | [Binary Tree](12-binary-tree.md) | Daraxt, rekursiv aylanish |
| 13 | [Math](13-math.md) | Sonlar nazariyasi, raqamlar |
| 14 | [Bit Manipulation](14-bit-manipulation.md) | Bit amallari: `& \| ^ << >>` |
| 15 | [Greedy](15-greedy.md) | Har qadamda eng yaxshi tanlov |

**🔴 Challenge (16–20):**

| № | Mavzu | Nima o'rgatadi |
|---|-------|----------------|
| 16 | [2D Massiv / Matrix](16-matrix.md) | Matritsa: ikki o'lchovli aylanish |
| 17 | [Intervallar](17-intervals.md) | `[boshi, oxiri]` — saralash + birlashtirish |
| 18 | [Set / Map naqshlari](18-set-map.md) | Tezkor qidiruv/sanash |
| 19 | [Dynamic Programming](19-dp.md) | Qism-masalalarni saqlab qayta ishlatish |
| 20 | [Aralash takrorlash](20-aralash.md) | Mini mock-interview: naqshlar aralash |

> Har mavzuning ichida masalalar 🟢 oson → 🟡 o'rta → 🔴 qiyin tartibida. 10-masala har doim 🔴 BONUS.

---

## 🔄 Qanday ishlaymiz

1. Mavzu faylini och, **yechilgan misolni** diqqat bilan o'qi (faqat o'qib qo'yma — har qadamni tushun).
2. 10 ta mashqni **5 qadam** bo'yicha mustaqil yech. Yechimlarni `yechimlar/` papkasidagi tayyor fayllarga yoz.
3. O'zingni tekshir: `node yechimlar/01-sikl-va-shart.js` — testlar kutilgan javob bilan chiqadi.
4. Menga yoz: **"1-mavzu, 1–5 ni yechdim, tekshir"** — yechimlaringni shu fayllardan o'qib, har birini tahlil qilaman:
   - To'g'rimi? 
   - Logikang qayerda oqsadi?
   - Qanday soddaroq/tezroq qilish mumkin?

> ⚠️ **Eng muhim qoida:** misolni ko'rib darrov javobiga qaramang. Avval o'zingiz 10–15 daqiqa urinib ko'ring. Qotib qolsangiz ham — bu yaxshi, aynan shu paytda miya o'sadi. Keyin menga "qotib qoldim, yo'naltir" deb yozing, javobni bermay, ipuchini beraman.

---

## ✅ Progress (yechgan sari belgilab boring)

**Mavzu 1 — Sikl va Shart**
- [ ] 1.1  - [ ] 1.2  - [ ] 1.3  - [ ] 1.4  - [ ] 1.5
- [ ] 1.6  - [ ] 1.7  - [ ] 1.8  - [ ] 1.9  - [ ] 1.10

**Mavzu 2 — Massiv**
- [ ] 2.1  - [ ] 2.2  - [ ] 2.3  - [ ] 2.4  - [ ] 2.5
- [ ] 2.6  - [ ] 2.7  - [ ] 2.8  - [ ] 2.9  - [ ] 2.10

**Mavzu 3 — Hash Map**
- [ ] 3.1  - [ ] 3.2  - [ ] 3.3  - [ ] 3.4  - [ ] 3.5
- [ ] 3.6  - [ ] 3.7  - [ ] 3.8  - [ ] 3.9  - [ ] 3.10

**Mavzu 4 — Ikki ko'rsatkich**
- [ ] 4.1  - [ ] 4.2  - [ ] 4.3  - [ ] 4.4  - [ ] 4.5
- [ ] 4.6  - [ ] 4.7  - [ ] 4.8  - [ ] 4.9  - [ ] 4.10

**Mavzu 5 — Satrlar**
- [ ] 5.1  - [ ] 5.2  - [ ] 5.3  - [ ] 5.4  - [ ] 5.5
- [ ] 5.6  - [ ] 5.7  - [ ] 5.8  - [ ] 5.9  - [ ] 5.10

**Mavzu 6 — Binary Search**
- [ ] 6.1  - [ ] 6.2  - [ ] 6.3  - [ ] 6.4  - [ ] 6.5
- [ ] 6.6  - [ ] 6.7  - [ ] 6.8  - [ ] 6.9  - [ ] 6.10

**Mavzu 7 — Sliding Window**
- [ ] 7.1  - [ ] 7.2  - [ ] 7.3  - [ ] 7.4  - [ ] 7.5
- [ ] 7.6  - [ ] 7.7  - [ ] 7.8  - [ ] 7.9  - [ ] 7.10

**Mavzu 8 — Prefix Sum**
- [ ] 8.1  - [ ] 8.2  - [ ] 8.3  - [ ] 8.4  - [ ] 8.5
- [ ] 8.6  - [ ] 8.7  - [ ] 8.8  - [ ] 8.9  - [ ] 8.10

**Mavzu 9 — Stack**
- [ ] 9.1  - [ ] 9.2  - [ ] 9.3  - [ ] 9.4  - [ ] 9.5
- [ ] 9.6  - [ ] 9.7  - [ ] 9.8  - [ ] 9.9  - [ ] 9.10

**Mavzu 10 — Recursion**
- [ ] 10.1  - [ ] 10.2  - [ ] 10.3  - [ ] 10.4  - [ ] 10.5
- [ ] 10.6  - [ ] 10.7  - [ ] 10.8  - [ ] 10.9  - [ ] 10.10

**Mavzu 11 — Linked List**
- [ ] 11.1  - [ ] 11.2  - [ ] 11.3  - [ ] 11.4  - [ ] 11.5
- [ ] 11.6  - [ ] 11.7  - [ ] 11.8  - [ ] 11.9  - [ ] 11.10

**Mavzu 12 — Binary Tree**
- [ ] 12.1  - [ ] 12.2  - [ ] 12.3  - [ ] 12.4  - [ ] 12.5
- [ ] 12.6  - [ ] 12.7  - [ ] 12.8  - [ ] 12.9  - [ ] 12.10

**Mavzu 13 — Math**
- [ ] 13.1  - [ ] 13.2  - [ ] 13.3  - [ ] 13.4  - [ ] 13.5
- [ ] 13.6  - [ ] 13.7  - [ ] 13.8  - [ ] 13.9  - [ ] 13.10

**Mavzu 14 — Bit Manipulation**
- [ ] 14.1  - [ ] 14.2  - [ ] 14.3  - [ ] 14.4  - [ ] 14.5
- [ ] 14.6  - [ ] 14.7  - [ ] 14.8  - [ ] 14.9  - [ ] 14.10

**Mavzu 15 — Greedy**
- [ ] 15.1  - [ ] 15.2  - [ ] 15.3  - [ ] 15.4  - [ ] 15.5
- [ ] 15.6  - [ ] 15.7  - [ ] 15.8  - [ ] 15.9  - [ ] 15.10

**Mavzu 16 — Matrix**
- [ ] 16.1  - [ ] 16.2  - [ ] 16.3  - [ ] 16.4  - [ ] 16.5
- [ ] 16.6  - [ ] 16.7  - [ ] 16.8  - [ ] 16.9  - [ ] 16.10

**Mavzu 17 — Intervallar**
- [ ] 17.1  - [ ] 17.2  - [ ] 17.3  - [ ] 17.4  - [ ] 17.5
- [ ] 17.6  - [ ] 17.7  - [ ] 17.8  - [ ] 17.9  - [ ] 17.10

**Mavzu 18 — Set / Map**
- [ ] 18.1  - [ ] 18.2  - [ ] 18.3  - [ ] 18.4  - [ ] 18.5
- [ ] 18.6  - [ ] 18.7  - [ ] 18.8  - [ ] 18.9  - [ ] 18.10

**Mavzu 19 — Dynamic Programming**
- [ ] 19.1  - [ ] 19.2  - [ ] 19.3  - [ ] 19.4  - [ ] 19.5
- [ ] 19.6  - [ ] 19.7  - [ ] 19.8  - [ ] 19.9  - [ ] 19.10

**Mavzu 20 — Aralash takrorlash**
- [ ] 20.1  - [ ] 20.2  - [ ] 20.3  - [ ] 20.4  - [ ] 20.5
- [ ] 20.6  - [ ] 20.7  - [ ] 20.8  - [ ] 20.9  - [ ] 20.10

---

## 🧰 Foydali JS eslatmalar

```javascript
// Sikl
for (let i = 0; i < arr.length; i++) { ... }   // indeks bilan
for (let x of arr) { ... }                      // qiymat bilan

// Shart
if (a % 2 === 0) { ... }     // juftmi
Math.max(a, b)               // kattasini olish

// Massiv
arr.length                   // uzunlik
arr.push(x)                  // oxiriga qo'shish

// String
s.length, s[i]               // uzunlik, i-belgi
s.toLowerCase()              // kichik harf
s.split(' ')                 // so'zlarga ajratish
s.split('').reverse().join('') // teskari

// Object (Hash Map)
const map = {};
map[kalit] = qiymat;
map[kalit] !== undefined     // kalit bormi
```
