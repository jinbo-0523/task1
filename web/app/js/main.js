{'use strict'; 

// 厳密にコードのエラーチェックをしてくれという記述
// console.log('Hello 喫茶神保'); 

const open = document.getElementById('nav_btn');
const spMenu = document.getElementById('sp_menu');
const close = document.querySelector('.close');

open.addEventListener('click',() => {
  console.log('bbb');
  spMenu.classList.add('show');
  open.classList.add('hide');
});
close.addEventListener('click',() => {
  console.log('aaa');
  spMenu.classList.remove('show');
  open.classList.remove('hide');
});











}