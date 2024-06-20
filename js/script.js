let categories = document.querySelectorAll('.list__item');

let previous_category_btn = document.querySelector('.list__next-btn');
let next_category_btn = document.querySelector('.list__previous-btn');


let list = [[0, 1, 2], [1, 2, 0], [2, 0, 1]]
let current_category = 1;
let current_direction = 0;
let flag;

next_category_btn.addEventListener('click', function() {
    if (current_direction === 0) {
        current_category = (current_category === 2) ? 0 : current_category + 1;
        current_direction = 1;
    }
    if (flag === 0) {
        current_category = (current_category === 0) ? 2 : current_category + 1;
    }
    animate({
        duration: 400,
        timing(timeFraction) {
            return timeFraction;
        },
        draw(progress) {
            categories[list[current_category][0]].style.left = progress * 220 + 'px';
            categories[list[current_category][0]].style.zIndex = 0;
            categories[list[current_category][0]].style.scale = 1;
            categories[list[current_category][1]].style.left = 110 - (progress * 110) + 'px';
            categories[list[current_category][1]].style.scale = 1.3 - (progress * 0.3);
            categories[list[current_category][1]].style.zIndex = 1;
            categories[list[current_category][2]].style.left = 220 - (progress * 110) + 'px';
            categories[list[current_category][2]].style.scale = 1 + (progress * 0.3);
            categories[list[current_category][2]].style.zIndex = 5;
        }
    });
    current_category = (current_category === 2) ? 0 : current_category + 1;
    flag = 1
});


previous_category_btn.addEventListener('click', function() {
    if (current_direction === 0) {
        current_category = (current_category === 0) ? 2 : current_category - 1;
        current_direction = 1
    }
    if (flag === 1) {
        current_category = (current_category === 0) ? 2 : current_category - 1;
    }
    animate({
        duration: 500,
        timing(timeFraction) {
            return timeFraction;
        },
        draw(progress) {
            categories[list[current_category][2]].style.left = 220 - (progress * 220) + 'px';
            categories[list[current_category][2]].style.zIndex = 0;
            categories[list[current_category][2]].style.scale = 1;
            categories[list[current_category][1]].style.left = 110 + (progress * 110) + 'px';
            categories[list[current_category][1]].style.scale = 1.3 - (progress * 0.3);
            categories[list[current_category][1]].style.zIndex = 1;
            categories[list[current_category][0]].style.left = progress * 110 + 'px';
            categories[list[current_category][0]].style.scale = 1 + (progress * 0.3);
            categories[list[current_category][0]].style.zIndex = 5;
        }
    });
    current_category = (current_category === 0) ? 2 : current_category - 1;
    flag = 0
});


function animate({duration, draw, timing}) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction)

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}