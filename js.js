// document.body.style.backgroundColor = "blue"
// document.getElementsByTagName('h1')[0].style.color = 'orange'
// document.getElementsByTagName('p')[0].style.color = 'yellow'
// document.getElementById("myHeading").style.backgroundColor = 'tomato'

const myButton = document.getElementById('myButton');
const myHeading = document.getElementById('myHeading');
const myTextInput = document.getElementById('myTextInput');
const btob = document.getElementById('btob');

myButton.addEventListener('click', () => {
	myHeading.style.color = myTextInput.value;
});

btob.addEventListener('click', () => {
	myHeading.style.color = "black";
})