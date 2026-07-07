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

**10.1.** 🟢 **1 dan `n` gacha yig'indi (rekursiv).** Butun son `n` berilgan. `1 + 2 + ... + n` yig'indisini rekursiya bilan hisoblang. *Ipuchi:* base case `n === 0` (yoki `1`), rekursiv holat `n + yigindiN(n-1)`.
   - **Misol:** `5` → `15` — `1+2+3+4+5 = 15`.

**10.2.** 🟢 **Faktorial (rekursiv).** Butun son `n` berilgan. `n!` = `1·2·3·...·n` ni rekursiya bilan hisoblang. *Ipuchi:* base case `0! = 1`, rekursiv holat `n · faktorial(n-1)`.
   - **Misol:** `5` → `120` — `1·2·3·4·5 = 120`.

**10.3.** 🟢 **Daraja: `base` ning `exp`-darajasi.** Ikki son `base` va `exp` berilgan. `base` ni `exp` marta o'ziga ko'paytirib (`base^exp`) natijani rekursiya bilan qaytaring. *Ipuchi:* base case `exp === 0` → `1`, rekursiv holat `base · daraja(base, exp-1)`.
   - **Misol:** `(2, 10)` → `1024` — `2` ni 10 marta ko'paytirsak `1024`.

**10.4.** 🟡 **String'ni teskari aylantiring (rekursiv).** String berilgan. Harflari teskari tartibda joylashgan yangi stringni rekursiya bilan qaytaring. *Ipuchi:* base case bo'sh string, rekursiv holat "birinchi harfni oxiriga qo'yish" — `teskari(qolgani) + birinchi_harf`.
   - **Misol:** `"abc"` → `"cba"`.

**10.5.** 🟡 **Sonning raqamlari yig'indisi (rekursiv).** Butun son berilgan. Uning barcha raqamlari yig'indisini rekursiya bilan hisoblang. *Ipuchi:* oxirgi raqam `n % 10`, qolgan qismi `Math.floor(n / 10)`; base case `n === 0`.
   - **Misol:** `1234` → `10` — `1+2+3+4 = 10`.

**10.6.** 🟡 **Ikki sonning EKUB (GCD) — Evklid usuli.** Ikki musbat son `a` va `b` berilgan. Ularning **eng katta umumiy bo'luvchisini** (ikkalasini ham qoldiqsiz bo'ladigan eng katta son) Evklid usuli bilan toping: `gcd(a, b) = gcd(b, a % b)`, `b === 0` bo'lganda javob `a`.
   - **Misol:** `(48, 18)` → `6` — 48 va 18 ni ham qoldiqsiz bo'ladigan eng katta son 6.

**10.7.** 🟡 **`n`-Fibonachchi.** Butun `n` berilgan. Fibonachchi ketma-ketligining `n`-a'zosini rekursiya bilan qaytaring (`0, 1, 1, 2, 3, 5, 8, ...`, har son oldingi ikkitasining yig'indisi). *Ipuchi:* base case `n < 2` → `n`, rekursiv holat `fib(n-1) + fib(n-2)`.
   - **Misol:** `10` → `55` — 10-a'zo (0 dan sanaganda) `55`.

**10.8.** 🟡 **String palindrommi? (rekursiv).** String berilgan. U **palindrom** — oldindan ham, orqadan ham bir xil o'qilsa — `true`, aks holda `false` qaytaring. *Ipuchi:* eng chetdagi ikki harfni solishtiring; teng bo'lsa ichkaridagi qismni tekshiring; base case sifatida 0 yoki 1 harfli string doim palindrom.
   - **Misol:** `"kayak"` → `true` (teskari o'qilsa ham "kayak"), `"olma"` → `false`.

**10.9.** 🟡 **Massiv elementlari yig'indisi (rekursiv).** Sonlar massivi berilgan. Barcha elementlar yig'indisini rekursiya bilan hisoblang. *Ipuchi:* base case bo'sh massiv → `0`, rekursiv holat "birinchi element + qolgan massiv yig'indisi".
   - **Misol:** `[1,2,3,4]` → `10` — `1+2+3+4 = 10`.

**10.10.** 🔴 BONUS — **Hanoi minorasi: minimal yurishlar soni.** Disklar soni `n` berilgan. Hanoi minorasi jumbog'ida barcha `n` diskni ko'chirib bo'lish uchun kerak bo'ladigan **eng kam yurishlar sonini** rekursiya bilan qaytaring. *Qoida:* `hanoi(n) = 2·hanoi(n-1) + 1`, base case `hanoi(0) = 0`.
   - **Misol:** `3` → `7` — 3 ta disk uchun minimal 7 yurish kerak.
