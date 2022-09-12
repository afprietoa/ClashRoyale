const cardName = document.querySelector('#card-name');
const cardDescription = document.querySelector('#card-description')
const cardImg = document.querySelector('#card-img');
const backBtn = document.querySelector('#back-btn')

const getLocalStorage = () => {
    let detail = JSON.parse(localStorage.getItem('character'));
    const {name, description, image} = detail;
    cardName.textContent = name;
    cardDescription.textContent = description;
    cardImg.setAttribute('src', image)
}    

document.addEventListener('DOMContentLoaded', getLocalStorage)

backBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
})
