window.onload = function () {

    // Находим элементы на странице сайта
    const body = document.querySelector('body');
    const section1 = document.querySelector('.sec-1');

    const videoGallery = document.querySelector('.sec-2');

    const mainPage = document.querySelector('.sec-1');

    const btnBurger = document.querySelector('.btn-burger');
    const btnClouse = document.querySelector('.btn-clouse');
    const burgerMenu = document.querySelector('.menu-burger');

    const windowError = document.querySelector('.wrapper__window-error ');

    const windowBtnClose = document.querySelector('.wrapper__btn-exit');

    const socialLinksIcons = document.querySelectorAll(".item__social-icon ");

    const itemMobileMeu = document.querySelectorAll('.item__mobile-menu');



    itemMobileMeu.forEach((item) => {

        

        item.addEventListener('click', (e)=> {
           
            body.classList = '';
            burgerMenu.classList.remove('active');
            btnBurger.classList.add('active');



        });

        
    });

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

        let pagePosition = window.scrollY;

        btnBurger.classList.remove('active');
        burgerMenu.classList.add('active');
        btnClouse.classList.add('active');
        body.classList.add('disabled');
        body.dataset.position = pagePosition;
        body.style.top = -pagePosition + 'px';

    });

    btnClouse.addEventListener('click', () =>{


        let pagePosition = parseInt(body.dataset.position, 10);
        body.style.top = 'auto';

        btnClouse.classList.remove('active');
        burgerMenu.classList.remove('active');
        body.classList.remove('disabled');
        window.scroll({top: pagePosition, left: 0});
        body.removeAttribute('data-position');
        btnBurger.classList.add('active');
      
    });


};