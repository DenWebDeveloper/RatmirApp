window.onload = function () {

    // Находим элементы на странице сайта
    const body = document.querySelector('body');

    const mainArrowUp = document.querySelector('.wrapper__arrow-up');

    const sectionMain = document.querySelector('.main-section');

    const sectionVideo = document.querySelector('.section-video');

    const sectionPhotoGallery = document.querySelector('.section-photo-gallary');

    const videoGallery = document.querySelector('.section-video');

    // const mainPage = document.querySelector('.sec-1');

    const btnBurger = document.querySelector('.btn-burger');

    const btnClouse = document.querySelector('.btn-clouse');

    const burgerMenu = document.querySelector('.menu-burger');

    const windowError = document.querySelector('.wrapper__window-error ');

    const windowBtnClose = document.querySelector('.wrapper__btn-exit');

    const socialLinksIcons = document.querySelectorAll(".item__social-icon ");

    const itemMobileMeu = document.querySelectorAll('.item__mobile-menu');

    const linkMobileMeu = document.querySelectorAll('.link__burger-menu');

    const anchors = document.querySelectorAll('a[href*="#"]');


    // Плавная прокрутка к конкретной секции по клику на пункт меню.

    for (let anchor of anchors) {
        anchor.addEventListener('click',(event) => {
            event.preventDefault();
            let blockId = anchor.getAttribute('href');

            document.querySelector('' + blockId).scrollIntoView({
                    behavior:'smooth',
                    block:'start'

            });
        });
    }

    // Прокрутка до нужно секции при нажатии на пункт мобильного меню

    itemMobileMeu.forEach((item) => {

        item.addEventListener('click', (e) => {

            itemMobileMeu.forEach((element) => {
                
                element.classList.remove('active');

            });

            e.target.classList.add('active');

            burgerMenu.classList.remove('active');

            btnBurger.classList.add('active');

            body.classList.remove('disabled');

            if(e.target.classList.contains('video')) {

                window.scroll(0, sectionMain.clientHeight);

            }
            if (e.target.classList.contains('home')) {

                window.scroll(0, 0);
              
            }
            // if (e.target.classList.contains('photo')) {

            //     windowError.classList.add('active');
            

            // }

            // if (e.target.classList.contains('home')) {

            //     window.scroll(0, 0);
              
            // }

            // body.classList.add('disabled');


        });


    });

    // disabled();

    

    // Акивация кнопки на вверх

    window.addEventListener('scroll', () => {
        
        if(window.scrollY > sectionMain.clientHeight) {

            mainArrowUp.classList.add('active');
            
            for(let i = 0;i < itemMobileMeu.length; i++) {
                itemMobileMeu[0].classList.remove('active');

                itemMobileMeu[1].classList.add('active');
            }
        }

        if(window.scrollY < 500 ){

            mainArrowUp.classList.remove('active');

        }
        
        if (window.scrollY == 0) {

            itemMobileMeu.forEach((element) => {
                
                console.log(element);

                element.classList.remove('active');

                for(let i=0; i < itemMobileMeu.length; i++) {

                    itemMobileMeu[0].classList.add('active');
                }
                
            });
        }
    });

    // console.log(sectionMain.clientHeight);


    // Переключение активности у ссылок мобильного меню

        // linkMobileMeu.forEach((item) => {

        //     item.addEventListener('click', (e)=> {

        //         linkMobileMeu.forEach((item) =>  {

        //             item.classList.remove('active');
        //         });

        //         itemMobileMeu.forEach((item) => {

        //             item.classList.remove('active');
        //         });

        //         e.target.classList.add('active');


        //         body.classList = '';

        //         burgerMenu.classList.remove('active');

        //         btnBurger.classList.add('active');
        //     });
        
        // });

    // Установил окно предупреждения "Страница находится в разработке" по клику на социальную иконку

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





    // Расскрывает мобильное меню


    // function disabled () {

    //     let pagePosition = window.scrollY;
 
    //      btnBurger.classList.remove('active');
    //      burgerMenu.classList.add('active');
    //      btnClouse.classList.add('active');
       
    //      body.classList.add('disabled');
    //      body.dataset.position = pagePosition;
    //      body.style.top = -pagePosition + 'px';
    // }




    // Закрывает мобильное меню
    
    // function activate() {

    //     let pagePosition = parseInt(body.dataset.position, 10);
    //     body.style.top = 'auto';

    //     btnClouse.classList.remove('active');
    //     burgerMenu.classList.remove('active');
    //     body.classList.remove('disabled');
    //     window.scroll({top: pagePosition, left: 0});
    //     body.removeAttribute('data-position');
    //     btnBurger.classList.add('active');
    // }


    btnBurger.addEventListener('click', () => {
        btnBurger.classList.remove('active');
        burgerMenu.classList.add('active');
        btnClouse.classList.add('active');
           
    });

    btnClouse.addEventListener('click', () => {
        btnClouse.classList.remove('active');
        burgerMenu.classList.remove('active');
        btnBurger.classList.add('active');

    });


};