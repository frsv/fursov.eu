const facts = [
    "I have two Maine Coons",
    "I have traveled to over 20 countries",
    "I enjoy learning new languages",
    "I can bake a decent bread",
    "I fed a giraffe once",
];

window.onload = function () {
    setTimeout(function () {
        document.querySelector('.page__images').classList.add('page__images_visible');
    }, 100);

    setTimeout(function () {
        document.querySelector('.page__content').classList.add('page__content_visible');
    }, 700);

    let currentIndex = 0;

    function replaceFact() {
        const factElement =  document.querySelector(".page__random_fact");
        const factText = factElement.querySelector("#fact");
        factElement.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % facts.length;
            factText.textContent = facts[currentIndex];
            factElement.style.opacity = 1;
        }, 500);
    }

    document.querySelector(".page__random_fact").addEventListener("click", replaceFact);
    replaceFact();
};
