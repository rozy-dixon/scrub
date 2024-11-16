class Obstacle extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, dragY = 100){
      super(scene, x, y, texture, 0);
      scene.add.existing(this);
      scene.physics.add.existing(this);
  
      this.dragY = dragY;
      this.body.setBounce(.2);
      this.body.onOverlap = true;
    }
  
    updateDrag(drag){
      this.dragY = drag;
    }
  }