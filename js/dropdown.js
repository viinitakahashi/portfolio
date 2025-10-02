              
const dropdowns = document.querySelectorAll('.dropdown');
const icon = document.querySelector('.bi-telegram');

const colorIcon = '#BA55D3';

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected')

    select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');

    if (select.classList.contains('select-clicked')) {
        selected.style.color = "#fff";
        icon.style.color = "#fff";

    } else {
        selected.style.color = colorIcon;
        icon.style.color = colorIcon;
    }

    });


    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

        });
    });
});