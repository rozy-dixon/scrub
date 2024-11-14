class Cup extends Phaser.Physics.Arcade.Sprite{
  constructor(scene, x, y, texture, velocityY = 5, dragY = .75){
    super(scene, x, y, texture, 0);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.velocityY = new Phaser.Math.Vector2(0, velocityY);
    this.dragY = dragY;
    this.body.setBounce(0,1);
    this.setCollideWorldBounds = true;
  }

  create(){
    //launch self in direction with drag lolz
    this.body.setVelocity(this.velocityY);
    this.body.setAcceleration(100);
    this.body.setDragY(this.dragY);
  }

  setVelocity(velocity){
    this.velocityY = new Phaser.Math.Vector2(0, velocity);
    this.body.velocity.y = velocity;
  }

  setDrag(drag){
    this.dragY = drag;
    this.body.setDragY(drag);
  }
}