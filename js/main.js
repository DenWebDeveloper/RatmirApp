window.onload = function () {

    const section1 = document.querySelector('.section-1');

    const btnBurger = document.querySelector('.btn-burger');
    const btnClouse = document.querySelector('.btn-clouse');
    const burgerMenu = document.querySelector('.menu-burger');


    btnBurger.addEventListener('click', (e) => {

        btnBurger.classList.remove('active');
        burgerMenu.classList.add('active');
        btnClouse.classList.add('active');

        
    });

    btnClouse.addEventListener('click', () =>{

        btnClouse.classList.remove('active');
        burgerMenu.classList.remove('active');


        btnBurger.classList.add('active');
      
    });


};