// Loader
window.onload = () => {
    document.querySelector('.loader').style.display = 'none';
}
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

// trending game section deopdown fucntionalily
const gamerNavs = document.querySelector('.navs');

const gmsLzBtns = document.querySelectorAll('.navigator li');
const gmsSmBtns = document.querySelectorAll('.small-navigator option');

const wonderland = document.querySelector('#wonderland');
const wraith = document.querySelector('#wraith');
const apexLegends = document.querySelector('#apex-legends');
const bunnyOfficer = document.querySelector('#bunny-officer');

gamerNavs.addEventListener('click', function(event) {
    let value = event.target;
       if(value) {
            gmsLzBtns.forEach((btn, i) => {
                btn.style.color = '#fff';
                gmsSmBtns[i].style.color = '#fff';
                value.style.color = '#ffc010';
            }) 
       }

    switch(value.innerText.toLocaleLowerCase()) {
        case 'all':
            wonderland.style.display = 'block';
            wraith.style.display = 'block';
            apexLegends.style.display = 'block';
            bunnyOfficer.style.display = 'block';
        break
        case 'origin':
            wonderland.style.display = 'block';
            wraith.style.display = 'none';
            apexLegends.style.display = 'none';
            bunnyOfficer.style.display = 'block';
        break
        case 'playstation 4':
            wonderland.style.display = 'block';
            wraith.style.display = 'none';
            apexLegends.style.display = 'none';
            bunnyOfficer.style.display = 'none';
        break
        case 'uplay':
            wonderland.style.display = 'none';
            wraith.style.display = 'none';
            apexLegends.style.display = 'block';
            bunnyOfficer.style.display = 'none';
        break
        case 'steam':
            wonderland.style.display = 'none';
            wraith.style.display = 'block';
            apexLegends.style.display = 'none';
            bunnyOfficer.style.display = 'none';

        break
        case 'reper':
            wonderland.style.display = 'none';
            wraith.style.display = 'none';
            apexLegends.style.display = 'none';
            bunnyOfficer.style.display = 'none';
        break
    }
})