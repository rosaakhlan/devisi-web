function konversiMenit(menit) {
	//input
	let minutes = Math.floor(menit / 60)
	let seconds = menit % 60

	//proses
	if (String(seconds).length === 1) {
		seconds ="0"+seconds
	}
	let hasil = minutes + ":" + seconds
	return String(hasil)
}
//output
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00