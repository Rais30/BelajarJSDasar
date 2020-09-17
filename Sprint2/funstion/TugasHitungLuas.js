function start() {
    var bangundatar = prompt("pilih bangun datar persegi panjang/segitiga/lingkaran ?")

    function persegipanjang(panjang, lebar) {
        alert("luas persegi panjang adalah " + panjang * lebar)
        var konfirmasi = confirm("apakah anda ingin mengulang?")
        if (konfirmasi == true) {
            start();
        } else {
            alert('terima kasih')
        }
    }

    function segiitiga(alas, tinggi) {
        alert("luas segitiga adalah " + alas * tinggi / 2)
        var konfirmasi = confirm("apakah anda ingin mengulang?")
        if (konfirmasi == true) {
            start();
        } else {
            alert('terima kasih')
        }
    }

    function lingkaran(jarijari) {
        alert("luas lingkaran adalah " + 22 / 7 * jarijari * jarijari)
        var konfirmasi = confirm("apakah anda ingin mengulang?")
        if (konfirmasi == true) {
            start();
        } else {
            alert('terima kasih')
        }
    }

    if ("persegi panjang" == bangundatar) {
        var panjang = prompt("masukan panjang ")
        var panjangInt = parseInt(panjang)
        var lebar = prompt("masukan lebar ")
        var lebarInt = parseInt(lebar)
        persegipanjang(panjangInt, lebarInt)
    } else if ("segitiga" == bangundatar) {
        var alas = prompt("masukan alas ")
        var alasInt = parseInt(alas)
        var tinggi = prompt("masukan tinggi ")
        var tinggiInt = parseInt(tinggi)
        segiitiga(alasInt, tinggiInt)
    } else if ("lingkaran" == bangundatar) {
        var jarijari = prompt("masukan jari jari ")
        var jarijariInt = parseInt(jarijari)
        lingkaran(jarijariInt)
    } else {
        alert('terima kasih')
    }
}

start();