
import pageLoad from "./pageload";
import addMenuItem from "./menu";
import addContact from "./contact";
pageLoad();

const content = document.querySelector('#content');

const homeLoad = ()=>{
    content.innerHTML = '';
    pageLoad();
}
const menuLoad = ()=>{
    content.innerHTML = '';
    addMenuItem();

}
const contactLoad = ()=>{
    content.innerHTML = '';
    addContact();
}

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', homeLoad);

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', menuLoad);

const contactBtn = document.querySelector('#contact');
contactBtn.addEventListener('click', contactLoad);
