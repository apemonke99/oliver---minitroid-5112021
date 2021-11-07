enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const kndItemMorphBall = SpriteKind.create()
    export const Misc = SpriteKind.create()
    export const blueDoor = SpriteKind.create()
    export const kndItemMissileTank = SpriteKind.create()
    export const redDoor = SpriteKind.create()
    export const kndMissiles = SpriteKind.create()
    export const kndPowerBeam = SpriteKind.create()
    export const breakEffect = SpriteKind.create()
    export const kndEnemyBat = SpriteKind.create()
    export const kndChargeBeam = SpriteKind.create()
    export const greenDoor = SpriteKind.create()
    export const orangeDoor = SpriteKind.create()
    export const kndItemChargeBean = SpriteKind.create()
    export const kndItemEtank = SpriteKind.create()
    export const kndItemHighJump = SpriteKind.create()
    export const kndItemPowerBomb = SpriteKind.create()
    export const kndItemSuperMissile = SpriteKind.create()
    export const kndProjPowerBomb = SpriteKind.create()
    export const kndPowerBombGlass = SpriteKind.create()
    export const kndRidleyGlass = SpriteKind.create()
}
namespace StatusBarKind {
    export const healthEnergy = StatusBarKind.create()
    export const missileAmmo = StatusBarKind.create()
}
function Setup_createLevel2 () {
    tiles.loadMap(tiles.createMap(tilemap`lvl2_Norin`))
    scene.setBackgroundImage(assets.image`NorinBG`)
    tiles.placeOnTile(plrSamus, tiles.getTileLocation(180, 13))
    if (varHighJumpFound == false) {
        itemHighJump = sprites.create(assets.image`itemHighJumpBoots`, SpriteKind.kndItemHighJump)
        tiles.placeOnTile(itemHighJump, tiles.getTileLocation(124, 40))
    }
    if (varPowerBombFound == false) {
        itemPowerBomb = sprites.create(assets.image`itemPowerBomb`, SpriteKind.kndItemPowerBomb)
        tiles.placeOnTile(itemPowerBomb, tiles.getTileLocation(189, 18))
    }
    if (varSuperMissileFound == false) {
        itemSuperMissile = sprites.create(assets.image`itemSuperMissiles`, SpriteKind.kndItemSuperMissile)
        tiles.placeOnTile(itemSuperMissile, tiles.getTileLocation(96, 35))
    }
    tiles.createSpritesOnTiles(assets.tile`myTile3`, SpriteKind.blueDoor)
    tiles.createSpritesOnTiles(assets.tile`myTile1`, SpriteKind.redDoor)
    tiles.createSpritesOnTiles(assets.tile`myTile9`, SpriteKind.orangeDoor)
    tiles.createSpritesOnTiles(assets.tile`myTile2`, SpriteKind.greenDoor)
    tiles.createSpritesOnTiles(assets.tile`myTile17`, SpriteKind.kndEnemyBat)
    tiles.createSpritesOnTiles(assets.tile`myTile11`, SpriteKind.kndItemMissileTank)
    tiles.createSpritesOnTiles(assets.tile`myTile19`, SpriteKind.kndItemEtank)
    tiles.createSpritesOnTiles(assets.tile`myTile18`, SpriteKind.kndItemMissileTank)
    tiles.createSpritesOnTiles(assets.tile`myTile15`, SpriteKind.kndItemEtank)
    tiles.createSpritesOnTiles(assets.tile`powerBombGlass`, SpriteKind.kndPowerBombGlass)
    tiles.createSpritesOnTiles(assets.tile`ridleyGlass`, SpriteKind.kndRidleyGlass)
    timer.after(500, function () {
        tiles.replaceAllTiles(assets.tile`myTile11`, assets.tile`breakableBlock0`)
        tiles.replaceAllTiles(assets.tile`myTile19`, assets.tile`breakableBlock0`)
        tiles.replaceAllTiles(assets.tile`myTile18`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`myTile15`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`powerBombGlass`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`ridleyGlass`, assets.tile`transparency16`)
    })
    timer.background(function () {
        Song_Norin_lvl2()
    })
}
sprites.onOverlap(SpriteKind.kndPowerBeam, SpriteKind.kndEnemyBat, function (sprite, otherSprite) {
    sprite.destroy()
    sprites.changeDataNumberBy(otherSprite, "batHealth", -1)
    if (sprites.readDataNumber(otherSprite, "batHealth") <= 0) {
        otherSprite.setVelocity(0, 0)
        otherSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        characterAnimations.setCharacterState(otherSprite, characterAnimations.rule(Predicate.NotMoving))
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `],
        100,
        false
        )
        timer.after(300, function () {
            otherSprite.destroy()
        })
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (varLevelState == 0 && othrCursorPosition == 1) {
        othrCursor.y = 55
        othrCursorPosition = 0
        music.knock.play()
    }
})
function Song_Part_Enrylo_lvl1_Bass_2026 () {
    music.playTone(77.78, music.beat(BeatFraction.Half))
    music.playTone(103.83, music.beat(BeatFraction.Half))
    music.playTone(156, music.beat(BeatFraction.Half))
    music.playTone(82.41, music.beat(BeatFraction.Half))
    music.playTone(123.47, music.beat(BeatFraction.Half))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndItemChargeBean, function (sprite, otherSprite) {
    otherSprite.destroy()
    varEnryloMusic = false
    music.stopAllSounds()
    timer.background(function () {
        Song_Item_Get()
    })
    game.splash("Charge Beam Acquired", "Hold B to charge. Release B to shoot.")
    varItemGetMusic = false
    varChargeBeamFound = true
    Song_Enrylo_lvl1()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (varPowerBombFound == true && varJumpStatus == -2) {
        timer.throttle("action", 3500, function () {
            projPowerBomb = sprites.createProjectileFromSprite(assets.image`powerBombProj`, plrSamus, 0, 0)
            projPowerBomb.setKind(SpriteKind.kndProjPowerBomb)
            timer.after(1000, function () {
                animation.runImageAnimation(
                projPowerBomb,
                [img`
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ............................5555555.............................
                    ...........................544444445............................
                    ..........................54444444445...........................
                    ..........................54444444445...........................
                    ..........................54444444445...........................
                    ..........................54444444445...........................
                    ..........................54444444445...........................
                    ..........................54444444445...........................
                    ..........................54444444445...........................
                    ...........................544444445............................
                    ............................5555555.............................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    `,img`
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ..........................5555555555555.........................
                    ........................55444444444444455.......................
                    ......................554444444444444444455.....................
                    .....................54444444444444444444445....................
                    ....................5444444444444444444444445...................
                    ...................544444444444444444444444445..................
                    ..................54444444444444444444444444445.................
                    .................5444444444444444444444444444445................
                    ................544444444444444444444444444444445...............
                    ................544444444444444444444444444444445...............
                    ...............54444444444444444444444444444444445..............
                    ...............54444444444444444444444444444444445..............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ..............5444444444444444444444444444444444445.............
                    ...............54444444444444444444444444444444445..............
                    ...............54444444444444444444444444444444445..............
                    ................544444444444444444444444444444445...............
                    ................544444444444444444444444444444445...............
                    .................5444444444444444444444444444445................
                    ..................54444444444444444444444444445.................
                    ...................544444444444444444444444445..................
                    ....................5444444444444444444444445...................
                    .....................54444444444444444444445....................
                    ......................554444444444444444455.....................
                    ........................55444444444444455.......................
                    ..........................5555555555555.........................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    ................................................................
                    `,img`
                    .........................555555555555555........................
                    ......................555444444444444444555.....................
                    ...................555444444444444444444444555..................
                    .................5544444444444444444444444444455................
                    ................544444444444444444444444444444445...............
                    ..............5544444444444444444444444444444444455.............
                    .............544444444444444444444444444444444444445............
                    ............54444444444444444444444444444444444444445...........
                    ...........5444444444444444444444444444444444444444445..........
                    ..........544444444444444444444444444444444444444444445.........
                    .........54444444444444444444444444444444444444444444445........
                    ........5444444444444444444444444444444444444444444444445.......
                    .......544444444444444444444444444444444444444444444444445......
                    .......544444444444444444444444444444444444444444444444445......
                    ......54444444444444444444444444444444444444444444444444445.....
                    .....5444444444444444444444444444444444444444444444444444445....
                    .....5444444444444444444444444444444444444444444444444444445....
                    ....544444444444444444444444444444444444444444444444444444445...
                    ....544444444444444444444444444444444444444444444444444444445...
                    ....544444444444444444444444444444444444444444444444444444445...
                    ...54444444444444444444444444444444444444444444444444444444445..
                    ...54444444444444444444444444444444444444444444444444444444445..
                    ...54444444444444444444444444444444444444444444444444444444445..
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ..5444444444444444444444444444444444444444444444444444444444445.
                    ...54444444444444444444444444444444444444444444444444444444445..
                    ...54444444444444444444444444444444444444444444444444444444445..
                    ...54444444444444444444444444444444444444444444444444444444445..
                    ....544444444444444444444444444444444444444444444444444444445...
                    ....544444444444444444444444444444444444444444444444444444445...
                    ....544444444444444444444444444444444444444444444444444444445...
                    .....5444444444444444444444444444444444444444444444444444445....
                    .....5444444444444444444444444444444444444444444444444444445....
                    ......54444444444444444444444444444444444444444444444444445.....
                    .......544444444444444444444444444444444444444444444444445......
                    .......544444444444444444444444444444444444444444444444445......
                    ........5444444444444444444444444444444444444444444444445.......
                    .........54444444444444444444444444444444444444444444445........
                    ..........544444444444444444444444444444444444444444445.........
                    ...........5444444444444444444444444444444444444444445..........
                    ............54444444444444444444444444444444444444445...........
                    .............544444444444444444444444444444444444445............
                    ..............5544444444444444444444444444444444455.............
                    ................544444444444444444444444444444445...............
                    .................5544444444444444444444444444455................
                    ...................555444444444444444444444555..................
                    ......................555444444444444444555.....................
                    .........................555555555555555........................
                    ................................................................
                    ................................................................
                    ................................................................
                    `],
                100,
                false
                )
                timer.after(300, function () {
                    projPowerBomb.destroy()
                })
            })
        })
    }
    if (varLevelState >= 1 && varJumpStatus != -2) {
        if (varDirection == 1 && varSelectedMissile == 0) {
            projPowerBeam = sprites.createProjectileFromSprite(assets.image`bullet0`, plrSamus, -250, 0)
            projPowerBeam.setKind(SpriteKind.kndPowerBeam)
            projPowerBeam.x += -10
            if (varJumpStatus == -1) {
                projPowerBeam.y += 0
            } else {
                projPowerBeam.y += -10
            }
        } else if (varDirection == 2 && varSelectedMissile == 0) {
            projPowerBeam = sprites.createProjectileFromSprite(assets.image`bullet`, plrSamus, 250, 0)
            projPowerBeam.setKind(SpriteKind.kndPowerBeam)
            projPowerBeam.x += 10
            if (varJumpStatus == -1) {
                projPowerBeam.y += 0
            } else {
                projPowerBeam.y += -10
            }
        } else if (varDirection == 1 && varSelectedMissile == 1) {
            if (stbMissiles.value > 0) {
                projMissile = sprites.createProjectileFromSprite(assets.image`titleScreenCursor0`, plrSamus, -250, 0)
                projMissile.setKind(SpriteKind.kndMissiles)
                projMissile.x += -10
                stbMissiles.value += -1
                txtMissileCounter.setText(" " + convertToText(stbMissiles.value))
                if (varJumpStatus == -1) {
                    projMissile.y += 0
                } else {
                    projMissile.y += -10
                }
            }
        } else if (varDirection == 2 && varSelectedMissile == 1) {
            if (stbMissiles.value > 0) {
                projMissile = sprites.createProjectileFromSprite(assets.image`titleScreenCursor`, plrSamus, 250, 0)
                projMissile.setKind(SpriteKind.kndMissiles)
                projMissile.x += 10
                stbMissiles.value += -1
                txtMissileCounter.setText(" " + convertToText(stbMissiles.value))
                if (varJumpStatus == -1) {
                    projMissile.y += 0
                } else {
                    projMissile.y += -10
                }
            }
        }
    }
})
function Setup_Title_Screen () {
    othrCursorPosition = 0
    othrCursor = sprites.create(assets.image`titleScreenCursor`, SpriteKind.Misc)
    othrCursor.setPosition(14, 55)
    txtLogo = textsprite.create("MiniTroid", 0, 4)
    txtLogo.setMaxFontHeight(15)
    txtLogo.setPosition(83, 15)
    txtName = textsprite.create("monkegame", 0, 1)
    txtName.setPosition(132, 114)
    txtNewGame = textsprite.create("New Game", 0, 1)
    txtNewGame.setPosition(49, 75)
    if (varGameStarted == 1) {
        txtContinue = textsprite.create("Continue", 0, 4)
        txtContinue.setPosition(49, 55)
    } else {
        txtContinue = textsprite.create("Continue", 0, 13)
        txtContinue.setPosition(49, 55)
    }
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    Song_Title_Theme()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndItemMissileTank, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (varLevelState == 1) {
        varEnryloMusic = false
    } else if (varLevelState == 2) {
        varNorinMusic = false
    } else if (varLevelState == 3) {
        varCallarisMusic = false
    }
    music.stopAllSounds()
    timer.background(function () {
        Song_Item_Get()
    })
    if (sprites.readDataNumber(otherSprite, "missileId") == 0) {
        game.splash("Missiles Acquired", "Select with Menu, fire with B.")
        stbMissiles = statusbars.create(0, 0, StatusBarKind.missileAmmo)
        stbMissiles.max = 5
        txtMissileCounter = textsprite.create(" " + convertToText(stbMissiles.value), 15, 1)
        txtMissileCounter.setIcon(assets.image`missileIconOff`)
        txtMissileCounter.setFlag(SpriteFlag.RelativeToCamera, true)
        txtMissileCounter.setPosition(15, 15)
        txtMissileCounter.z = 10
        varMissileGetCheck = true
        varMissile1Found = true
    } else if (sprites.readDataNumber(otherSprite, "missileId") >= 1) {
        game.splash("Extra Missiles Acquired", "+5 Missile Ammo.")
        stbMissiles.max = stbMissiles.max + 5
        stbMissiles.value = stbMissiles.value + 5
        txtMissileCounter.setText(" " + convertToText(stbMissiles.value))
        txtMissileCounter.setIcon(assets.image`missileIconOff`)
        varSelectedMissile = 0
        arrMissileFound[sprites.readDataNumber(otherSprite, "missileId") - 1] = true
    }
    varItemGetMusic = false
    if (varLevelState == 1) {
        Song_Enrylo_lvl1()
    } else if (varLevelState == 2) {
        Song_Norin_lvl2()
    } else if (varLevelState == 3) {
        Song_Callaris_lvl3()
    }
})
function Song_Escape () {
    music.setTempo(150)
    timer.background(function () {
        for (let index = 0; index < 2; index++) {
            timer.background(function () {
                music.playTone(392, music.beat(BeatFraction.Double))
            })
            timer.background(function () {
                music.playTone(294, music.beat(BeatFraction.Double))
            })
            music.rest(music.beat(BeatFraction.Double))
            timer.background(function () {
                music.playTone(466, music.beat(BeatFraction.Double))
            })
            timer.background(function () {
                music.playTone(349, music.beat(BeatFraction.Double))
            })
            music.rest(music.beat(BeatFraction.Double))
            timer.background(function () {
                music.playTone(440, music.beat(BeatFraction.Breve))
            })
            timer.background(function () {
                music.playTone(277, music.beat(BeatFraction.Breve))
            })
            music.rest(music.beat(BeatFraction.Breve))
        }
    })
    for (let index = 0; index < 8; index++) {
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Triplet))
        music.playTone(196, music.beat(BeatFraction.Triplet))
        music.playTone(196, music.beat(BeatFraction.Triplet))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndItemMorphBall, function (sprite, otherSprite) {
    itemMorphBall.destroy()
    varEnryloMusic = false
    music.stopAllSounds()
    timer.background(function () {
        Song_Item_Get()
    })
    game.splash("MorphBall Acquired", "Down Twice to enter ball.")
    varItemGetMusic = false
    varMorphBallFound = true
    Song_Enrylo_lvl1()
})
function Song_Item_Get () {
    varItemGetMusic = true
    music.setTempo(100)
    if (varItemGetMusic) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    if (varItemGetMusic) {
        music.playTone(466, music.beat(BeatFraction.Half))
    }
    if (varItemGetMusic) {
        music.playTone(523, music.beat(BeatFraction.Half))
    }
    if (varItemGetMusic) {
        music.playTone(587, music.beat(BeatFraction.Half))
    }
    if (varItemGetMusic) {
        music.playTone(659, music.beat(BeatFraction.Half))
    }
    if (varItemGetMusic) {
        music.playTone(523, music.beat(BeatFraction.Half))
    }
    if (varItemGetMusic) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    if (varItemGetMusic) {
        music.playTone(523, music.beat(BeatFraction.Half))
    }
    if (varItemGetMusic) {
        music.playTone(698, music.beat(BeatFraction.Half))
    }
    if (varItemGetMusic) {
        music.playTone(587, music.beat(BeatFraction.Half))
    }
    if (varItemGetMusic) {
        music.playTone(466, music.beat(BeatFraction.Half))
    }
    if (varItemGetMusic) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 8; index++) {
        if (varItemGetMusic) {
            music.playTone(440, music.beat(BeatFraction.Eighth))
        }
        if (varItemGetMusic) {
            music.playTone(466, music.beat(BeatFraction.Eighth))
        }
    }
    if (varItemGetMusic) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
}
function Song_Title_Theme () {
    varTitleMusic = true
    music.setTempo(60)
    timer.background(function () {
        for (let index = 0; index < 3; index++) {
            if (varTitleMusic) {
                music.playTone(294, music.beat(BeatFraction.Double))
            }
        }
    })
    if (varTitleMusic) {
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    if (varTitleMusic) {
        music.playTone(233, music.beat(BeatFraction.Double))
    }
    if (varTitleMusic) {
        music.playTone(175, music.beat(BeatFraction.Double))
    }
    if (varTitleMusic) {
        music.rest(music.beat(BeatFraction.Double))
    }
    timer.background(function () {
        for (let index = 0; index < 3; index++) {
            if (varTitleMusic) {
                music.playTone(294, music.beat(BeatFraction.Double))
            }
        }
    })
    if (varTitleMusic) {
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    if (varTitleMusic) {
        music.playTone(262, music.beat(BeatFraction.Double))
    }
    if (varTitleMusic) {
        music.playTone(233, music.beat(BeatFraction.Double))
    }
    if (varTitleMusic) {
        music.rest(music.beat(BeatFraction.Double))
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (varLevelState >= 1) {
        if (plrSamus.vy == 0 && varJumpStatus <= 0) {
            if (varHighJumpFound == true) {
                plrSamus.vy = -320
            } else if (varHighJumpFound == false) {
                plrSamus.vy = -280
            }
            varJumpStatus = 1
            if (varDirection == 1) {
                animation.runImageAnimation(
                plrSamus,
                assets.animation`samusJumpAimLeft`,
                200,
                true
                )
            } else if (varDirection == 2) {
                animation.runImageAnimation(
                plrSamus,
                assets.animation`samusJumpAimRight`,
                200,
                true
                )
            }
            controller.moveSprite(plrSamus, 100, 0)
        }
    }
    if (varLevelState == 0) {
        if (othrCursorPosition == 0 && varGameStarted == 1) {
            game.splash("continue")
            music.pewPew.play()
            Setup_Starting_Cutscene(false)
        } else if (othrCursorPosition == 1) {
            varLevelState = 0.1
            music.pewPew.play()
            Setup_Starting_Cutscene(true)
        }
    }
    if (varLevelState == 0.1) {
        story.clearAllText()
    }
})
sprites.onCreated(SpriteKind.greenDoor, function (sprite) {
    sprite.setImage(assets.image`doorSuper`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (varLevelState >= 1) {
        varDirection = 1
        if (varJumpStatus == 0) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusWalkLeftAim`,
            75,
            true
            )
        }
        if (varJumpStatus == 1) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusJumpAimLeft`,
            200,
            true
            )
        }
        if (varJumpStatus == -2) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusMorphBallLeft`,
            75,
            true
            )
            controller.moveSprite(plrSamus, 100, 0)
        }
        if (varChargeBeamActivate >= 1) {
            projChargeBeam.setPosition(60, 50)
        }
    }
})
function Setup_Starting_Cutscene (newGame: boolean) {
    color.FadeToBlack.startScreenEffect(1000)
    varTitleMusic = false
    color.pauseUntilFadeDone()
    txtContinue.destroy()
    txtLogo.destroy()
    txtName.destroy()
    txtNewGame.destroy()
    othrCursor.destroy()
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    color.clearFadeEffect()
    if (newGame == true) {
        story.startCutscene(function () {
            color.setPalette(
            color.originalPalette
            )
            story.printText("The Space-Pirates have taken over ZR-83.", 80, 60, 7, 0, story.TextSpeed.Normal)
            story.printText("You must destroy their stronghold in Callaris.", 80, 60, 7, 0, story.TextSpeed.Normal)
            story.printText("There are two commanders. You must take them out.", 80, 60, 7, 0, story.TextSpeed.Normal)
            story.printText("Kraid, in Enrylo. And Ridley in Norin.", 80, 60, 7, 0, story.TextSpeed.Normal)
            story.printText("Then make your way to Callaris to destroy the Core.", 80, 60, 7, 0, story.TextSpeed.Normal)
            story.printText("You're the only one for the job, Samus.", 80, 60, 7, 0, story.TextSpeed.Normal)
            pause(500)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            ctsnShip = sprites.create(assets.image`samusShip`, SpriteKind.Misc)
            ctsnShip.setPosition(0, 100)
            music.spooky.loop()
            timer.background(function () {
                pause(4000)
                color.FadeToBlack.startScreenEffect(1000)
            })
            story.spriteMoveToLocation(ctsnShip, 70, 60, 15)
            varLevelState = 0.5
            music.stopAllSounds()
            ctsnShip.destroy()
            Setup_createSamus()
            Setup_createLevel1()
            scene.setBackgroundImage(img`
                ffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffff
                fffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffff
                ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcffffffffffffffffffffffffffff
                cfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffff
                fccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffffffffffffffffffff
                cfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffff
                fccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccffffffffffff
                fffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffff
                fffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccffffffffff
                ffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffff
                ffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffff
                fffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccfff
                ffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffff
                fffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
                ffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffff
                fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
                ffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffff
                ffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffff
                fffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffff
                ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcffffffffffffffffffffffffffff
                cfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffff
                fccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffffffffffffffffffff
                cfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffff
                fccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccffffffffffff
                fffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffff
                fffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccffffffffff
                ffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffff
                ffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffff
                fffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccfff
                ffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffff
                fffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
                ffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffff
                fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
                ffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffff
                ffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffff
                fffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffff
                ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcffffffffffffffffffffffffffff
                cfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffff
                fccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffffffffffffffffffff
                cfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffff
                fccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccffffffffffff
                fffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffff
                fffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccffffffffff
                ffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffff
                ffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffff
                fffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccfff
                ffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffff
                fffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
                ffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffff
                fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
                ffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffff
                ffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffff
                fffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffff
                ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcffffffffffffffffffffffffffff
                cfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffff
                fccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffffffffffffffffffff
                cfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffff
                fccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccffffffffffff
                fffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffff
                fffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccffffffffff
                ffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffff
                ffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffff
                fffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccfff
                ffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffff
                fffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
                `)
            color.clearFadeEffect()
            timer.background(function () {
                Song_Entrance()
            })
            controller.moveSprite(plrSamus, 0, 0)
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusElevator`,
            200,
            false
            )
            tiles.placeOnTile(plrSamus, tiles.getTileLocation(34, 38))
            plrSamus.vy = 45
            plrSamus.ay = 0
            pause(5000)
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusFrontAnim`,
            200,
            false
            )
            plrSamus.vy = 0
            plrSamus.ay = 500
            controller.moveSprite(plrSamus, 100, 0)
            varLevelState = 1
            Song_Enrylo_lvl1()
            story.cancelCurrentCutscene()
        })
    } else if (newGame == false) {
        varLevelState = 1
        ctsnShip.destroy()
        Setup_createSamus()
        Setup_createLevel1()
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            `)
        color.clearFadeEffect()
    }
}
function Song_Callaris_lvl3 () {
    music.setTempo(150)
    timer.background(function () {
        timer.background(function () {
            music.playTone(110, music.beat(BeatFraction.Breve))
        })
        timer.background(function () {
            music.playTone(220, music.beat(BeatFraction.Breve))
        })
        music.rest(music.beat(BeatFraction.Breve))
        timer.background(function () {
            music.playTone(103.83, music.beat(BeatFraction.Double))
        })
        timer.background(function () {
            music.playTone(208, music.beat(BeatFraction.Double))
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            music.playTone(131, music.beat(BeatFraction.Double))
        })
        timer.background(function () {
            music.playTone(262, music.beat(BeatFraction.Double))
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            music.playTone(123.47, music.beat(BeatFraction.Double))
        })
        timer.background(function () {
            music.playTone(247, music.beat(BeatFraction.Double))
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            music.playTone(87.31, music.beat(BeatFraction.Double))
        })
        timer.background(function () {
            music.playTone(175, music.beat(BeatFraction.Double))
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            music.playTone(116.54, music.beat(BeatFraction.Breve))
        })
        timer.background(function () {
            music.playTone(233, music.beat(BeatFraction.Breve))
        })
        music.rest(music.beat(BeatFraction.Breve))
        timer.background(function () {
            music.playTone(110, music.beat(BeatFraction.Breve))
        })
        timer.background(function () {
            music.playTone(220, music.beat(BeatFraction.Breve))
        })
        music.rest(music.beat(BeatFraction.Breve))
        timer.background(function () {
            music.playTone(103.83, music.beat(BeatFraction.Double))
        })
        timer.background(function () {
            music.playTone(208, music.beat(BeatFraction.Double))
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            music.playTone(73.42, music.beat(BeatFraction.Double))
        })
        timer.background(function () {
            music.playTone(147, music.beat(BeatFraction.Double))
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            music.playTone(98, music.beat(BeatFraction.Double))
        })
        timer.background(function () {
            music.playTone(196, music.beat(BeatFraction.Double))
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            music.playTone(69.30, music.beat(BeatFraction.Double))
        })
        timer.background(function () {
            music.playTone(139, music.beat(BeatFraction.Double))
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            music.playTone(87.31, music.beat(BeatFraction.Double))
        })
        timer.background(function () {
            music.playTone(185, music.beat(BeatFraction.Double))
        })
    })
    for (let index = 0; index < 20; index++) {
        music.playTone(740, music.beat(BeatFraction.Quarter))
        music.playTone(622, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.playTone(622, music.beat(BeatFraction.Quarter))
    }
}
function Song_Ending () {
    music.setTempo(126)
    timer.background(function () {
        for (let index = 0; index < 2; index++) {
            timer.background(function () {
                music.playTone(220, music.beat(BeatFraction.Breve))
            })
            timer.background(function () {
                music.playTone(165, music.beat(BeatFraction.Breve))
            })
            music.rest(music.beat(BeatFraction.Breve))
            timer.background(function () {
                music.playTone(262, music.beat(BeatFraction.Breve))
            })
            timer.background(function () {
                music.playTone(220, music.beat(BeatFraction.Breve))
            })
            music.rest(music.beat(BeatFraction.Breve))
            timer.background(function () {
                music.playTone(247, music.beat(BeatFraction.Breve))
            })
            timer.background(function () {
                music.playTone(208, music.beat(BeatFraction.Breve))
            })
            music.rest(music.beat(BeatFraction.Breve))
            timer.background(function () {
                music.playTone(233, music.beat(BeatFraction.Breve))
            })
            timer.background(function () {
                music.playTone(196, music.beat(BeatFraction.Breve))
            })
            music.rest(music.beat(BeatFraction.Breve))
        }
        timer.background(function () {
            music.playTone(220, music.beat(BeatFraction.Breve))
        })
        timer.background(function () {
            music.playTone(165, music.beat(BeatFraction.Breve))
        })
    })
    for (let index = 0; index < 10; index++) {
        music.playTone(110, music.beat(BeatFraction.Quarter))
        music.playTone(110, music.beat(BeatFraction.Quarter))
        music.playTone(110, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(110, music.beat(BeatFraction.Quarter))
        music.playTone(110, music.beat(BeatFraction.Quarter))
        music.playTone(110, music.beat(BeatFraction.Half))
        music.playTone(110, music.beat(BeatFraction.Quarter))
        music.playTone(110, music.beat(BeatFraction.Quarter))
        music.playTone(110, music.beat(BeatFraction.Quarter))
        music.playTone(110, music.beat(BeatFraction.Quarter))
        music.playTone(110, music.beat(BeatFraction.Half))
    }
}
sprites.onOverlap(SpriteKind.kndMissiles, SpriteKind.redDoor, function (sprite, otherSprite) {
    timer.throttle("action", 3000, function () {
        sprite.destroy()
        openDoor(Math.round(Math.round(otherSprite.x / 16)), Math.round(Math.round(otherSprite.y) / 16))
        animation.runImageAnimation(
        otherSprite,
        assets.animation`redDoorOpen`,
        100,
        false
        )
        timer.after(2500, function () {
            closeDoor(Math.round(Math.round(otherSprite.x / 16)), Math.round(Math.round(otherSprite.y) / 16))
            animation.runImageAnimation(
            otherSprite,
            assets.animation`redDoorClose`,
            100,
            false
            )
        })
    })
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (varLevelState >= 1) {
        if (varJumpStatus == 0) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusStandRight`,
            200,
            false
            )
        }
        if (varJumpStatus == 1) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusJumpAimRight`,
            200,
            true
            )
        }
        if (varJumpStatus == -2) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusMorphBallIdle`,
            75,
            true
            )
            controller.moveSprite(plrSamus, 100, 0)
        }
    }
})
function Setup_createSamus () {
    plrSamus = sprites.create(assets.image`samusFront`, SpriteKind.Player)
    controller.moveSprite(plrSamus, 100, 0)
    plrSamus.ay = 500
    scene.cameraFollowSprite(plrSamus)
    stbEnergy = statusbars.create(20, 4, StatusBarKind.healthEnergy)
    stbEnergy.max = 100
    stbEnergy.setLabel(convertToText(stbEnergy.value), 5)
    stbEnergy.positionDirection(CollisionDirection.Left)
    stbEnergy.setColor(3, 12, 2)
    stbEnergy.setBarBorder(1, 1)
    stbEnergy.setBarSize(42, 7)
    stbEnergy.setOffsetPadding(-55, 5)
}
sprites.onCreated(SpriteKind.kndChargeBeam, function (sprite) {
    sprite.z = 4
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (varLevelState >= 1) {
        if (varJumpStatus == 0) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusStandLeft`,
            200,
            false
            )
        }
        if (varJumpStatus == 1) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusJumpAimLeft`,
            200,
            true
            )
        }
        if (varJumpStatus == -2) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusMorphBallIdle`,
            75,
            true
            )
            controller.moveSprite(plrSamus, 100, 0)
        }
    }
})
sprites.onCreated(SpriteKind.kndPowerBombGlass, function (sprite) {
    sprite.setImage(img`
        6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 . . . . . . . . . . . . . . 9 
        1 . . . 9 . . . . . . . . . . 9 
        1 . . 9 . . . . . . . . . . . 9 
        1 . 6 . . . . . . . . . . . . 9 
        1 . . . . . . . . . . . . . . 9 
        1 . . . . . . . . . . . . . . 9 
        1 . . . . . . . . . . . . . . 6 
        1 . . . . . . . . . . . . . . 6 
        1 . . . . . . . . . . . . . . 6 
        1 . . . . . . . . . . . . . . 6 
        1 . . . . . . . . . . . . . . 6 
        1 . . . . . . . . . . . 9 . . 1 
        1 . . . . . . . . . . 9 . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 9 9 6 6 6 6 6 6 6 6 6 6 1 1 1 
        `)
})
scene.onOverlapTile(SpriteKind.kndPowerBeam, assets.tile`breakableBlock0`, function (sprite, location) {
    timer.after(100, function () {
        tiles.setTileAt(location, assets.tile`transparency16`)
        for (let index = 0; index < 10; index++) {
            projbreakEffect = sprites.createProjectileFromSide(img`
                c 
                `, randint(-25, 25), randint(-25, 25))
            tiles.placeOnTile(projbreakEffect, location)
            timer.after(250, function () {
                for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
                    value.destroy(effects.disintegrate, randint(100, 500))
                }
            })
        }
    })
})
statusbars.onZero(StatusBarKind.missileAmmo, function (status) {
    txtMissileCounter.setIcon(assets.image`missileIconOff`)
    varSelectedMissile = 0
})
function Setup_createLevel1 () {
    tiles.loadMap(tiles.createMap(tilemap`lvl1_Enrylo`))
    scene.setBackgroundImage(img`
        ffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffff
        fffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffff
        ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcffffffffffffffffffffffffffff
        cfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffff
        fccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffffffffffffffffffff
        cfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffff
        fccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccffffffffffff
        fffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffff
        fffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccffffffffff
        ffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffff
        ffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffff
        fffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccfff
        ffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffff
        fffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
        ffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffff
        fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
        ffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffff
        ffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffff
        fffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffff
        ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcffffffffffffffffffffffffffff
        cfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffff
        fccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffffffffffffffffffff
        cfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffff
        fccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccffffffffffff
        fffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffff
        fffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccffffffffff
        ffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffff
        ffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffff
        fffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccfff
        ffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffff
        fffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
        ffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffff
        fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
        ffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffff
        ffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffff
        fffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffff
        ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcffffffffffffffffffffffffffff
        cfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffff
        fccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffffffffffffffffffff
        cfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffff
        fccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccffffffffffff
        fffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffff
        fffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccffffffffff
        ffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffff
        ffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffff
        fffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccfff
        ffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffff
        fffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
        ffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffff
        fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
        ffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffffffffffffffffcffffffffcccffffffff
        ffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffffffffffffffffcfffffffccccffffffff
        fffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffff
        ffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcfffffffffffffffffffffffffffffcfcffffffffffffffffffffffffffff
        cfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffffcfcccfffffffffffffffffffffffffff
        fccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffffffffffffffffffff
        cfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffffcfccffffffffffffffffffffffffffff
        fccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccfffffffffffffccfcfffffffffffffccffffffffffff
        fffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffccccfffffffffff
        fffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccfffffffffffffffffffffffffffcccccffffffffff
        ffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffff
        ffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffff
        fffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccffffffffffffccfffffffffffffffcccfff
        ffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffffffffffffccccfffffffffffffffcffff
        fffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffccfffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffcffffffffff
        `)
    tiles.placeOnTile(plrSamus, tiles.getTileLocation(170, 28))
    if (varMorphBallFound == false) {
        itemMorphBall = sprites.create(assets.image`itemMorphBall`, SpriteKind.kndItemMorphBall)
        tiles.placeOnTile(itemMorphBall, tiles.getTileLocation(7, 30))
    }
    if (varMissile1Found == false) {
        itemMissilePack = sprites.create(assets.image`itemMissileTank`, SpriteKind.kndItemMissileTank)
        tiles.placeOnTile(itemMissilePack, tiles.getTileLocation(82, 37))
        sprites.setDataNumber(itemMissilePack, "missileId", 0)
    }
    if (varChargeBeamFound == false) {
        itemChargeBeam = sprites.create(assets.image`itemChargeBeam`, SpriteKind.kndItemChargeBean)
        tiles.placeOnTile(itemChargeBeam, tiles.getTileLocation(194, 13))
    }
    tiles.createSpritesOnTiles(assets.tile`myTile3`, SpriteKind.blueDoor)
    tiles.createSpritesOnTiles(assets.tile`myTile1`, SpriteKind.redDoor)
    tiles.createSpritesOnTiles(assets.tile`myTile9`, SpriteKind.orangeDoor)
    tiles.createSpritesOnTiles(assets.tile`myTile2`, SpriteKind.greenDoor)
    varMissileId = 0
    arrMissileFound = [
    false,
    false,
    false,
    false
    ]
    varMissileId = 0
    arrEtankFound = [
    false,
    false,
    false,
    false
    ]
    tiles.createSpritesOnTiles(assets.tile`myTile11`, SpriteKind.kndItemMissileTank)
    tiles.createSpritesOnTiles(assets.tile`myTile15`, SpriteKind.kndItemEtank)
    timer.after(1000, function () {
        tiles.replaceAllTiles(assets.tile`myTile11`, assets.tile`breakableBlock0`)
        tiles.replaceAllTiles(assets.tile`myTile15`, assets.tile`transparency16`)
    })
}
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (varChargeBeamFound == true) {
        if (varJumpStatus != -2) {
            varChargeBeamActivate += 1
            if (varChargeBeamActivate == 1) {
                projChargeBeam = sprites.createProjectileFromSprite(assets.image`chargeBeam`, plrSamus, 0, 0)
                projChargeBeam.setKind(SpriteKind.kndChargeBeam)
                projChargeBeam.setFlag(SpriteFlag.RelativeToCamera, true)
                if (varDirection == 1) {
                    projChargeBeam.setPosition(60, 50)
                } else if (varDirection == 2) {
                    projChargeBeam.setPosition(100, 50)
                }
                animation.runImageAnimation(
                projChargeBeam,
                assets.animation`chargeBeam`,
                200,
                true
                )
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (controller.down.isPressed()) {
        game.splash("a")
        story.startCutscene(function () {
            tiles.placeOnTile(sprite, tiles.getTileLocation(189, 28))
            controller.moveSprite(plrSamus, 0, 0)
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusElevator`,
            200,
            false
            )
            plrSamus.vy = 45
            plrSamus.ay = 0
            pause(5000)
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusFrontAnim`,
            200,
            false
            )
            plrSamus.vy = 0
            plrSamus.ay = 500
            controller.moveSprite(plrSamus, 100, 0)
            varLevelState = 2
            story.cancelCurrentCutscene()
        })
    }
})
function closeDoor (doorCol: number, doorRow: number) {
    varDoorCol = doorCol
    varDoorRow = doorRow
    for (let index = 0; index < 4; index++) {
        tiles.setWallAt(tiles.getTileLocation(varDoorCol, varDoorRow), true)
        varDoorRow += -1
    }
    varDoorRow = doorRow
    for (let index = 0; index < 4; index++) {
        tiles.setWallAt(tiles.getTileLocation(varDoorCol - 1, varDoorRow), true)
        varDoorRow += -1
    }
    varDoorRow = doorRow
    for (let index = 0; index < 4; index++) {
        tiles.setWallAt(tiles.getTileLocation(varDoorCol - 2, varDoorRow), true)
        varDoorRow += -1
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (varLevelState >= 1) {
        varDirection = 2
        if (varJumpStatus == 0) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusWalkRightAim`,
            75,
            true
            )
        }
        if (varJumpStatus == 1) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusJumpAimRight`,
            200,
            true
            )
        }
        if (varJumpStatus == -2) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusMorphBallRight`,
            75,
            true
            )
            controller.moveSprite(plrSamus, 100, 0)
        }
        if (varChargeBeamActivate >= 1) {
            projChargeBeam.setPosition(100, 50)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndItemEtank, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (varLevelState == 1) {
        varEnryloMusic = false
    } else if (varLevelState == 2) {
        varNorinMusic = false
    } else if (varLevelState == 3) {
        varCallarisMusic = false
    }
    music.stopAllSounds()
    timer.background(function () {
        Song_Item_Get()
    })
    game.splash("E-Tank Acquired", "Extra 100+ Max Health.")
    stbEnergy.max = stbEnergy.max + 100
    stbEnergy.value = stbEnergy.value + 100
    arrEtankFound[sprites.readDataNumber(otherSprite, "etankId") - 1] = true
    stbEnergy.setLabel(convertToText(stbEnergy.value), 5)
    varItemGetMusic = false
    if (varLevelState == 1) {
        Song_Enrylo_lvl1()
    } else if (varLevelState == 2) {
        Song_Norin_lvl2()
    } else if (varLevelState == 3) {
        Song_Callaris_lvl3()
    }
})
sprites.onOverlap(SpriteKind.kndProjPowerBomb, SpriteKind.kndRidleyGlass, function (sprite, otherSprite) {
    varRidleyGlassLocation = 65
    for (let value of sprites.allOfKind(SpriteKind.kndRidleyGlass)) {
        tiles.setWallAt(tiles.getTileLocation(varRidleyGlassLocation, 39), false)
        value.destroy(effects.warmRadial, 500)
        varRidleyGlassLocation += 1
    }
})
sprites.onOverlap(SpriteKind.kndPowerBeam, SpriteKind.blueDoor, function (sprite, otherSprite) {
    timer.throttle("action", 3000, function () {
        sprite.destroy()
        openDoor(Math.round(Math.round(otherSprite.x / 16)), Math.round(Math.round(otherSprite.y) / 16))
        animation.runImageAnimation(
        otherSprite,
        assets.animation`blueDoorOpen`,
        100,
        false
        )
        timer.after(2500, function () {
            closeDoor(Math.round(Math.round(otherSprite.x / 16)), Math.round(Math.round(otherSprite.y) / 16))
            animation.runImageAnimation(
            otherSprite,
            assets.animation`blueDoorClose`,
            100,
            false
            )
        })
    })
})
function testing_give_all_items () {
    varChargeBeamFound = true
    varHighJumpFound = true
    varPowerBombFound = true
    varMorphBallFound = true
    varSuperMissileFound = true
    varMissile1Found = true
    stbMissiles = statusbars.create(0, 0, StatusBarKind.missileAmmo)
    stbMissiles.max = 5
    txtMissileCounter = textsprite.create(" " + convertToText(stbMissiles.value), 15, 1)
    txtMissileCounter.setIcon(assets.image`missileIconOff`)
    txtMissileCounter.setFlag(SpriteFlag.RelativeToCamera, true)
    txtMissileCounter.setPosition(15, 15)
    txtMissileCounter.z = 10
    varMissileGetCheck = true
    varMissile1Found = true
}
sprites.onOverlap(SpriteKind.kndChargeBeam, SpriteKind.orangeDoor, function (sprite, otherSprite) {
    sprite.destroy()
    openDoor(Math.round(Math.round(otherSprite.x / 16)), Math.round(Math.round(otherSprite.y) / 16))
    animation.runImageAnimation(
    otherSprite,
    assets.animation`orangeDoorOpen`,
    100,
    false
    )
    timer.after(2500, function () {
        closeDoor(Math.round(Math.round(otherSprite.x / 16)), Math.round(Math.round(otherSprite.y) / 16))
        animation.runImageAnimation(
        otherSprite,
        assets.animation`orangeDoorClose`,
        100,
        false
        )
    })
})
sprites.onCreated(SpriteKind.kndItemMissileTank, function (sprite) {
    varMissileId += 1
    sprite.setImage(assets.image`itemMissileTank`)
    sprites.setDataNumber(sprite, "missileId", varMissileId)
    sprite.z = -99
    if (arrMissileFound[varMissileId - 1]) {
        sprite.destroy()
    }
})
sprites.onCreated(SpriteKind.kndItemEtank, function (sprite) {
    varEtankId += 1
    sprite.setImage(assets.image`itemE-Tank`)
    sprites.setDataNumber(sprite, "etankId", varEtankId)
    sprite.z = -99
    if (arrEtankFound[varEtankId - 1]) {
        sprite.destroy()
    }
})
sprites.onCreated(SpriteKind.kndEnemyBat, function (sprite) {
    let varEnemyState = 0
    sprite.setImage(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `)
    characterAnimations.loopFrames(
    sprite,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c . . c c . . . . . . . . 
        . . c 3 c c 3 c c c . . . . . . 
        . c b 3 b c 3 b c c c . . . . . 
        . c b b b b b b b b f f . . . . 
        c c b b b b b b b b f f . . . . 
        c b 1 b b b 1 b b c f f f . . . 
        c b b b b b b b b f f f f . . . 
        f b c b b b c b c c b b b . . . 
        f b 1 f f f 1 b f c c c c . . . 
        . f b b b b b b f b b c c . . . 
        c c f b b b b b c c b b c . . . 
        c c c f f f f f f c c b b c . . 
        . c c c . . . . . . c c c c c . 
        . . c c c . . . . . . . c c c c 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c b 1 b b b 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    sprite,
    [img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b b b b b b c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c b b b c b c 
        . . . c f b b b b 1 f f f 1 b f 
        . . c c f b b b b b b b b b b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . . c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 b f f 
        . c c b c b f c b b b b b b c . 
        . c b b c b b c b b b b b b c . 
        . c b c c c b b b 1 b b b 1 b c 
        . . c c c c c b b b b b b b b c 
        . . . c f b b b b c b b b c b f 
        . . c c f b b b b 1 f f f 1 b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . c c . . 
        . . . . . . c c c 3 c c 3 c . . 
        . . . . . c c c b 3 c b 3 b c . 
        . . . . f f b b b b b b b b c . 
        . . . . f f b b b b b b b b c c 
        . . . f f f c b b 1 b b b 1 b c 
        . . . f f f f b b b b b b b b c 
        . . . b b b c c b c b b b c b f 
        . . . c c c c f b 1 f f f 1 b f 
        . . . c c b b f b b b b b b f . 
        . . . c b b c c b b b b b f c c 
        . . c b b c c f f f f f f c c c 
        . c c c c c . . . . . . c c c . 
        c c c c . . . . . . . c c c . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b b 1 b b b 1 b c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.FacingRight)
    )
    sprite.setBounceOnWall(true)
    if (varEnemyState == 0) {
        sprites.setDataNumber(sprite, "batHealth", 3)
    } else if (varEnemyState == 1) {
        sprites.setDataNumber(sprite, "batHealth", 5)
    } else if (varEnemyState == 2) {
        sprites.setDataNumber(sprite, "batHealth", 7)
    }
    if (randint(1, 2) == 1) {
        sprite.setVelocity(100, 0)
    } else {
        sprite.setVelocity(-100, 0)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (varLevelState == 0 && othrCursorPosition == 0) {
        othrCursor.y = 75
        othrCursorPosition = 1
        music.knock.play()
    }
    if (varLevelState >= 1) {
        if (varMorphBallFound == true) {
            if (varJumpStatus == -1 && varDirection == 1) {
                animation.runImageAnimation(
                plrSamus,
                assets.animation`samusMorphBallLeft`,
                75,
                true
                )
                controller.moveSprite(plrSamus, 100, 0)
                varJumpStatus = -2
            } else if (varJumpStatus == -1 && varDirection == 2) {
                animation.runImageAnimation(
                plrSamus,
                assets.animation`samusMorphBallRight`,
                75,
                true
                )
                controller.moveSprite(plrSamus, 100, 0)
                varJumpStatus = -2
            }
        }
        if (varJumpStatus == 0 && varDirection == 1) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusCrouchLeftAnim`,
            100,
            false
            )
            controller.moveSprite(plrSamus, 0, 0)
            varJumpStatus = -1
        } else if (varJumpStatus == 0 && varDirection == 2) {
            animation.runImageAnimation(
            plrSamus,
            assets.animation`samusCrouchRightAnim`,
            100,
            false
            )
            controller.moveSprite(plrSamus, 0, 0)
            varJumpStatus = -1
        }
    }
})
function Song_Entrance () {
    music.setTempo(100)
    timer.background(function () {
        music.playTone(587, music.beat(BeatFraction.Whole))
    })
    // Samus Entrance Theme
    music.playTone(294, music.beat(BeatFraction.Whole))
    timer.background(function () {
        music.playTone(698, music.beat(BeatFraction.Whole))
    })
    music.playTone(349, music.beat(BeatFraction.Whole))
    timer.background(function () {
        music.playTone(587, music.beat(BeatFraction.Whole))
    })
    music.playTone(294, music.beat(BeatFraction.Whole))
    timer.background(function () {
        music.playTone(523, music.beat(BeatFraction.Whole))
    })
    music.playTone(262, music.beat(BeatFraction.Whole))
    timer.background(function () {
        music.playTone(440, music.beat(BeatFraction.Double))
    })
    music.playTone(220, music.beat(BeatFraction.Double))
    timer.background(function () {
        music.playTone(440, music.beat(BeatFraction.Double))
    })
    music.playTone(220, music.beat(BeatFraction.Double))
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (varLevelState >= 1) {
        if (varSelectedMissile == 0 && varMissile1Found == true) {
            txtMissileCounter.setIcon(assets.image`missileIconOn`)
            varSelectedMissile = 1
        } else if (varSelectedMissile == 1 && varMissile1Found == true) {
            txtMissileCounter.setIcon(assets.image`missileIconOff`)
            varSelectedMissile = 0
        }
    }
})
sprites.onCreated(SpriteKind.orangeDoor, function (sprite) {
    sprite.setImage(assets.image`doorOrange`)
    sprite.z = 4
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (varChargeBeamActivate >= 30 && varJumpStatus != 2) {
        projChargeBeam.setFlag(SpriteFlag.RelativeToCamera, false)
        projChargeBeam.setKind(SpriteKind.kndChargeBeam)
        projChargeBeam.setPosition(plrSamus.x, plrSamus.y - 10)
        if (varDirection == 1) {
            projChargeBeam.setVelocity(-250, 0)
        } else if (varDirection == 2) {
            projChargeBeam.setVelocity(250, 0)
        }
    } else if (varChargeBeamActivate >= 1 && varChargeBeamActivate < 25) {
        for (let value of sprites.allOfKind(SpriteKind.kndChargeBeam)) {
            value.destroy(effects.disintegrate, 200)
        }
    }
    varChargeBeamActivate = 0
})
function Song_Enrylo_lvl1 () {
    varEnryloMusic = true
    music.setTempo(80)
    // 1-8 lvl1
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(156, music.beat(BeatFraction.Whole))
        }
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(165, music.beat(BeatFraction.Double))
        }
    })
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(622, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(554, music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Half))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(156, music.beat(BeatFraction.Whole))
        }
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(165, music.beat(BeatFraction.Double))
        }
    })
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(554, music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Half))
    }
    // 8-11
    timer.background(function () {
        if (varEnryloMusic) {
            if (varEnryloMusic) {
                music.playTone(156, music.beat(BeatFraction.Whole))
            }
        }
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(165, music.beat(BeatFraction.Whole))
        }
    })
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(622, music.beat(BeatFraction.Double))
        }
    })
    if (varEnryloMusic) {
        music.playTone(622, music.beat(BeatFraction.Double))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Quarter))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(156, music.beat(BeatFraction.Whole))
        }
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(165, music.beat(BeatFraction.Whole))
        }
    })
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(466, music.beat(BeatFraction.Double))
        }
    })
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Double))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Half))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(156, music.beat(BeatFraction.Whole))
        }
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(165, music.beat(BeatFraction.Whole))
        }
    })
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(370, music.beat(BeatFraction.Double))
        }
    })
    if (varEnryloMusic) {
        music.playTone(370, music.beat(BeatFraction.Double))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Whole))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(156, music.beat(BeatFraction.Whole))
        }
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(165, music.beat(BeatFraction.Whole))
        }
    })
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(311, music.beat(BeatFraction.Double))
        }
    })
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Double))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Double))
    }
    // 12-15 Lvl1
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(156, music.beat(BeatFraction.Whole))
        }
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(165, music.beat(BeatFraction.Whole))
        }
    })
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(622, music.beat(BeatFraction.Double))
        }
    })
    if (varEnryloMusic) {
        music.playTone(622, music.beat(BeatFraction.Double))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Quarter))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(156, music.beat(BeatFraction.Whole))
        }
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(165, music.beat(BeatFraction.Whole))
        }
    })
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(466, music.beat(BeatFraction.Double))
        }
    })
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Double))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Half))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(156, music.beat(BeatFraction.Whole))
        }
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(165, music.beat(BeatFraction.Whole))
        }
    })
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(370, music.beat(BeatFraction.Double))
        }
    })
    if (varEnryloMusic) {
        music.playTone(370, music.beat(BeatFraction.Double))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.playTone(740, music.beat(BeatFraction.Whole))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(156, music.beat(BeatFraction.Whole))
        }
        if (varEnryloMusic) {
            music.rest(music.beat(BeatFraction.Half))
        }
        if (varEnryloMusic) {
            music.playTone(165, music.beat(BeatFraction.Whole))
        }
    })
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(311, music.beat(BeatFraction.Double))
        }
    })
    if (varEnryloMusic) {
        music.playTone(622, music.beat(BeatFraction.Double))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Double))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            Song_Part_Enrylo_lvl1_Bass_2026()
        }
    })
    if (varEnryloMusic) {
        music.playTone(622, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(554, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(370, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Whole))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            Song_Part_Enrylo_lvl1_Bass_2026()
        }
    })
    if (varEnryloMusic) {
        music.playTone(233, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(370, music.beat(BeatFraction.Half))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(415, music.beat(BeatFraction.Whole))
        }
    })
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Double))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            Song_Part_Enrylo_lvl1_Bass_2026()
        }
    })
    if (varEnryloMusic) {
        music.playTone(622, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(554, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(370, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Whole))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            Song_Part_Enrylo_lvl1_Bass_2026()
        }
    })
    if (varEnryloMusic) {
        music.playTone(233, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            music.playTone(415, music.beat(BeatFraction.Whole))
        }
    })
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Double))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            Song_Part_Enrylo_lvl1_Bass_2026()
        }
    })
    if (varEnryloMusic) {
        music.playTone(370, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Whole))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            Song_Part_Enrylo_lvl1_Bass_2026()
        }
    })
    if (varEnryloMusic) {
        music.playTone(370, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        music.playTone(554, music.beat(BeatFraction.Whole))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Half))
    }
    timer.background(function () {
        if (varEnryloMusic) {
            Song_Part_Enrylo_lvl1_Bass_2026()
        }
    })
    if (varEnryloMusic) {
        music.playTone(622, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(554, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(370, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(466, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(415, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(370, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(370, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(277, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.playTone(311, music.beat(BeatFraction.Quarter))
    }
    if (varEnryloMusic) {
        music.rest(music.beat(BeatFraction.Half))
    }
    if (varEnryloMusic) {
        Song_Enrylo_lvl1()
    }
}
sprites.onOverlap(SpriteKind.kndProjPowerBomb, SpriteKind.kndPowerBombGlass, function (sprite, otherSprite) {
    varPowerBombGlassLocation = 13
    for (let value of sprites.allOfKind(SpriteKind.kndPowerBombGlass)) {
        tiles.setWallAt(tiles.getTileLocation(185, varPowerBombGlassLocation), false)
        value.destroy(effects.coolRadial, 500)
        varPowerBombGlassLocation += 1
    }
})
sprites.onCreated(SpriteKind.redDoor, function (sprite) {
    sprite.setImage(assets.image`doorRed`)
})
sprites.onCreated(SpriteKind.kndRidleyGlass, function (sprite) {
    sprite.setImage(img`
        c c c c c c c c c c c c c c c c 
        c . . . . . . . . . . . . . . 3 
        c . . . 9 . . . . . . . . . . 3 
        c . . 9 . . . . . . . . . . . 3 
        c . 6 . . . . . . . . . . . . 3 
        c . . . . . . . . . . . . . . 3 
        c . . . . . . . . . . . . . . 3 
        c . . . . . . . . . . . . . . a 
        c . . . . . . . . . . . . . . a 
        c . . . . . . . . . . . . . . a 
        c . . . . . . . . . . . . . . a 
        c . . . . . . . . . . . . . . a 
        c . . . . . . . . . . . 9 . . c 
        c . . . . . . . . . . 9 . . . c 
        c . . . . . . . . . . . . . . c 
        c 3 3 a a a a a a a a a a c c c 
        `)
})
function Song_Norin_lvl2 () {
    music.setTempo(110)
    for (let index = 0; index < 2; index++) {
        // Bars 1-4. (RepeatTwice)
        timer.background(function () {
            music.playTone(82.41, music.beat(BeatFraction.Half))
            music.playTone(165, music.beat(BeatFraction.Half))
        })
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(247, music.beat(BeatFraction.Half))
        timer.background(function () {
            music.playTone(82.41, music.beat(BeatFraction.Half))
            music.playTone(165, music.beat(BeatFraction.Half))
        })
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Half))
        timer.background(function () {
            music.playTone(82.41, music.beat(BeatFraction.Half))
            music.playTone(165, music.beat(BeatFraction.Half))
        })
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Half))
        timer.background(function () {
            music.playTone(82.41, music.beat(BeatFraction.Half))
            music.playTone(165, music.beat(BeatFraction.Half))
        })
        music.playTone(247, music.beat(BeatFraction.Whole))
        music.playTone(233, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        // Bars 5-6 (RepeatTwice)
        timer.background(function () {
            music.playTone(65.41, music.beat(BeatFraction.Half))
            music.playTone(131, music.beat(BeatFraction.Half))
        })
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Half))
        timer.background(function () {
            music.playTone(65.41, music.beat(BeatFraction.Half))
            music.playTone(131, music.beat(BeatFraction.Half))
        })
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(247, music.beat(BeatFraction.Half))
        timer.background(function () {
            music.playTone(73.42, music.beat(BeatFraction.Half))
            music.playTone(147, music.beat(BeatFraction.Half))
        })
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Half))
        timer.background(function () {
            music.playTone(73.42, music.beat(BeatFraction.Half))
            music.playTone(147, music.beat(BeatFraction.Half))
        })
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 4; index++) {
        // Bars 7-10 (RepeatTwice)
        timer.background(function () {
            music.playTone(82.41, music.beat(BeatFraction.Half))
            music.playTone(123.47, music.beat(BeatFraction.Half))
            music.playTone(165, music.beat(BeatFraction.Half))
        })
        for (let index = 0; index < 3; index++) {
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(247, music.beat(BeatFraction.Quarter))
        }
        timer.background(function () {
            music.playTone(92.50, music.beat(BeatFraction.Half))
            music.playTone(139, music.beat(BeatFraction.Half))
            music.playTone(185, music.beat(BeatFraction.Half))
        })
        for (let index = 0; index < 3; index++) {
            music.playTone(466, music.beat(BeatFraction.Quarter))
            music.playTone(277, music.beat(BeatFraction.Quarter))
        }
        timer.background(function () {
            music.playTone(87.31, music.beat(BeatFraction.Half))
            music.playTone(131, music.beat(BeatFraction.Half))
            music.playTone(175, music.beat(BeatFraction.Half))
        })
        for (let index = 0; index < 3; index++) {
            music.playTone(440, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
        }
        timer.background(function () {
            music.playTone(123.47, music.beat(BeatFraction.Half))
            music.playTone(185, music.beat(BeatFraction.Half))
            music.playTone(247, music.beat(BeatFraction.Half))
        })
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.playTone(370, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.playTone(370, music.beat(BeatFraction.Quarter))
    }
    for (let index = 0; index < 2; index++) {
        // Bars 11-14. (RepeatTwice)
        timer.background(function () {
            music.playTone(82.41, music.beat(BeatFraction.Whole))
            music.playTone(123.47, music.beat(BeatFraction.Half))
            music.playTone(130.81, music.beat(BeatFraction.Whole))
            music.playTone(123.47, music.beat(BeatFraction.Half))
        })
        music.playTone(370, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.playTone(740, music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(370, music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        timer.background(function () {
            music.playTone(65.41, music.beat(BeatFraction.Whole))
            music.playTone(92.50, music.beat(BeatFraction.Half))
            music.playTone(98, music.beat(BeatFraction.Whole))
            music.playTone(92.50, music.beat(BeatFraction.Half))
        })
        music.playTone(880, music.beat(BeatFraction.Quarter))
        music.playTone(740, music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(370, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Quarter))
        music.playTone(659, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 4; index++) {
        // Bars 15-18. (Repeat4x)
        timer.background(function () {
            timer.background(function () {
                music.playTone(82.41, music.beat(BeatFraction.Double))
            })
            music.playTone(164.81, music.beat(BeatFraction.Double))
            timer.background(function () {
                music.playTone(82.41, music.beat(BeatFraction.Whole))
            })
            music.playTone(165, music.beat(BeatFraction.Whole))
        })
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(740, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(740, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
    }
}
sprites.onCreated(SpriteKind.blueDoor, function (sprite) {
    sprite.setImage(assets.image`doorBlue`)
})
function openDoor (doorCol: number, doorRow: number) {
    varDoorCol = doorCol
    varDoorRow = doorRow
    for (let index = 0; index < 4; index++) {
        tiles.setWallAt(tiles.getTileLocation(varDoorCol, varDoorRow), false)
        varDoorRow += -1
    }
    varDoorRow = doorRow
    for (let index = 0; index < 4; index++) {
        tiles.setWallAt(tiles.getTileLocation(varDoorCol - 1, varDoorRow), false)
        varDoorRow += -1
    }
    varDoorRow = doorRow
    for (let index = 0; index < 4; index++) {
        tiles.setWallAt(tiles.getTileLocation(varDoorCol - 2, varDoorRow), false)
        varDoorRow += -1
    }
}
let varPowerBombGlassLocation = 0
let varEtankId = 0
let varRidleyGlassLocation = 0
let varDoorRow = 0
let varDoorCol = 0
let arrEtankFound: boolean[] = []
let varMissileId = 0
let itemChargeBeam: Sprite = null
let itemMissilePack: Sprite = null
let projbreakEffect: Sprite = null
let stbEnergy: StatusBarSprite = null
let ctsnShip: Sprite = null
let projChargeBeam: Sprite = null
let varChargeBeamActivate = 0
let varTitleMusic = false
let varMorphBallFound = false
let itemMorphBall: Sprite = null
let arrMissileFound: boolean[] = []
let varMissile1Found = false
let varMissileGetCheck = false
let varCallarisMusic = false
let varNorinMusic = false
let txtContinue: TextSprite = null
let varGameStarted = 0
let txtNewGame: TextSprite = null
let txtName: TextSprite = null
let txtLogo: TextSprite = null
let txtMissileCounter: TextSprite = null
let projMissile: Sprite = null
let stbMissiles: StatusBarSprite = null
let projPowerBeam: Sprite = null
let varSelectedMissile = 0
let varDirection = 0
let projPowerBomb: Sprite = null
let varJumpStatus = 0
let varChargeBeamFound = false
let varItemGetMusic = false
let varEnryloMusic = false
let othrCursor: Sprite = null
let othrCursorPosition = 0
let itemSuperMissile: Sprite = null
let varSuperMissileFound = false
let itemPowerBomb: Sprite = null
let varPowerBombFound = false
let itemHighJump: Sprite = null
let varHighJumpFound = false
let plrSamus: Sprite = null
let varLevelState = 0
music.setVolume(20)
varLevelState = 2
if (varLevelState == 0) {
    Setup_Title_Screen()
}
if (varLevelState == 1) {
    Setup_createSamus()
    Setup_createLevel1()
}
if (varLevelState == 2) {
    Setup_createSamus()
    testing_give_all_items()
    Setup_createLevel2()
}
forever(function () {
    if (varLevelState >= 1) {
        if (characterAnimations.matchesRule(plrSamus, characterAnimations.rule(Predicate.HittingWallDown)) && varJumpStatus == 1) {
            varJumpStatus = 0
            if (varDirection == 2) {
                if (plrSamus.vx != 0) {
                    animation.runImageAnimation(
                    plrSamus,
                    assets.animation`samusWalkRightAim`,
                    75,
                    true
                    )
                } else if (varJumpStatus == 1) {
                    animation.runImageAnimation(
                    plrSamus,
                    assets.animation`samusJumpAimRight`,
                    200,
                    true
                    )
                } else if (plrSamus.vx == 0 && plrSamus.vy == 0) {
                    animation.runImageAnimation(
                    plrSamus,
                    assets.animation`samusStandRight`,
                    200,
                    false
                    )
                }
            }
            if (varDirection == 1) {
                if (plrSamus.vx != 0) {
                    animation.runImageAnimation(
                    plrSamus,
                    assets.animation`samusWalkLeftAim`,
                    75,
                    true
                    )
                } else if (varJumpStatus == 1) {
                    animation.runImageAnimation(
                    plrSamus,
                    assets.animation`samusJumpAimLeft`,
                    200,
                    true
                    )
                } else if (plrSamus.vx == 0 && plrSamus.vy == 0) {
                    animation.runImageAnimation(
                    plrSamus,
                    assets.animation`samusStandLeft`,
                    200,
                    false
                    )
                }
            }
        }
    }
})
forever(function () {
    if (varChargeBeamActivate >= 25) {
        timer.throttle("action", 500, function () {
            animation.runImageAnimation(
            projChargeBeam,
            assets.animation`chargeBeamReady`,
            250,
            true
            )
        })
    }
})
forever(function () {
    if (varLevelState >= 1) {
        if (varSelectedMissile == 1 && varMissile1Found == true) {
            txtMissileCounter.setIcon(assets.image`missileIconOn`)
        } else if (varSelectedMissile == 0 && varMissile1Found == true) {
            txtMissileCounter.setIcon(assets.image`missileIconOff`)
        }
    }
})
