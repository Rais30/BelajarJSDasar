class BangunDatar {
    constructor(a, b, c) {
        this.nilai1 = a;
        this.nilai2 = b;
        this.nilai3 = c;
    }
}

class hitungSegitiga extends BangunDatar {
    hitungLuas1() {
        return (this.nilai1 * this.nilai3) / 2;
    }
    hitungKeliling1() {
        return (this.nilai1 + this.nilai3 + this.nilai2);
    }

}

class hitungPersegi extends BangunDatar {
    hitungLuas2() {
        return this.nilai3 * this.nilai3;
    }
    hitungKeliling2() {
        return this.nilai1 * 4;
    }
}

class hitungLingkaran extends BangunDatar {
    hitungLuas3() {
        return 22 / 7 * this.nilai2 * this.nilai2;
    }
    hitungKeliling3() {
        return 22 / 7 * this.nilai2
    }
}
let nilai1 = parseInt(prompt("niali 1"))
let nilai2 = parseInt(prompt("niali 2"))
let nilai3 = parseInt(prompt("niali 3"))

let Luas1 = new hitungSegitiga(nilai1, nilai2, nilai3);
let Luas2 = new hitungPersegi(nilai1, nilai2, nilai3);
let Luas3 = new hitungLingkaran(nilai1, nilai2, nilai3);

document.write("luas Segi Tiga adalah " + Luas1.hitungLuas1() + "<br>");
document.write("keliling Segi Tiga adalah " + Luas1.hitungKeliling1() + "<br>");
document.write("luas Persegi adalah " + Luas2.hitungLuas2() + "<br>");
document.write("keliling Persegi adalah " + Luas2.hitungKeliling2() + "<br>");
document.write("luas lingkaran adalah " + Luas3.hitungLuas3() + "<br>");
document.write("keliling lingkaran adalah " + Luas3.hitungKeliling3() + "<br>");