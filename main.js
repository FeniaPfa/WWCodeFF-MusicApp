const suffleButton = document.getElementById('shuffle-btn');
const favButtons = document.querySelectorAll('.fav-btn');
const followButton = document.getElementById('follow-btn');

const toggleColor = (e) => {
    e.target.classList.toggle('text-purple-600');
};

const changeText = () => {
    followButton.innerText = followButton.innerText === 'Follow' ? 'Following' : 'Follow';
};

const changeIcon = (e) => {
    e.target.classList.toggle('fa-regular');
    e.target.classList.toggle('fa-solid');
    toggleColor(e);
};

suffleButton.addEventListener('click', toggleColor);
followButton.addEventListener('click', changeText);
favButtons.forEach((item) => {
    item.addEventListener('click', changeIcon);
});
