import {data} from '../data/data.js';

const cardTemplate = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');
const detail = document.getElementById('detail');

document.addEventListener('DOMContentLoaded', () =>{
    loadData(data);
})

const loadData = data => {
    data.forEach((character) =>{
        const {id, name, description, image} = character

        cardTemplate.querySelector('button').textContent = name;
        cardTemplate.querySelector('img').setAttribute('src', image);
        cardTemplate.querySelector('button').dataset.id = id
        

        const clone = cardTemplate.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
    console.log(data)
}

items.addEventListener('click', (e) => {
    if(e.target.classList.contains('card__name')){
        let findId = e.target.dataset.id;
        let character = data.find((char) => char.id == findId);
        localStorage.setItem('character', JSON.stringify(character));
        window.location.href = 'detail.html'
    }
})

const row = document.querySelector('#carousel-container');
const card = document.querySelector('#card');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth;
    console.log(row.scrollLeft)
    enable(row.scrollLeft)
})

rightArrow.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;
    console.log(row.scrollLeft)
    enable(row.scrollLeft)
})

function enable(scroll){
    console.log(scroll)
    if(scroll == 0){
        leftArrow.disabled = true;
        leftArrow.classList.remove('left-arrow--enable')
    }else if(scroll >= 971 &&  scroll < 8739){
        leftArrow.classList.add('left-arrow--enable')
        rightArrow.classList.remove('right-arrow--enable')
    }else if(scroll == 8739){
        rightArrow.disabled = true;
        rightArrow.classList.add('right-arrow--enable')
    }
}