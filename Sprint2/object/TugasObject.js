// tugas Object

// var projek = {
//     perusahaan1: "aplikasi absesi pegawai",
//     perusahaan2: 10,
//     perusahaan3: ["mobile", 5, "backend", 5],
//     projek1: function() {
//         return "divisiBackend"
//     },
// }

// prompt.projek1()
// document.write(prompt.perusahaan3[3])


var santri = [{
        nama: "yoga",
        jurusan: "mobile",
    },
    {
        nama: "yamin",
        jurusan: "mobile",
    },
    {
        nama: "iqbal",
        jurusan: "backend",
    },
    {
        nama: "faris",
        jurusan: "frontend",
    },
]
var saringan = prompt("tulesno jurusa ne  opo seng ape mok golek i!")

// for (var n = 0; n < santri.length; n++) {
//     document.write("nama= " + santri[n].nama + "</br>")
//     document.write("jurusan= " + santri[n].jurusan + "</br>")
//     document.write("<br>")
// }

for (var n = 0; n < santri.length; n++) {
    if (santri[n].jurusan == saringan) {
        document.write("nana= " + santri[n].nama + "</br>")
        document.write("jurusan= " + santri[n].jurusan + "</br>")
        document.write("<br>")
    }
}