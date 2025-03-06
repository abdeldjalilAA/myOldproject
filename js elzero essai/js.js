let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ * a + --a - +true);


let d = "-100";
let f = 30;
let e = "20";
let g = true;
console.log(-d * e);
// console.log(-d * ++g - f++ + ++g);
console.log(++e * ++g + -d + ++f);


let aa = 100;
let bb = 200.5;
let cc = 1e2;
let dd = 2.4;

console.log(Math.min(aa, Math.floor(dd), cc, Math.floor(bb)));
console.log(Math.pow(aa, Math.floor(dd)));
console.log(parseInt(dd));

console.log(Math.floor(dd));
console.log(Math.ceil(dd));
console.log(Math.round(dd));
console.log(Math.trunc(dd));
console.log((Math.trunc(bb) / (Math.ceil(dd))).toFixed(2));
console.log(Math.ceil(Math.trunc(bb) / (Math.ceil(dd))));

let ss = "Elzero Web School";
console.log(ss.charAt(2).toUpperCase() + ss.slice(3, 6));
console.log(ss.split(" ", 1));
console.log(ss.substr(0, 6) + " " + ss.substring(11, ss.length));
console.log(ss.charAt(13).toUpperCase().repeat(8));
console.log(ss.charAt(0).toLowerCase() + ss.substring(1, ss.length - 1).toUpperCase() + ss.charAt(ss.length - 1).toLowerCase());