window.onload = function () {

    // Находим элементы на странице сайта
    const body = document.querySelector('body');
    const section1 = document.querySelector('.sec-1');

    const section2 = document.querySelector('.sec-2');

    const btnBurger = document.querySelector('.btn-burger');
    const btnClouse = document.querySelector('.btn-clouse');
    const burgerMenu = document.querySelector('.menu-burger');

    const windowError = document.querySelector('.wrapper__window-error ');

    const windowBtnClose = document.querySelector('.wrapper__btn-exit');

    const socialLinksIcons = document.querySelectorAll(".item__social-icon ");

    const itemMobileMeu = document.querySelectorAll('.item__mobile-menu');


    socialLinksIcons.forEach((item) => {

        item.addEventListener('click', () => {
            windowError.classList.add('active');
            body.classList.add('disabled');
        });

        windowBtnClose.addEventListener('click', () => {
            windowError.classList.remove('active');
            body.classList.remove('disabled');


        });

    });


    btnBurger.addEventListener('click', () => {

        btnBurger.classList.remove('active');
        burgerMenu.classList.add('active');
        btnClouse.classList.add('active');
        body.classList.add('disabled');


        
    });

    btnClouse.addEventListener('click', () =>{

        btnClouse.classList.remove('active');
        burgerMenu.classList.remove('active');
        body.classList.remove('disabled');
        btnBurger.classList.add('active');
      
    });
    

};