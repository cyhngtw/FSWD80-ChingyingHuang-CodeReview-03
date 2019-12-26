


function calculateInsurance() {

	var name = document.getElementById('nome').value;

	var selection = document.getElementById('paese').value;

	var horsepower = parseInt(document.getElementById('calvalo').value);

	var age = parseInt(document.getElementById('eta').value);

	if (selection = 'Austria') {
		var Cal="hi "+name + ",   your insurance cost is  "+Math.floor((horsepower * 100)/(age)+50) + "€";
	}

	else if (selection ='Hungary') {
		var Cal="hi "+name+",  your insururance cost is  "+Math.floor((horsepower *120)/(age)+100)+" €";
	}

	else if (selection = 'Greece') {
		var Cal="hi "+name+",  your insururance cost is "+Math.floor((horsepower *130)/(age+3)+50)+" €";
	}

	
document.getElementById('result').innerHTML=Cal;
}