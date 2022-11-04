let apple = document.getElementById("manzana");
let carrot = document.getElementById("zanahoria");
let mango = document.getElementById("mango");
let peach = document.getElementById("melocotón");
let grapes = document.getElementById("uvas");
let pineapple = document.getElementById("piña");

let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'es';
recognition.interimresults = false;

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const button = document.getElementById("speakButton");

const speakMessage = () => {
    if(button.innerHTML === "Speak"){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        recognition.start();

        button.innerHTML = "Stop";
    } else if (button.innerHTML === "Stop"){
        recognition.stop();
        button.innerHTML = "Speak";
    }
}

const speak = (text) => {
    const utterance  = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
};

recognition.onresult = function(event){
    let message = event.results[0][0].transcript;
    if(message === "manzana"){
        ctx.drawImage(apple,0,0,300,200);

    } else if(message === "zanahoria"){
        ctx.drawImage(carrot,0,0,300,200);

    } else if(message === "mango"){
        ctx.drawImage(mango,0,0,300,200);

    } else if(message === "melocotón"){
        ctx.drawImage(peach,0,0,300,200);

    } else if(message === "uvas"){
        ctx.drawImage(grapes,0,0,300,200);

    } else if(message === "piña"){
        ctx.drawImage(pineapple,0,0,300,200);

    } 

    else if (message === "help"){
        speak("Say the name of the object in Spanish to see the object on the screen.")
    } else {
        ctx.font = 'bold 28px sans-serif';
        ctx.fillText('Unknown', 70, 50);

        ctx.font = 'bold 12px sans-serif';
        ctx.fillText("You said: " + event.results[0][0].transcript, 70, 110);
    }
    console.log("You said: ",event.results[0][0].transcript);
}
