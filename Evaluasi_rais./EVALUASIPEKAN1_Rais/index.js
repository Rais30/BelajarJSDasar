var n = 10
var nInt = parseInt(n)

document.write("<h1>evaluasi pekan 1</h1>")
document.write("<br>")
document.write("<h2>soal 1</h2>")

for (y = 1; y < nInt; y++) {
    for (x = 1; x < nInt; x++) {
        if (y == x) {
            document.write('* ')
        } else {
            document.write('-')
        }
    }
    document.write('<br>')
}
document.write('<br>')

document.write('<h2>soal 2</h2>')
document.write('<br>')

for (y = 1; y < nInt; y++) {
    for (x = 1; x < nInt; x++) {
        if (x == nInt + 1 - y) {
            document.write('*')
        } else {
            document.write('-')
        }
    }
    document.write('<br>')
}
document.write('<br>')

document.write('<h2>soal 3</h2>')
document.write('<br>')

for (y = 1; y < nInt; y++) {
    for (x = 1; x < nInt; x++) {
        if (y == x || x == nInt + 1 - y) {
            document.write('*')
        } else {
            document.write('-')
        }
    }
    document.write('<br>')
}
document.write('<br>')

document.write('<h2>soal 4</h2>')
document.write('<br>')

for (y = 1; y < nInt; y++) {
    for (x = 1; x < nInt; x++) {
        if (y == x || x == nInt + 1 - y) {
            document.write('*')
        } else if (y == nInt / 2 || x == nInt / 2) {
            document.write('* ')
        } else {
            document.write('- ')
        }

    }
    document.write('<br>')
}
document.write('<br>')

document.write('<h2>soal 5</h2>')
document.write('<br>')

for (y = 1; y < nInt; y++) {
    for (x = 1; x < nInt; x++) {
        if (x <= y) {
            document.write('*')
        } else {
            document.write('- ')
        }
    }
    document.write('<br>')
}
document.write('<br>')

document.write('<h2>soal 6</h2>')
document.write('<br>')

for (y = 1; y < nInt; y++) {
    for (x = 1; x < nInt; x++) {
        if (x >= nInt + 1 - y) {
            document.write('* ')
        } else {
            document.write('- ')
        }
    }
    document.write('<br>')
}
document.write('<br>')

document.write('<h2>soal 7</h2>')
document.write('<br>')

for (y = 1; y < nInt; y++) {
    for (x = 1; x < nInt; x++) {
        if (y <= x && x <= nInt + 1 - y || x <= y && x >= nInt + 1 - y) {
            document.write('* ')
        } else {
            document.write('- ')
        }
    }
    document.write('<br>')
}
document.write('<br>')

document.write('<h2>soal 8</h2>')
document.write('<br>')

for (y = 1; y < nInt; y++) {
    for (x = 1; x < nInt; x++) {
        if (y == x) {
            document.write(x * 2 - 1)
        } else {
            document.write('- ')
        }
    }
    document.write('<br>')
}
document.write('<br>')

document.write('<h2>soal 9</h2>')
document.write('<br>')

for (y = 1; y < nInt; y++) {
    for (x = 1; x < nInt; x++) {
        if (y == 1 || y == 9) {
            document.write('*')
        } else if (x == nInt + 1 - y) {
            document.write('*')
        } else if (x == nInt + 1 - y) {
            document.write('* ')
        } else {
            document.write('- ')
        }
    }
    document.write('<br>')
}
document.write('<br>')

document.write('<h2>soal 10</h2>')
document.write('<br>')

for (y = 1; y < nInt; y++) {
    for (x = 1; x < nInt; x++) {
        if (y == 1 || y == 5 || y == 9) {
            document.write('*')
        } else if (x == 1 && y == 2 || x == 1 && y == 3 || x == 1 && y == 4) {
            document.write('* ')
        } else if ()
    }
}