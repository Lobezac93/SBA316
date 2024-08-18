document.addEventListener('DOMContentLoaded', () => {
    // Cache elements using getElementById and querySelector
    const featuredDestinationsSection = document.getElementById('featured-destinations');
    const destinationList = featuredDestinationsSection.querySelector('.destination-list');

    // Use DocumentFragment to create templated content
    const destinations = [
        { name: 'Paris', img: 'paris.jpg', description: 'The city of lights!' },
        { name: 'Tokyo', img: 'tokyo.jpg', description: 'The heart of Japan!' },
        { name: 'New York City', img: 'nyc.jpg', description: 'The Big Apple!' }
    ];

    const fragment = document.createDocumentFragment();
    destinations.forEach(destination => {
        const destinationDiv = document.createElement('div');
        destinationDiv.classList.add('destination');

        const img = document.createElement('img');
        img.src = destination.img;
        img.alt = destination.name;

        const title = document.createElement('h3');
        title.textContent = destination.name;

        const description = document.createElement('p');
        description.textContent = destination.description;

        destinationDiv.appendChild(img);
        destinationDiv.appendChild(title);
        destinationDiv.appendChild(description);

        fragment.appendChild(destinationDiv);
    });

    // Append the fragment to the DOM
    destinationList.appendChild(fragment);

    // Modify text content in response to user interaction
    const form = document.getElementById('booking-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const destination = document.getElementById('destination').value;

        // Modify content using innerText
        confirmationMessage.innerText = `Thank you, ${name}! Your trip to ${destination} is booked.`;

        // Modify style using classList
        confirmationMessage.classList.add('confirmation-active');

        // BOM example: Scroll to confirmation message
        window.scrollTo({
            top: confirmationMessage.offsetTop,
            behavior: 'smooth'
        });

        // BOM example: Alert the user
        alert('Booking Successful!');
    });

    // Real-time validation with event-based validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    nameInput.addEventListener('input', () => {
        if (nameInput.value.length < 2) {
            nameInput.classList.add('invalid');
        } else {
            nameInput.classList.remove('invalid');
        }
    });

    emailInput.addEventListener('input', () => {
        if (!emailInput.validity.valid) {
            emailInput.classList.add('invalid');
        } else {
            emailInput.classList.remove('invalid');
        }
    });
});


function grabDetail(){
    let x = document.getElementById('destination');
    let y = document.getElementsByTagName('input');
    

}