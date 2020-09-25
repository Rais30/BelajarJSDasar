// array.map

// let objec = [
//     { angka: 1 },
//     { angka: 2 },
//     { angka: 3 }
// ]

// objec.map((objec) => {
//     document.write(objec.angka)
// })

// array.filter

// let orang = [
//     { nama: 'Sutan', umur: 16 },
//     { nama: 'Joni', umur: 18 },
//     { nama: 'Mark', umur: 27 },
//     { nama: 'Back', umur: 14 },
//     { nama: 'Toni', umur: 24 },
// ]

// orang = orang.filter(orang => orang.umur >= 18)
// alert(orang.map(orang => orang.nama))

// document.write('hallo')

// map(): memetakan setiap elemen menjadi elemen  baru 
// var array = [1, 2, 3, 4]
// var arrayBaru = []

// for (x = 0; x < array.length; x++) {
//     arrayBaru.push(array[x] + 1)
// }

// var genap = array.map((a, b) => {
// return a * 2;
// })

// document.write(genap)

// filter(): mengembalika elemen yang diinginkan 

// var angka = [1, 2, 3, 4, 5, 6]
// var ganjil = angka.filter((a, b) => {
// return a % 2 == 0
// })
// document.write(ganjil)

// reduce(): mengakumulasikan setiap elemen

// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 
// var operasi = angka.reduce((a, b) => {
// return a * b
// })
// 
// document.write(operasi)