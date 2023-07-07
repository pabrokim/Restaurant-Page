
export default function addContact(){
    let staff = [
        { photo:'../img/manager.jpg', person:'Paul John', position: 'Manager', phone: '+555-666-777', email:'manager@restaurant' },
        { photo:'../img/chef.jpg', person: 'Daniel Joel', position: 'Chef', phone: '+555-667-885', email:'cashier@restaurant'},
        { photo:'../img/customerep.jpeg', person: 'Alicia Grace', position: 'Customer rep', phone: '+555-668-546', email:'customerep@restaurant'},
    ];
    for(let i=0; i <staff.length; i++){
        
        let myStaff = staff[i];
     

        const profile = document.createElement('div');
        profile.classList.add('profile');
        

        const photoHolder = document.createElement('div');
        let staffPhoto = document.createElement('img');
        staffPhoto.src = myStaff.photo;
        staffPhoto.classList.add('images');

        photoHolder.appendChild(staffPhoto);

        const contactCard = document.createElement('div');
        contactCard.classList.add('contactCard');

        const person = document.createElement('p')
        person.textContent = myStaff.person;
        const position =document.createElement('p');
        position.textContent = `Role: ${myStaff.position}`
        const phone = document.createElement('p');
        phone.textContent = `Phone Number: ${myStaff.phone}`
        const email = document.createElement('p');
        email.textContent = `Email: ${myStaff.email}`;

        contactCard.appendChild(person);
        contactCard.appendChild(position);
        contactCard.appendChild(phone);
        contactCard.appendChild(email);

        profile.appendChild(photoHolder);
        profile.appendChild(contactCard);

        content.appendChild(profile);
    }  
} 