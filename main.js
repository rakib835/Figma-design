const menuIcon=document.querySelector('.menu-icon');
const sideNav=document.querySelector('.sidenav');
menuIcon.onclick=function(){
    sideNav.classList.toggle('close');
    menuIcon.classList.toggle('active');
}