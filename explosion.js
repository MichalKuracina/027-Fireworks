class Explosion {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        this.boom();
        this.active = true;
    }

    boom() {
        for (let i = 0; i < 20; i++) {
            let c = random(colorPalette);
            this.particles.push(
                new Particle({
                    velocity: p5.Vector.random2D().mult(random(0.1, 2)),
                    px: this.x,
                    py: this.y,
                    color: {
                        r: c.r,
                        g: c.g,
                        b: c.b,
                        fadeCoefficient: 10,
                    },
                    createdAt: millis(),
                    gravity: random(0.05, 0.1),
                    strokeWeight: random(2, 4),
                }),
            );
        }
    }

    fly() {
        this.particles.forEach((particle) => {
            particle.update();
            particle.show();
        });

        if (this.particles.every((particle) => !particle.active)) {
            this.active = false;
        }
    }
}
