//declare variables
var year,
price,
rate, 
num1,
num2,
nicotine,
cost;

$(document).ready(function () { //on DOM ready, bind clicks
	//get value of input fields
	$("#mathIt").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior

		// getNumber1 = $("#number1"),
		// num1 = parseFloat(getNumber1.val()); //store the number of input 1
		num1 = parseInt($("#number1").val()); //store the number of input 1
		num2 = parseInt($("#number2").val()); //store the number of input 2


		// console.log(num1, num2);
		runMath(); //call runMath function
		showIt(); //call the showIt function
	}); // close get value of input fields
}); // close document ready

//function to add, subtract, divide and multiply
function runMath() {
	year = num1*52
	price = parseFloat(((num2*52)*4).toFixed(2));
	rate = parseFloat((num2/2).toFixed(2));
	nicotine = parseFloat((num2*57)/7).toFixed(2);
	cost = (rate*365)*10-price;
	// quotient = num1 / num2;
	// rounded = quotient.toFixed(2) //.toFixed(x) where x is the number of decimal places you want.
	console.log(year, price, rate, cost)
}; //close runMath()

function showIt() {
	$(".first-number").text(num1); // plugs number 1 in text
	$(".second-number").text(num2); // plugs number 2 in text
	$("#show-sum").text(year); // plugs sum into text
	$("#show-price").text(price); // plugs difference into text
	$("#show-rate").text(rate); // plugs product into text
	// $("#show-quotient").text(quotient); // plugs quotient into text
	// $("#show-rounded").text(rounded); // plugs sounded quotient into text
	$("#show-nicotine").text(nicotine);
	$("#show-cost").text(cost);
	$('#final-results').addClass('results-show'); //shows the hidden class
	console.log("cost", "show-cost")
	}; //close showIt()




