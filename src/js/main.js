import '../css/main.scss';
import {documentReady} from './documentReady';
import {initializeImgCarousel, setButtonDimensions} from './img-carousel';
import {listenToBurger} from "./navbar";

documentReady(() => {

    // img-carousel section
    initializeImgCarousel();

    window.addEventListener('load', setButtonDimensions);
    window.addEventListener('resize', () => {
        setButtonDimensions();
        listenToBurger();
        initializeImgCarousel();
    });
});
