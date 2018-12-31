var C = 0;
var S = 1;
var D = 2;
var H = 3;

var c = 0;
var s = 1;
var d = 2;
var h = 3;

var J = 11;
var Q = 12;
var K = 13;
var A = 14;

var j = 11;
var q = 12;
var k = 13;
var a = 14;

var yes = 1;
var no = 0;

var cards = [];
var cardSpades = [];
var cardHearts = [];

var me = [];

var chips = 240;

var mycard = [];
var mysuit = [];

var clicked = [];
var dealer;
var buttons = [];

function preload() {
    var cardw = 80;
    var cardh = cardw * 1.5;
    for (var i = 0; i <= 12; i++) {
        cardSpades[i] = loadImage('images/' + (i + 2) + 's.png');
    }
    for (var i = 0; i <= 12; i++) {
        cardHearts[i] = loadImage('images/' + (i + 2) + 'h.png');
    }
    dealer = loadImage('images/dealer.png');
    for (var i = 0; i <= 12; i++) {
        cards.push(new Card(cardSpades[i], (cardw * 1.1) * i + cardw / 2, cardh/2, cardw, cardh, i + 2, s));
    }
    for (var i = 0; i <= 12; i++) {
        cards.push(new Card(cardHearts[i], (cardw * 1.1) * i + cardw / 2, cardh * 1.6, cardw, cardh, i + 2, h));
    }
    buttons.push(new Button(dealer, 200, 350, 150, 150));
}
function setup() {
    createCanvas(1150, 600);
    me.push(new Me(a, s, a, h, -1));
}
function draw() {
    background(50);
    me[0].card1 = mycard[0];
    me[0].card2 = mycard[1];
    me[0].suit1 = mysuit[0];
    me[0].suit2 = mysuit[1];


    for (var i = 0; i < 26; i++) {
        cards[i].display();
    }
    me[0].action();
    buttons[0].display();


    if (me[0].allin == true) {
        textSize(60);
        text("All In", width/2 - 100, height/2 + 100);
    }
    else if (me[0].third == true) {
        textSize(60);
        text(int(chips / 3), width/2 - 140, height/2 + 100);
    }
    else {
        textSize(60);
        text("Fold", width/2 - 50, height/2 + 100);
    }
    textSize(40);
    text("Chips: " + chips, width/2 + 300, height/2 + 20);
}
function Me (card1, suit1, card2, suit2, button) {
    this.card1 = card1;
    this.suit1 = suit1;
    this.card2 = card2;
    this.suit2 = suit2;
    this.button = button;
    this.allin;
    this.third;

    this.action = function() {
        if (this.button > 0) {
            if (this.card1 == this.card2 && this.card1 > 3) {
                this.allin = true;
                this.third = false;
            }
            else if (this.card1 >= 10 && this.card2 >= 10) {
                this.allin = true;
                this.third = false;
            }
            else if (this.card1 == 14 && this.suit1 == this.suit2) {
                this.allin = true;
                this.third = false;
            }
            else if (this.card2 == 14 && this.suit1 == this.suit2) {
                this.allin = true;
                this.third = false;
            }
            else if (this.card1 == 14 && this.card2 >= 5) {
                this.allin = true;
                this.third = false;
            }
            else if (this.card2 == 14 && this.card1 >= 5) {
                this.allin = true;
                this.third = false;
            }
            else if (this.card1 == 13 && this.card2 >= 7) {
                this.allin = true;
                this.third = false;
            }
            else if (this.card2 == 13 && this.card1 >= 7) {
                this.allin = true;
                this.third = false;
            }
            else if (this.suit1 == this.suit2) {
                if (this.card1 == 12 && this.card2 == 9) {
                    this.allin = true;
                    this.third = false;
                }
                else if (this.card1 == 9 && this.card2 == 12) {
                    this.allin = true;
                    this.third = false;
                }
            }
            else {
                this.allin = false;
                this.third = false;

        }
    }
    else if (this.button < 0) {
        if (this.card1 == this.card2) {
            if (this.card1 >= 13) {
                this.third = true;
                this.allin = false;
            }
            if (this.card1 < 13) {
                if (this.card1 > 7) {
                    this.allin = true;
                    this.third = false;
                }
                else if (this.card1 > 3) {
                    this.third = true;
                    this.allin = false;
                }
            }
        }
        else if (this.card1 == 14 && this.card2 == 13) {
            this.allin = true;
            this.third = false;
        }
        else if (this.card1 == 13 && this.card2 == 14) {
            this.allin = true;
            this.third = false;
        }
        else if (this.card1 == 14 && this.card2 == 12) {
            this.allin = true;
            this.third = false;
        }
        else if (this.card1 == 12 && this.card2 == 14) {
            this.allin = true;
            this.third = false;
        }
        else{
            if (this.card1 == this.card2 && this.card1 > 3) {
                this.third = true;
                this.allin = false;
            }
            else if (this.card1 >= 10 && this.card2 >= 10) {
                this.third = true;
                this.allin = false;
            }
            else if (this.card1 == 14 && this.suit1 == this.suit2) {
                this.third = true;
                this.allin = false;
            }
            else if (this.card2 == 14 && this.suit1 == this.suit2) {
                this.third = true;
                this.allin = false;
            }
            else if (this.card1 == 14 && this.card2 >= 5) {
                this.third = true;
                this.allin = false;
            }
            else if (this.card2 == 14 && this.card1 >= 5) {
                this.third = true;
                this.allin = false;
            }
            else if (this.card1 == 13 && this.card2 >= 7) {
                this.third = true;
                this.allin = false;
            }
            else if (this.card2 == 13 && this.card1 >= 7) {
               this.third = true;
                this.allin = false;
            }
            else if (this.suit1 == this.suit2) {
                if (this.card1 == 12 && this.card2 == 9) {
                    this.third = true;
                    this.allin = false;
                }
                else if (this.card1 == 9 && this.card2 == 12) {
                    this.third = true;
                    this.allin = false;
                }
            }
            else {
                this.third = false;
                this.allin = false;

        }
        }
    }
}
}
function Card(img, x, y, w, h, card, suit) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.card = card;
    this.suit = suit;
    this.pressed = -1;
    this.img = img;

    this.display = function() {
        imageMode(CENTER);
        noTint();
        if (this.pressed == 1) {
            tint(0, 0, 255);
        }
        image(this.img, this.x, this.y, this.w, this.h);
    }
}
function mousePressed() {
    for (var i = 0; i < 26; i++) {
        if (mouseX > cards[i].x - cards[i].w / 2 && mouseX < cards[i].x + cards[i].w / 2) {
            if (mouseY > cards[i].y - cards[i].h / 2 && mouseY < cards[i].y + cards[i].h / 2) {
                cards[i].pressed *= -1;
                if (mycard.length < 2) {
                    mycard.push(cards[i].card);
                    mysuit.push(cards[i].suit);
                }
                else if (mycard.length >= 2) {
                    for (var j = 0; j < cards.length; j++) {
                        cards[j].pressed = -1;
                    }
                    mycard.splice(0, mycard.length);
                    mysuit.splice(0, mysuit.length);
                    mycard.push(cards[i].card);
                    mysuit.push(cards[i].suit);
                    cards[i].pressed *= -1;
                }
               }
        }
    }
    if (dist(mouseX, mouseY, buttons[0].x, buttons[0].y) < buttons[0].w / 2) {
        buttons[0].pressed *= -1;
        me[0].button *= -1;
    }
}
function Button(img, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.pressed = -1;
    this.display = function() {
        imageMode(CENTER);
        noTint();
        if (this.pressed == 1) {
            tint(255, 0, 0);
        }
        image(this.img, this.x, this.y, this.w, this.h);
    }
}
function mouseWheel(event) {
    chips -= event.delta / 10;
}
