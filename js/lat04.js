function zodiak(bln, tgl) {
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "zodiak belum dibuat";
        if (bln == 1) {
            hasil = "Capricorn";
            if (tgl > 19) {
            hasil = "Aquarius";
            }
        }

        if (bln == 2 && tgl < 30) {
            hasil= "Aquarius";
            if (tgl > 18 ) {
            hasil = "Pisces";
            }
        }

        if (bln == 3) {
            hasil= "Pisces";
            if (tgl > 20 ) {
            hasil = "Aries";
            }
        }

        if (bln == 4 && tgl < 31) {
            hasil = "Aries";
            if (tgl > 19) {
            hasil = "Taurus";
            }
        }

        if (bln == 5) {
            hasil = "Taurus";
            if (tgl > 20) {
            hasil = "Gemini";
            }
        }

        if (bln == 6 && tgl < 31) {
            hasil = "Gemini";
            if (tgl > 20) {
            hasil = "Cancer";
            }
        }

        if (bln == 7) {
            hasil = "Cancer";
            if (tgl > 22) {
            hasil = "Leo";
            }
        }

        if (bln == 8) {
            hasil = "Leo";
            if (tgl > 22) {
            hasil = "Virgo";
            }
        }

        if (bln == 9 && tgl < 31) {
            hasil = "Virgo";
            if (tgl > 22) {
            hasil = "Libra";
            }
        }

        if (bln == 10) {
            hasil = "Libra";
            if (tgl > 22) {
            hasil = "Scorpio";
            }
        }

        if (bln == 11 && tgl < 31) {
            hasil = "Scorpio";
            if (tgl > 21) {
            hasil = "Sagitarius";
            }
        }

        // if (bln == 12) {
        //     hasil = "Sagitarius";
        //     if (tgl > 21) {
        //     hasil = "Capricorn";
        //     }
        // }
     }
    console.log(hasil);
}

zodiak(11, 21);



function lulus(nilai) {
    let kkm = 80;
    let hasil = "Nilai Tidak Valid";

    if (nilai >= 0 && nilai <= 100) {
        hasil = "Tetap Semangat, Anda Belum Lulus !";
        if (nilai == 100) {
            hasil = "YEAY, Anda Lulus Dengan Nilai Sempurna !!!";
            }

        if (nilai < 100 && nilai >= kkm) {
            hasil = "Selamat Anda Lulus !";
        } 
    }
    console.log(hasil);
}

lulus(100);



function terbilang(angka) {
    
}

function prima(bilangan) {
    
}