# Mavzu 11: Linked List (Bog'langan ro'yxat) 🔗

Linked list — qiymatlar `next` ko'rsatkichi orqali bir-biriga **bog'langan** tugunlar zanjiri. Massivdan farqli, bu yerda **indeks yo'q** — elementlarni `.next` orqali birma-bir yuriб topasiz.

> Difficulty: 🟢 oson · 🟡 o'rta · 🔴 qiyin

---

## ✅ Yechilgan misol: Linked list'ni teskari aylantirish

> **Masala:** Bog'langan ro'yxat berilgan. Uni teskari aylantirib, yangi `head` ni qaytaring.
> `[1, 2, 3]` → `[3, 2, 1]`

### 1-qadam: O'QI va TUSHUN
- **Input:** ro'yxat boshi `head`
- **Output:** teskari aylantirilgan ro'yxat boshi
- **Kalit:** har tugunning `next` strelkasini **orqaga** burishimiz kerak

### 2-qadam: QO'LDA YECH
`1 → 2 → 3 → null`. 3 ta strelkani teskari qilaman. Buning uchun "ortda kim turibdi" ni eslab turaman (`prev`):
- `prev=null`, `cur=1`. `1`ning `next`ini saqlab (`next=2`), `1.next=null` qilaman. Endi `prev=1`, `cur=2`
- `cur=2`. `next=3` saqlab, `2.next=1`. Endi `prev=2`, `cur=3`
- `cur=3`. `next=null` saqlab, `3.next=2`. Endi `prev=3`, `cur=null`
- `cur=null` → to'xta. Yangi bosh = `prev = 3` → `3 → 2 → 1` ✅

### 3-qadam: REJA
1. `prev = null`, `cur = head`
2. `cur` mavjud bo'lguncha takrorla:
   - `next = cur.next` (keyingisini saqlab qo'y — yo'qotmaslik uchun)
   - `cur.next = prev` (strelkani orqaga bur)
   - `prev = cur` (oldinga sur)
   - `cur = next`
3. Oxirida `prev` — yangi bosh, uni qaytar

### 4-qadam: KOD
```javascript
class ListNode { constructor(val, next = null) { this.val = val; this.next = next; } }
function build(arr) { let d = new ListNode(0), c = d; for (const v of arr) { c.next = new ListNode(v); c = c.next; } return d.next; }
function toArr(head) { const r = []; while (head) { r.push(head.val); head = head.next; } return r; }

function reverse(head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;   // keyingisini saqla
    cur.next = prev;         // strelkani orqaga bur
    prev = cur;              // oldinga sur
    cur = next;
  }
  return prev;               // yangi bosh
}
```

### 5-qadam: TEKSHIR
- `toArr(reverse(build([1,2,3])))` → `[3,2,1]` ✅
- `toArr(reverse(build([1])))` → `[1]` ✅ (bitta element)
- `reverse(build([]))` → `null` ✅ (bo'sh)

> 🔑 **PATTERN — "prev / cur / next":** ro'yxatda yurganda har doim **uch ko'rsatkich** bilan o'ylang: ortda turgan (`prev`), hozirgi (`cur`), oldindagi (`next`). Strelkani burishdan **oldin** `next`ni saqlamasangiz — zanjirning qolgan qismini yo'qotasiz! Bo'sh ro'yxat (`null`) holatini doim tekshiring.

---

## 📝 10 ta mashq

`yechimlar/11-linked-list.js` da yeching. Fayl boshidagi `build`, `toArr`, `ListNode` yordamchilaridan foydalaning.

**11.1.** 🟢 **Ro'yxat uzunligi.** Bog'langan ro'yxat (qiymatlar `next` orqali zanjir bo'lib bog'langan tugunlar) ning boshi berilgan. Ro'yxatda nechta tugun borligini sanab, shu sonni qaytaring. Test uchun `build([...])` yordamchisi massivdan ro'yxat yasab beradi.
   - **Misol:** `build([1,2,3])` → `3` — zanjirda 3 ta tugun bor.

**11.2.** 🟢 **Qiymatlar yig'indisi.** Bog'langan ro'yxat berilgan. Barcha tugunlarning qiymatlarini qo'shib, umumiy yig'indini qaytaring.
   - **Misol:** `build([1,2,3,4])` → `10` — chunki `1+2+3+4 = 10`.

**11.3.** 🟡 **O'rtadagi tugun.** **Toq** uzunlikdagi bog'langan ro'yxat berilgan (masalan 5 ta tugun). Aniq o'rtada turgan tugunning qiymatini qaytaring.
   - **Misol:** `build([1,2,3,4,5])` → `3` — 5 tugundan o'rtadagisi (3-o'rin) `3`.
   - *(LeetCode 876)*

