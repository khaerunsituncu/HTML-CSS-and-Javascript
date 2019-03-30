# Tutorial JS
// *****
// ****
// ***
// **
// *
var string = '';
for (var i=5; i > 0; i--){
	for (var j = 0; j < i; j++) {
		string += '*';
	}
		string += '\n';
}
console.log(string);

// *
// **
// ***
// ****
// *****
var string = '';
for (var i=5; i > 0; i--){
	for (var j = 5; j >= i; j--) {
		string += '*';
	}
		string += '\n';
}
console.log(string);

// *****
 //  ****
 //   ***
 //    **
 //     *
var string = '';
for (var i=5; i > 0; i--){
	for (var j = 5; j >= i; j--) {
		string += ' ';
	}
	for (var k = 1; k <= i; k++) {
		string += '*';
	}
		string += '\n';
}
console.log(string);

 //     *
 //    **
 //   ***
 //  ****
 // *****
var string = '';
for (var i=5; i > 0; i--){
	for (var k = 1; k <= i; k++) {
		string += ' ';
	}
	for (var j = 5; j >= i; j--) {
		string += '*';
	}
		string += '\n';
}
console.log(string);

 //     +
 //    +++
 //   +++++
 //  +++++++
 // +++++++++
var string = '';
for (var i=5; i > 0; i--){
	for (var j = 0; j < i; j++) {
		string += ' ';
	}
	for (var j = 5; j >= i; j--) {
		string += '+';
	}
	for (var j = 4; j >= i; j--) {
		string += '+';
	}
		string += '\n';
}
console.log(string);

 //     +
 //    +++
 //   +++++
 //  +++++++
 // +++++++++
var string = '';
for (var i=5; i > 0; i--){
	for (var j = 5; j >= i; j--) {
		string += ' ';
	}
	for (var j = 0; j < i; j++) {
		string += '+';
	}
	for (var j = 1; j < i; j++) {
		string += '+';
	}
		string += '\n';
}
console.log(string);

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
var string = '';
for (var i=5; i > 0; i--){
	for (var j = 5; j >= i; j--) {
		string += '*';
	}
		string += '\n';
}
for (var i=4; i > 0; i--){
	for (var j = 0; j < i; j++) {
		string += '*';
	}
		string += '\n';
}
console.log(string);


 

//  *****
//   ****
//    ***
//     **
//      *
//     **
//    ***
//   ****
//  *****
var string = '';
for (var i=5; i > 0; i--){
	for (var j = 5; j >= i; j--) {
		string += ' ';
	}
	for (var k = 1; k <= i; k++) {
		string += '*';
	}
	string += '\n';
}
for (var i=4; i > 0; i--){
	for (var j = 1; j <= i; j++) {
		string += ' ';
	}
	for (var k = 5; k >= i; k--) {
		string += '*';
	}
	string += '\n';
}
console.log(string);

// *****
// ****
// ***
// **
// *
// **
// ***
// ****
// *****
var string = '';
for (var i=5; i > 0; i--){
	for (var j = 0; j < i; j++) {
		string += '*';
	}
		string += '\n';
}
for (var i=4; i > 0; i--){
	for (var j = 5; j >= i; j--) {
		string += '*';
	}
		string += '\n';
}
console.log(string);

// **********
// ****  ****
// ***    ***
// **      **
// *        *  
// **      **
// ***    ***
// ****  ****
// **********
var string = '';
for (var i=5; i > 0; i--){
	for (var j = 0; j < i; j++) {
		string += '*';
	}
	for (var j = 4; j >= i; j--) {
		string += ' ';
	}
	for (var j = 4; j >= i; j--) {
		string += ' ';
	}
	for (var j = 0; j < i; j++) {
		string += '*';
	}
		string += '\n';
}
for (var i=4; i > 0; i--){
	for (var j = 5; j >= i; j--) {
		string += '*';
	}
	for (var j = 1; j < i; j++) {
		string += ' ';
	}
	for (var j = 1; j < i; j++) {
		string += ' ';
	}
	for (var j = 5; j >= i; j--) {
		string += '*';
	}
		string += '\n';

}
console.log(string);


// *********
// **** ****
// ***   ***
// **     **
// *       *
// **     **
// ***   ***
// **** ****
// **********
var string = '';
for (var i=5; i > 0; i--){
	for (var j = 0; j < i; j++) {
		string += '*';
	}
	for (var j = 4; j >= i; j--) {
		string += ' ';
	}
	for (var j = 3; j >= i; j--) {
		string += ' ';
	}
	for (var j = 0; j < i; j++) {
		if (j == 4){
			break;
		}
		string += '*';
	}
		string += '\n';
}
for (var i=4; i > 0; i--){
	for (var j = 5; j >= i; j--) {
		string += '*';
	}
	for (var j = 1; j < i; j++) {
		string += ' ';
	}
	for (var j = 2; j < i; j++) {
		string += ' ';
	}
	for (var j = 5; j >= i; j--) {
		if (j == 1){
			break;
		}
		string += '*';
	}
		string += '\n';

}
console.log(string);

var string = '';
for (var i=5; i > 0; i--){
	for (var j = 0; j < i; j++) {
		string += ' ';
	}
	for (var j = 4; j >= i; j--) {
		string += '*';
	}
	for (var j = 3; j >= i; j--) {
		string += '*';
	}
	for (var j = 0; j < i; j++) {
		if (j == 4){
			break;
		}
		string += ' ';
	}
		string += '\n';
}
for (var i=4; i > 0; i--){
	for (var j = 5; j >= i; j--) {
		string += ' ';
	}
	for (var j = 1; j < i; j++) {
		string += '*';
	}
	for (var j = 2; j < i; j++) {
		string += '*';
	}
	for (var j = 5; j >= i; j--) {
		if (j == 1){
			break;
		}
		string += ' ';
	}
		string += '\n';

}
console.log(string);

// #-#-#-#-
// -#-#-#-#
// #-#-#-#-
// -#-#-#-#
// #-#-#-#-
// -#-#-#-#
// #-#-#-#-
// -#-#-#-#
// var string = '';
// var kolom = 4;
// var baris = 8;
// for (var i=1; i <= baris; i++){
// 	if (i % 2 == 1 ){
// 		for(var j=0; j < kolom; j++){
// 			string += '#';
// 			string += ' ';
// 		}
// 	} else if (i % 2 == 0){
// 		for(var j=0; j < kolom; j++){
// 			string += ' ';
// 			string += '#';
// 		}
// 	}
// 	string += '\n';
// }
// console.log(string);

var string = '';
var kolom = 4;
var baris = 8;
for (var i=1; i <= baris; i++){
	for (var j = 0; j < kolom; j++) {
		if (i % 2 == 1 ){
			string += '#';
			string += ' ';
		} else if (i % 2 == 0 ) {
			string += ' ';
			string += '#';
		}
	}
	string += '\n';
}
console.log(string);


// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1


var baris = 5;
var string = '';
var angka = 1;
for (var i=0; i < baris; i++){
	for(var k = 0; k <= ((2*baris)-(2*i)); k++){
		string += '-';
	}
	for (var j=0; j <= i; j++) {
		if (j==0 || i == j){
			string += angka;
		}else{
			angka=angka*(i+1-j)/j;
			string += ' ';
			string += angka;
			string += ' ';

		}
	}
	string+='\n'
}
console.log(string);
