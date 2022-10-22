// object

const superman = {
	name : 'clark',
	age : 30,
}

superman.hairColor = 'black';
superman['hobby'] = 'soccer';
console.log(superman);

function makeObject(name, age) {
	return {
		name : name,
		age : age,
		hobby : 'football',
	}
}

// const Mike = makeObject('Mike', 30);
// console.log(Mike);

function isAdult(user) {
	if (!('age' in user) || user.age < 20) {
		return false;
	}
	return true;
}

const Mike = {
	name : 'Mike',
	age : 30,
};

const Jane = {
	name : 'Jane',
};

console.log(isAdult(Mike));
console.log(isAdult(Jane));


// object for ~~ in

for (x in Mike) {
	console.log(Mike[x]);
}

// object method

let boy = {
	name : "Mike",
	showName : function () {
		console.log(boy.name)
	}
};

let man = boy;
man.name = "Tom";

console.log(boy.name);