class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        // running checkss
        console.log('%cPLAY SCENE :^)', testColor)

        cursors = this.input.keyboard.createCursorKeys()

        this.bar = this.add.image(centerX, centerY, 'bar').setOrigin(.5)

        // -------------------------------------- visualizations
        this.customerZoneOne = this.add.rectangle(0, 0, width, height / 3, 0xff0000, .03).setOrigin(0);
        this.customerZoneTwo = this.add.rectangle(0, height / 3, width, height / 3, 0x00ff00, .03).setOrigin(0);
        this.customerZoneThree = this.add.rectangle(0, (height / 3) * 2, width, height / 3, 0x0000ff, .03).setOrigin(0);

        this.cup = new Cup(this, centerX, 0, 'can', 800).setScale(2);

        this.nappy = this.add.image(centerX, centerY, 'rag').setOrigin(.5).setScale(3)

        // -------------------------------------- scrubby inputs

        this.input.on('pointermove', (event) => {
            this.nappy.x = event.x
            this.nappy.y = event.y
        })

        this.input.on('pointerdown', () => {
            console.log('pointerdown')
            this.cup.launch();
        })

        this.customer = new Customer(this, centerX, height - 200).setOrigin(.5)
    }

    update() {
        
    }
}