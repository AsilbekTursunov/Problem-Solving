# Mavzu 1: Sikl va Shart 🔁

Asosiy logika shu yerdan boshlanadi: biror narsani **takror bajarish** (sikl) va **qaror qabul qilish** (shart / `if`).

---

## ✅ Yechilgan misol: Massivdagi juft sonlarni sanash

> **Masala:** Sonlar massivi berilgan. Nechta juft son borligini qaytaring.
> `[1, 2, 3, 4, 5, 6]` → `3` (chunki 2, 4, 6 juft)

### 1-qadam: O'QI va TUSHUN
- **Input:** sonlar massivi, masalan `[1,2,3,4,5,6]`
- **Output:** bitta son — juftlar soni (`3`)
- **O'z so'zim bilan:** massivni boshidan oxirigacha ko'rib chiqib, har bir juft sonni sanab boraman.

### 2-qadam: QO'LDA YECH
Qog'ozda `[1,2,3,4,5,6]`, sanagich = 0:
- `1` → toq, o'tkazib yuboraman → sanagich `0`
- `2` → juft! → sanagich `1`
- `3` → toq → `1`
- `4` → juft! → sanagich `2`
- `5` → toq → `2`
- `6` → juft! → sanagich `3`
- **Javob: 3** ✅

> "Juftmi?" ni qanday bildim? Sonni 2 ga bo'lganda **qoldiq 0** bo'lsa — juft. Bu `son % 2 === 0`.

### 3-qadam: REJA
1. `count` sanagich ochaman, `0` ga tenglayman
2. Massivning har bir `son`i bo'yicha aylanaman
3. Agar `son % 2 === 0` bo'lsa, `count` ni 1 ga oshiraman
4. Oxirida `count` ni qaytaraman

### 4-qadam: KOD
```javascript
function juftlarSoni(arr) {
  let count = 0;                  // 1-qadam
  for (let son of arr) {          // 2-qadam: har bir son
    if (son % 2 === 0) {          // 3-qadam: juftmi?
      count++;
    }
  }
  return count;                   // 4-qadam
}
```

### 5-qadam: TEKSHIR
- `[1,2,3,4,5,6]` → `3` ✅
- `[]` (bo'sh) → `0` ✅ (sikl ishlamaydi, `count` 0 qoladi)
- `[2,4,6]` → `3` ✅
- `[1,3,5]` → `0` ✅

> 🔑 **PATTERN — "sanagich + sikl + shart":** biror shartga mos elementlarni sanash kerak bo'lsa, doim shu naqsh: `count=0` → aylan → `if` → `count++`. Buni eslab qoling, pastdagi mashqlarning yarmi shunga asoslangan.

---

## 📝 10 ta mashq

Har birini **5 qadam** bo'yicha `yechimlar/01-sikl-va-shart.js` faylida yeching.

**1.1.** `1` dan `n` gacha bo'lgan barcha sonlar yig'indisi.
`n=5` → `15` (1+2+3+4+5)

**1.2.** `1` dan `n` gacha bo'lgan **juft** sonlar yig'indisi.
`n=6` → `12` (2+4+6)

**1.3.** `n` faktoriali (n! = 1·2·3·...·n).
`n=5` → `120`

**1.4.** Berilgan musbat sonning raqamlari yig'indisi.
`n=1234` → `10` (1+2+3+4)
*Ipuchi: `n % 10` — oxirgi raqam, `Math.floor(n/10)` — oxirgisini o'chiradi.*

**1.5.** Son tub (prime) yoki yo'qligini tekshiring (`true`/`false`).
`7` → `true`, `8` → `false`
*Ipuchi: 2 dan `n-1` gacha hech narsaga bo'linmasa — tub.*

**1.6.** FizzBuzz: `1` dan `n` gacha massiv qaytaring, lekin 3 ga bo'linsa `"Fizz"`, 5 ga `"Buzz"`, ikkisiga ham `"FizzBuzz"`.
`n=5` → `["1","2","Fizz","4","Buzz"]`

**1.7.** Sonning nechta raqami borligini qaytaring.
`n=2026` → `4`

**1.8.** `1` dan `n` gacha 3 **yoki** 5 ga bo'linadigan sonlar yig'indisi.
`n=10` → `33` (3+5+6+9+10)

**1.9.** Sonning eng katta raqamini toping.
`n=2719` → `9`

**1.10.** Sonni teskari aylantiring (raqamlarini).
`n=1234` → `4321`
