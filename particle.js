class Particle {
    constructor(params) {
        this.position = createVector(params.px, params.py);
        this.velocity = params.velocity;
        this.acceleration = createVector(0, 0);
        this.active = true;
        this.color = params.color;
        this.alpha = 255;
        this.createdAt = params.createdAt;
        this.gravity = params.gravity;
        this.strokeWeight = params.strokeWeight;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        // Apply gravity
        this.acceleration.add(createVector(0, this.gravity));
    }

    show() {
        if (millis() - this.createdAt > 500) {
            this.alpha = this.alpha - this.color.fadeCoefficient;
            if (this.alpha <= 0) {
                this.active = false;
            }
        }
        stroke(color(this.color.r, this.color.g, this.color.b, this.alpha));
        strokeWeight(this.strokeWeight);
        point(this.position.x, this.position.y);
    }
}
