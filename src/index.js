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

let player1,
    player2,
    ball,
    cursor1,
    cursor2;

function preload() {
    this.load.image('paddle', '../assets/paddle.png');
    this.load.image('net', '../assets/net.png');
    this.load.image('ball', '../assets/ball.png');
}

function create() {
    player1 = new Paddle(this, 20, 300);
    player2 = new Paddle(this, 780, 300);
    
    this.add.image(400, 300, 'net');

    ball = new Ball(this, 35, 300);

    cursor1 = this.input.keyboard.createCursorKeys();
    cursor2 = this.input.keyboard.createCursorKeys();
}

function update() {
    cursor1 = this.input.keyboard.addKeys({
        up:Phaser.Input.Keyboard.KeyCodes.W,
        down:Phaser.Input.Keyboard.KeyCodes.S
    });

    if (cursor1.up.isDown) {
        player1.body.position.y += -10;

    } else if (cursor1.down.isDown) {
        player1.body.position.y += 10;

    } else if (cursor2.up.isDown) {
        player2.body.position.y += -10;

    } else if (cursor2.down.isDown) {
        player2.body.position.y += 10;

    }
}

const game = new Phaser.Game(config);