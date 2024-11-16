class Load extends Phaser.Scene {
    constructor() {
        super('LoadScene')
    }

    preload() {
        // basics
        this.load.image('bar', './assets/images/bar-bg.png')
        this.load.image('customer', './assets/images/ugly-hand.png')

        // ui
        this.load.image('success', './assets/images/aww-yeah.png')
        this.load.image('failure', './assets/images/oh-no.png')

        // obstacles
        this.load.image('puddle', './assets/images/puddle.png')
        this.load.image('coaster', './assets/images/coaster.png')
        this.load.image('can', './assets/images/can.png')
        
        // cup
        this.load.image('cup', './assets/images/cup.png')
        this.load.image('cup-spill', './assets/images/cup-spill.png')

        // player/rag
        this.load.image('rag', './assets/images/rag.png')

        // sound
        this.load.audio('clink', './assets/audio/clink.mp3')
        this.load.audio('fail', './assets/audio/fail.mp3')
        this.load.audio('srape', './assets/audio/scrape.mp3')
        this.load.audio('squeak-1', './assets/audio/squeak-1.mp3')
        this.load.audio('squeak-2', './assets/audio/squeak-2.mp3')
        this.load.audio('thank-you-1', './assets/audio/thank-you-1.mp3')
        this.load.audio('thank-you-2', './assets/audio/thank-you-2.mp3')
    }

    create() {
        // running checks
        console.log('%cLOAD SCENE :^)', testColor)
        console.log('pepe poopoo');
        // moving through
        this.scene.start('playScene')
    }
}