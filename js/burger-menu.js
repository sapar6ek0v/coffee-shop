// $(document).ready(function (){
//      $('.header__burger').click(function () {
//          $('.header__burger,.header__nav').toggleClass('header__active');
//          $('body').toggleClass('lock');
//          if($(this).css('display') === 'none'){
//              $(this).removeAttr('style');
//          }
//      });
//  });

// const burgerMenu = () => {
//
//     const menu = document.querySelector('.header__burger'),
//         menuNav = document.querySelector('.header__nav'),
//         body = document.querySelector('body');
//
//     body.addEventListener('click', (event) => {
//
//         let target = event.target;
//
//         if (target.closest('.header__burger,.header__nav')) {
//             menu.classList.add('header__active');
//             menuNav.style.display = 'block';
//         } else if (target.classList.contains('header__burger')) {
//             menu.classList.remove('header__active);
//             menuNav.style.display = 'none';
//         } else if (target.tagName !== 'DIV') {
//             menu.classList.remove('burger__active');
//             menuNav.style.display = 'none';
//         } else {
//             return;
//         }
//
//     });
//
// };
// burgerMenu();


const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__nav');
if (iconMenu) {
    iconMenu.addEventListener("click", function (){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('header__active');
        menuBody.classList.toggle('header__active');
    });
}



const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock =document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__menu').offsetHeight;

            if (iconMenu.classList.contains('header__active')){
                document.body.classList.remove('lock');
                iconMenu.classList.remove('header__active');
                menuBody.classList.remove('header__active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}