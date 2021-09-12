const container = document.getElementById('container');
const detail = document.querySelector('.dua');
container.addEventListener('click', function(e) {
    if(e.target.className == 'blink') {
        e.target.parentElement.parentElement.classList.add('satu');
        e.target.parentElement.parentElement.classList.remove('fade');
        detail.classList.add('fade');
    } else if(e.target.className == 'back') {
        const previous = document.querySelector('.satu');
        e.target.parentElement.parentElement.classList.remove('fade');
        previous.classList.add('fade');
    }
});