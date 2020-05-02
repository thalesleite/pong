import Paddle from './Paddle.js';
import Ball from './Ball.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'pong',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

let playerOne,
    playerTwo,
    ball,
    cursorOne,
    cursorTwo;

function preload() {
    this.load.image('paddle', '../assets/paddle.png');
    this.load.image('net', '../assets/net.png');
    this.load.image('ball', '../assets/ball.png');
}

function create() {
    playerOne = new Paddle(this, 20, 300);
    playerTwo = new Paddle(this, 780, 300);
    
    this.add.image(400, 300, 'net');

    ball = new Ball(this, 35, 300);

    cursorOne = this.input.keyboard.createCursorKeys();
    cursorTwo = this.input.keyboard.createCursorKeys();
}

function update() {
    cursorOne = this.input.keyboard.addKeys({
        up:Phaser.Input.Keyboard.KeyCodes.W,
        down:Phaser.Input.Keyboard.KeyCodes.S
    });

    if (cursorOne.up.isDown) {
        playerOne.body.position.y += -10;

    } else if (cursorOne.down.isDown) {
        playerOne.body.position.y += 10;

    } else if (cursorTwo.up.isDown) {
        playerTwo.body.position.y += -10;

    } else if (cursorTwo.down.isDown) {
        playerTwo.body.position.y += 10;

    }
}

const game = new Phaser.Game(config);