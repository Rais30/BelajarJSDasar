// document.write("hallo")


// pendeklarasian baru ES 6 
//  var , let , const

// console.log("hallo")

// let nama = "yamin"
// nama = "yoga"

// console.log(nama)

// arrow function

// luassegitiga = (alas, tinggi) => (alas * tinggi) / 2

// console.log(luassegitiga(12, 5))

// 1.luas lingkaran, persegi, persegi panjang, kubus, balok:

// let hitung = prompt("lingkaran, persegi, persegi panjang, kubus, balok")

// hitungBangun = (a, b, c) => {
//     if (hitung == "linkaran") {
//         let rumus = 22 / 7 * c * c
//         document.write(rumus)
//     } else if (hitung == "persegi") {
//         let rumus = a * c
//         document.write(rumus)
//     } else if (hitung == "persegi panjang") {
//         let rumus = b * c
//         document.write(rumus)
//     } else if (hitung == "kubus") {
//         let rumus = c * c * c
//         document.write(rumus)
//     } else if (hitung == "balok") {
//         let rumus = c * a * b
//         document.write(rumus)
//     } else {
//         alert("buka")
//     }
// }
// hitungBangun(12, 27, 10)


// // class
// // kumpulan object yang didalam bisa di instansiasi porperti ataaumethod dan dapat diwariskan


// class Santri {
//     constructor() {
//         this.nama = "yamin"
//         this.usia = 19
//         this.jurusan = "mobile Development"
//     }
//     sayHello = (params = "hello") => params
//     sayhello2 = (params = "hallo") => params + this.nama
// }

// let NewSantri = new Santri()

// console.log(NewSantri.sayHello("hello siap"))
// console.log


class Rumah {
    tembok = (param) => "temboknya berwarna " + param
}

class RumahRais extends Rumah {
    constructor() {
        super()
        this.nama = "Rais"
    }
    tembokRumahRais = (warna) => "Rumah" + this.nama + this.tembok(warna)
}

let NewRumahRais = new RumahRais()
console.log(NewRumahRais.tembokRumahRais("hijau"))