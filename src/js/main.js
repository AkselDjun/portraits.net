import modals from "./modules/modals";
import sliders from "./modules/sliders";
import calc from "./modules/calc";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modals();
    sliders(".feedback-slider-item", "horixontal", ".main-prev-btn", ".main-next-btn");
    calc("#size", "#material", "#options", ".calc-price");
});