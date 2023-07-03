
export default function addContact(){

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');

    const person = document.createElement('p')
    person.textContent = `Name: Paul Kims`
    const position =document.createElement('p');
    position.textContent = `Position: Manager`
    const phone = document.createElement('p');
    phone.textContent = `Phone Number: +555-666-777`
    const email = document.createElement('p');
    email.textContent = `Email: manager@restaurant`;

    contactContainer.appendChild(person);
    contactContainer.appendChild(position);
    contactContainer.appendChild(phone);
    contactContainer.appendChild(email);
    document.body.appendChild(contactContainer);
    
} 