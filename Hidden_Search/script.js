// 'use strict';

const search = document.querySelector('.search');
const btn = document.querySelector ('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.add('active')
  search.classList.toggle('active')
    input.focus()
})

