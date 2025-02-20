class Level {
    enemies;
    endboss;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    levelEndX = 4300;

    /**
     * Defines all the necessary objects/variables for the different levels.
     * @param {array} enemies - number of enemies, big and small chickens
     * @param {array} endboss - endboss
     * @param {array} clouds - clouds
     * @param {array} backgroundObjects - all background objects
     * @param {array} coins - collectable coins
     * @param {array} bottles - collectable bottles
     */
    constructor(enemies, endboss, clouds, backgroundObjects, coins, bottles) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}