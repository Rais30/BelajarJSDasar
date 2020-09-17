var B = prompt("masukam angka")
var ab = parseInt(B)

// for (var y = 1; y < ab; y++) {
//     for (var x = 1; x < ab; x++) {
//         if (y == x) {
//             document.write('0' + "&nbsp&nbsp")
//         } else {
//             document.write('-' + "&nbsp")
//         }
//     }
//     document.write("<br>")
// }

// for (var y = 1; y < ab; y++) {
//     for (var x = 1; x < ab; x++) {
//         if (x == ab + 1 - y) {
//             document.write("o ")
//         } else {
//             document.write("* ")
//         }

//     }
//     document.write("<br>")
// }


// for (var y = 1; y <= ab; y++) {
//     for (var x = 1; x <= ab; x++) {
//         if (y <= x && x <= ab + 1 - y) {
//             document.write('* ')
//         } else if (x <= y && x >= ab + 1 - y) {
//             document.write('* ')
//         } else {
//             document.write('- ')
//         }

//     }
//     document.write('<br>')
// }
// document.write('<hr>')
// document.write('<br>')

// for (var y = 1; y <= ab; y++) {
//     for (var x = 1; x <= ab; x++) {
//         if (y == x || x == ab + 1 - y) {
//             document.write('* ')
//         } else {
//             document.write('- ')
//         }

//     }
//     document.write('<br>')
// }
// document.write('<hr>')
// document.write('<br>')

// for (var y = 1; y <= ab; y++) {
//     for (var x = 1; x <= ab; x++) {
//         if (x == 2 && y >= 2 && y <= 8) {
//             document.write('* ')
//         } else if (y == 8 && x >= 2 && x <= 8) {
//             document.write('* ')
//         } else if (x == 8 && y >= 2 && y <= 8) {
//             document.write('* ')
//         } else if (y == 2 && x >= 2 && x <= 8) {
//             document.write('* ')
//         } else {
//             document.write('_ ')
//         }
//     }
//     document.write('<br>')
// }

for (var y = 1; y <= ab; y++) {
    for (var x = 1; x <= ab; x++) {
        if (y == ab / 2 && x <= ab / 2) {
            document.write('* ')
        } else if (x == ab / 2 && y >= ab / 2) {
            document.write('* ')
        } else {
            document.write('_ ')
        }
    }
    document.write('<br>')
}
document.write('<br>')
for (var y = 1; y <= ab; y++) {
    for (var x = 1; x <= ab; x++) {
        if (x == 1 && y >= ab / 2) {
            document.write('* ')
        } else if (y == ab && x <= ab / 2) {
            document.write('* ')
        } else {
            document.write('_ ')
        }
    }
    document.write('<br>')
}
document.write('<br>')
for (var y = 1; y <= ab; y++) {
    for (var x = 1; x <= ab; x++) {
        if (x == ab && y >= ab / 2) {
            document.write('* ')
        } else if (y == ab && x >= ab / 2) {
            document.write('* ')
        } else {
            document.write('_ ')
        }
    }
    document.write('<br>')
}
document.write('<br>')

for (var y = 1; y <= ab; y++) {
    for (var x = 1; x <= ab; x++) {
        if (x == ab / 2 && y >= ab / 2) {
            document.write('* ')
        } else if (y == ab / 2 && x >= ab / 2) {
            document.write('* ')
        } else {
            document.write('_ ')
        }
    }
    document.write('<br>')
}
document.write('<br>')

for (var y = 1; y <= ab; y++) {
    for (var x = 1; x <= ab; x++) {
        if (x == ab / 2 && y <= ab / 2) {
            document.write('* ')
        } else if (y == ab / 2 && x >= ab / 2) {
            document.write('* ')
        } else {
            document.write('_ ')
        }
    }
    document.write('<br>')
}
document.write('<br>')


for (var y = 1; y <= ab; y++) {
    for (var x = 1; x <= ab; x++) {
        if (x == ab / 2 && y <= ab / 2) {
            document.write('* ')
        } else if (y == ab / 2 && x <= ab / 2) {
            document.write('* ')
        } else {
            document.write('_ ')
        }
    }
    document.write('<br>')
}
document.write('<br>')

for (var y = 1; y <= ab; y++) {
    for (var x = 1; x <= ab; x++) {
        if (x == 1 && y <= ab / 2) {
            document.write('* ')
        } else if (y == 1 && x <= ab / 2) {
            document.write('* ')
        } else {
            document.write('_ ')
        }
    }
    document.write('<br>')
}
document.write('<br>')

for (var y = 1; y <= ab; y++) {
    for (var x = 1; x <= ab; x++) {
        if ((x == 2 || x == ab - 1) && (y > 1 && y < ab)) {
            document.write('* ')
        } else if ((y == 2 || y == ab - 1) && (x > 1 && x < ab)) {
            document.write('* ')
        } else {
            document.write('_ ')
        }
    }
    document.write('<br>')
}
document.write('<br>')

for (var y = 1; y <= ab; y++) {
    for (var x = 1; x <= ab; x++) {
        if ((x == 1 && y == 1) || (x == ab / 2 && y == 1) || (x == ab && y == 1)) {
            document.write('* ')
        } else if ((x == 1 && y == ab / 2) || (x == ab / 2 && y == ab / 2) || (x == ab && y == ab / 2)) {
            document.write('* ')
        } else if ((x == 1 && y == ab) || (x == ab / 2 && y == ab) || (x == ab && y == ab)) {
            document.write('* ')
        } else {
            document.write('_ ')
        }
    }
    document.write('<br>')
}