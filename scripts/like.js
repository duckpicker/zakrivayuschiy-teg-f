/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ post__like-button — для кнопки Like рядом с иконкой
✦ post__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.post__like-button');
const iconButtonArray = document.querySelectorAll('.post__icon-button');

iconButtonArray.forEach((iconButton, index) => {
    iconButton.onclick = () =>
        toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
    button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
    heart.classList.toggle('is-liked');
    setButtonText(heart, button);
}

function setButtonText(heart, button) {
    if ([...heart.classList].includes('is-liked')) {
        setTimeout(
            () => {
                const buttonText = 'Unlike';
                button.querySelector('.button__text').textContent = buttonText;
                button.ariaLabel = buttonText;
            },
            500
        );
    } else {
        setTimeout(
            () => {
                const buttonText = 'Like';
                button.querySelector('.button__text').textContent = buttonText;
                button.ariaLabel = buttonText;
            },
            500
        );
    }
}
