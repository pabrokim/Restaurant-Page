
export default function addMenuItem(){

    const myMenu = [
        { Img:'../img/cheese.jpeg', Name:'Classic Cheeseburger', Description:'Juicy beef patty topped with melted cheddar cheese, fresh lettuce, ripe tomato slices, onions, pickles, and our special house-made burger sauce.', Price: '$12' },
        { Img:'../img/chicken.jpeg', Name: 'Mediterranean Grilled Chicken Salad', Description:'Grilled chicken breast marinated in a blend of Mediterranean spices, served on a bed of mixed greens, cherry tomatoes, cucumbers, red onions, Kalamata olives, and crumbled feta cheese', Price: '$10' },
        { Img:'../img/salmon.jpeg', Name:'Grilled Salmon with Lemon Butter Sauce', Description:'Freshly grilled salmon fillet seasoned with herbs and served with a tangy lemon butter sauce.', Price: '$8' },
        { Img:'../img/pizza.jpeg', Name: 'Margherita Pizza', Description: 'Thin-crust pizza topped with fresh tomato sauce, mozzarella cheese, sliced tomatoes, fragrant basil leaves, and a drizzle of extra virgin olive oil.', Price: '$22' },
    ];
    for(let i = 0; i< myMenu.length; i++){
        let menuItem = myMenu[i];

        const menuCard = document.createElement('div');
        menuCard.classList.add('menuCard');

        const imgHolder = document.createElement('div');
        imgHolder.classList.add('imgHolder');
        let menuImg = document.createElement('img');
        menuImg.src= menuItem.Img;
        menuImg.alt = 'item';

        imgHolder.appendChild(menuImg);
        
                
        const detailsCard = document.createElement('div');
        detailsCard.classList.add('detailsCard');

        let name = document.createElement('p');
        name.textContent = `Name: ${menuItem.Name}`
        const description = document.createElement('p');
        description.textContent = `Description: ${menuItem.Description}`
        const price = document.createElement('p');
        price.textContent = `Price: ${menuItem.Price}`;

        detailsCard.appendChild(name);
        detailsCard.appendChild(description);
        detailsCard.appendChild(price);
        menuCard.appendChild(detailsCard);

        menuCard.appendChild(imgHolder);
        menuCard.appendChild(detailsCard);

        content.appendChild(menuCard);

    }
    

}


