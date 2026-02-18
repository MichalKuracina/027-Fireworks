class Tail {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particle = new Particle({
            velocity: createVector(random(-2, 2), random(-6, -10)),
            px: this.x,
            py: this.y,
            color: {
                r: 255,
                g: 255,
                b: 0,
                fadeCoefficient: 0,
            },
            createdAt: millis(),
            gravity: 0.1,
            strokeWeight: 4,
        });
    }

    fly() {
        this.particle.update();
        this.particle.show();

        if (this.particle.velocity.y >= 0) {
            this.particle.active = false;
            explosions.push(
                new Explosion(
                    this.particle.position.x,
                    this.particle.position.y,
                ),
            );
        }
    }
}
