const input = document.querySelector('.input-text')
const output = document.querySelector('.output-text')
console.log(input)
const outputChange = () => {
    output.textContent=input.value
    console.log(123)

}
// https://webbeaver.ru/debounce-explained/
function debounce(callback, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    }
}
input.addEventListener('input', debounce(outputChange, 300))