**11.4.** 🟡 **Qiymat bormi?** Bog'langan ro'yxat va `val` soni berilgan. Shu qiymatga teng tugun ro'yxatda uchrasa `true`, aks holda `false` qaytaring.
   - **Misol:** `(build([1,2,3]), 2)` → `true` — ro'yxatda `2` qiymatli tugun bor.

**11.5.** 🟡 **Oxiridan n-chi tugun.** Bog'langan ro'yxat va `n` soni berilgan. Ro'yxatning **oxiridan** sanaganda `n`-o'rinda turgan tugunning qiymatini qaytaring (oxirgisi 1-o'rin).
   - **Misol:** `(build([1,2,3,4,5]), 2)` → `4` — oxiridan 2-tugun `4` (oxirgisi `5`, undan bittasi oldingisi `4`).

**11.6.** 🟡 **Qiymatli tugunlarni o'chirish.** Bog'langan ro'yxat va `val` soni berilgan. Qiymati `val` ga teng **barcha** tugunlarni ro'yxatdan olib tashlang va natijani `toArr` (ro'yxatni massivga aylantiruvchi yordamchi) yordamida massiv ko'rinishida qaytaring.
   - **Misol:** `(build([1,2,6,3,6]), 6)` → `[1,2,3]` — ikkala `6` tugun ham o'chirildi.
   - *(LeetCode 203)*

**11.7.** 🟡 **Ikki saralangan ro'yxatni birlashtirish.** O'sish tartibida **saralangan** ikkita bog'langan ro'yxat berilgan. Ularni bitta saralangan (o'sish tartibli) ro'yxatga birlashtiring va natijani `toArr` bilan massiv qilib qaytaring.
   - **Misol:** `(build([1,3,5]), build([2,4]))` → `[1,2,3,4,5]` — ikkala ro'yxat qiymatlari aralashtirilib, o'sish tartibida chiqadi.
   - *(LeetCode 21)*

**11.8.** 🟡 **Dublikatlarni o'chirish.** O'sish tartibida **saralangan** bog'langan ro'yxat berilgan. Takrorlangan qiymatlardan faqat bittasini qoldirib, qolganlarini o'chiring. Natijani `toArr` bilan massiv qilib qaytaring.
   - **Misol:** `build([1,1,2,3,3])` → `[1,2,3]` — ikkitalik `1` va `3` lardan bittadan qoldi.
   - *(LeetCode 83)*

**11.9.** 🔴 **Palindrom ro'yxat.** Bog'langan ro'yxat berilgan. Uning qiymatlari **oldidan o'qiganda ham, orqadan o'qiganda ham** bir xil bo'lsa `true`, aks holda `false` qaytaring.
   - **Misol:** `build([1,2,2,1])` → `true` — `1,2,2,1` ketma-ketligi teskari o'qilganda ham aynan o'zi.
   - *(LeetCode 234)*

**11.10.** 🔴 BONUS — **Ikki sonni qo'shish.** Har biri bitta sonni ifodalovchi ikkita bog'langan ro'yxat berilgan. Raqamlar **teskari** tartibda saqlangan: birinchi tugun — birlar xonasi, keyingisi — o'nlar xonasi va h.k. Ikki sonni qo'shib, natijani xuddi shunday teskari tartibda `toArr` bilan massiv qilib qaytaring.
   - **Misol:** `(build([2,4,3]), build([5,6,4]))` → `[7,0,8]` — `[2,4,3]` = 342, `[5,6,4]` = 465, `342 + 465 = 807`, teskari yozilishi `[7,0,8]`.
   - *(LeetCode 2)*
