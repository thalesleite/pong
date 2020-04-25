const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'pong',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

function preload() {
    this.load.image('paddleOne', '../assets/paddle.png');
    this.load.image('paddleTwo', '../assets/paddle.png');
    this.load.image('net', '../assets/net.png');
    this.load.image('ball', '../assets/ball.png');
}

function create() {
    this.add.image(780, 300, 'paddleOne');
    this.add.image(20, 300, 'paddleTwo');
    this.add.image(400, 300, 'net');
    this.add.image(35, 300, 'ball');
}

function update() {

}

const game = new Phaser.Game(config);