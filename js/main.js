window.onload = function () {

    // Находим элементы на странице сайта
    const body = document.querySelector('body');

    const header = document.querySelector('.header');

    const headerFixed = document.querySelector('.header-fixed');



    const mainBtnUp = document.querySelector('.wrapper__arrow-up');

    const mainArrowUp = document.querySelector('.wrapper__arrow-up');

    const sectionMain = document.querySelector('.main-section');

    const sectionVideo = document.querySelector('.section-video');

    const sectionPhotoGallery = document.querySelector('.section-photo-gallary');

    // const videoGallery = document.querySelector('.section-video');

    const itemDesctopMenuFixed = document.querySelectorAll('.list__desctop-menu-fixed li');

    const linkDesctopMenuFixed = document.querySelectorAll('.list__desctop-menu-fixed li a');


    const btnBurger = document.querySelector('.btn-burger');

    const btnClouse = document.querySelector('.btn-clouse');

    const burgerMenu = document.querySelector('.menu-burger');

    const windowError = document.querySelector('.wrapper__window-error ');

    const windowBtnClose = document.querySelector('.wrapper__btn-exit');

    const socialLinksIcons = document.querySelectorAll(".item__social-icon ");

    const itemMobileMeu = document.querySelectorAll('.item__mobile-menu');

    const linkMobileMeu = document.querySelectorAll('.link__burger-menu');

    const anchors = document.querySelectorAll('a[href*="#"]');

    const popapWindow = document.querySelector('.wrapper__popap-window-photo');  // Поолучил Попап Окно

    const popapImg = document.querySelector('.wrapper__popap-window-photo img'); // Получил Попап Картинку

    const popapCloseBtn = document.querySelector('.popap__close-btn');  // Получил кнопку закрытия Попап Окна

    const popapActiveBtn = document.querySelectorAll('.wrapper__photo svg'); // Получил Кнопку лупу для активации Попап Окна

    console.log(popapActiveBtn);


  


    //Активирую Попап Окно 

    popapActiveBtn.forEach((item) => {

        item.addEventListener('click', (e) => {


            popapWindow.classList.add('active');


        });
    });

    popapCloseBtn.addEventListener('click', () => {
        popapWindow.classList.remove('active');

    });



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





    window.addEventListener('click', (e) => {

        console.log(e.target);
    });
    

    // Акивация кнопки на вверх

    window.addEventListener('scroll', () => {

        // console.log(window.scrollY);
        // console.log(sectionMain.clientHeight);

        
        if(window.scrollY > sectionMain.clientHeight - 10) {

            header.classList.remove('active');

            headerFixed.classList.add('active');

            mainArrowUp.classList.add('active');
            
            for(let i = 0;i < itemMobileMeu.length; i++) {
                itemMobileMeu[0].classList.remove('active');

                itemMobileMeu[1].classList.add('active');
            }

        
        }

        if(window.scrollY < 500 ){

            mainArrowUp.classList.remove('active');

        }

        if(window.scrollY < sectionMain.clientHeight ) {

            headerFixed.classList.remove('active');

            header.classList.add('active');
        }
        
        if (window.scrollY == 0) {

            itemMobileMeu.forEach((element) => {
                
                

                element.classList.remove('active');

                for(let i=0; i < itemMobileMeu.length; i++) {

                    itemMobileMeu[0].classList.add('active');
                }
                
            });

            headerFixed.classList.remove('active');

            header.classList.add('active');
        }

        if(window.scrollY > sectionVideo.clientHeight) {

            itemDesctopMenuFixed.forEach((item) => {


                item.classList.remove('active');

                itemDesctopMenuFixed.forEach((elem) => {

                    if(elem.className == 'gallary'){
                       
                        
                        console.log("dfdfdfdfdfd");
                       
                    }
                    
                    
                
                });


                
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

    // mainBtnUp.addEventListener('click', () => {

    //     window.scrollTo(0, 0);
       
    // });


};