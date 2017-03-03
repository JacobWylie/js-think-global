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
     // Create New Elements & Add Nodes to DOM & node.children
// ****************************************

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listTwo = document.getElementById('listTwo');
const existingListItems = listTwo.children;
const firstListItem = listTwo.firstElementChild;
const lastListItem = listTwo.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';

function attachListItemButton (li) {
	let up = document.createElement('button');
	up.className = 'up';
	up.textContent = 'Up';
	li.appendChild(up);
	let down = document.createElement('button');
	down.className = 'down';
	down.textContent = 'Down';
	li.appendChild(down);
	let remove = document.createElement('button');
	remove.className = 'remove';
	remove.textContent = 'Remove';
	li.appendChild(remove);
};

for (let i = 0; i < existingListItems.length; i += 1) {
	attachListItemButton(existingListItems[i]);
}

addItemButton.addEventListener ('click', () => {
	let listTwo = document.getElementById('listTwo');
	let li = document.createElement('li');
	li.innerHTML = addItemInput.value;
	attachListItemButton(li);
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


// ***************************************
     //  Listening to Events
// ****************************************


// const listItems = document.getElementsByTagName('li');

// for (let i = 0; i < listItems.length; i += 1) {
// 	listItems[i].addEventListener('mouseover', () => {
// 		listItems[i].innerHTML = listItems[i].innerHTML.toUpperCase();
// 	});

// 	listItems[i].addEventListener('mouseout', () => {
// 		listItems[i].innerHTML = listItems[i].innerHTML.toLowerCase();
// 	});
// }


// ***************************************
     //  Event Bubbling and Delegation
// ****************************************


const list = document.querySelector('.list');


list.addEventListener('mouseover', (event) => {
	if (event.target.tagName == 'LI') {
		event.target.innerHTML = event.target.innerHTML.toUpperCase();
	}
});

list.addEventListener('mouseout', (event) => {
	if (event.target.tagName == 'LI') {
		event.target.innerHTML = event.target.innerHTML.toLowerCase();
	}
});



// *******************************************
     //  Using parentNode to Traverse the DOM
     //  & previousElementSibling
// *******************************************


listTwo.addEventListener('click', (event) => {
	if (event.target.tagName == 'BUTTON') {
		if (event.target.className == 'remove') {
			let li = event.target.parentNode;
			let ul = li.parentNode;
			ul.removeChild(li);
		}
		if (event.target.className == 'up') {
			let li = event.target.parentNode;
			let prevLi = li.previousElementSibling;
			let ul = li.parentNode;
			if (prevLi) {
				ul.insertBefore(li, prevLi);
			}
		}
		if (event.target.className == 'down') {
			let li = event.target.parentNode;
			let nextLi = li.nextElementSibling;
			let ul = li.parentNode;
			if (nextLi) {
				ul.insertBefore(nextLi, li);
			}
		}
	}
});























