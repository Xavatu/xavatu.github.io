 var m = ["white", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red",
	"black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green",
	"black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red",
	"black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "white", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red",
	"black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green",
	"black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red",
	"black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "white", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red",
	"black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green",
	"black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red",
	"black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "white", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red",
	"black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green",
	"black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red",
	"black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "white", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red",
	"black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green",
	"black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red",
	"black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "white", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red",
	"black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green",
	"black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red",
	"black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "white", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red",
	"black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green",
	"black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red",
	"black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "white", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red",
	"black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green", "black", "green",
	"black", "red", "black", "red", "black", "red", "black", "green", "black", "green", "black", "red", "black", "red", "black", "red",
	"black", "green", "black", "green", "black", "red", "black", "red", "black", "red", "black", "green"]


function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

var nom = 0;

var rounds = 0;

var k = 3;

var j = 0;

var a = 0;

var i = 0;

var w = 0;

var g = 0;

var r = 0;

var b = 0;

while(a < 100) {

	nom = randomInteger(360, 1080);

	alert(nom);

	if((nom + k) % 6 == 0) {
		nom = nom + 1
	}

	k = nom;

	nom = Math.floor(nom/6) + j;

	alert(nom);

	i = j;

	while (i < nom) {

		//alert(m[i])

		i++
	}

	if (m[i - 1] == "white"){
		//alert("WHITE WIN");
		w++
	} else if (m[i-1] == "green") {
		//alert("GREEN WIN");
		g++
	} else if (m[i-1] == "red") {
		//alert("RED WIN");
		r++
	} else {
		//alert("BLACK WIN");
		b++
	}

	j = nom % 60

	


	$(document).ready(function(){

		var transform = "rotate(" + k + "deg)";

		$(".wheel").css({
    		'-ms-transform': transform,
    		'-webkit-transform': transform,
    		'-moz-transform': transform,
    		'transform': transform
  		});

	});


	a++
}

alert("WHITE" + w)

alert("GREEN" + g)

alert("RED" + r)

alert("BLACK" + b)
