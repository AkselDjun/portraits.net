import modals from "./modules/modals";
import sliders from "./modules/sliders";
import calc from "./modules/calc";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from './modules/burger';
import drop from './modules/drop';


window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modals();
    sliders(".feedback-slider-item", "horixontal", ".main-prev-btn", ".main-next-btn");
    calc("#size", "#material", "#options", ".calc-price");
    pictureSize(".sizes-block");
    accordion(".accordion-heading", ".accordion-block");
    burger(".burger-menu", ".burger");
    drop();
});