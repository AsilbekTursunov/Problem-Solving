# Mavzu 4: Ikki ko'rsatkich (Two Pointers) 👆👆

Ikkita "barmoq" (indeks) bilan massiv yoki string'ni kezish. Ko'pincha biri **boshdan**, biri **oxirdan** keladi va o'rtada uchrashadi. Yoki ikkalasi bir tomondan turli tezlikda yuradi.

---

## ✅ Yechilgan misol: Palindrom tekshirish

> **Masala:** String palindrommi (teskari o'qiganda ham bir xilmi)? `true`/`false`.
> `"level"` → `true`, `"hello"` → `false`

### 1-qadam: O'QI va TUSHUN
- **Input:** string `"level"`
- **Output:** `true`/`false`
- **Palindrom:** boshidan va oxiridan o'qiganda bir xil bo'lgan so'z.

### 2-qadam: QO'LDA YECH
`"level"` — chap barmoq `l=0`, o'ng barmoq `r=4`:
- `s[0]='l'` vs `s[4]='l'` — teng ✅ → `l=1, r=3`
- `s[1]='e'` vs `s[3]='e'` — teng ✅ → `l=2, r=2`
- `l` va `r` uchrashdi (o'rta) → to'xtaymiz. Hammasi teng edi → **`true`**

`"hello"`:
- `s[0]='h'` vs `s[4]='o'` — teng emas → darrov **`false`**

### 3-qadam: REJA
1. `l = 0`, `r = uzunlik - 1`
2. `l < r` bo'lguncha aylanaman:
   - Agar `s[l] !== s[r]` → darrov `false` qaytaraman
   - aks holda `l++`, `r--`
3. Sikl tinch tugasa → `true`

### 4-qadam: KOD
```javascript
function palindrom(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;       // bitta joyda teng emas — yetarli
    }
    l++;
    r--;
  }
  return true;            // hamma juftlik teng chiqdi
}
```

### 5-qadam: TEKSHIR
- `"level"` → `true` ✅
- `"hello"` → `false` ✅
- `"a"` → `true` ✅ (`l=0, r=0`, sikl boshlanmaydi)
- `""` → `true` ✅

> 🔑 **PATTERN — "boshdan va oxirdan":** ikki ko'rsatkich `l=0` va `r=oxiri` dan boshlab o'rtaga yuradi. Palindrom, teskari aylantirish, **saralangan** massivda juftlik qidirishda ishlatiladi. Bitta aylanishda hal bo'ladi — sekin emas.

---

## 📝 10 ta mashq

`yechimlar/04-ikki-korsatkich.js` da yeching.

**4.1.** Belgilar massivini teskari aylantiring (joyida, yangi massivsiz).
`['h','e','l','l','o']` → `['o','l','l','e','h']`  *(LeetCode 344)*

**4.2.** Son palindrommi?
`121` → `true`, `123` → `false`  *(LeetCode 9)*

**4.3.** **SARALANGAN** massivda yig'indisi `target` bo'lgan juftlik indekslari.
`([1,3,5,7], 8)` → `[1,2]` (3+5)  *(LeetCode 167 ruhida)*
*Ipuchi: `l` boshda, `r` oxirda. Yig'indi katta bo'lsa `r--`, kichik bo'lsa `l++`.*

**4.4.** Nollarni massiv oxiriga suring (boshqa sonlar tartibini saqlab).
`[0,1,0,3,12]` → `[1,3,12,0,0]`  *(LeetCode 283)*

**4.5.** SARALANGAN massivdan dublikatlarni olib tashlang, yangi uzunlikni qaytaring.
`[1,1,2,2,3]` → `3` (massivning boshi `[1,2,3,...]` bo'ladi)  *(LeetCode 26)*

**4.6.** String'dagi unli harflarni teskari aylantiring (boshqa harflar joyida qoladi).
`"hello"` → `"holle"`  *(LeetCode 345)*

**4.7.** Faqat harf va raqamlarni hisobga olib palindrom tekshiring (probel, tinish belgilarini e'tiborsiz qoldiring, katta-kichik farqlamang).
`"A man, a plan, a canal: Panama"` → `true`  *(LeetCode 125)*

**4.8.** SARALANGAN massiv elementlarining kvadratlarini saralangan holda qaytaring.
`[-4,-1,0,3,10]` → `[0,1,9,16,100]`  *(LeetCode 977)*

**4.9.** `s` string `t` ning subsequence'imi (harflari tartib saqlanib `t` ichida bormi)?
`("abc","ahbgc")` → `true`  *(LeetCode 392)*

**4.10.** 🌟 **BONUS (qiyinroq):** balandliklar massivi berilgan, ikki chiziq orasidagi maksimal suv yuzasini toping.
`[1,8,6,2,5,4,8,3,7]` → `49`  *(LeetCode 11 — Medium. Avval qolgan 9 tasini yeching, keyin shuni stretch sifatida sinab ko'ring.)*
