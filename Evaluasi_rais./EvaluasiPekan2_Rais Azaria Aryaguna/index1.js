// document.write("hallo")

function apasih() {
    var bentuk = prompt("masukan nama bangun persegi/persegi panjang/lingkaran/kubus/balok! ")


    if (bentuk == "persegi") {
        var luas = prompt("anda ingin menghitung apa? luas/keliling")
        if (luas == "keliling") {
            var si = parseInt(prompt("masukan sisi persegi! "))
            var hasil3 = si * 4
            alert("keliling dari bagun perssegi adalah= " + hasil3)
            var konfirmasi = confirm("apakah adan ingin mengulang lagi ?")
            if (konfirmasi == true) {
                apasih()
            } else {
                document.write("terima kasih")
            }
        } else if (luas == "luas") {
            var sisisi = parseInt(prompt("masukan sisi persegi! "))
            var sisi = sisisi * sisisi
            alert("luas dari bagun perssegi adalah= " + sisi)
            var konfirmasi = confirm("apakah adan ingin mengulang lagi ?")
            if (konfirmasi == true) {
                apasih()
            } else {
                document.write("terima kasih")
            }
        }

    } else if (bentuk == "persegi panjang") {
        var luas = prompt("anda ingin menghitung apa? luas/keliling")
        if (luas == "keliling") {
            var panjag = parseInt(prompt("masukan sisi persegi! "))
            var lebar1 = parseInt(prompt("masukan sisi persegi! "))
            var hasil3 = panjag + lebar1 + panjag + lebar1
            alert("keliling dari bagun perssegi adalah= " + hasil3)
            var konfirmasi = confirm("apakah adan ingin mengulang lagi ?")
            if (konfirmasi == true) {
                apasih()
            } else {
                document.write("terima kasih")
            }
        } else if (luas == "luas") {
            var panjang = parseInt(prompt("masukan nominal panjag! "))
            var lebar = parseInt(prompt("masukan nominal lebar! "))
            var hasil6 = lebar * panjang
            alert("luas dari bagun perssegi panjang adalah= " + hasil6)
            var konfirmasi = confirm("apakah adan ingin mengulang lagi ?")
            if (konfirmasi == true) {
                apasih()
            } else {
                document.write("terima kasih")
            }
        }


    } else if (bentuk == "lingkaran") {
        var luas = prompt("anda ingin menghitung apa? luas/keliling")
        if (luas == "luas") {
            var jari = parseInt(prompt("masukan nominal jari-jari! "))
            var hasil5 = 22 / 7 * jari * jari
            alert("luas dari bagun lingkaran  adalah= " + hasil5)
            var konfirmasi = confirm("apakah adan ingin mengulang lagi ?")
            if (konfirmasi == true) {
                apasih()
            } else {
                document.write("terima kasih")
            }
        } else if (luas == "keliling") {
            var diameter = parseInt(prompt("masukan nominal diameter! "))
            var hasil4 = 22 / 7 * diameter
            alert("luas dari bagun perssegi panjang adalah= " + hasil4)
            var konfirmasi = confirm("apakah adan ingin mengulang lagi ?")
            if (konfirmasi == true) {
                apasih()
            } else {
                document.write("terima kasih")
            }
        }

    } else {
        document.write("<h2>YANG ADA MASUKAN BUKAN BANGUN DARTAR YANG  TERSEDIA/BUKAN BANGUN DATAR </h2>")
    }
    darat()

    if (bentuk == "kubus") {
        var rusuk = parseInt(prompt("masukan panjang rusuk kubus! "))
        var hasil2 = rusuk * rusuk * rusuk
        alert("volume dari bagun kubus adalah= " + hasil2)
        var konfirmasi = confirm("apakah adan ingin mengulang lagi ?")
        if (konfirmasi == true) {
            apasih()
        } else {
            document.write("terima kasih")
        }

    } else if (bentuk == "balok") {
        var panjang = parseInt(prompt("masukan nominal panjag! "))
        var lebar = parseInt(prompt("masukan nominal lebar! "))
        var tingi = parseInt(prompt("masukan nominal tinggi! "))
        var hasil1 = lebar * panjang * tingi
        alert("volume dari bagun balok adalah= " + hasil1)
        var konfirmasi = confirm("apakah adan ingin mengulang lagi ?")
        if (konfirmasi == true) {
            apasih()
        } else {
            document.write("terima kasih")
        }
    } else {
        document.write("<h2>YANG ADA MASUKAN BUKAN BANGUN RUANG YANG  TERSEDIA/BUKAN BANGUN RUANG </h2>")
    }
    volum()
}
apasih()