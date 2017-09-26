setInterval(function() {
	$(document).ready(function(){

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

		function randomInteger(min, max){
	   	var rand = min - 0.5 + Math.random() * (max - min + 1)
	    rand = Math.round(rand);
	    return rand;
		}
		
		var j = 0;

		var i = 0;

		var w = 0;

		var g = 0;

		var r = 0;

		var b = 0;

		var nom = randomInteger(360, 1080);

		alert(nom);

		var k = nom;

		if((nom + 3) % 6 == 0) {
			nom = nom + 1
		}


		nom = Math.floor(nom/6) + j;

		alert(nom);

		alert(k);

		i = j;

		while (i < nom) {

			//alert(m[i])

			i++
		}

		if (m[i] == "white"){
			alert("WHITE WIN");
			w++
		} else if (m[i] == "green") {
			alert("GREEN WIN");
			g++
		} else if (m[i] == "red") {
			alert("RED WIN");
			r++
		} else {
			alert("BLACK WIN");
			b++
		}

		j = nom % 60

		var transform = "rotate(" + k + "deg)";

		$(".wheel").css({
    		'-ms-transform': transform,
    		'-webkit-transform': transform,
    		'-moz-transform': transform,
    		'transform': transform
  		});

	});

}, 5000);

