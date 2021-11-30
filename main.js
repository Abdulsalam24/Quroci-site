let list = document.querySelector('.list');
let listItem = document.querySelector('.list-item');
let menu = document.querySelector('.menu');

menu.addEventListener('click', ()=>{
    list.classList.toggle("list-item")
})

