
'use strict';

window.onload = function(){


    const body = document.querySelector('body');  // Body


    const header = document.querySelector('.header');  // Header


    const headerFixed = document.querySelector('.header-fixed');  // Header-fixed


    const itemDesctopMenuFixed = document.querySelectorAll('.list__desctop-menu-fixed li');  // Элемен меню Фиксированного Меню

    const linkDesctopMenuFixed = document.querySelectorAll('.list__desctop-menu-fixed li a'); // Ссылка элемента Фиксированного Меню



    const sectionMain = document.querySelector('.main-section'); // Главная секция сайта

    const itemMainMenu = document.querySelectorAll('.item__desctop-menu');  // Элементы Меню Главного Экран

    const linkMainMenu = document.querySelectorAll('.link__desctop-menu');  // Ссылки Элементов Меню Главного Экран


    const socialLinksIcons = document.querySelectorAll(".item__social-icon "); // Социальные иконки на Главном Экране

    const itemMobileMeu = document.querySelectorAll('.item__mobile-menu');  // Элементы Мобильной Меню

    const linkMobileMeu = document.querySelectorAll('.link__burger-menu'); // Ссылки Элементов Мобильного меню

    const btnBurger = document.querySelector('.btn-burger');  // Кнопка Бургера

    const btnClouse = document.querySelector('.btn-clouse'); // Кнопа Закрыть Бургер



    const sectionVideo = document.querySelector('.section-video');  // Секция Видео галереи

    const sectionPhotoGallery = document.querySelector('.section-photo');  // Cекция Фото галереи





    const mainArrowUp = document.querySelector('.wrapper__arrow-up');  // Кнопка ВВЕРХ, при нажатии возвращаят на главное окно сайта.


    const burgerMenu = document.querySelector('.menu-burger'); 

    const windowError = document.querySelector('.wrapper__window-error '); /// Окно ошибки

    const windowBtnClose = document.querySelector('.wrapper__btn-exit');



    const anchors = document.querySelectorAll('a[href*="#"]');  // Находим все ссылки с аттрибутом href="#".


    // Попап Окно

    const popapWindow = document.querySelector('.wrapper__popap-window-photo');  // Поолучил Попап Окно.

    const popapImg = document.querySelector('.wrapper__popap-window-photo img'); // Получил Попап Картинку.

    const popapCloseBtn = document.querySelector('.popap__close-btn');  // Получил кнопку закрытия Попап Окна.

    const popapActiveBtn = document.querySelectorAll('.wrapper__photo svg'); // Получил Кнопку лупу для активации Попап Окно



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


   

    // Прокрутка до нужной секции при нажатии на пункт мобильного меню

    itemMobileMeu.forEach((item) => {

        item.addEventListener('click', (e) => {

            itemMobileMeu.forEach((element) => {
                
                element.classList.remove('active');

            });

            e.target.classList.add('active');

            burgerMenu.classList.remove('active');

            btnBurger.classList.add('active');

            body.classList.remove('disabled');

            if (e.target.classList.contains('home')) {

                window.scroll(0, 0);
              
            }

            if(e.target.classList.contains('video')) {

                window.scroll(0, sectionMain.clientHeight);

            }
          
            if (e.target.classList.contains('photo')) {

                window.scroll(0, sectionMain.clientHeight + sectionVideo.clientHeight);
              
            }
          

            // if (e.target.classList.contains('home')) {

            //     window.scroll(0, 0);
              
            // }

            // body.classList.add('disabled');


        });


    });






  



    window.addEventListener('scroll', () => {

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

        if(window.scrollY < 500 ){

            mainArrowUp.classList.remove('active');

        }

        if(window.scrollY < sectionMain.clientHeight ) {

            headerFixed.classList.remove('active');

            header.classList.add('active');
        }

        // Акивация кнопки на вверх.


        if(window.scrollY > sectionMain.clientHeight - 10) {

            header.classList.remove('active');

            headerFixed.classList.add('active');

            mainArrowUp.classList.add('active');
            
            for(let i = 0;i < itemMobileMeu.length; i++) {
                itemMobileMeu[0].classList.remove('active');

                itemMobileMeu[1].classList.add('active');
            }

            itemMobileMeu.forEach((elem) => {

                elem.classList.remove('active');
                
                itemMobileMeu.forEach((item) => {

                    if(item.classList.contains('video')) {

                        item.classList.add('active');

                    }


                });

            });



            itemDesctopMenuFixed.forEach((elem) => {

      

                elem.classList.remove('active');
        
                
        
                itemDesctopMenuFixed.forEach((item) => {
        
                    if(item.classList.contains('video')) {
        
                        item.classList.add('active');
                    } else {
        
                        item.classList.remove('active');
                        
                    }
        
                });
        
        
            });

        
        }

        if(window.scrollY > sectionMain.clientHeight + sectionVideo.clientHeight - 100) {

            itemMobileMeu.forEach((elem) => {

                elem.classList.remove('active');
                
                itemMobileMeu.forEach((item) => {

                    if(item.classList.contains('photo')) {

                        item.classList.add('active');

                    }


                });

            });

            itemDesctopMenuFixed.forEach((elem) => {

                elem.classList.remove('active');
        
            
                itemDesctopMenuFixed.forEach((item) => {
        
                    if(item.classList.contains('gallary')) {
        
                        item.classList.add('active');
                    } else {
        
                        item.classList.remove('active');
                        
                    }
        
                });
        
        
            });
        }

     

    
    });



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



    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        },

        loop: true,
        // pagination: {
        //   el: ".swiper-pagination",
        // },
      });

};