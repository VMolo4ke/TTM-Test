let a = document.querySelector('.list');
let b = document.querySelector('.list__item')
let c = document.querySelectorAll('.list__item')[1]
let d = document.querySelectorAll('.list__item')[2]

a.addEventListener('click', function() {
    b.classList.add('activ1')
    b.classList.remove('activate1')
    c.classList.add('activ2')
    c.classList.remove('activate2')
    d.classList.add('activ3')
    d.classList.remove('activate3')
});