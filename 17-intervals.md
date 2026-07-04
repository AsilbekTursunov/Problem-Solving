# Mavzu 17: Intervallar (Intervals) 📏

Interval = `[boshi, oxiri]` (masalan `[1, 3]` — 1 dan 3 gacha). Ko'p masala intervallarni **boshiga qarab saralab**, keyin ustma-ust tushganini birlashtirish yoki sanashga keladi.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Ustma-ust intervallarni birlashtirish

> **Masala:** Intervallar ro'yxati berilgan. Ustma-ust tushganlarini birlashtiring.
> `[[1,3],[2,6],[8,10],[15,18]]` → `[[1,6],[8,10],[15,18]]`

### 1-qadam: O'QI va TUSHUN
- **Input:** intervallar ro'yxati `[[boshi, oxiri], ...]`
- **Output:** birlashtirilgan intervallar
- **Kalit:** `[1,3]` va `[2,6]` ustma-ust (2 ≤ 3) → birlashadi `[1,6]`

### 2-qadam: QO'LDA YECH
Avval boshiga qarab saralayman (bu yerda allaqachon saralangan):
- `[1,3]` ni natijaga olaman.
- `[2,6]`: boshi `2` ≤ oxirgi natija oxiri `3`? **ha** → birlashtir, oxirini `max(3,6)=6` qil → `[1,6]`
- `[8,10]`: boshi `8` ≤ `6`? **yo'q** → yangi qo'sh → `[1,6],[8,10]`
- `[15,18]`: boshi `15` ≤ `10`? **yo'q** → yangi qo'sh → `[1,6],[8,10],[15,18]` ✅

### 3-qadam: REJA
1. Intervallarni boshiga (`a[0]`) qarab sarala.
2. Natija ro'yxatini birinchi interval bilan boshla.
3. Qolganlarini ko'rib chiq:
   - joriy boshi ≤ oxirgi natija oxiri → birlashtir (oxirini `max` qil)
   - aks holda → natijaga yangi interval qo'sh
4. Natijani qaytar.

### 4-qadam: KOD
```javascript
function merge(intervals) {
  if (intervals.length === 0) return [];
  // 1) boshiga qarab sarala
  intervals.sort((a, b) => a[0] - b[0]);

  const natija = [intervals[0].slice()]; // nusxa olamiz
  for (let i = 1; i < intervals.length; i++) {
    const oxirgi = natija[natija.length - 1];
    const [boshi, oxiri] = intervals[i];
    if (boshi <= oxirgi[1]) {
      // ustma-ust -> birlashtir
      oxirgi[1] = Math.max(oxirgi[1], oxiri);
    } else {
      // yangi interval
      natija.push([boshi, oxiri]);
    }
  }
  return natija;
}
```

### 5-qadam: TEKSHIR
- `[[1,3],[2,6],[8,10],[15,18]]` → `[[1,6],[8,10],[15,18]]` ✅
- `[[1,4],[4,5]]` → `[[1,5]]` ✅ (4 ≤ 4 — tegib turadi ham birlashadi)
- `[[1,4],[2,3]]` → `[[1,4]]` ✅ (ichida)

> 🔑 **PATTERN — "sarala, keyin birlashtir":** intervallarni avval boshiga qarab saralang, so'ng ketma-ket yurib `boshi <= oldingi oxiri` shartida birlashtiring. Deyarli barcha interval masalalari shu g'oyaga tayanadi.

---

## 📝 10 ta mashq

`yechimlar/17-intervals.js` da yeching.

**17.1.** 🟢 Ikki interval kesishadimi? (`true`/`false`)
`([1,3],[2,4])` → `true`, `([1,2],[3,4])` → `false`

**17.2.** 🟢 Intervallarni boshiga qarab sarala.
`[[3,4],[1,2]]` → `[[1,2],[3,4]]`

**17.3.** 🟡 Barcha uchrashuvlarda qatnashish mumkinmi (hech biri kesishmasa)? (`true`/`false`)
`[[0,30],[5,10],[15,20]]` → `false`  *(LeetCode 252)*

**17.4.** 🟡 Yangi intervalni qo'yib, birlashtir.
`([[1,3],[6,9]],[2,5])` → `[[1,5],[6,9]]`  *(LeetCode 57)*

**17.5.** 🟡 Kerakli minimal xonalar (uchrashuv xonasi) soni.
`[[0,30],[5,10],[15,20]]` → `2`  *(LeetCode 253)*

**17.6.** 🟡 Kesishmaslik uchun olib tashlanadigan minimal intervallar soni.
`[[1,2],[2,3],[3,4],[1,3]]` → `1`  *(LeetCode 435)*

**17.7.** 🟡 Ikki saralangan interval ro'yxati kesishmasi.
`([[0,2],[5,10]],[[1,5],[8,12]])` → `[[1,2],[5,5],[8,10]]`  *(LeetCode 986)*

**17.8.** 🟡 Bir vaqtda ustma-ust tushgan maksimal intervallar soni.
`[[1,4],[2,5],[3,6]]` → `3`

**17.9.** 🔴 Minimal o'qlar bilan barcha sharlarni yorish.
`[[10,16],[2,8],[1,6],[7,12]]` → `2`  *(LeetCode 452)*

**17.10.** 🔴 BONUS — yo'lovchilarni sig'dirib bo'ladimi? (`trip = [yo'lovchi, boshi, oxiri]`)
`([[2,1,5],[3,3,7]],4)` → `false`  *(LeetCode 1094)*
