class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    init(){
        this.SUCCESS_MAX_VELOCITY = 100;

        this.THANK_YOUS = [ 'thank-you-1', 'thank-you-2' ]
    }

    create() {
        // running checks
        console.log('%cPLAY SCENE :^)', testColor)

        cursors = this.input.keyboard.createCursorKeys()

        this.bar = this.add.image(centerX, centerY, 'bar').setOrigin(.5)

        // -------------------------------------- visualizations
        this.customerZoneOne = this.add.rectangle(0, 0, width, height / 3, 0xff0000, .03).setOrigin(0);
        this.customerZoneTwo = this.add.rectangle(0, height / 3, width, height / 3, 0x00ff00, .03).setOrigin(0);
        this.customerZoneThree = this.add.rectangle(0, (height / 3) * 2, width, height / 3, 0x0000ff, .03).setOrigin(0);

        this.cup = new Cup(this, centerX, 100, 'cup', 500)

        this.nappy = this.add.image(centerX, centerY, 'rag').setOrigin(.5).setScale(3).setInteractive({ draggable: true })

        // -------------------------------------- scrubby inputs
        this.input.on('pointermove', (event) => {
            this.nappy.x = event.x
            this.nappy.y = event.y
        })

        this.input.on('pointerdown', () => {
            this.cup.launch();
        })
        
        this.customer = new Customer(this, centerX - 250, height - 200).setOrigin(0.5)

        this.physics.add.collider(this.cup, this.customer);
        this.physics.world.on('collide', this.evaluateToss, this);
        
        this.lastMouseX = this.input.mousePointer.x;
        this.lastMouseTime = this.time.now;

        this.uiDisplay = false;
    }

    evaluateToss(cup, customer){
        // if cup velocity in successful range, stop it, show aww yea, despawn both things
        // else, create spill,
        if (this.uiDisplay) return;

        if (Math.abs(cup.body.velocity.y) < this.SUCCESS_MAX_VELOCITY) {
            this.displaySuccess(cup, customer)
        } else {
            this.displayFail(cup, customer)
        }
    }

    displaySuccess(cup, element) {
        this.uiDisplay = true;
        cup.body.setVelocityY(0);
        let soundfx = this.sound.add(this.THANK_YOUS[Math.floor(Math.random() * 2)]);
        soundfx.play();
        let popup = this.add.image(element.body.x, element.y, 'success').setOrigin(0, .5);
        soundfx.once('complete', () => {
            this.uiDisplay = false;
            popup.destroy();
            this.resetCup(cup);
        });
    }

    displayFail(cup, element) {
        this.uiDisplay = true;
        let soundfx = this.sound.add('fail');
        soundfx.play();
        let popup = this.add.image(element.body.x, element.y, 'failure').setOrigin(0, .5);
        soundfx.once('complete', () => {
            this.uiDisplay = false;
            popup.destroy();
            this.resetCup(cup);
        });
    }

    getCursorSpeed(pointer) {
        // src = https://chatgpt.com/share/673816a6-5498-800d-812f-943c45542a0b
        let currentMouseX = pointer.x;
        let currentTime = this.time.now;

        let deltaTime = currentTime - this.lastMouseTime;

        if (deltaTime > 100) {
            let deltaX = currentMouseX - this.lastMouseX;
            this.lastMouseX = currentMouseX;
            this.lastMouseTime = currentTime;

            if (deltaTime > 0) {
                this.lastSpeed = Math.abs(deltaX / deltaTime);

                if (this.lastSpeed < 1) {
                    this.lastSpeed = 1;
                }
            }
        }

        return this.lastSpeed || 1;
    }

    resetCup(cup) {
        cup.y = 100
    }     

    update() {
        if (this.input.activePointer.isDown &&
            this.nappy.y > this.cup.y + 100 &&
            this.nappy.y < this.cup.y + 500 &&
            this.uiDisplay == false) {
            this.cup.setVelocityY(this.getCursorSpeed(this.input.activePointer) * 200);
        }

        if (this.cup.body.velocity.y == 0) {
            this.time.delayedCall(800, () => {
                if (this.cup.body.velocity.y == 0) {
                    this.resetCup(this.cup);
                }
            });
        }
    }
}