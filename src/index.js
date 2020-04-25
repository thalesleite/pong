import Paddle from './Paddle.js';

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

let playerOne,
    playerTwo;

function preload() {
    this.load.image('paddle', '../assets/paddle.png');
    this.load.image('net', '../assets/net.png');
    this.load.image('ball', '../assets/ball.png');
}

function create() {
    playerOne = new Paddle(this, 780, 300);
    playerTwo = new Paddle(this, 20, 300);
    
    this.add.image(400, 300, 'net');

    this.add.image(35, 300, 'ball');
}

function update() {

}

const game = new Phaser.Game(config);