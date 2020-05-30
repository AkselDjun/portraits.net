import modals from "./modules/modals";
import sliders from "./modules/sliders";
import calc from "./modules/calc";
import pictureSize from "./modules/pictureSize";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modals();
    sliders(".feedback-slider-item", "horixontal", ".main-prev-btn", ".main-next-btn");
    calc("#size", "#material", "#options", ".calc-price");
    pictureSize(".sizes-block");
});