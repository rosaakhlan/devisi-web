function balikKata(kata){
	//input

 var balik=kata.split("").reverse().join("");
 return balik;
}

//output
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("Jhon Doe")); // eoD nohJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS