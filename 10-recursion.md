# Mavzu 10: Recursion (Rekursiya) 🔁🔁

Rekursiya — funksiya **o'zini chaqiradi**. Katta masalani o'zining kichikroq nusxasiga bo'lib yechadi.

Har bir rekursiyada 2 narsa bo'lishi SHART:
1. **Base case (to'xtash sharti)** — eng kichik holat, bunda chaqiruvni to'xtatamiz (aks holda cheksiz davom etadi).
2. **Recursive case** — masalani kichikroq qilib, funksiyani qayta chaqiramiz.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Fibonachchi sonlari

> **Masala:** `n`-Fibonachchi sonini qaytaring. Ketma-ketlik: `0, 1, 1, 2, 3, 5, 8, 13...`
> (har son — oldingi ikkitasining yig'indisi). `fib(6)` → `8`

### 1-qadam: O'QI va TUSHUN
- **Input:** `n` (nechanchi son)
- **Output:** o'sha son
- **Qoida:** `fib(n) = fib(n-1) + fib(n-2)`

### 2-qadam: QO'LDA YECH
"Har son oldingi ikkitasining yig'indisi" — bu **o'z-o'ziga murojaat**. Demak rekursiya.
- Base case: `fib(0)=0`, `fib(1)=1` (bularni bevosita bilamiz — to'xtash nuqtasi)
- `fib(6) = fib(5)+fib(4) = 5+3 = 8` ✅

### 3-qadam: REJA
1. Agar `n < 2` → `n` ni qaytaraman (base: fib(0)=0, fib(1)=1)
2. Aks holda → `fib(n-1) + fib(n-2)` qaytaraman

### 4-qadam: KOD
```javascript
function fib(n) {
  if (n < 2) return n;              // base case — to'xtash
  return fib(n - 1) + fib(n - 2);   // recursive case — kichikroq chaqiruv
}
```

### 5-qadam: TEKSHIR
- `fib(0)` → `0`, `fib(1)` → `1` ✅ (base)
- `fib(6)` → `8` ✅
- `fib(10)` → `55` ✅

> 🔑 **PATTERN — "base + kichraytir":** har doim avval **to'xtash shartini** yozing (eng kichik holat), keyin masalani kichraytirib o'zini chaqiring. Agar base case bo'lmasa yoki chaqiruv kichraymasa → cheksiz rekursiya (stack overflow). Har bir rekursiv masalani "qo'lda" 2-3 qadam ochib ko'ring.

---

## 📝 10 ta mashq

`yechimlar/10-recursion.js` da yeching. **Sikl (`for`/`while`) ishlatmang — faqat rekursiya.**

**10.1.** 🟢 1 dan `n` gacha yig'indi (rekursiv).
`5` → `15`

**10.2.** 🟢 Faktorial (rekursiv).
`5` → `120`

**10.3.** 🟢 Daraja: `base` ning `exp`-darajasi.
`(2, 10)` → `1024`

**10.4.** 🟡 String'ni teskari aylantiring (rekursiv).
`"abc"` → `"cba"`

**10.5.** 🟡 Sonning raqamlari yig'indisi (rekursiv).
`1234` → `10`

**10.6.** 🟡 Ikki sonning EKUB (GCD) — Evklid usuli: `gcd(a,b) = gcd(b, a%b)`.
`(48, 18)` → `6`

**10.7.** 🟡 `n`-Fibonachchi.
`10` → `55`

**10.8.** 🟡 String palindrommi (rekursiv: chekka harflarni solishtir).
`"kayak"` → `true`, `"olma"` → `false`

**10.9.** 🟡 Massiv elementlari yig'indisi (rekursiv).
`[1,2,3,4]` → `10`

**10.10.** 🔴 BONUS — Hanoi minorasi: `n` disk uchun minimal yurishlar soni.
`3` → `7`  *(qoida: `hanoi(n) = 2·hanoi(n-1) + 1`)*
