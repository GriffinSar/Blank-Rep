'use strict';
//store the results of selected element in variables
//query selector with muliple selections only 1 selected - use All

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};


const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden'); 
};


for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click',closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();
        }
    });