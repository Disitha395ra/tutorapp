let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onClick = () => {
    profile.classList.toggle('active');
}

window.onscroll = () => {
    profile.classList.remove('active');
}