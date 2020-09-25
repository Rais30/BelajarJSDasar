// document.write("hallo")

// closure

function perkalian(a) {
    return function(b) {
        return a * b
    }
}

var kali = perkalian(6);
console.log(kali(5))