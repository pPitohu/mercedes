ScrollReveal().reveal(document.querySelector('.design-block img:first-child'), {
    delay: 250,
    duration: 1500,
    distance: '50px',
    origin: 'left',
    cleanup: true,
});
ScrollReveal().reveal(document.querySelector('.design-text'), {
    delay: 350,
    duration: 1500,
    distance: '100px',
    origin: 'right',
    cleanup: true,
});
ScrollReveal().reveal(document.querySelector('.design-list'), {
    delay: 450,
});
ScrollReveal().reveal(document.querySelector('.design__descr'), {
    delay: 550,
    duration: 1500,
});

for (let i = 1; i <= 4; i++) {
    const el = document.querySelector(
        `.design-images:first-child img:nth-child(${i})`
    );
    ScrollReveal().reveal(el, {
        delay: 300 * i - 50,
        duration: 1500,
        distance: '30px',
        origin: 'bottom',
        cleanup: true,
    });
}
ScrollReveal().reveal(document.querySelector('.feature-wrapper'), {
    delay: 250,
    duration: 1500,
    distance: '50px',
    origin: 'bottom',
    cleanup: true,
});
for (let i = 1; i <= 4; i++) {
    const el = document.querySelector(`.feature__item:nth-child(${i})`);
    ScrollReveal().reveal(el, {
        delay: 300 * i,
        duration: 1500,
        distance: '30px',
        origin: 'bottom',
        cleanup: true,
    });
}
ScrollReveal().reveal(document.querySelector('.contacts-wrapper'), {
    delay: 250,
    duration: 1000,
    distance: '30px',
    origin: 'right',
    cleanup: true,
});
ScrollReveal().reveal(document.querySelector('.contacts-form'), {
    delay: 450,
    duration: 1500,
    distance: '70px',
    origin: 'left',
    cleanup: true,
});
ScrollReveal().reveal(document.querySelector('.contacts__descr'), {
    delay: 550,
    duration: 1500,
    distance: '30px',
    origin: 'left',
    cleanup: true,
});
ScrollReveal().reveal(document.querySelector('.form-test-drive'), {
    delay: 650,
    duration: 1500,
    distance: '30px',
    origin: 'left',
    cleanup: true,
});
ScrollReveal().reveal(document.querySelector('.form__button'), {
    delay: 550,
    duration: 1500,
    distance: '30px',
    origin: 'left',
    cleanup: true,
});

document.querySelectorAll('.more').forEach((el) => {
    el.onclick = () => {
        document.querySelector('.modal').classList.remove('hidden');
    };
});
document.querySelector('.modal__close').onclick = () =>
    document.querySelector('.modal').classList.add('hidden');

document.querySelector('.form__button').onclick = (e) => {
    e.preventDefault();
    alert("actually, it's not working, because that's non-commercial website");
};
document.querySelector('.modal__button').onclick = (e) => {
    e.preventDefault();
    alert("actually, it's not working, because that's non-commercial website");
};
