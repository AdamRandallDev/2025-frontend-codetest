import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";

const podCards = document.querySelectorAll('.podCard');
const btn = document.querySelectorAll('.podsComparison__selection button');

window.addEventListener('load', () => {
    btn.forEach((button, i) => {
        button.addEventListener('click', (e) => {
            if (window.innerWidth < 768) {
                $('.podsComparison__cards').slick('slickGoTo', i);
            } else {
                btn.forEach(btn => btn.classList.remove('is-active'));
                podCards.forEach(card => card.classList.remove('is-active'));
                button.classList.add('is-active');
                podCards[i].classList.add('is-active');
            }
        });
    });

    if (window.innerWidth < 768) {
        $('.podsComparison__cards').slick({
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '40px',
            arrows: true,
            dots: false,
            infinite: true
        });
    }

    $('.podsComparison__cards').on('afterChange', function (e, slick, currentIndex) {
        changeActivePod(currentIndex);
    });
});

function changeActivePod(index) {
    const podCardsCloned = document.querySelectorAll('.podCard');
    btn.forEach(btn => btn.classList.remove('is-active'));
    podCardsCloned.forEach(card => card.classList.remove('is-active'));
    btn[index].classList.add('is-active');
    podCards[index].classList.add('is-active');
}
