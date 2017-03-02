// ***************************************
    // SELECT ELEMENTS BY ID
// ****************************************

// document.body.style.backgroundColor = "blue"
// document.getElementsByTagName('h1')[0].style.color = 'orange'
// document.getElementsByTagName('p')[0].style.color = 'yellow'
// document.getElementById("myHeading").style.backgroundColor = 'tomato'

const myButton = document.getElementById('myButton');
const myHeading = document.getElementById('myHeading');
// const myHeading = document.getElementsByTagName('h1')[0];
const myTextInput = document.getElementById('myTextInput');
const btob = document.getElementById('btob');


myButton.addEventListener('click', () => {
	myHeading.style.color = myTextInput.value;
});

btob.addEventListener('click', () => {
	myHeading.style.color = "black";
})


// ***************************************
     // SELECT ELEMTENTS BY TAG NAME
// ****************************************

const myList = document.getElementsByTagName('li');
const purpleButton = document.getElementById('purpleButton');

for (i=0; i < myList.length; i++) {
	myList[i].style.color = 'purple';
}

purpleButton.addEventListener('click', () => {
	purpleButton.style.backgroundColor = 'purple';
})


// ***************************************
     // SELECT ELEMTENTS BY CLASS NAME
// ****************************************

// const notPurple = document.getElementsByClassName('not-purple');

// for (i=0; i < notPurple.length; i++) {
// 	notPurple[i].style.color = 'black';
// }


// ***************************************
     // Query Selectors
// ****************************************

// document.querySelectorAll('#notPurple')
// document.querySelector('h3');
// document.quesrySelector(['title=label'])

const evens = document.querySelectorAll('#listOne li:nth-child(even)');
for (let i = 0; i < evens.length; i += 1) {
	evens[i].style.backgroundColor = 'black';
	evens[i].style.color = 'white';
}


// ***************************************
     // textContent & innerHTML
// ****************************************

const toggleList = document.getElementById('toggleList')
const listDiv = document.querySelector('.listDiv');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

toggleList.addEventListener ('click', () => {
	if (listDiv.style.display == 'none') {
		toggleList.innerHTML = 'Hide Lower List';
		listDiv.style.display = 'block';
	} else {
	toggleList.innerHTML = 'Show Lower List';
	listDiv.style.display = 'none';
	}
});

descriptionButton.addEventListener('click', () => {
	// p.textContent = input.value + ':';
	descriptionP.innerHTML = descriptionInput.value + ':';
	descriptionInput.value = '';
});


// ***************************************
     // Create New Elements & Add Nodes to DOM
// ****************************************

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

addItemButton.addEventListener ('click', () => {
	let listTwo = document.getElementById('listTwo');
	let li = document.createElement('li');
	li.innerHTML = addItemInput.value;
	listTwo.appendChild(li);
	addItemInput.value = '';
});


// ***************************************
     //  Remove Nodes from DOM
// ****************************************

const removeItemButton = document.querySelector('button.removeItemButton')

removeItemButton.addEventListener ('click', () => {
	let listTwo = document.getElementById('listTwo');
	let li = document.querySelector('#listTwo li:last-child');
	listTwo.removeChild(li);
});
























