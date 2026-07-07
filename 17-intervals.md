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

**17.1.** 🟢 **Ikki interval kesishadimi?** Ikkita interval berilgan, har biri `[boshi, oxiri]` ko'rinishida (masalan `[1,3]` — 1 dan 3 gacha). Ular **kesishsa** (ya'ni bir-birining ustiga qisman yoki to'liq tushsa, hech bo'lmaganda bitta umumiy nuqtasi bo'lsa) `true`, umuman tegmasa `false` qaytaring.
   - **Misol:** `([1,3],[2,4])` → `true`, `([1,2],[3,4])` → `false` — birinchisida `2` va `3` oralig'i umumiy; ikkinchisida `[1,2]` tugagach yangi `[3,4]` boshlanadi, umumiy nuqta yo'q.

**17.2.** 🟢 **Intervallarni boshiga qarab sarala.** Intervallar ro'yxati berilgan. Ularni har birining **boshi** (birinchi soni) o'sish tartibida saralab, yangi ro'yxatni qaytaring.
   - **Misol:** `[[3,4],[1,2]]` → `[[1,2],[3,4]]` — boshi `1` bo'lgan interval boshi `3` bo'lganidan oldin turadi.

**17.3.** 🟡 **Barcha uchrashuvlarga ulgurasizmi?** Har biri `[boshlanish, tugash]` ko'rinishidagi uchrashuvlar ro'yxati berilgan. Agar ikkita uchrashuv vaqti **ustma-ust tushsa** (biri tugamasdan ikkinchisi boshlansa), ularning hammasiga ulgurib bo'lmaydi. Hammasiga ulgurish mumkin bo'lsa `true`, aks holda `false` qaytaring.
   - **Misol:** `[[0,30],[5,10],[15,20]]` → `false` — `[0,30]` uchrashuvi hali tugamasdan `[5,10]` boshlanadi, ular ustma-ust tushadi.
   - *(LeetCode 252)*

**17.4.** 🟡 **Yangi intervalni qo'yib birlashtir.** Boshiga qarab **saralangan** va o'zaro kesishmaydigan intervallar ro'yxati va bitta yangi interval berilgan. Yangi intervalni to'g'ri joyga qo'ying, agar u qo'shnilar bilan ustma-ust tushsa — ularni **birlashtiring** (bitta katta intervalga qo'shing) va yakuniy ro'yxatni qaytaring.
   - **Misol:** `([[1,3],[6,9]],[2,5])` → `[[1,5],[6,9]]` — yangi `[2,5]` `[1,3]` bilan ustma-ust tushib `[1,5]` bo'ladi; `[6,9]` esa tegmaydi.
   - *(LeetCode 57)*

**17.5.** 🟡 **Kerakli minimal xonalar soni.** Har biri `[boshlanish, tugash]` ko'rinishidagi uchrashuvlar ro'yxati berilgan. Bir vaqtning o'zida bo'layotgan uchrashuvlar uchun alohida xona kerak. Barcha uchrashuvlarni o'tkazish uchun **eng kamida nechta xona** kerakligini qaytaring.
   - **Misol:** `[[0,30],[5,10],[15,20]]` → `2` — `[0,30]` butun vaqt davomida davom etadi, uning ustiga `[5,10]` (keyin `[15,20]`) tushadi, shuning uchun bir vaqtda 2 ta xona band bo'ladi.
   - *(LeetCode 253)*

**17.6.** 🟡 **Kesishmaslik uchun nechtasini o'chirish kerak?** Intervallar ro'yxati berilgan. Qolganlarining hech biri bir-biri bilan **kesishmasligi** uchun **eng kamida nechta** intervalni olib tashlash kerakligini qaytaring.
   - **Misol:** `[[1,2],[2,3],[3,4],[1,3]]` → `1` — `[1,3]` intervalini o'chirsak, qolgan `[1,2],[2,3],[3,4]` bir-biri bilan kesishmaydi (faqat chekkalari tegadi, bu kesishish hisoblanmaydi).
   - *(LeetCode 435)*

**17.7.** 🟡 **Ikki ro'yxatning kesishmasi.** Ikkita **saralangan** interval ro'yxati (`A` va `B`) berilgan. Har bir `A` intervali va har bir `B` intervalining **umumiy qismini** (kesishmasini) toping va bu umumiy bo'laklar ro'yxatini qaytaring. Kesishma — ikki intervalning ustma-ust tushgan qismidir.
   - **Misol:** `([[0,2],[5,10]],[[1,5],[8,12]])` → `[[1,2],[5,5],[8,10]]` — `[0,2]` va `[1,5]` ning umumiy qismi `[1,2]`; `[5,10]` va `[1,5]` ning umumiy qismi bitta `5` nuqtasi, ya'ni `[5,5]`; `[5,10]` va `[8,12]` ning umumiy qismi `[8,10]`.
   - *(LeetCode 986)*

**17.8.** 🟡 **Bir vaqtda eng ko'p nechta interval ustma-ust?** Intervallar ro'yxati berilgan. Vaqt o'qidagi biror nuqtada bir vaqtning o'zida **eng ko'pi bilan nechta** interval ustma-ust tushishini (bir-birini qoplashini) qaytaring.
   - **Misol:** `[[1,4],[2,5],[3,6]]` → `3` — masalan `3` nuqtasida uchala interval ham (`[1,4]`, `[2,5]`, `[3,6]`) faol, ya'ni 3 tasi birdaniga ustma-ust turadi.

**17.9.** 🔴 **Minimal o'qlar bilan barcha sharlarni yorish.** Har bir shar `[boshi, oxiri]` bilan berilgan — u shu diapazonda X o'qi bo'ylab osilgan. Bir o'qni biror `x` nuqtaga otsangiz, `boshi ≤ x ≤ oxiri` bo'lgan barcha sharlar yoriladi. **Barcha** sharlarni yorish uchun kerak bo'ladigan **eng kam o'qlar** sonini qaytaring.
   - **Misol:** `[[10,16],[2,8],[1,6],[7,12]]` → `2` — bitta o'q `[1,6]` va `[2,8]` ni birga yoradi, yana bitta o'q `[7,12]` va `[10,16]` ni birga yoradi; jami 2 o'q yetadi.
   - *(LeetCode 452)*

**17.10.** 🔴 BONUS — **Yo'lovchilarni sig'dirib bo'ladimi?** Sayohatlar ro'yxati berilgan, har biri `[yo'lovchi_soni, boshlanish, tugash]` ko'rinishida (masalan `[2,1,5]` — `1`-nuqtada `2` yo'lovchi chiqib `5`-nuqtada tushadi). Mashina sig'imi `cap` ham berilgan. Yo'l davomida hech qachon yo'lovchilar soni `cap` dan oshib ketmasa `true`, oshib ketsa `false` qaytaring.
   - **Misol:** `([[2,1,5],[3,3,7]],4)` → `false` — `3`-nuqtada birinchi `2` yo'lovchi hali tushmagan (ular `5` gacha), ustiga `3` yo'lovchi qo'shiladi: jami `5 > 4`, sig'im yetmaydi.
   - *(LeetCode 1094)*
