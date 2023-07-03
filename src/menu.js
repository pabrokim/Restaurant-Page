
export default function addMenuItem(){

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const title = document.createElement('p');
    title.textContent = `Title: Classic Cheeseburger`
    const description = document.createElement('p');
    description.textContent = `Description: Juicy beef patty topped with melted cheddar cheese, fresh lettuce, ripe tomato slices, onions, pickles, and our special house-made burger sauce.`
    const price = document.createElement('p');
    price.textContent = `Price: $12.99`;

    menuContainer.appendChild(title);
    menuContainer.appendChild(description);
    menuContainer.appendChild(price);
    content.appendChild(menuContainer);

}
