// document.body.style.backgroundColor = "blue"
// document.getElementsByTagName('h1')[0].style.color = 'orange'
// document.getElementsByTagName('p')[0].style.color = 'yellow'
// document.getElementById("myHeading").style.backgroundColor = 'tomato'

const myHeading = document.getElementById('myHeading');

myHeading.addEventListener('click', () => {
	myHeading.style.color = 'red';
});