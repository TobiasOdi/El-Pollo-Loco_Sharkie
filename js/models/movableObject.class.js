class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    energyEndboss = 100;
    coinsColected = 0;
    bottlesColected = 0;
    lastHit = 0;

    offset =  {
        top: 0,
        left: 0,
        right: 0, 
        bottom: 0
    }

    /**
     * Sets the gravity, how fast the objects fall
     */
    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 20);
    }

    /**
     * Checks if an object ist above ground > Throwable objects should alwasys fall
     * @returns 
     */
    isAboveGround() {
        if(this instanceof ThrowableObject) {l
            return true;
        } else {
            return this.y < 175;
        }
    }
    
    loadImage(path) {
        this.img = new Image();    // ist das gleiche wie this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    //character.isColliding(coins, bottles);
    isColliding (mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    //character.isColliding(enemy);
    isCollidingEnemy (mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
        //this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
        this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
        this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    //character.isColliding(enemy top);
    isCollidingTop(mo) {
        return this.y + this.height >= mo.y + mo.offset.top;
    }

    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        } else  {
            this.lastHit = new Date().getTime();
        }
    }

    colectCoins() {
        this.coinsColected += 1;
        if(this.coinsColected >= 10) {
            this.coinsColected = 10;
        }
    }

    colectBottles() {
        this.bottlesColected += 1;
        if(this.bottlesColected >= 10) {
            this.bottlesColected = 10;
        }
    }

    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit; // Differenz in Milisekunden
        timePassed = timePassed / 1000; // Differenz in Sekunden
        return timePassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    die() {
        this.speed = 0;
    }

    flipImage(ctx){
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }

    flipImageBack(ctx){
        this.x = this.x * -1;
        ctx.restore();
    }

    /**
     * Loading images into the imageCache array
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }

}