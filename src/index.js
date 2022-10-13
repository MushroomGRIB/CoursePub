


'use strict'

// import "./index.css"
// import "./index.scss"




// Условия для появления стрелочки для подменю в хедере
const isMobile = {

        Android: function () {
            return navigator.userAgent.match(/Android/i);
        }
        ,
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        }
        ,
        IOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
        ,
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        }
        ,
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        }
        ,
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.IOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        }
    }
;

if (isMobile.any()) {
    document.body.classList.add('Touch');

    let menuArrows = document.querySelectorAll('.MenuArrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('Active');
            });
        }
    }

} else {
    document.body.classList.add('PC');

}

// Меню бургер
const IconMenu = document.querySelector('.MenuIcon');
if (IconMenu) {
    const MenuBody = document.querySelector('.MenuBody');
    IconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('Lock');
        IconMenu.classList.toggle('Active');
        MenuBody.classList.toggle('Active');

    });
}


