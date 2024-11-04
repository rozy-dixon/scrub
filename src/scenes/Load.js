class Load extends Phaser.Scene {
    constructor() {
        super('LoadScene')
    }

    preload() {
        // loading bar
    }

    create() {
        // running checks
        console.log('%cLOAD SCENE :^)', testColor)
        console.log('pepe poopoo');
        // moving through
        this.scene.start('playScene')
    }
}