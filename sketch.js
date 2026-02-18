let lastTime = 0;

let carAnimation = { lightsTimer: 0, lightsOn: false };
let angryAnimation = { handShakeTimer: 0, handShaking: false };

let tails = [];
let explosions = [];
const colorPalette = [
    { r: 255, g: 255, b: 255 }, // white
    { r: 0, g: 0, b: 255 }, //blue
    { r: 255, g: 0, b: 0 }, // red
    { r: 255, g: 255, b: 0 }, // yellow
    { r: 0, g: 255, b: 0 }, // green
];

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(50, 60, 80, 95);

    drawBackground();
    drawCar();
    drawTails();

    drawExplosions();
}

function drawExplosions() {
    // if (millis() - lastTime > 1000) {
    //     explosions.push(new Explosion(width / 2, height / 2));
    //     lastTime = millis();
    // }

    explosions.forEach((explosion) => {
        explosion.fly();
    });

    explosions = explosions.filter((explosion) => explosion.active);
}

function drawTails() {
    if (millis() - lastTime > 1000) {
        tails.push(new Tail(285, 530, random(colorPalette)));
        lastTime = millis();
    }

    tails.forEach((tail) => {
        tail.fly();
    });

    tails = tails.filter((tail) => tail.particle.active);
}

function mousePressed() {
    console.log(mouseX, mouseY);
}

function drawBackground() {
    //ground
    noStroke();
    fill(20, 30, 50);
    rect(0, height - 50, width, height - 50);

    //stars
    stroke(199, 184, 26);
    strokeWeight(random(1, 3));
    point(68, 30);
    point(126, 92);
    point(375, 58);
    point(526, 55);
    point(536, 262);
    point(425, 190);
    point(303, 225);
    point(303, 375);
    point(525, 402);

    // building
    fill(102, 94, 13);
    noStroke();
    rect(0, 150, 220, height - 200);
    // windows
    noStroke();
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 4; j++) {
            if (i === 1 && j === 2) {
                fill(230, 219, 115);
            } else {
                fill(115, 111, 73);
            }
            rect(20 + j * 50, 200 + i * 70, 30, 40);
        }
    }

    // box
    fill(84, 13, 42);
    rect(285, 535, 5, 15, 5, 5, 0, 0);
}

function drawCar() {
    // car body
    fill(26, 39, 97);
    rect(435, 515, 100, 30, 5, 5);
    // Car roof
    rect(460, 495, 50, 25, 5, 5);
    // windows
    fill(57, 76, 163);
    rect(465, 500, 40, 15, 3, 3);

    // wheels
    fill(0);
    ellipse(460, 540, 20);
    ellipse(510, 540, 20);
    fill(26, 39, 97);
    ellipse(460, 540, 10);
    ellipse(510, 540, 10);

    // lights
    if (millis() - carAnimation.lightsTimer > 1000) {
        carAnimation.lightsOn = !carAnimation.lightsOn;
        carAnimation.lightsTimer = millis();
    }

    if (carAnimation.lightsOn) {
        fill(250, 0, 0); // bright red
        rect(525, 520, 10, 7);
        fill(250, 250, 182); // bright yellow
        rect(435, 520, 10, 7);
        rect(455, 520, 5, 5);
    } else {
        fill(150, 53, 53); //  red
        rect(525, 520, 10, 7);

        fill(105, 105, 40); //  yellow
        rect(435, 520, 10, 7);
        rect(455, 520, 5, 5);
    }

    // person
    fill(20);
    noStroke();
    ellipse(131, 284, 15);

    stroke(0);
    strokeWeight(4);
    line(131, 291, 131, 308);

    line(131, 295, 120, 292); //left arm

    if (millis() - angryAnimation.handShakeTimer > 150) {
        angryAnimation.handShaking = !angryAnimation.handShaking;
        angryAnimation.handShakeTimer = millis();
    }

    if (angryAnimation.handShaking) {
        line(143, 295, 146, 290);
    } else {
        line(143, 295, 143, 290);
    }
    line(131, 295, 143, 295);

    // person 2
    fill(20);
    noStroke();
    ellipse(346, 514, 15);
    // rect(343, 521, 5, 19, 3, 3);
    stroke(0);
    strokeWeight(3);
    line(346, 521, 346, 538);
    line(346, 538, 340, 550);
    line(346, 538, 352, 550);
    line(346, 525, 340, 540);
    line(346, 525, 352, 540);

    // moon
    fill(189, 188, 132);
    noStroke();
    ellipse(500, 100, 80);

    // cloud
    fill(200, 200, 200, 150);
    noStroke();
    ellipse(480, 120, 100, 60);
    ellipse(530, 100, 80, 40);
    ellipse(350, 60, 70, 30);
    ellipse(300, 70, 80, 45);
}
