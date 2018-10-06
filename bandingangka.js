function bandingAngka(angka1,angka2) {
		//input
		if(angka1 < angka2){
			return true;
		} else if (angka1 > angka2){
			return false;
		} else if (angka1 == angka2) {
			return -1;
		}
	}
	//output
	console.log(bandingAngka(5,8)); //true
	console.log(bandingAngka(5,3)); //false
	console.log(bandingAngka(4,4)); //-1
	console.log(bandingAngka(3,3)); //-1
	console.log(bandingAngka(17,2)); //true