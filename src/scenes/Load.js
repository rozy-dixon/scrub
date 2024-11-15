class Load extends Phaser.Scene {
    constructor() {
        super('LoadScene')
    }

    preload() {
        // loading bar
        this.load.image('bar', './assets/images/bar-bg.png')
        this.load.image('customer', './assets/images/ugly-hand.png')

        // ui
        this.load.image('success', './assets/images/aww-yeah.png')
        this.load.image('failure', './assets/images/oh-no.png')

        // obstacles
        this.load.image('puddle', './assets/images/puddle.png')
        this.load.image('coaster', './assets/images/coaster.png')
        
        // cup
        this.load.image('cup', './assets/images/cup.png')
        this.load.image('cup-spill', './assets/images/cup-spill.png')

        // player/rag
        this.load.image('rag', './assets/images/rag.png')
    }

    create() {
        // running checks
        console.log('%cLOAD SCENE :^)', testColor)
        // moving through
        this.scene.start('playScene')
    }
}