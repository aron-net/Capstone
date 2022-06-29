const hamburgerMenu = document.querySelector('.hamburger-menu');

const navigation = document.querySelector('.item-navigation');

const closeMenu = document.querySelector('.close-menu');

const show = () => { navigation.setAttribute('data-visible', true); };

hamburgerMenu.addEventListener('click', show);

const closeShow = () => { navigation.setAttribute('data-visible', false); };

closeMenu.addEventListener('click', closeShow);

const nav = document.querySelectorAll('.link-nav');

nav.forEach((n) => n.addEventListener('click', closeShow));
