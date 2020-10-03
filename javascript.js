
// function runCheck() {

// 	var val1 = document.getElementById("val1").value;
// 	var oper = document.getElementById("oper").value;
// 	var val2 = document.getElementById("val2").value;
// 	var error = '';
// 	if (val1 == '' || val2 == '') {
// 		error = "Please fill your values";
// 	}
// 	switch (oper) {
// 		case !==:
// 		return val1 !== val2;
// 	}


// // <option value="!==">!==</option>
// // 						<option value="===">===</option>
// // 						<option value="!=">!=</option>
// // 						<option value="==" selected>==</option>
// // 						<option value=">=">>=</option>
// // 						<option value="<="><=</option>
// // 						<option value=">">></option>
// 						<option value="<"><</option>
// 	// document.write('hello');

// 	if (error != '') {
// 		document.getElementById('error').innerHTML = error;
// 	}
// }

// <input type="text" id="myInput" oninput="myFunction()">

// <p id="demo"></p>

// <script>


function runCheck() {

	var x = document.getElementById("valOne").value;
	var y = document.getElementById("oper").value;
	var z = document.getElementById("valTwo").value;
	var reSult;
	if (y != "") {

		if (y = '!==') {
			reSult = Boolean (x !== z);
		}
		if (y = '===') {
			reSult = Boolean (x === z);
		}
		if (y = '!=') {
			reSult = Boolean (x != z);
		}
		if (y = '==') {
			reSult = Boolean (x == z);
		}
		if (y = '>=') {
			reSult = Boolean (x >= z);
		}
		if (y = '<=') {
			reSult = Boolean (x <= z);
		}
		if (y = '>') {
			reSult = Boolean (x > z);
		}
		if (y = '<') {
			reSult = Boolean (x < z);
		}
	}

	document.getElementById("error").innerHTML = reSult;

}
