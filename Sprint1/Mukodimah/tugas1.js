// 1 . diketahui panjang = 10 cm, lebar = 5 cm, tinggi = 8 cm, Hitunglah luas permukaan balok dan volume balok sehingga menampilkan output pada web

// diketahui :
// p = ... cm
// l = ... cm
// t = ... cm 

// ditanyakan ?
// volume dari balok adalah ... cm3

var p = 10
var l = 5
var t = 8
var volume = p * l * t
document.write("Dikeetaui :<br>" )
document.write('panjang = '+ p + 'cm<br>')
document.write('lebar = '+ l + 'cm<br>')
document.write('tinggi = '+ t + 'cm<br>')
document.write('Ditanya ?<br>')
document.write('volume dari balok adalah ' + volume + ' cm3')
document.write('<br>')

// luas permukaan balok adalah ... cm2

var Luas = 2 * (p * l + p * t + l * t)
document.write('Ditanya ? <br> Luas permukaan adalah ' + Luas + 'cm <br>')

// volume balok dalam liter ... l

var liter = volume / 1000
document.write("Ditanya ? <br> volume balok dalam liter adalah "+ liter + "l <br>")

// volume balok ketika di perbesa 3 kali ... cm3

var kaliVolume = volume * 3
document.write("Ditanya ? <br> volume balok di perbesar 3 kali "+ kaliVolume +"cm3 <br>")

// 2 . diketahui segitiga memiliki alas = 10 cm, tinggi = 12 cm. Hitunglah luas segitiga , dan memiliki keluaran output pada web sbb

// diketahui:
// alas = ...cm
// tinggi = ...cm

// ditanyakan ?
// luas segittiga adalah ... m2

var a = 10
var T = 12
var luassegitiga =  1/2* a * T / 10000
document.write("Diketahui: <br> Alas = 10 cm <br> Tinggi = 12 cm <br>")
document.write("Ditanya ? <br> luas segitiga adalah " + luassegitiga + "m <br>")