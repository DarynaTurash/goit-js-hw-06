const inputRef = document.querySelector("#validation-input");
const maxLengthOfSymbols = inputRef.dataset.length;

inputRef.addEventListener('blur', onValidationOfSymbolLength);

function onValidationOfSymbolLength(event) {
    const symbolsEnteredLength = event.target.value.trim().length;

    if (symbolsEnteredLength <= maxLengthOfSymbols) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    };
}




