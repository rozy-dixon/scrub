class Load extends Phaser.Scene {
    constructor() {
        super('LoadScene')
    }

    preload() {
        // loading bar
        this.load.image('can', './assets/images/can.png');
    }

    create() {
        // running checks
        console.log('%cLOAD SCENE :^)', testColor)
        console.log('pepe poopoo');
        
        // moving through
        this.scene.start('playScene')
    }
}