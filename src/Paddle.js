const Paddle = new Phaser.Class({
    Extends: Phaser.GameObjects.Image,
    initialize:

    function Paddle(scene, x, y) {
        Phaser.GameObjects.Image.call(this, scene);

        this.setTexture('paddle');
        this.setPosition(x, y);
        
        scene.children.add(this);
    }
});

export default Paddle;