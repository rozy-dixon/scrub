class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    init(){
        this.SUCCESS_MAX_VELOCITY = 100;

        this.THANK_YOUS = [ 'thank-you-1', 'thank-you-2' ]

        this.OBSTACLES = {
            'puddle': {
                dragY: -100,
                height: 10
            },
            'coaster':{
                dragY: 500,
                height: 50
            },
            'can':{
                dragY: 100,
                height: 25
            }
        }
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

        this.cup = new Cup(this, centerX, 0, 'cup', 500)

        this.nappy = this.add.image(centerX, centerY, 'rag').setOrigin(.5).setScale(3).setInteractive({ draggable: true })

        this.spawnObstacle(centerX, centerY+100);


        // -------------------------------------- scrubby inputs

        this.input.on('pointermove', (event) => {
            this.nappy.x = event.x
            this.nappy.y = event.y
        })

        this.input.on('pointerdown', () => {
            console.log('pointerdown')
            this.cup.launch();
        })
        
        this.customer = new Customer(this, centerX - 250, height - 200).setOrigin(0.5)

        this.physics.add.collider(this.cup, this.customer);
        this.physics.world.on('collide', this.evaluateToss, this);

        this.physics.add.overlap(this.cup, this.obstacle);
        this.physics.world.once('overlap', this.overlapObstacle, this);
    }

    evaluateToss(cup, customer){
        //if cup velocity in successful range, stop it, show aww yea, despawn both things
        // else, create spill,
        if(Math.abs(cup.body.velocity.y) < this.SUCCESS_MAX_VELOCITY){
            cup.body.setVelocityY(0);
            let soundfx = this.sound.add(this.THANK_YOUS[Math.floor(Math.random()*2)])
            soundfx.play();
            let popup = this.add.image(customer.x, customer.y, 'success');
            soundfx.once('complete', () => {
                popup.destroy();
            })
        }
        else{
            let soundfx = this.sound.add('fail')
            soundfx.play();
            let popup = this.add.image(customer.x, customer.y, 'failure');
            soundfx.once('complete', () => {
                popup.destroy();
            })
        }
        //at end, spawn new cup and new hand
    }

    overlapObstacle(cup, obstacle){
        cup.body.setDragY(cup.body.drag.y + obstacle.dragY);
    }

    spawnObstacle(x, y){
        let obstacleType = Object.keys(this.OBSTACLES)[Math.floor(Math.random() * 3)];
        let obstacle = new Obstacle(
            this, x, y, obstacleType, this.OBSTACLES[obstacleType].dragY)
                .setOrigin(.5)
                .setScale(3)
                .setBodySize(50, this.OBSTACLES[obstacleType].height);
        this.children.moveBelow(obstacle, this.cup);
        this.physics.add.overlap(this.cup, obstacle);
        this.physics.world.once('overlap', this.overlapObstacle, this);
    }

    update() {
    }
}