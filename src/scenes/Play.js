class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        // running checkss
        console.log('%cPLAY SCENE :^)', testColor)

        cursors = this.input.keyboard.createCursorKeys()
        this.bar = this.add.rectangle(width / 3, 0, (width / 3) * 2, height, 0x666666).setOrigin(0);

        // -------------------------------------- visualizations
        this.customerZoneOne = this.add.rectangle(0, 0, width, height / 3, 0xff0000, .25).setOrigin(0);
        this.customerZoneTwo = this.add.rectangle(0, height / 3, width, height / 3, 0x00ff00, .25).setOrigin(0);
        this.customerZoneThree = this.add.rectangle(0, (height / 3) * 2, width, height / 3, 0x0000ff, .25).setOrigin(0);

        this.cup = new Cup(this, centerX, 0, 'can', 800).setScale(2);

        this.nappy = this.add.circle(centerX, centerY, 128/3, 0x668800)

        // -------------------------------------- scrubby inputs

        this.input.on('pointermove', (event) => {
            this.nappy.x = event.x
            this.nappy.y = event.y
        })

        this.input.on('pointerdown', () => {
            console.log('pointerdown')
            this.cup.launch();
        })
    }

    update() {
        
    }
}