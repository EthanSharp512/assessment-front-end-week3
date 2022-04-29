console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	window.alert('Form has been submitted successfully!')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


const image = document.querySelector('img');

image.addEventListener('mouseover', function(){
	alert("You are cool like this duck!");
});


// Add an event listener that listens for a mouseover event. When the user mouses over the picture on the page (cat or rubber duck) the page should alert give the user a compliment.