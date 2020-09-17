function kalkulator() {

    var operasi = prompt('masukan salah satu operassi hitung ini! ( + , - , * , / )')
    var angka1 = prompt('masukan nilai pertama!')
    var angka2 = prompt('masukan nilai kedua!')
    var angka1Int = parseInt(angka1)
    var angka2Int = parseInt(angka2)


    if ('+' == operasi) {
        var hasil1 = (angka1Int + angka2Int)
        alert("hasil dari operasi hitung adalah :" + hasil1)
    }
    var konfirmasi = confirm("apakah anda ingin menghitung?")
    if (konfirmasi == true) {
        kalkulator();
    } else {
        alert('terima kasih')
    }

    if ('-' == operasi) {
        var hasil2 = (angka1Int - angka2Int)
        alert("hasil dari operasi hitung adalah :" + hasil2)
    }
    var konfirmasi = confirm("apakah anda ingin menghitung?")
    if (konfirmasi == true) {
        kalkulator();
    } else {
        alert('terima kasih')
    }
}
if ('*' == operasi) {
    var hasil3 = (angka1Int * angka2Int)
    alert("hasil dari operasi hitung adalah :" + hasil3)
}
var konfirmasi = confirm("apakah anda ingin menghitung?")
if (konfirmasi == true) {
    kalkulator();
} else {
    alert('terima kasih')
}
if ('/' == operasi) {
    var hasil4 = (angka1Int / angka2I)
    alert("hasil dari operasi hitung adalah :" + hasil4)
}
var konfirmasi = confirm("apakah anda ingin menghitung?")
if (konfirmasi == true) {
    kalkulator();
} else {
    alert('terima kasih')
}



kalkulator()