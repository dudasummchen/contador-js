const value = document.getElementById('valor');
const maisButton = document.getElementById ('mais');
const menosButton = document.getElementById ('menos')
 
let count = 0;
let Interval = 0;
 
const NovoValor = () => {
    value.innerHTML = count;
};
 
maisButton.addEventListener('mousedown', () => {
    Interval = setInterval(() => {
        count += 1;
        NovoValor();
    }, 300);
});
 
maisButton.addEventListener('click', () => {
    count += 1;
    NovoValor();
});
 
menosButton.addEventListener('mousedown', () => {
    Interval = setInterval (() => {
        count -= 1;
        if (count < 0){
            count = 0;
        }
        NovoValor();
    }, 300);
});
 
menosButton.addEventListener('click', () => {
    count -= 1;
    if (count < 0){
        count = 0;
    };
    NovoValor();
});
 
 
document.addEventListener('mouseup', () => {
    clearInterval(Interval);
});