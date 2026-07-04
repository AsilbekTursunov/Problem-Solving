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

**11.1.** 🟢 Ro'yxat uzunligi (nechta tugun bor).
`build([1,2,3])` → `3`

**11.2.** 🟢 Barcha qiymatlar yig'indisi.
`build([1,2,3,4])` → `10`

**11.3.** 🟡 O'rtadagi tugun qiymati (toq uzunlikda — aniq o'rta).
`build([1,2,3,4,5])` → `3`  *(LeetCode 876)*

**11.4.** 🟡 Berilgan qiymat ro'yxatda bormi (`true`/`false`).
`(build([1,2,3]), 2)` → `true`

**11.5.** 🟡 Oxiridan `n`-tugun qiymati.
`(build([1,2,3,4,5]), 2)` → `4`

**11.6.** 🟡 Berilgan qiymatli barcha tugunlarni o'chiring (`toArr` qaytaring).
`(build([1,2,6,3,6]), 6)` → `[1,2,3]`  *(LeetCode 203)*

**11.7.** 🟡 Ikki **saralangan** ro'yxatni bitta saralangan ro'yxatga birlashtiring (`toArr`).
`(build([1,3,5]), build([2,4]))` → `[1,2,3,4,5]`  *(LeetCode 21)*

**11.8.** 🟡 Saralangan ro'yxatdan dublikatlarni o'chiring (`toArr`).
`build([1,1,2,3,3])` → `[1,2,3]`  *(LeetCode 83)*

**11.9.** 🔴 Ro'yxat palindrommi (oldidan ham, orqadan ham bir xil)?
`build([1,2,2,1])` → `true`  *(LeetCode 234)*

**11.10.** 🔴 BONUS — Ikki sonni qo'shing (raqamlar **teskari** saqlangan, `toArr`).
`(build([2,4,3]), build([5,6,4]))` → `[7,0,8]`  *(342 + 465 = 807)* *(LeetCode 2)*
