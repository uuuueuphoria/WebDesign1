const menuButton = document.querySelector('.fa-bars');
const menuList = document.querySelector('header nav');
const selectOne = document.querySelector('nav ul li:first-child');
const selectTwo = document.querySelector('nav ul li:nth-child(2)');
const selectThree = document.querySelector('nav ul li:nth-child(3)');
const selectFour = document.querySelector('nav ul li:nth-child(4)');
const selectFive = document.querySelector('nav ul li:last-child');

menuButton.addEventListener('click', function (e) {
  if (menuList.classList.contains('hide')) {
    menuList.classList.remove('hide');
  } else {
    menuList.classList.add('hide');
  }
});

selectOne.addEventListener('click', hideNav);
selectTwo.addEventListener('click', hideNav);
selectThree.addEventListener('click', hideNav);
selectFour.addEventListener('click', hideNav);
selectFive.addEventListener('click', hideNav);

function hideNav(e) {
  menuList.classList.add('hide');
}
