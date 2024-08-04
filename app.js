const searchBtn = document.querySelector('.search-btn');
const menuBar = document.querySelector('.bar ion-icon');
const closeBtn = document.querySelector('.close-btn');
const hideItem = document.querySelector('.mobile-menu');
const search = document.querySelector('.search');

let isActive = false;
function showHideNavBar() {
    if(isActive){
        hideItem.classList.remove('showMenu');
        isActive = false;
        return isActive;
    }
        hideItem.classList.add('showMenu');
        isActive = true;
        return isActive;
}
searchBtn.addEventListener('click', showHideNavBar);
menuBar.addEventListener('click', showHideNavBar);
closeBtn.addEventListener('click', showHideNavBar);
// loader
window.onload = () => {
    document.querySelector('.loader').style.display = 'none';
}