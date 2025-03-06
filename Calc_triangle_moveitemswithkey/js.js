// let a;
// let b;
// let c;
// a = window.prompt("enter your A");
// a = Number(a);
// b = window.prompt("enter your B");
// b = Number(b);

// c = Math.sqrt((a ** 2) + (b ** 2));

// alert(`your c is ${c}`);

// ####### Triangle test 

// let value_abu = document.getElementById("sub_c");
// value_abu.onclick = function() {
//     let value_a = document.getElementById("Sa_a").value;
//     a = Number(value_a);
//     let value_b = document.getElementById("Sa_b").value;
//     b = Number(value_b);
//     c = Math.sqrt((a ** 2) + (b ** 2));
//     let value_c = document.getElementById("la3");
//     value_c.innerHTML = `The Side C is ${c}`


// }

// count inc et decr ####### 
// let numb = document.getElementById("num_l");
// Number(numb)
// console.log(numb)
// let c = 0;
// let binc = document.getElementById("inc");
// binc.onclick = function() {
//     c += 1;
//     numb.innerHTML = c;
// }
// let bres = document.getElementById("rest");
// bres.onclick = function() {
//     numb.innerHTML = 0;
// }
// let bdec = document.getElementById("decr");
// bdec.onclick = function() {
//     numb.innerHTML -= 1;
// }


// number generator 
// document.getElementById("check").onclick = function() {

//     let x = Math.floor(Math.random() * 6) + 1
//     let y = Math.floor(Math.random() * 6) + 1
//     let z = Math.floor(Math.random() * 6) + 1


//     document.getElementById("one").innerHTML = x;
//     document.getElementById("two").innerHTML = y;
//     document.getElementById("three").innerHTML = z;

// }

// guessing number 
// let x = Math.floor(Math.random() * 10) + 1;
// let guesses = 0;
// let vel = document.getElementById("answer");
// document.getElementById("btn_answer").onclick = function() {
//     guesses += 1;
//     if (vel.value == x) {
//         alert(`Your make it ${vel.value} is the correct answer your do it from the ${guesses} Try`)
//     } else if (vel.value < x) {
//         alert(`Too small keep guessing`);

//     } else {
//         alert(`Your not lucky `)
//     }
// }

// check ferhnit celius 
// document.getElementById("btn_answer").onclick = function() {
//     let temp;
//     let vall = document.getElementById("answer").value;
//     let cell = document.getElementById("cel");
//     let ferr = document.getElementById("fre");
//     let fe = document.getElementById("answera");


//     if (cell.checked) {
//         let c = Number(vall);
//         temp = tocelius(c);
//         fe.innerHTML = `${temp} C°`

//     } else if (ferr.checked) {
//         let c = Number(vall);
//         temp = toFrhaynt(c);
//         fe.innerHTML = `${temp} F°`

//     }


//     function tocelius(x) {
//         return (x - 32) * (5 / 9);
//     }

//     function toFrhaynt(x) {
//         return x * 9 / 5 + 32;
//     }

// }
// let grade = [20, 50, 90, 40, 150];
// console.log(grade.sort(function(x, y) { return y - x }))

// class car {
//     constructor(name, power) {
//         this._name = 25;
//         this._power = power;

//     }
//     get power() {
//         return `${this._power}ph`
//     }
//     set name(value) { //privete me s writebale
//         if (value < 0) {
//             value = 0;
//         } else if (value > 50) {
//             value = 50;
//         }
//         this._name = value;
//     }
// }
// let carr = new car(-255, 400);
// carr.name = -255;
// console.log(carr)
// console.log(carr._name)
// console.log(carr._power)


// class car {
//     constructor(nama, model, year) {
//         this.nama = nama;
//         this.model = model;
//         this.year = year;
//     }
//     drive() {
//         console.log(`you drive ${this.model}`)
//     }
// }
// let car1 = new car("mustang", "ford", 2020);
// let car2 = new car("mustang", "toyota", 2020);
// let car3 = new car("mustang", "tesla", 2020);
// const carsd = [car1, car2, car3];

// function startRace(carsd) {

//     for (let carss of carsd) {
//         carss.drive();
//     }
// }
// startRace(carsd);

// let x = document.getElementById("ans");

// function test() {

//     let t = new Date();
//     // x.innerHTML = t;
//     let date = t.getHours();
//     let min = t.getMinutes();
//     let sec = t.getSeconds();
//     return x.innerHTML = `${date}: ${min}: ${sec} `
// }
// test();
// setInterval(test, 1000);


let x = document.getElementById("myDiv");

window.addEventListener("keyup", evet);
let n = 0;

let z = 0;


function evet(keyd) {

    switch (keyd.key) {
        case "ArrowUp":
            n -= 5;
            x.style.top = n + "px";

            break;
        case "ArrowDown":
            n += 5;
            x.style.top = n + "px";

            break;
        case "ArrowLeft":
            z -= 5;
            x.style.left = z + "px";

            break;
        case "ArrowRight":
            z += 5;
            x.style.right = z + "px";

            break;


    }
}