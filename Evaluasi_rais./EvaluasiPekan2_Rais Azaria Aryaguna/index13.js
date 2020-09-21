// santri(nama)
// var nama = "rais"

// function santri(nama = "yoga") {
//     document.write(nama)
// }

// var alas = parseInt(prompt("alas"))
// var tinggi = parseInt(prompt("tinggi"))

// function luas(alas, tinggi) {
//     var rumus = alas * tinggi / 2
//     document.write(rumus)
// }
// luas(12, 8)

// var panjang = parseInt(prompt("panjang"))
// var lebar = parseInt(prompt("lebar"))

// function persegiPanjang(p, l) {
//     var rumus = p * l
//     document.write(rumus)
// }
// persegiPanjang(panjang, lebar)

// // membuat 5 soal
// // function ? ? (persis seperti contoh diatas)


// var number = [
//         1, 2, 3, 4, 5, 6, 7
//     ]
//     document.write(number[0])
//     document.write(number[1])
//     document.write(number[2])
//     document.write(number[3])
//     document.write(number[4])
//     document.write(number[5])

// for (n = 0; n < number.length; n++) {
//     document.write(number[n])
// }

// var santri = [
//     ["rais", 2020, "programer"],
//     ["yoga", 2020, "programer"],
//     ["yusuf", 2019, "imer"],
//     ["adi", 2018, "multimedia"],
// ]
// document.write(santri[0][0])
// document.write(santri[1][0])
// document.write(santri[2][0])
// document.write(santri[3][0])
// document.write("<br>")
// document.write(santri[0][1])
// document.write(santri[1][1])
// document.write(santri[2][1])
// document.write(santri[3][1])

// for (n = 0; n < santri.length; n++) {
//     document.write(santri[n][0])
//     document.write("<br>")
//     document.write(santri[n][1])
//     document.write("<br>")
//     document.write("<br>")
// }
// var tahun = 2020
// var jurusan = "programer"

// // membuat array dan filter 5 ? ?

// for (n = 0; n < santri.length; n++) {
//     if (santri[n][1] == tahun && santri[n][2] == jurusan) {
//         document.write(santri[n][0])
//         document.write("<br>")
//         document.write(santri[n][1])
//         document.write("<br>")
//         document.write(santri[n][2])
//         document.write("<br>")
//     }
// }

// var mobil = {
//     warna: "putih",
//     keluarannya: 2020,
//     gas: function(parameter) {
//         return (parameter)
//     }

// }
// document.write(mobil.warna)
// document.write(mobil.gas("hallo"))
// document.write(mobil.keluarannya)



// membuat 5 soal
// function ? ? (persis seperti contoh diatas)

document.write("<h1>Function</h1>")

var hitungbangun = prompt("Bangun apa yang anda hitung? segitiga/lingkaran/bola")
var sisiA = 10
var sisiT = 7
var sisiB = 12
var sisiC = 9

if (hitungbangun == "segitiga") {
    function segitiga(A, T, B) {
        var operasihitung = prompt('menghitung apa? luas/keliling')
        if (operasihitung == "luas") {
            var rumus = (A * T) / 2
            document.write(rumus)
        } else if (operasihitung == "keliling") {
            var rumus1 = (A + T + B)
            document.write(rumus1)
        } else {
            document.write('dada')
        }
    }
    segitiga(sisiA, sisiT, sisiB)
} else if (hitungbangun == "lingkaran") {
    function ligkaran(A) {
        var operasilingkaran = prompt('menghitung apa? luas/keliling')
        if (operasilingkaran == "luas") {
            var rumus2 = 22 / 7 * A * A
            document.write(rumus2)
        } else if (operasilingkaran == "keliling") {
            var rumus3 = 2 * 22 / 7 * A
            document.write(rumus3)
        } else {
            document.write('dada')
        }
    }
    ligkaran(sisiA)
} else if (hitungbangun == "bola") {
    function bola(B) {
        var rumus4 = 4 / 3 * 22 / 7 * B * B * B
        document.write(rumus4)
    }
    bola(sisiB)
}


// membuat array dan filter 5 ? ?


var santri = [
    ['yamin', 2001],
    ['yoga', 2000],
    ['fathul', 2000],
    ['rais', 2002],
    ['edo', 2001],
    ['deni', 2003],
    ['akbar', 2000],
    ['abdul', 2000],
    ['yusuf', 2004],
    ['sulton', 2000]
]

var tahun=prompt('masukan tahun lahir santri!')

for (n = 0; n < santri.length; n++) {
    document.write('nama hewan: ' + santri[n][0])
    document.write('<br>')
    document.write('jumlah: ' + santri[n][1])
    document.write('<br>')
    document.write('<br>')
}