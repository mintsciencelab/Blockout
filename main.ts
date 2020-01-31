namespace SpriteKind {
    export const Bricks = SpriteKind.create()
}
function initPaddle () {
    paddle = sprites.create(img`
. . . 2 2 2 2 . c c c c c c c c c c c c c c c c . 2 2 2 2 . . . 
. . 4 4 4 4 4 f b b b b b b b b b b b b b b b b f 4 4 4 4 2 . . 
. 9 4 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 1 2 9 . 
9 1 1 4 4 4 4 f b b b b b b b b b b b b b b b b f 4 4 4 4 2 1 9 
9 9 4 4 4 4 4 f b b b b b b b b b b b b b b b b f 4 4 4 4 2 9 9 
. 9 4 4 4 4 4 f c c c c c c c c c c c c c c c c f 4 4 4 4 2 9 . 
. . 4 2 2 2 2 f c c c c c c c c c c c c c c c c f 2 2 2 2 2 . . 
. . . 2 2 2 2 . f f f f f f f f f f f f f f f f . 2 2 2 2 . . . 
`, SpriteKind.Player)
    paddle.setPosition(80, 108)
    controller.moveSprite(paddle, 150, 0)
    paddle.setFlag(SpriteFlag.StayInScreen, true)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Bricks, function (sprite, otherSprite) {
    if (sprite.x + 6 <= otherSprite.x || sprite.x - 7 >= otherSprite.x) {
        sprite.vx = -1 * sprite.vx
    } else {
        sprite.vy = -1 * sprite.vy
    }
    otherSprite.destroy()
    info.changeScoreBy(100)
    music.playTone(740, music.beat(BeatFraction.Quarter))
    sprite_list = sprites.allOfKind(SpriteKind.Bricks)
    if (sprite_list.length == 0) {
        ball.setVelocity(0, 0)
        isPlaying = false
        nextLevel()
    }
})
function loadLevel () {
    bricks = [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 c 
1 1 1 1 1 1 1 1 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 f 
1 1 1 1 1 1 1 1 1 1 1 1 1 f 
c f f f f f f f f f f f f f 
`, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 c 
5 5 5 5 5 5 5 5 5 5 5 5 5 f 
5 5 5 5 5 5 5 5 5 5 5 5 5 f 
5 5 5 5 5 5 5 5 5 5 5 5 5 f 
5 5 5 5 5 5 5 5 5 5 5 5 5 f 
5 5 5 5 5 5 5 5 5 5 5 5 5 f 
5 5 5 5 5 5 5 5 5 5 5 5 5 f 
c f f f f f f f f f f f f f 
`, img`
3 3 3 3 3 3 3 3 3 3 3 3 3 c 
3 3 3 3 3 3 3 3 3 3 3 3 3 f 
3 3 3 3 3 3 3 3 3 3 3 3 3 f 
3 3 3 3 3 3 3 3 3 3 3 3 3 f 
3 3 3 3 3 3 3 3 3 3 3 3 3 f 
3 3 3 3 3 3 3 3 3 3 3 3 3 f 
3 3 3 3 3 3 3 3 3 3 3 3 3 f 
c f f f f f f f f f f f f f 
`, img`
6 6 6 6 6 6 6 6 6 6 6 6 6 c 
6 6 6 6 6 6 6 6 6 6 6 6 6 f 
6 6 6 6 6 6 6 6 6 6 6 6 6 f 
6 6 6 6 6 6 6 6 6 6 6 6 6 f 
6 6 6 6 6 6 6 6 6 6 6 6 6 f 
6 6 6 6 6 6 6 6 6 6 6 6 6 f 
6 6 6 6 6 6 6 6 6 6 6 6 6 f 
c f f f f f f f f f f f f f 
`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 c 
2 2 2 2 2 2 2 2 2 2 2 2 2 f 
2 2 2 2 2 2 2 2 2 2 2 2 2 f 
2 2 2 2 2 2 2 2 2 2 2 2 2 f 
2 2 2 2 2 2 2 2 2 2 2 2 2 f 
2 2 2 2 2 2 2 2 2 2 2 2 2 f 
2 2 2 2 2 2 2 2 2 2 2 2 2 f 
c f f f f f f f f f f f f f 
`, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 c 
7 7 7 7 7 7 7 7 7 7 7 7 7 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 f 
c f f f f f f f f f f f f f 
`, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 c 
9 9 9 9 9 9 9 9 9 9 9 9 9 f 
9 9 9 9 9 9 9 9 9 9 9 9 9 f 
9 9 9 9 9 9 9 9 9 9 9 9 9 f 
9 9 9 9 9 9 9 9 9 9 9 9 9 f 
9 9 9 9 9 9 9 9 9 9 9 9 9 f 
9 9 9 9 9 9 9 9 9 9 9 9 9 f 
c f f f f f f f f f f f f f 
`, img`
4 4 4 4 4 4 4 4 4 4 4 4 4 c 
4 4 4 4 4 4 4 4 4 4 4 4 4 f 
4 4 4 4 4 4 4 4 4 4 4 4 4 f 
4 4 4 4 4 4 4 4 4 4 4 4 4 f 
4 4 4 4 4 4 4 4 4 4 4 4 4 f 
4 4 4 4 4 4 4 4 4 4 4 4 4 f 
4 4 4 4 4 4 4 4 4 4 4 4 4 f 
c f f f f f f f f f f f f f 
`, img`
d d d d d d d d d d d d d c 
d d d d d d d d d d d d d f 
d d d d d d d d d d d d d f 
d d d d d d d d d d d d d f 
d d d d d d d d d d d d d f 
d d d d d d d d d d d d d f 
d d d d d d d d d d d d d f 
c f f f f f f f f f f f f f 
`]
    levelmaps = [["9999999999", "5555555555", "4444444444", "8888888888", "3333333333", "6666666666"], ["6666666666", "0000000000", "1118888888", "0000000000", "5555555111", "0000000000", "3333333333"], ["0987008910", "0198007890", "0219006780", "0321005670", "0432004560", "0543003450"], ["7050660507", "7050660507", "7088888807", "7050660507", "7050660507", "7050660507"], ["0004567000", "0045678900", "0456789120", "0567891230", "0078912300", "0009123000"]]
    levelmap = [""]
}
function initBall () {
    ball = sprites.create(img`
. 9 9 . 
9 8 8 9 
9 8 8 9 
. 9 9 . 
`, SpriteKind.Projectile)
    ball.y = 102
    ball.setFlag(SpriteFlag.BounceOnWall, true)
    isBallReady = true
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(isPlaying) && isBallReady) {
        isPlaying = true
        ball.setVelocity(45, -60)
    }
})
function initGame () {
    isBallReady = false
    isPlaying = false
    level = 0
    info.setLife(3)
    info.setScore(0)
    scene.setBackgroundImage(img`
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 
8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f 
f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f 8 
8 f b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b f f 
f f b 1 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 b f 8 
8 f b 1 b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b f f 
f f b 1 b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b f 8 
8 f b 1 b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c b f f 
f f b 1 b c c b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b c c b f 8 
8 f b 1 b c c b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b c c b f f 
f f f f f f f f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f f f f f f f f f 
f f b 1 b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b c c b f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f b b b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b b b c c b f 
f f f f f f f f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f f f f f f f f f 
f f b 1 b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b c c b f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f b b b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b b b c c b f 
f f f f f f f f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f f f f f f f f f 
f f b 1 b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b c c b f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f b b b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b b b c c b f 
f f f f f f f f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f f f f f f f f f 
f f b 1 b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b c c b f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f b b b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b b b c c b f 
f f f f f f f f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f f f f f f f f f 
f f b 1 b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b c c b f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f b b b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b b b c c b f 
f f f f f f f f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f f f f f f f f f 
f f b 1 b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b c c b f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f c c c f f c f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f c c c f f c f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f f b b b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b b b c c b f 
f f f f f f f f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f f f f f f f f f 
f f b 1 b c c b f f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b c c b f 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
f b 1 b b c c c b f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f b 1 b b c c c b 
f b 1 b b c c c b 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f f b 1 b b c c c b 
`)
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . . . . . . . . . f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
`, TileScale.Eight)
    scene.setTile(15, img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, true)
    scene.setTile(2, img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, true)
}
function nextLevel () {
    level += 1
    if (level == levelmaps.length) {
        game.over(true, effects.confetti)
    } else {
        ball.destroy()
        isBallReady = false
        paddle.destroy()
        pause(800)
        info.changeLifeBy(1)
        drawLevel(level)
        initPaddle()
        bgm()
        initBall()
    }
}
function drawLevel (lv: number) {
    levelmap = levelmaps[lv]
    for (let row = 0; row <= levelmap.length - 1; row++) {
        for (let column = 0; column <= levelmap[row].length - 1; column++) {
            blockType = parseInt(levelmap[row].charAt(column))
            if (blockType != 0) {
                brick = sprites.create(bricks[blockType], SpriteKind.Bricks)
                brick.left = column * 14 + 10
                brick.top = row * 8 + 26
            }
        }
    }
}
function bgm () {
    music.setTempo(60)
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    music.playTone(196, music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    music.playTone(196, music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Quarter))
}
scene.onHitTile(SpriteKind.Projectile, 2, function (sprite) {
    scene.cameraShake(2, 200)
    ball.destroy(effects.ashes, 20)
    isBallReady = false
    isPlaying = false
    info.changeLifeBy(-1)
    if (info.life() != 0) {
        music.playTone(98, music.beat(BeatFraction.Eighth))
        music.playTone(88, music.beat(BeatFraction.Eighth))
        music.playTone(98, music.beat(BeatFraction.Eighth))
        music.playTone(88, music.beat(BeatFraction.Eighth))
        initBall()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    xDiff = sprite.x - otherSprite.x
    frictionFactor = 0.5
    vxMax = 65
    vMax = 75
    if (sprite.vy > 0) {
        if (Math.abs(xDiff) >= 4 && Math.abs(xDiff) < 12) {
            sprite.vx = sprite.vx + frictionFactor * xDiff
            if (sprite.vx > 0) {
                sprite.vx = Math.min(vxMax, sprite.vx)
            } else {
                sprite.vx = Math.max(-1 * vxMax, sprite.vx)
            }
        } else if (xDiff >= 12) {
            sprite.vx = vxMax * 0.8
        } else if (xDiff <= -12) {
            sprite.vx = vxMax * -0.8
        }
        sprite.vy = -1 * Math.sqrt(vMax ** 2 - sprite.vx ** 2)
        music.playTone(247, music.beat(BeatFraction.Quarter))
    }
})
let vMax: number = []
let vxMax: number = []
let frictionFactor: number = []
let xDiff: number = []
let brick: Sprite = null
let blockType: number = []
let isBallReady = false
let levelmap: string[] = []
let levelmaps: string[][] = []
let bricks: Image[] = []
let isPlaying = false
let ball: Sprite = null
let sprite_list: Sprite[] = []
let paddle: Sprite = null
let level: number = []
initGame()
game.splash("[MakeCode]", "BLOCK OUT")
game.splash("Press 'A' Button", "to launch a ball")
loadLevel()
drawLevel(level)
bgm()
initPaddle()
initBall()
game.onUpdate(function () {
    if (!(isPlaying)) {
        ball.x = paddle.x
    }
})
