var n = prompt('Masukan jumlah perulangan');
var nInt = parseInt(n);

for (var a = 1; a <= nInt; a++) {
    document.write('hello wold' + a + 'kali <br>');
}
document.write('<hr>')
document.write('<br>')

document.write('<h1>logic challenge</h1>')
document.write('<h2>soal no 1</h2>')

for (var y = 1; y <= nInt; y++) {
    for (var x = 1; x <= nInt; x++) {
        if (y == x) {
            document.write('* ')
        } else {
            document.write('_ ')
        }
    }
    document.write('<br>')
}
document.write("<hr>soal no 2</h2>")

document.write('<h2>soal no 2</h2>')
for (var y = 1; y <= nInt; y++) {
    for (var x = 1; x <= nInt; x++) {
        if (x == nInt + 1 - y) {
            document.write('* ')
        } else {
            document.write('- ')
        }
    }
    document.write("<br>")
}
document.write('<hr>')

document.write('<h2>soal no 3</h2>')
for (var y = 1; y <= nInt; y++) {
    for (var x = 1; x <= nInt; x++) {
        if (y == x || x == nInt + 1 - y) {
            document.write('* ')
        } else {
            document.write('- ')
        }
    }
    document.write('<br>')
}
document.write('<hr>')

document.write('<h2>soal no 4</h2>')
document.write('<br>')

for (var y = 1; y <= nInt; y++) {
    for (var x = 1; x <= nInt; x++) {
        if (x <= y) {
            document.write('* ')
        } else {
            document.write('- ')
        }
    }
    document.write('<br>')
}
document.write('<hr>')

document.write('<h2>soal no 5</h2>')
document.write('<br>')

for (var y = 1; y <= nInt; y++) {
    for (var x = 1; x <= nInt; x++) {
        if (x >= y) {
            document.write('* ')
        } else {
            document.write('- ')
        }
    }
    document.write('<br>')
}
document.write('<hr>')

document.write('<h2>soal no 6</h2>')
document.write('<br>')

for (var y = 1; y <= nInt; y++) {
    for (var x = 1; x <= nInt; x++) {
        if (y <= nInt + 1 - x) {
            document.write(' * ')
        } else {
            document.write(' - ')
        }
        ''
    }
    document.write('<br>')
}
document.write('<hr>')

document.write('<h2>soal no 7</h2>')
document.write('<br>')

for (var y = 1; y <= nInt; y++) {
    for (var x = 1; x <= nInt; x++) {
        if (y >= nInt + 1 - x) {
            document.write(' * ')
        } else {
            document.write(' - ')
        }
    }
    document.write('<br>')
}
document.write('<hr>')

document.write('<h2>soal no 8</h2>')
document.write('<br>')

for (var y = 1; y <= nInt; y++) {
    for (var x = 1; x <= nInt; x++) {
        if (y == x || x == nInt + 1 - y) {
            document.write(' * ')
        } else if (y == nInt / 0.5 || x == nInt / 0.5) {
            document.write(' * ')
        } else {
            document.write("- ")
        }
    }
    document.write('<br>')
}
document.write('<hr>')

document.write('<h2>soal no 9</h2>')
document.write('<br>')

for (var x = 1; x <= nInt; x++) {
    if (x % 2 == 1) {
        document.write(x + '&nbsp')
    }
}
document.write('<hr>')

document.write('<h2>soal no 10</h2>')
document.write('<br>')

for (var x = 1; x <= nInt; x++) {
    if (x % 2 == 0) {
        document.write(x + '&nbsp')
    }
}
document.write('<hr>')

document.write('<h2>soal no 11</h2>')
document.write('<br>')

for (var y = 1; y <= nInt; y++) {
    for (var x = 1; x <= nInt; x++) {
        if (y <= x && x <= nInt + 1 - y) {
            document.write("* ")
        } else if (x <= y & x >= nInt + 1 - y) {
            document.write('* ')
        } else {
            document.write('- ')
        }
    }
    document.write('<br>')
}