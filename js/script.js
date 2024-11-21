let body = document.body;

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick=()=>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('.side-bar .close-side-bar').onclick=()=>{
    sideBar.classList.remove('active');
    body.classList.remove('active');
}

let searchForm = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    profile.classList.toggle('active');
}

window.onscroll = () => {
    profile.classList.remove('active');

    if(window.innerWidth<1200){
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
}