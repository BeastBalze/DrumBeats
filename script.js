var audioBoom = document.getElementById('audio-boom');
var audioClap = document.getElementById('audio-clap');
var audioHihat = document.getElementById('audio-hihat');
var audioKick = document.getElementById('audio-kick');
var audioOpenhat = document.getElementById('audio-openhat');
var audioRide = document.getElementById('audio-ride');
var audioSnare = document.getElementById('audio-snare');
var audioTink = document.getElementById('audio-tink');
var audioTom = document.getElementById('audio-tom');

var a = document.getElementById('boom');
a.onclick = function () {
    audioBoom.play();
}

var b = document.getElementById('clap');
b.onclick = function () {
    audioClap.play();
}

var c = document.getElementById('hihat');
c.onclick = function () {
    audioHihat.play();
}

var d = document.getElementById('kick');
d.onclick = function () {
    audioKick.play();
}

var e = document.getElementById('openhat');
e.onclick = function () {
    audioOpenhat.play();
}

var f = document.getElementById('ride');
f.onclick = function () {
    audioRide.play();
}

var g = document.getElementById('snare');
g.onclick = function () {
    audioSnare.play();
}

var h = document.getElementById('tink');
h.onclick = function () {
    audioTink.play();
}

var i = document.getElementById('tom');
i.onclick = function () {
    audioTom.play();
}

var sampleKeycode = [65, 83, 68, 70, 71, 72, 74, 75, 76];
document.body.addEventListener('keydown', function(event1) {
    var keyCode = event1.keyCode;
    if (keyCode === sampleKeycode[0]) {
        audioBoom.play();
        a.style.boxShadow = 'inset 2px 2px 30px 8px rgb(255, 181, 43)';
        document.body.addEventListener('keyup', function () {
            a.style.boxShadow = "none"
        })
    }

    else if (keyCode === sampleKeycode[1]) {
        audioClap.play();
        b.style.boxShadow = 'inset 2px 2px 30px 8px rgb(255, 181, 43)';
        document.body.addEventListener('keyup', function () {
            b.style.boxShadow = "none"
        })
    }

    else if (keyCode === sampleKeycode[2]) {
        audioHihat.play();
        c.style.boxShadow = 'inset 2px 2px 30px 8px rgb(255, 181, 43)';
        document.body.addEventListener('keyup', function () {
            c.style.boxShadow = "none"
        })
    }

    else if (keyCode === sampleKeycode[3]) {
        audioKick.play();
        d.style.boxShadow = 'inset 2px 2px 30px 8px rgb(255, 181, 43)';
        document.body.addEventListener('keyup', function () {
            d.style.boxShadow = "none"
        })
    }

    else if (keyCode === sampleKeycode[4]) {
        audioOpenhat.play();
        e.style.boxShadow = 'inset 2px 2px 30px 8px rgb(255, 181, 43)';
        document.body.addEventListener('keyup', function () {
            e.style.boxShadow = "none"
        })
    }

    else if (keyCode === sampleKeycode[5]) {
        audioRide.play();
        f.style.boxShadow = 'inset 2px 2px 30px 8px rgb(255, 181, 43)';
        document.body.addEventListener('keyup', function () {
            f.style.boxShadow = "none"
        })
    }

    else if (keyCode === sampleKeycode[6]) {
        audioSnare.play();
        g.style.boxShadow = 'inset 2px 2px 30px 8px rgb(255, 181, 43)';
        document.body.addEventListener('keyup', function () {
            g.style.boxShadow = "none"
        })
    }

    else if (keyCode === sampleKeycode[7]) {
        audioTink.play();
        h.style.boxShadow = 'inset 2px 2px 30px 8px rgb(255, 181, 43)';
        document.body.addEventListener('keyup', function () {
            h.style.boxShadow = "none"
        })
    }

    else if (keyCode === sampleKeycode[8]) {
        audioTom.play();
        i.style.boxShadow = 'inset 2px 2px 30px 8px rgb(255, 181, 43)';
        document.body.addEventListener('keyup', function () {
            i.style.boxShadow = "none"
        })
    }
})

var soundBoxTitle = ['boomLetter', 'clapLetter','hihatLetter' ,'kickLetter' ,'openhatLetter' ,'rideLetter' ,'snareLetter' ,'tinkLetter' ,'tomLetter'];

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

btn1.onclick = function () {
    for (let i = 0; i < soundBoxTitle.length; i++) {
        let temp1 = document.getElementById(soundBoxTitle[i])
        temp1.classList.add('hide');
    }
}

btn2.onclick = function () {
    for (let i = 0; i < soundBoxTitle.length; i++) {
        let temp1 = document.getElementById(soundBoxTitle[i])
        temp1.classList.remove('hide');
    }
}

var sampleInput = ['boom','clap','hihat','kick','openhat','ride','snare','tink','tom'];
var alphabates = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var soundInput = document.getElementById('sound');
var soundInputValue;
var indexOfsound
soundInput.addEventListener('change', function (event2) {
    soundInputValue = event2.target.value.toLowerCase();
    indexOfsound = sampleInput.indexOf(event2.target.value.toLowerCase());
})

var charInput = document.getElementById('char');
var charInputValue;
var indexOfchar
charInput.addEventListener('change', function (event3) {
    charInputValue = event3.target.value.toUpperCase()
    indexOfchar = alphabates.indexOf(event3.target.value.toUpperCase());
})

var submit = document.getElementById('submit');
submit.onclick = function () {
    if (sampleInput.includes(soundInputValue) && alphabates.includes(charInputValue)) {
        sampleKeycode[indexOfsound] = 65 + indexOfchar;
        var temp2 = document.getElementById(soundBoxTitle[indexOfsound]);
        temp2.innerHTML = charInputValue.toUpperCase();
        let formCont = document.getElementById("formCont");
        formCont.classList.add('forms-cont-hide');
        navIcon.innerHTML = `<i class="fas fa-bars"></i>`;
    }
    else alert("Invalid input");
}

var navIcon = document.getElementById('nav-icon');
navIcon.onclick = function () {
    let formCont = document.getElementById("formCont");
    if (formCont.classList.contains('forms-cont-hide')) {
        formCont.classList.remove('forms-cont-hide');
        navIcon.innerHTML = `<i class="fas fa-angle-double-left"></i>`;
    }
    else {
        formCont.classList.add('forms-cont-hide');
        navIcon.innerHTML = `<i class="fas fa-bars"></i>`;
    }
}




