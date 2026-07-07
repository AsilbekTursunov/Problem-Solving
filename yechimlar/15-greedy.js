// ============================================
// Mavzu 15: Greedy (Ochko'z algoritmlar) — YECHIMLAR
// Tekshirish:  node yechimlar/15-greedy.js
// ============================================

// 15.1 — Oxirigacha sakrab yetib bo'ladimi?
// 0-indeksdan boshlaysiz; arr[i] — shu katakdan oldinga eng ko'pi bilan necha qadam sakrash mumkin.
// Oxirgi indeksga yetib borish mumkin bo'lsa true, aks holda false.
// Misol: [2,3,1,1,4] -> true, [3,2,1,0,4] -> false   (ikkinchisida 0 katagiga tushib qolinadi)
function sakray(arr) {
  // TODO
}

// 15.2 — Limonad qaytimi.
// Mijozlar $5, $10 yoki $20 bilan to'laydi; limonad $5 turadi. Kassa dastlab bo'sh.
// Har mijozga faqat oldingi pullardan to'g'ri qaytim bera olsangiz true, aks holda false.
// Misol: [5,5,5,10,20] -> true   ($10 ga $5; $20 ga $10+$5 qaytariladi)
function limonad(arr) {
  // TODO
}

// 15.3 — Bolalarga pechene.
// g — bolalar ishtahasi, s — pechene o'lchamlari. Bir bolaga bitta pechene.
// Pechene o'lchami bola ishtahasidan kichik bo'lmasa (s[j] >= g[i]) bola to'q bo'ladi.
// Eng ko'pi bilan nechta bola to'q bo'lishini qaytaring.
// Misol: ([1,2,3],[1,1]) -> 1   (ikkita 1-o'lchamli pechene faqat 1 ishtahali bolaga yetadi)
function pechene(g, s) {
  // TODO
}

// 15.4 — Gul ekish.
// arr gulzor: 1 — band katak, 0 — bo'sh. Yonma-yon ikkita gul bo'lishi mumkin emas.
// Qoidani buzmasdan yana n ta gul ekib bo'lsa true, aks holda false.
// Misol: ([1,0,0,0,1],1) -> true   (o'rtadagi indeks 2 ga bitta gul eksa bo'ladi)
function gulEk(arr, n) {
  // TODO
}

// 15.5 — Aksiyadan ko'p marta savdo.
// prices — har kungi narx. Istagancha marta olib-soting (lekin bir vaqtda bitta aksiya).
// Jami maksimal foydani qaytaring.
// Maslahat: bugun narx kechagidan baland bo'lsa, o'sha farqni yig'ib boring.
// Misol: [7,1,5,3,6,4] -> 7   (1 da ol 5 da sot = +4, 3 da ol 6 da sot = +3)
function foydaII(prices) {
  // TODO
}

// 15.6 — Minimal tangalar soni.
// coins — tanga qiymatlari (kanonik to'plam), amount — yig'ilishi kerak bo'lgan summa.
// Shu summani hosil qilish uchun eng kam tangalar sonini qaytaring.
// Maslahat: har qadamda summadan oshmaydigan eng katta tangani oling.
// Misol: ([1,5,10,25],36) -> 3   (25 + 10 + 1 = 36, jami 3 ta tanga)
function minTanga(coins, amount) {
  // TODO
}

// 15.7 — Bo'luvchi belgilar.
// Satr s ni ketma-ket bo'laklarga ajrating: har harf faqat bitta bo'lakda uchrasin,
// bo'laklar soni imkon qadar ko'p bo'lsin. Bo'lak uzunliklarini massiv qilib qaytaring.
// Maslahat: har harfning oxirgi pozitsiyasini toping, bo'lak shu chegaraga yetganda yoping.
// Misol: "ababcbacadefegdehijhklij" -> [9,7,8]
function boluvchiBelgilar(s) {
  // TODO
}

// 15.8 — Gaz stansiyasi (halqa yo'l).
// gas[i] — i-stansiyada olinadigan yoqilg'i, cost[i] — keyingi stansiyaga yetish sarfi.
// Stansiyalar halqa shaklida. Butun halqani bir marta aylanib chiqa oladigan
// boshlang'ich stansiya indeksini qaytaring; iloji bo'lmasa -1 (yechim yagona).
// Misol: ([1,2,3,4,5],[3,4,5,1,2]) -> 3   (3-indeksdan baki manfiyga tushmay aylanadi)
function gazStansiya(gas, cost) {
  // TODO
}

// 15.9 — Sakrash II (minimal sakrashlar).
// 0-indeksdan boshlaysiz; arr[i] — oldinga eng ko'pi bilan necha qadam sakrash mumkin.
// Oxirgi indeksga yetish har doim mumkin. Kerak bo'ladigan eng kam sakrashlar sonini qaytaring.
// Misol: [2,3,1,1,4] -> 2   (0 -> 1-indeks, so'ng to'g'ri oxiriga: jami 2 sakrash)
function sakrayII(arr) {
  // TODO
}

// 15.10 — BONUS: Shirinlik (konfet taqsimlash).
// arr — qatorga tizilgan bolalar reytinglari. Har bolaga kamida 1 ta konfet.
// Agar bola reytingi bevosita qo'shnisinikidan yuqori bo'lsa, unga qo'shnisidan ko'proq berilsin.
// Shu shartlarni bajaradigan eng kam jami konfet sonini qaytaring.
// Misol: [1,0,2] -> 5   (konfetlar [2,1,2], jami 2 + 1 + 2 = 5)
function shirinlik(arr) {
  // TODO
}

// ---------------- TEST ----------------
console.log("15.1 ", sakray([2,3,1,1,4]), sakray([3,2,1,0,4]), "| kutilgan: true false");
console.log("15.2 ", limonad([5,5,5,10,20]),          "| kutilgan: true");
console.log("15.3 ", pechene([1,2,3],[1,1]),          "| kutilgan: 1");
console.log("15.4 ", gulEk([1,0,0,0,1],1),            "| kutilgan: true");
console.log("15.5 ", foydaII([7,1,5,3,6,4]),          "| kutilgan: 7");
console.log("15.6 ", minTanga([1,5,10,25],36),        "| kutilgan: 3");
console.log("15.7 ", JSON.stringify(boluvchiBelgilar("ababcbacadefegdehijhklij")), "| kutilgan: [9,7,8]");
console.log("15.8 ", gazStansiya([1,2,3,4,5],[3,4,5,1,2]), "| kutilgan: 3");
console.log("15.9 ", sakrayII([2,3,1,1,4]),           "| kutilgan: 2");
console.log("15.10", shirinlik([1,0,2]),              "| kutilgan: 5 (bonus)");
