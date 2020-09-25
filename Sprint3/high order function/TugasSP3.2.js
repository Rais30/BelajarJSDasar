// soal 1
var trasportasi = [{
        nama: 'mobil',
        roda: 4
    },
    {
        nama: 'motor',
        roda: 2
    },
    {
        nama: 'bajai',
        roda: 3
    }
]

// [mobil beroda 4, motor beroda 2,  bajai beroda3]
// [mobil beroda 4]

var kendaraan = trasportasi.map((a) => {
    return a.nama + " beroda " + a.roda;
})
var mobil = trasportasi.filter(trasportasi => trasportasi.roda >= 4)

document.write("<h2>Soal no 1</h2>")
document.write(kendaraan + "<br>")
document.write(mobil.map(trasportasi => trasportasi.nama + " beroda " + trasportasi.roda))


// soal 2

var nilaiSantri = [60, 70, 90, 100, 30, 50, 70, 90]

// output nilai rata rata

var nilai = nilaiSantri.reduce((angka, himpuan) => {
    return angka + himpuan
})

document.write("<h2>Soal no 2</h2>")
document.write("Nilai Rata-rata Santri: " + nilai / 8)