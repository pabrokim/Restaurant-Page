export default function pageLoad(){
    const content = document.querySelector('#content');

   
    
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageDiv');
    const img = document.createElement('img')
    img.classList.add('img');
    img.src = '../img/dining-room.jpg';
    img.alt = 'restaurant';
    imageContainer.appendChild(img);

    const restName = document.createElement('div');
    restName.classList.add('restName');
    restName.textContent = "James Restaurant"
    
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = 'Discover a culinary journey like no other'
    
    const greatRes = document.createElement('div');
    greatRes.classList.add('greatRes');
    greatRes.textContent = "At James Restaurant, we take pride in serving exquisite dishes made with the finest ingredients. Our team of talented chefs creates unique and flavorful culinary creations that will delight your taste buds."

    const location = document.createElement('div');
    location.classList.add('location');
    location.textContent = 'We are located along 123 Matangini Rd off Thika SuperHighway';

    
    content.appendChild(imageContainer);
    content.appendChild(restName);
    content.appendChild(headline);
    content.appendChild(greatRes);
    content.appendChild(location);

    
}

