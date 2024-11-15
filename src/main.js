// making myself not miserable
'use strict'

// game config
let config = {
    parent: 'GAME TITLE',
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    render: {
        pixelArt: true
    },
    width: 720,
    height: 1280,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    zoom: Math.min((window.innerHeight/1280)-.01, (window.innerWidth/720)-.01),
    scene: [ Load, Play, Keys ]
}

// game variables
const game = new Phaser.Game(config)
// convenience variables
const centerX = game.config.width/2
const centerY = game.config.height/2
const width = game.config.width
const height = game.config.height
// log variables
const testColor = "color: #91aa86;"
const goodColor = "color: #cfd1af;"
const badColor = "color: #c088ae;"
// key variables
let cursors