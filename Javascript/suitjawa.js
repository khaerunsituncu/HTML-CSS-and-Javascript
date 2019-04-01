var hasil = '';
var lagi = true;
// player memasukkan pilihan
while (lagi){
	var p = prompt('Selamat Datang Di Permainan Suit Jawa!\nMasukkan pilihan kamu :\n[orang, gajah atau semut]');

	// komputer memasukkan pilihan
	// menggunakan angka random
	var komputer = Math.random();
	if (komputer == 0.35){
		komputer = 'orang';
	} else if ( komputer >= 0.35 && komputer < 0.66 ){
		komputer = 'gajah';
	} else {
		komputer = 'semut'
	}

	// membandingkan
	if (p == komputer){
		hasil = 'Seri !';
	} else if (p == 'orang') {
		// if ( komputer == 'gajah' ){
		// 	hasil = 'Menang';
		// } else{
		// 	hasil = 'Kalah';
		// }
		hasil = (komputer == 'gajah') ? 'Kalah !' : 'Menang !';
	} else if (p == 'gajah') {
		hasil = (komputer == 'semut') ? 'Kalah !' : 'Menang !';
	} else if (p == 'semut') {
		hasil = (komputer == 'orang') ? 'Kalah !' : 'Menang !';
	} else {
		hasil = 'Kamu Memasukkan Pilihan Yang Salah!';
	}

	// hasil
	alert('Kamu memilih ' + p + ' dan komputer memilih ' + komputer + '\nMaka Hasilnya adalah kamu ' + hasil);
	lagi = confirm('Masih Ingin Bermain ?');
}
alert('Terima Kasih Telah Bermain!');