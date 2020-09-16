// tugas

var backend = ["syofyan ", "sidik ", "roihan "]
var mobile = ["hafif ", "wandi ", "ayub "]

backend.shift()
mobile.pop()
mobile.push("syofyan ")
backend.unshift("ayub ")

var pondok = [mobile.concat(backend)]

pondok.unshift("yamin ")
pondok.push("yoga.")

document.write(pondok)