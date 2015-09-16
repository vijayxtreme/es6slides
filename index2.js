var person = {
	first: "Vijay",
	last: "Menon"
}

//destructuring object so we can use properties 
let {first, last} = person

console.log(first, last)


let { first: fn, last: ln} = person

console.log(first, fn, ln)

function getResult() {
	return {
		result: 1234,
		error: null
	}
}

let { result, error } = getResult()

console.log(result, error)