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
    cursors;

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

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.up.isDown) {
        playerOne.body.position.y += -10;

    } else if (cursors.down.isDown) {
        playerOne.body.position.y += 10;

    } 
    // else if (cursors.down.isDown) {
    //     playerOne.body.position.y += 10;

    // } else if (cursors.down.isDown) {
    //     playerOne.body.position.y += 10;

    // }
}

const game = new Phaser.Game(config);