class StatusbarCoins extends DrawableObject {

    images = [
        './img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png'
    ];

    percentage = 0;

    /**
     * This function loads and positions the statusbar for the collectable coins on the canvas.
     */
    constructor() {
        super();  // Methoden vom übergeordneten Objekt werden so initialisiert!
        this.loadImages(this.images);
        this.x = 20;
        this.y = 40;
        this.height = 60;
        this.width = 200;
        this.setPercentage(0);
    }

    /**
     * Sets the path to the correct image an loads it to the image cache
     * @param {number} percentage - number of collected coins
     */
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 .. 5
        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path]; // jeweiliges Bild aus dem Bilder Cache laden
    }

    /**
     * Returns the the index for the path of the correct image.
     * @returns 
     */
    resolveImageIndex() {
        if(this.percentage == 0) {
            return 0;
        } else if(this.percentage <= 2) {
            return 1;
        } else if(this.percentage <= 4) {
            return 2;
        } else if(this.percentage <= 6) {
            return 3;
        } else if(this.percentage <= 8) {
            return 4;
        } else {
            return 5;
        }
    }
}