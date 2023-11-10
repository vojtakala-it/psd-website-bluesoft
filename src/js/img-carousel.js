import Flickity from 'flickity';
import 'flickity/css/flickity.css';

const btn = document.querySelector('.next-img-btn');

export function setButtonDimensions() {
    const blondie = document.getElementById('blondie');
    const imgWidth = blondie.clientWidth;
    const imgHeight = blondie.clientHeight;

    btn.style.width = imgWidth + 'px';
    btn.style.height = imgHeight + 'px';
}

export function initializeImgCarousel() {
    if (window.innerWidth >= 980) {
        flickityCarousel(true);
    } else {
        flickityCarousel(false);
    }
}

let clickHandler = null;

function flickityCarousel(useFlickity) {
    const flkty = new Flickity('.carousel', {
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        groupCells: 2,
        cellSelector: '.carousel-cell',
        cellAlign: 'left',
        initialIndex: 0,
        watchCSS: true,
    });
    const totalCells = flkty.getCellElements();
    const cellPositions = totalCells.map((x, i) => i * 100);
    let iteration = 1;

    const updateTransform = () => {
        if (iteration > totalCells.length) {
            iteration = 1;
        }

        flkty.cells.forEach((cell, index) => {
            const placement = cellPositions.at(index - iteration);
            cell.element.style.transform = `translateX(${placement}%)`;

        });
        iteration++;
    };

    if (clickHandler) {
        btn.removeEventListener('click', clickHandler);
    }

    if (useFlickity) {
        clickHandler = updateTransform;
        btn.addEventListener('click', clickHandler);
    }
}
