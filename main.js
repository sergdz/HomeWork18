let number = document.querySelector('.wrapper__item'),
    plus = document.querySelector('.wrapper__plus'),
    minus = document.querySelector('.wrapper__minus'),
    reset = document.querySelector('.wrapper__reset');

    number.textContent = 1;
    


plus.addEventListener('click', () => {
    number.textContent++,
    number.style.fontSize = number.textContent+`px`;
    if (number.textContent < 12) number.style.fontSize = '12px';
} );
minus.addEventListener('click', () =>  {
    number.textContent--
    number.style.fontSize = number.textContent+`px`;
    if (number.textContent < 12) number.style.fontSize = '12px'
        
    
} 
);
reset.addEventListener('click', () => {
    number.textContent = 1;
    number.style.fontSize = `12px`
} );

