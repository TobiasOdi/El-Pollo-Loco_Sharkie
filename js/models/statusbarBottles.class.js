class StatusbarBottles extends DrawableObject {

    images = [
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'
    ];

    percentage = 0;

    constructor() {
        super();  // Methoden vom übergeordneten Objekt werden so initialisiert!
        this.loadImages(this.images);
        this.x = 20;
        this.y = 80;
        this.height = 60;
        this.width = 200;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage; // => 0 .. 5
        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path]; // jeweiliges Bild aus dem Bilder Cache laden
    }

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

