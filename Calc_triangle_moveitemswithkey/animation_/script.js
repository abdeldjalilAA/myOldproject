let s = document.querySelector(".mydiv");
let dd = document.getElementById("tess");
dd.addEventListener("click", begin);

function begin() {
    let timer = null;
    let x = 0;
    let y = 0;
    let degress = 0;
    timer = setInterval(frame, 5);

    function frame() {
        if (x >= 200 || y >= 200) {
            clearInterval(timer);
        } else {
            degress += 1;
            s.style.transform = `rotateZ(${degress}deg)`
            x += 1;
            s.style.left = x + "px"
            y += 1;
            s.style.top = y + "px"
        }
    }
}


let canvas = document.getElementById("draw");
let context = canvas.getContext("2d");

// DRAW LIGNE 

// context.lineWidth = 10;
// context.strokeStyle = "red";
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250); //to draw line
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250); //to draw line

// context.stroke();


//DRAW TRIANGLE
// context.strokeStyle = "grey";
// context.fillStyle = "yellow";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);
// context.stroke();
// context.fill();


//DRAW RECTANGLE
// context.fillStyle = "black";
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 0, 250, 250);

// context.fillStyle = "red";
// context.fillRect(0, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 250);

// context.fillStyle = "green";
// context.fillRect(250, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 250, 250, 250);

// context.fillStyle = "blue";
// context.fillRect(250, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 0, 250, 250);


//DRAW CIRCLE
// (x, y, r, sAngle, eAngle, counterclockwise)
// context.fillStyle = "lightblue";
// context.strokeStyle = "darkblue";
// context.lineWidth = 10;
// context.beginPath();
// context.arc(250, 250, 200, 0, 2 * Math.PI);
// context.stroke();
// context.fill();

// //DRAW TEXT
context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);