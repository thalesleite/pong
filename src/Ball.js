const Ball = new Phaser.Class({
    Extends: Phaser.GameObjects.Image,
    initialize:

    function Ball(scene, x, y){
        Phaser.GameObjects.Image.call(this, scene);

        this.setTexture('ball');
        this.setPosition(x, y);
        
        scene.children.add(this);
    }
});

export default Ball;