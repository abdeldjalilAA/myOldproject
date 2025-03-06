class calculator {
    constructor(prevButton, nxtButton) {
        this.prevButton = prevButton;
        this.nxtButton = nxtButton;
        this.allclear();
    }
    delete() {


    }
    allclear() {
        this.nxt = '';
        this.prev = '';
        this.opeation = undefined;

    }
    showdisplay(number) {
        this.prevButton = number;

    }
    chooseop(opeation) {

    }
    compute() {

    }
    updateDisplay() {
        this.prev.innerText = this.prev;

    }


}
const nmbButton = document.querySelectorAll('[data-number]');
const numbop = document.querySelectorAll('[data-opeation]');
const eqButton = document.querySelector('[data-equal]');
const delButton = document.querySelector('[data-del]');
const alcButton = document.querySelector('[data-allc]');
const prevButton = document.querySelector('[data-prev]');
const nxtButton = document.querySelector('[data-next]');

const calculator = new calculator(prevButton, nxtButton)
nmb.forEach(button => {
    button.addEventListener('click', () => {
        calculator.showdisplay(button.innerText)
        calculator.updateDisplay();


    })

});