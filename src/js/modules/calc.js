const calc = (size, material, options, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == "" || materialBlock.value == "") {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener("change", calcFunc);
    materialBlock.addEventListener("change", calcFunc);
    optionsBlock.addEventListener("change", calcFunc);

};

export default calc;