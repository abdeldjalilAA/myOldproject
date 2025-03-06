let chosen = 3;
let myFriends = [
    { title: "Ossama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] }

];
if (chosen === 1) {
    const [{ title: t, age: a, available: av, skills: [, a2] }, , ] = myFriends;
    console.log(`${t}`);
    console.log(`${a}`);
    if (av == true) {
        console.log("Available");
    } else {
        console.log("Not Available");

    }

    console.log(a2);

} else if (chosen === 2) {
    const [, { title: t, age: a, available: av, skills: [, a2] }, ] = myFriends;
    console.log(`${t}`);
    console.log(`${a}`);
    if (av == true) {
        console.log("Available");
    } else {
        console.log("Not Available");

    }

    console.log(a2);
} else {
    const [, , { title: t, age: a, available: av, skills: [, a2] }] = myFriends;
    console.log(`${t}`);
    console.log(`${a}`);
    if (av == true) {
        console.log("Available");
    } else {
        console.log("Not Available");

    }

    console.log(a2);
}
let nbvv = new Set([1, 1, 1, 1, 1, 2, 2, 2, 25, 55, 5, 5, 5, ])
console.log(nbvv);
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];


console.log(Math.max(...n2) * [...n1, ...n2].length);
console.log(new Set(n1).size * [...n1, ...n2].length * Math.min(...n1));
// console.log(n1.reduce(function(e, a) {
//     return e + a;
// }) * d.size);

// 210

let ted = "org io com info sa";
let tld = /org|info|sa/ig;
console.log(ted.match(tld));

let practice = "AaBbcdefG123!234%^&*";
let pracReg = /os[5-9]s/ig;
console.log(practice.match(pracReg));


let url1 = "elzero.org";
let url2 = "http://www.elzero.org";
let url3 = "https://www.elzero.org";
let url4 = "https://elzero.org";
let url5 = "https://www.elzero.net";
let url6 = "https://www.elzero.org:880.gt";

let regs = /(https?:\/\/)?(www.)?\w+.\w{2,}(:\w*.\w*)?/ig;
console.log(url1.match(regs));
console.log(url2.match(regs));
console.log(url3.match(regs));
console.log(url4.match(regs));
console.log(url5.match(regs));
console.log(url6.match(regs));




// class user {


//     // #
//     // privateField;

//     constructor(id, user, name, salary) {
//         // dsddz


//         this.i = id;
//         this.n = user;
//         this.d = name;
//         // this.ss = salary;
//         this.#privateField = salary;
//     }
//     get() {
//         return parseInt(this.#privateField);
//     }
// }
// let n = new user(11, "ahmed", "eeeee", 50000);
// console.log(n)


// class names extends user {
//     constructor(id, name, dmit) {
//         super(id, , name);
//         this.s = dmit;
//     }
// }

// let u = new names(11, "ahee", 455);
// console.log(u);

// class udd extends names {
//     constructor(id, salary, sss) {
//         super(id, salary);
//         this.ss = sss;

//     }
// }
// let i = new udd(1111, "eee", 1212);
// console.log(i);
// var array1 = [true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true
// ];

// let hhh = array1.map((e) => {
//     if (e == true) {
//         let i = 0;
//         return i++;
//     }
// })
// console.log(hhh)

// let oo = {
//     a: 0,
//     b: 2,
// };
// Object.defineProperty(oo, "c", {
//     writable: false,
//     enumerable: true,
//     configurable: true,
//     value: 3,
// });
// oo.c = 100;
// for (let prop in oo) {
//     console.log(prop, oo[prop]);
// }
// console.log(oo)
// let datee = new Date();
// console.log(datee)


// const myp = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("we are the good one");
//     }, 1000);
// });

// async function get() {
//     console.log("hi 1");
//     try {
//         console.log(await myp);
//     } catch (error) {
//         console.log(`errrr ${ error }`);
//     } finally { console.log("eeee"); }


// };

// get();



let aaaaa = [0, 0, 25, 55, 6];
let maa = aaaaa.reduce((a, b) => { return a + b });
console.log(maa);
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// you can use , space , true = 1 , one time only this code 
//  you cannot  use  numbers letters all in one chain  resultat elzero web scholl
let SREE = myString.split(",").filter(function(ele) {
    return isNaN(parseInt(ele))
}).map(function(ele) {
    return ele.length != Math.pow(ele.length, false) ? ele.split("").shift("") : ele;
}).slice(false, -true).reduce(function(ac, cr) {
    return cr === "_" ? `${ac} ` : ac + cr
});
console.log(SREE);