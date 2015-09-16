//ES6 demos

//let vs var 
//var for globals 

let name = "vijay"

if(2+2==4){
	let name = "ryan"
	//block scope
	console.log(name)
}

const $ = "My Library"
//$ = 'Vijay'

console.log(name)
console.log($)

//classes

class Animal {
	constructor (aname) {
		this.myname = aname
	}
	speak(text){
		console.log(this.myname + ' says ' + text)
	}
	get name() {
		return this.myname
	}
	set name(newname) {
		this.myname = newname; 
	}
}

let dog = new Animal("dog")
dog.speak("ruff")

class Cat extends Animal {
	constructor(name) {
		super(name)
	}
	speak(text) {
		console.log(text)
	}
	jump() {
		console.log(name + ' jumped thru the roof')
	}
}

let cat = new Cat("neko")
cat.jump()

//using arrow functions
let animals = ['bird', 'flower', 'giraffe', 'monkey'].filter((animal) => {
	return animal !== 'flower'
})

console.log(animals)

//lexical this

class Human extends Animal {
	constructor(aname) {
		super();
		this.name = aname;
	}
	walk(){
		setTimeout(() => {
			console.log(this.name + ' walked 5 miles' )
		}, 1000)
	}
}

let bob = new Human("Bob");
bob.walk();
bob.speak('tired')


let students = `
Vijay,
Charlie,
Eric
`

console.log(students)