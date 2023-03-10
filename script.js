let result = document.getElementById('result');

function addInput(value) {
	result.value += value;
}

function clearResult() {
	result.value = '';
}

function calculate() {
	result.value = eval(result.value);
}
