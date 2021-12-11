// Typing

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};

/// Drawers

var contactSection = document.getElementById('contactSection');
var aboutSection = document.getElementById('aboutSection');
var main = document.getElementById('main');
var contactToggled = true;
var aboutToggled = true;
var mainToggled = false;

document.getElementById('contact').onclick = function () {
    if (contactToggled == false) {
        contactSection.classList.toggle('nofade');
        contactSection.classList.toggle('fade');
        if (mainToggled == true && aboutToggled == true) {
            mainToggled = false;
            console.log(mainToggled);
            main.classList.toggle('fade');
            main.classList.toggle('nofade');
        }
        contactToggled = true;
        console.log("Fading out contact section");
    }
    else if (contactToggled == true) {
        contactSection.classList.toggle('fade');
        contactSection.classList.toggle('nofade');
        if (mainToggled == false) {
            mainToggled = true;
            main.classList.toggle('nofade');
            main.classList.toggle('fade');
        }
        contactToggled = false;
        console.log("Fading in contact section");
    }
};

document.getElementById('about').onclick = function () {
    if (aboutToggled == false) {
        aboutSection.classList.toggle('nofade');
        aboutSection.classList.toggle('fade');
        if (mainToggled == true && contactToggled == true) {
            mainToggled = false;
            console.log(mainToggled);
            main.classList.toggle('fade');
            main.classList.toggle('nofade');
        }
        aboutToggled = true;
        console.log("Fading out about section");
    }
    else if (aboutToggled == true) {
        if (mainToggled == false) {
            mainToggled = true;
            console.log(mainToggled);
            main.classList.toggle('nofade');
            main.classList.toggle('fade');
        }
        aboutSection.classList.toggle('fade');
        aboutSection.classList.toggle('nofade');
        aboutToggled = false;
        console.log("Fading in about section");
    }
};