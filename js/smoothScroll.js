const linksHead = document.querySelectorAll('.menu-list__link'),
    mainScroll = document.querySelector('.main__scroll'),
    contactsBtn = document.querySelector('.contacts'),
    newArray = [...linksHead, mainScroll, contactsBtn];

newArray.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const ID = event.target.getAttribute('href').substr(1);

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});
