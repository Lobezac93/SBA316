// Cache elements using getElementById and querySelector
const mainTitle = document.getElementById('main-title');
const destinationList = document.querySelector('#destination-list');

// Use parent-child-sibling relationship
const firstDestination = destinationList.firstElementChild;
const lastDestination = destinationList.lastElementChild;
const parentOfList = destinationList.parentNode;

// Iterate over a collection of elements to add their indices in bracket so as to identify the elements in the html from those added using the DOM manipulation
const destinations = document.querySelectorAll('#destination-list li');
destinations.forEach((destination, index) => {
    destination.textContent += ` (${index + 1})`;
});

// Add new elements to the DOM element with attribute destination
const newDestination = document.createElement('li');
newDestination.textContent = 'Bamenda';
destinationList.appendChild(newDestination);

// Use DocumentFragment to create templated content
const fragment = document.createDocumentFragment();
const newDestination2 = document.createElement('li');
newDestination2.textContent = 'Maroua';
fragment.appendChild(newDestination2);
destinationList.appendChild(fragment);

// Modify HTML content in response to user interaction
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    mainTitle.innerHTML = 'Thank you for contacting us!. A member of the team will get back to you';
});


//=== adding a picture to the flag to the right side of the main title ======
const img = document.createElement('img')
img.setAttribute('src','./assets/flag.jpeg');
img.style.height = '20px'
img.style.marginLeft = '20px'
mainTitle.appendChild(img)


// Modify style in response to user interaction

mainTitle.addEventListener('mouseover', () => {
    mainTitle.style.color = 'blue';
});
mainTitle.addEventListener('mouseout', () => {
    mainTitle.style.color = 'pink'
})

// Use BOM properties or methods
console.log(window.innerWidth);
console.log(navigator.userAgent);

// Form validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', () => {
    if (!emailInput.validity.valid) {
        emailInput.setCustomValidity('Please enter a valid email address.');
    } else {
        emailInput.setCustomValidity('');
    }
});



