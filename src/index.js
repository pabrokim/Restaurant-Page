
import pageLoad from "./pageload";
import addMenuItem from "./menu";
import addContact from "./contact";

const content = document.querySelector('#content');

function homeLoad(){
    content.innerHTML = '';
    pageLoad();
}
function menuLoad(){
    content.innerHTML = '';
    addMenuItem();

}
function contactLoad(){
    content.innerHTML = '';
    addContact();
}

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', homeLoad);

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', menuLoad);

const contactBtn = document.querySelector('#contact');
contactBtn.addEventListener('click', contactLoad);