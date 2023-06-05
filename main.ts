namespace SpriteKind {
    export const survive = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    projectile = sprites.createProjectileFromSprite(img`
        a 
        c 
        b 
        `, spaceship, 0, -100)
})
info.onScore(100, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.smiles)
    game.setGameOverPlayable(true, music.melodyPlayable(music.wawawawaa), false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
let bad: Sprite = null
let projectile: Sprite = null
let spaceship: Sprite = null
effects.starField.startScreenEffect()
spaceship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 . . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . 1 1 d 1 1 d 1 1 . . . . . 
    . . 1 1 d d 1 1 d d 1 1 . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 . . 1 1 1 1 . . . . 
    . . . 1 1 . . . . 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spaceship.setPosition(84, 98)
controller.moveSprite(spaceship)
let life = 3
game.onUpdateInterval(500, function () {
    bad = sprites.create(img`
        ......cc......ff
        ......cbc...ffbf
        ......cbccffcbbf
        ......cdbcccbbf.
        ......cddbccbf..
        .......cdbbff...
        .......fccfc....
        ......fccccbc...
        .....fcccccbdc..
        ....fcccccccddc.
        ff..fcccccccddc.
        fbffccbbbcccddff
        fbbfbbccbbccdfbf
        cbfbbcbbbbbcfbbf
        cbfbbbccbbbbbbdf
        .cbbbcbbbbbbbdbf
        .fbbbbbbbbbbbbf.
        .fbffbbbb11ccff.
        fbbff111111111f.
        fbb11c3cccc111c.
        fb11c133331c11c.
        fb11cc33333311c.
        fb11c1c333311c..
        fbb1cccccccc1c..
        fbbb1ff...ccc...
        .fffff..........
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `, SpriteKind.Enemy)
    bad.setPosition(randint(0, scene.screenWidth()), 0)
    bad.follow(spaceship, 20)
})
