// tugas

var backend = ["syofyan ", "sidik ", "roihan "]
var mobile = ["hafif ", "wandi ", "ayub "]

backend.shift()
backend.unshift("ayub ")
mobile.pop()
mobile.push("syofyan ")


var pondok = [mobile.concat(backend)]

pondok.unshift("yamin ")
pondok.push("yoga.")

document.write(pondok)