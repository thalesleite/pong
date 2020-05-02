const Paddle = new Phaser.Class({
    Extends: Phaser.GameObjects.Image,
    initialize:

    function Paddle(scene, x, y) {
        Phaser.GameObjects.Image.call(this, scene);

        this.setTexture('paddle');
        this.setPosition(x, y);
        
        // scene.children.add(this);
        // scene.physics.world.enableBody(this);
        scene.physics.world.enable(this);
        scene.add.existing(this);
    }
});

export default Paddle;