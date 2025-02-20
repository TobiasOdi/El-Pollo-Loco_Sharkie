class Coins extends MovableObject {
    x = 50;
    y = 50;
    height = 100;
    width = 100;

    imagesCoin = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/8_coin/coin_1.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/8_coin/coin_2.png'
    ];

    offset =  {
        top: 50,
        left: 50,
        right: 50, 
        bottom: 50
    }

    /**
     * This function loads the collectable coins and sets the coordinates for there placement on the canvas
     */
    constructor() {
        super().loadImage('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/8_coin/coin_1.png');
        this.loadImages(this.imagesCoin);
        this.x = 300 + Math.random() * 4000;
        this.y = 150 + Math.random() * 160;
        this.animate();
    }

    /**
     * This function animates the collectable coins
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesCoin);
        }, 200);
    }
}