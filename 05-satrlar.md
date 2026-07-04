# Mavzu 5: Satrlar (Strings) 🔤

String — belgilar ketma-ketligi. Asosan: belgilarni aylanish, sanash, o'zgartirish.

**Foydali metodlar:** `s.length`, `s[i]`, `s.toLowerCase()`, `s.split(' ')` (so'zlarga), `s.split('')` (harflarga), `arr.join('')` (qayta birlashtirish).

---

## ✅ Yechilgan misol: Unli harflarni sanash

> **Masala:** String'dagi unli harflar (a, e, i, o, u) sonini qaytaring.
> `"dasturlash"` → `3` (a, u, a)

### 1-qadam: O'QI va TUSHUN
- **Input:** string
- **Output:** son (unlilar soni)
- **Unli:** a, e, i, o, u

### 2-qadam: QO'LDA YECH
`"hello"`:
- `h` — unli emas
- `e` — unli! → `1`
- `l` — yo'q
- `l` — yo'q
- `o` — unli! → `2`
- **Javob: 2**

> "Unlimi?" ni qanday bildim? Belgi `{a,e,i,o,u}` to'plamida bormi deb qaradim.

### 3-qadam: REJA
1. `unlilar = "aeiou"` deb belgilayman
2. `count = 0`
3. String'ning har bir `belgi`si bo'yicha aylanaman
4. Agar `belgi` `unlilar` ichida bo'lsa → `count++`
5. `count` qaytaraman

### 4-qadam: KOD
```javascript
function unlilarSoni(s) {
  const unlilar = "aeiou";
  let count = 0;
  for (let belgi of s.toLowerCase()) {   // toLowerCase — katta harflar uchun ham
    if (unlilar.includes(belgi)) {       // belgi to'plamda bormi?
      count++;
    }
  }
  return count;
}
```

### 5-qadam: TEKSHIR
- `"hello"` → `2` ✅
- `"xyz"` → `0` ✅
- `"AEIOU"` → `5` ✅ (`toLowerCase` tufayli)

> 🔑 **PATTERN — "belgima-belgi sanash":** string'ni harflab aylanib, shartga mos belgilarni sanash yoki yig'ish. `includes()` — biror to'plamda borligini tekshirishga qulay. Bu 1-mavzudagi "sanagich + sikl + shart" naqshining string varianti.

---

## 📝 10 ta mashq

`yechimlar/05-satrlar.js` da yeching.

**5.1.** String'ni teskari aylantiring.
`"salom"` → `"molas"`

**5.2.** Har bir harfning katta-kichikligini almashtiring.
`"Salom"` → `"sALOM"`
*Ipuchi: `belgi === belgi.toUpperCase()` — katta harfmi?*

**5.3.** String'dagi so'zlar sonini sanang.
`"men kod yozaman"` → `3`

**5.4.** Eng uzun so'zni qaytaring.
`"men dasturlashni organaman"` → `"dasturlashni"`

**5.5.** Berilgan belgi string'da necha marta uchraydi.
`("banana", "a")` → `3`

**5.6.** String palindrommi? (4-mavzu yoki teskari solishtirish — ikkalasi ham bo'ladi)
`"kayak"` → `true`, `"olma"` → `false`

**5.7.** String'dagi barcha probellarni olib tashlang.
`"a b c"` → `"abc"`

**5.8.** Birinchi katta harf indeksini qaytaring (yo'q bo'lsa `-1`).
`"abcDef"` → `3`

**5.9.** IP manzilni "defang" qiling: har bir `.` ni `[.]` ga almashtiring.
`"1.1.1.1"` → `"1[.]1[.]1[.]1"`  *(LeetCode 1108)*

**5.10.** Gapdagi so'zlarni teskari tartibda qaytaring.
`"men kod yozaman"` → `"yozaman kod men"`
