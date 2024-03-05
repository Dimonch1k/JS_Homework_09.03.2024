// If click the button 'Generate'
$('#generate').on('click', e => {
	// Get length
	let length = get_result_length()

	// Checking if length is bigger - making smaller
	if (length > 21) {
		length = 20
	}

	// Write the result string into the "result_text"
	let result_text = document.querySelector('#result_text')
	result_text.innerHTML = getResult(length)
})

// Returns result length uses regex to get rid of all non-numeric chars
function get_result_length() {
	const str = document.querySelector("input").value;
	
	const regex = \D
	const RES_LENGTH = str.replaceAll(regex, ' ')
	console.log(str)
	return RES_LENGTH
}

// RESULT STRING
// It has checks and uses two functions to get the result string
function getResult(length) {
	const numeric = '0123456789'
	const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const lowercase = 'abcdefghijklmnopqrstuvwxyz'
	const num_upper = numeric + uppercase
	const num_lower = numeric + lowercase
	const upper_lower = uppercase + lowercase
	const chars = numeric + uppercase + lowercase
	let result = ''

	// Checking if all checkboxes checked
	if (getNumeric() && getUppercase() && getLowercase()) {
		for (let i = 0; i < length; i++) {
			result += random_char(chars)
		}
	}
	// Checking if Numeric and Uppercase checkboxes are checked
	else if (getNumeric() && getUppercase()) {
		getResultString(result, length, num_upper)
	}
	// Checking if Numeric and Lowercase checkboxes are checked
	else if (getNumeric() && getLowercase()) {
		getResultString(result, length, num_lower)
	}
	// Checking if Uppercase and Lowercase checkboxes are checked
	else if (getUppercase() && getLowercase()) {
		getResultString(result, length, upper_lower)
	}
	// If all checks are wrong - user make some wrong and give some error text in result
	else {
		result = 'Error! Please check your actions!'
	}
	console.log(result)
	return result
}

function getResultString(result, length, data_type_chars) {
	for (let i = 0; i < length; i++) {
		result += random_char(data_type_chars)
	}
}

function random_char(data_type_chars) {
	return data_type_chars.charAt(
		Math.floor(Math.random() * data_type_chars.length)
	)
}

// BOOLEAN
function getNumeric() {
	return $('#allow_numeric').checked == true
}

function getUppercase() {
	return $('#allow_uppercase').checked == true
}

function getLowercase() {
	return $('#allow_lowercase').checked == true
}
