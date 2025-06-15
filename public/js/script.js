window.onload = function () {
    setTimeout(function () {
        document.querySelector('.page__images').classList.add('page__images_visible');
    }, 100);

    setTimeout(function () {
        document.querySelector('.page__content').classList.add('page__content_visible');
    }, 700);
};
