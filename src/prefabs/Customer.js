class Customer extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'customer');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.body.setSize(256, 128).setOffset(0, 128)
        this.body.setImmovable(true)
        this.body.onCollide = true
    }

    move() {
        console.log('hi there')
        this.y = Phaser.Math.Between(centerY, height - 100)
    }
}