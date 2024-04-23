"use strict"

// -------------------- 1-masala start --------------------

// function massiv_yigindisi(arr) {
//     let yigindi = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             yigindi += arr[i];
//         }
//     }
//     return yigindi;
// }

// let massiv = [10, "JS", 21, 4, 1, 12, true];
// let yigindi = massiv_yigindisi(massiv);
// console.log(yigindi);

// -------------------- 1-masala end --------------------





// -------------------- 2-masala start --------------------

// function eng_yaqin_son(arr, R) {
//     let engYaqinSon = null;
//     let engYaqinMasofa = Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             let masofa = Math.abs(arr[i] - R);
//             if (masofa < engYaqinMasofa) {
//                 engYaqinSon = arr[i];
//                 engYaqinMasofa = masofa;
//             }
//         }
//     }

//     return engYaqinSon;
// }

// let massiv = [1, 23, 42, 14, 21, 22];
// let R = 16;
// let engYaqinSon = eng_yaqin_son(massiv, R);
// console.log(engYaqinSon);

// -------------------- 2-masala end --------------------





// -------------------- 3-masala start --------------------

// function juft_indeksli_sonlar(arr) {
//     let sonlar = [];

//     for (let i = 0; i < arr.length; i += 2) {
//         if (typeof arr[i] === 'number') {
//             sonlar.push(arr[i]);
//         }
//     }

//     return sonlar;
// }

// let massiv = [10, "JS", 21, 4, 1, 12, true];
// let juftIndeksliSonlar = juft_indeksli_sonlar(massiv);
// console.log(juftIndeksliSonlar.join(' '));

// -------------------- 3-masala end --------------------





// -------------------- 4-masala start --------------------

// function bir_xil_qiymatli_indekslar(arr) {
//     let indekslar = {};

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (typeof element === 'number') {
//             if (indekslar[element]) {
//                 indekslar[element].push(i);
//             } else {
//                 indekslar[element] = [i];
//             }
//         }
//     }

//     let birXilQiymatliIndekslar = Object.values(indekslar)
//         .filter(indekslarArr => indekslarArr.length > 1)
//         .map(indekslarArr => indekslarArr.join(','));

//     return birXilQiymatliIndekslar.join(' ');
// }

// let massiv = [10, 21, 4, 1, 12, 21];
// let birXilQiymatliIndekslar = bir_xil_qiymatli_indekslar(massiv);
// console.log(birXilQiymatliIndekslar);

// -------------------- 4-masala end --------------------





// -------------------- 5-masala start --------------------

// function toq_indeksli_sonlar(arr) {
//     let sonlar = [];

//     for (let i = 1; i < arr.length; i += 2) {
//         if (typeof arr[i] === 'number') {
//             sonlar.push(arr[i]);
//         }
//     }

//     return sonlar.length;
// }

// let massiv = [1, 23, 42, 14, 21, 22];
// let toqIndeksliSonlarSoni = toq_indeksli_sonlar(massiv);
// console.log(toqIndeksliSonlarSoni);

// -------------------- 5-masala end --------------------





// -------------------- 6-masala start --------------------

// function elementlarni_orttir(arr, k) {
//     let yangilanganMassiv = arr.map(element => {
//         if (typeof element === 'number') {
//             return element + k;
//         }
//         return element;
//     });
//     return yangilanganMassiv;
// }

// let massiv = [10, 2, 34, 5, 13, 63, 16];
// let k = 3;
// let yangilanganMassiv = elementlarni_orttir(massiv, k);
// console.log(yangilanganMassiv);

// -------------------- 6-masala end --------------------





// -------------------- 7-masala start --------------------

// function kichik_katta_elementlarini_almashtir(arr) {
//     let engKichik = Math.min(...arr);
//     let engKatta = Math.max(...arr);

//     let yangilanganMassiv = arr.map(element => {
//         if (element === engKichik || element === engKatta) {
//             return element;
//         }
//         return 0;
//     });

//     return yangilanganMassiv;
// }

// let massiv = [10, 2, 34, 5, 13, 63, 16];
// let yangilanganMassiv = kichik_katta_elementlarini_almashtir(massiv);
// console.log(yangilanganMassiv);

// -------------------- 7-masala end --------------------





// -------------------- 8-masala start --------------------

// function bir_xil_qoshnilarni_ochir(arr) {
//     let yangilanganMassiv = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (yangilanganMassiv.indexOf(arr[i]) === -1) {
//             yangilanganMassiv.push(arr[i]);
//         }
//     }

//     return yangilanganMassiv;
// }

// let massiv = [10, 2, 2, 5, 13, 63, 63, 16, 5];
// let yangilanganMassiv = bir_xil_qoshnilarni_ochir(massiv);
// console.log(yangilanganMassiv);

// -------------------- 8-masala end --------------------





// -------------------- 9-masala start --------------------

// function juft_va_toq_elementlarni_chiqar(arr) {
//     let juftElementlar = [];
//     let toqElementlar = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             juftElementlar.push(arr[i]);
//         } else {
//             toqElementlar.push(arr[i]);
//         }
//     }

//     juftElementlar.sort((a, b) => a - b);
//     toqElementlar.sort((a, b) => b - a);

//     let yangilanganMassiv = juftElementlar.concat(toqElementlar);
//     return yangilanganMassiv;
// }

// let massiv = [4, 5, 7, 8, 6, 9];
// let yangilanganMassiv = juft_va_toq_elementlarni_chiqar(massiv);
// console.log(yangilanganMassiv);

// -------------------- 9-masala end --------------------





// -------------------- 10-masala start --------------------

// function kichik_va_katta_elementlarni_topish(arr) {
//     let engKichik = Math.min(...arr);
//     let engKatta = Math.max(...arr);

//     let engKichikIndex = arr.indexOf(engKichik);
//     let engKattaIndex = arr.indexOf(engKatta);

//     [arr[engKichikIndex], arr[engKattaIndex]] = [arr[engKattaIndex], arr[engKichikIndex]];

//     return `(Max: ${engKatta}, Min: ${engKichik}) ` + arr;
// }

// let massiv = [7, 4, 9, 2, 3, 1, 5];
// let yangilanganMassiv = kichik_va_katta_elementlarni_topish(massiv);
// console.log(yangilanganMassiv);

// -------------------- 10-masala end --------------------
