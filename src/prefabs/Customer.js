class Customer extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'customer');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.body.setImmovable(true)
        this.body.onCollide = true
    }

    create(){
    }
}