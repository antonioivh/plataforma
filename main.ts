namespace SpriteKind {
    export const Moneda = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (personaje.vy == 0) {
        personaje.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false)
})
function Moneda_2 () {
    moneda = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 f 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 f 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 f 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 f 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 f 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 f 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 f 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 f 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 f f f f f f 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . . . . f f f f f f f . . . . . 
        `, SpriteKind.Food)
    animation.runImageAnimation(
    moneda,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 5 5 5 5 f . . . . . . . 
        . f f 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f f f 5 5 5 f . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . . . f 5 5 5 5 f . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 5 5 5 5 f . . . . . . . 
        . f f 5 5 5 5 5 5 f . . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f 5 5 5 5 5 f . . . . . 
        . f 5 5 f f f 5 5 5 f . . . . . 
        . . f 5 5 5 5 5 5 f . . . . . . 
        . . . f 5 5 5 5 f . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . f f 5 5 5 5 5 f . . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f f 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . f f 5 5 5 5 5 f . . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f 5 5 5 5 f . . . . . 
        . . f 5 5 f f 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . f f 5 5 5 5 f . . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . f f 5 5 5 5 f . . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . f 5 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f 5 5 5 5 5 5 5 f . . . . . 
        f f 5 5 5 5 5 5 5 5 5 f . . . . 
        f 5 5 f 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 f 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 f 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 f 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 f 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 f 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 f f f f f 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
}
function enemigo () {
    villano = sprites.create(img`
        . . . . 2 4 2 4 2 . . . . . . . 
        . . . . 2 5 2 5 2 . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . 4 . . f 2 f . . . . . . . . 
        . . f . . . 8 . . . f . . . . . 
        . f f f d f f f d f f f . . . . 
        . f 2 d f 7 7 7 f d 2 f . . . . 
        . . 4 f 7 7 d 7 7 f 4 . . . . . 
        . f . f 2 7 7 7 2 f . f . . . . 
        f 2 f 7 7 2 2 2 7 7 f 2 f . . . 
        . f . f f f f f f f . f . . . . 
        . . . 2 2 f 2 f 2 2 . . . . . . 
        . 2 2 f 2 f f f 2 f 2 2 . . . . 
        . . . f f 2 f 2 f f . . . . . . 
        . 2 2 f f 2 f 2 f f 2 2 . . . . 
        . . . f f . . . f f . . . . . . 
        `, SpriteKind.Enemy)
    villano.setVelocity(69, 100)
    villano.setPosition(543, 54)
}
function personaje2 () {
    personaje = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, SpriteKind.Player)
    controller.moveSprite(personaje, 100, 0)
    scene.cameraFollowSprite(personaje)
    personaje.ay = 25
}
function tilemap2 () {
    scene.setBackgroundColor(8)
    tiles.setTilemap(tilemap`level1`)
    effects.confetti.startScreenEffect(2000)
    game.splash("EL JUEGO DE PLATAFORMA")
    pause(100)
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        Moneda_2()
        tiles.placeOnRandomTile(moneda, assets.tile`myTile1`)
    }
}
let villano: Sprite = null
let moneda: Sprite = null
let personaje: Sprite = null
tilemap2()
enemigo()
personaje2()
