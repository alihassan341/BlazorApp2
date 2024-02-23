window.resizeInputWidth = (elementId, width) => {
    const inputElement = document.getElementById(elementId);
    if (inputElement) {
        inputElement.style.width = `${width}px`;
    }
};