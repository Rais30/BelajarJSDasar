var santri = [

    { nama: 'Hafif', jurusan: 'programmer', angkatan: 2018 },

    { nama: 'Dayat', jurusan: 'programmer', angkatan: 2018 },

    { nama: 'Syofyan', jurusan: 'programmer', angkatan: 2019 },

    { nama: 'Fikri', jurusan: 'multimedia', angkatan: 2019 },

    { nama: 'Bagas', jurusan: 'imers', angkatan: 2018 },

]

var saringan = prompt("Mentor Jurusan= programer/multimedia/imers")

for (var n = 0; n < santri.length; n++) {
    if (santri[n].jurusan == saringan) {
        document.write("nana= " + santri[n].nama + "</br>")
        document.write("jurusan= " + santri[n].jurusan + "</br>")
        document.write("jurusan= " + santri[n].angkatan + "</br>")
        document.write("<br>")
    }
}