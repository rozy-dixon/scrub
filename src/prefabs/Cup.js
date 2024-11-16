class Cup extends Phaser.Physics.Arcade.Sprite{
  constructor(scene, x, y, texture, velocityY = 500, dragY = 150){
    super(scene, x, y, texture, 0);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.velocityY = new Phaser.Math.Vector2(0, velocityY);
    this.dragY = dragY;
    this.body.setBounce(.2);
    this.body.collideWorldBounds = true;
    this.body.onCollide = true;
  }

  launch(){
    this.body.setDragY(this.dragY);
    this.body.velocity.add(this.velocityY);
  }

  updateVelocity(velocity){
    this.velocityY = new Phaser.Math.Vector2(0, velocity);
  }

  updateDrag(drag){
    this.dragY = drag;
  }
}