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
    export const kndEnemyBatDiver = SpriteKind.create()
    export const kndEnemySnakes = SpriteKind.create()
    export const kndEnemyKaiju = SpriteKind.create()
    export const kndKaijuBigFire = SpriteKind.create()
    export const kndKaijuEgg = SpriteKind.create()
    export const kndEnemyBabyKaiju = SpriteKind.create()
    export const kndEnemyCrawler = SpriteKind.create()
    export const kndSuperMissile = SpriteKind.create()
    export const kndSnakeSpit = SpriteKind.create()
    export const test = SpriteKind.create()
    export const kndSaveStation = SpriteKind.create()
    export const kndBossCore = SpriteKind.create()
    export const kndEnemyTurret = SpriteKind.create()
}
namespace StatusBarKind {
    export const healthEnergy = StatusBarKind.create()
    export const missileAmmo = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.kndChargeBeam, SpriteKind.kndEnemyKaiju, function (sprite, otherSprite) {
    hitEnemy(-4, sprite, otherSprite)
})
function Setup_createLevel2 (_continue: boolean, fromLevel: boolean) {
    tiles.loadMap(tiles.createMap(tilemap`lvl2_Norin`))
    scene.setBackgroundImage(assets.image`NorinBG`)
    saveStation = sprites.create(assets.image`lvl12SaveStation`, SpriteKind.kndSaveStation)
    tiles.placeOnTile(saveStation, tiles.getTileLocation(3, 34))
    if (varHighJumpFound == false) {
        saveStation = sprites.create(assets.image`itemHighJumpBoots`, SpriteKind.kndItemHighJump)
        tiles.placeOnTile(saveStation, tiles.getTileLocation(124, 40))
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
    tiles.createSpritesOnTiles(assets.tile`myTile5`, SpriteKind.kndEnemySnakes)
    tiles.createSpritesOnTiles(assets.tile`myTile7`, SpriteKind.kndEnemyKaiju)
    tiles.createSpritesOnTiles(assets.tile`myTile6`, SpriteKind.kndEnemyCrawler)
    varEtankId = 1
    varMissileId = 4
    tiles.createSpritesOnTiles(assets.tile`myTile11`, SpriteKind.kndItemMissileTank)
    tiles.createSpritesOnTiles(assets.tile`myTile19`, SpriteKind.kndItemEtank)
    tiles.createSpritesOnTiles(assets.tile`myTile18`, SpriteKind.kndItemMissileTank)
    tiles.createSpritesOnTiles(assets.tile`myTile15`, SpriteKind.kndItemEtank)
    tiles.createSpritesOnTiles(assets.tile`powerBombGlass`, SpriteKind.kndPowerBombGlass)
    tiles.createSpritesOnTiles(assets.tile`ridleyGlass`, SpriteKind.kndRidleyGlass)
    timer.after(100, function () {
        tiles.replaceAllTiles(assets.tile`myTile11`, assets.tile`breakableBlock0`)
        tiles.replaceAllTiles(assets.tile`myTile19`, assets.tile`breakableBlock0`)
        tiles.replaceAllTiles(assets.tile`myTile18`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`myTile15`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`powerBombGlass`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`ridleyGlass`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`myTile17`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`myTile5`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`myTile7`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`myTile6`, assets.tile`transparency16`)
    })
    if (_continue) {
        color.clearFadeEffect()
        varLevelState = 0.5
        tiles.placeOnTile(plrSamus, tiles.getTileLocation(8, 33))
        controller.moveSprite(plrSamus, 0, 0)
        plrSamus.setImage(assets.image`samusFront`)
        timer.background(function () {
            Song_Entrance()
        })
        pause(4500)
        varLevelState = 2
        controller.moveSprite(plrSamus, 100, 0)
    } else if (fromLevel) {
        tiles.placeOnTile(plrSamus, tiles.getTileLocation(86, 6))
        plrSamus.setImage(assets.image`samusFront`)
        varLevelState = 2
    }
    timer.background(function () {
        Song_Norin_lvl2()
    })
}
sprites.onOverlap(SpriteKind.kndMissiles, SpriteKind.kndEnemyBat, function (sprite, otherSprite) {
    hitEnemy(-3, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.kndSuperMissile, SpriteKind.kndEnemySnakes, function (sprite, otherSprite) {
    hitEnemy(-100, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.kndPowerBeam, SpriteKind.kndEnemyBat, function (sprite, otherSprite) {
    hitEnemy(-1, sprite, otherSprite)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (varLevelState == 0 && othrCursorPosition == 1) {
        othrCursor.y = 55
        othrCursorPosition = 0
        music.knock.play()
    }
})
sprites.onOverlap(SpriteKind.kndMissiles, SpriteKind.kndEnemyBabyKaiju, function (sprite, otherSprite) {
    hitEnemy(-2, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndItemSuperMissile, function (sprite, otherSprite) {
    otherSprite.destroy()
    varNorinMusic = false
    music.stopAllSounds()
    timer.background(function () {
        Song_Item_Get()
    })
    game.splash("Super Missiles Acquired", "Press Menu Twice to select, Fire with B.")
    varItemGetMusic = false
    varSuperMissileFound = true
    Song_Norin_lvl2()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndEnemyBabyKaiju, function (sprite, otherSprite) {
    playerDamaged(-10 - varExtraEnemyDmg, sprite)
})
sprites.onOverlap(SpriteKind.kndChargeBeam, SpriteKind.kndEnemyBat, function (sprite, otherSprite) {
    hitEnemy(-3, sprite, otherSprite)
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
        } else if (varDirection == 1 && varSelectedMissile == 2) {
            if (stbMissiles.value >= 5) {
                projMissile = sprites.createProjectileFromSprite(img`
                    . . . . c c c . . . c b b f c 
                    . c c c 7 7 b c c c b f b b c 
                    c 1 1 7 7 7 6 b 6 6 f 6 6 6 f 
                    c 1 7 7 7 7 b b b b b b b b b 
                    . c c c 7 7 b c c c b b f f c 
                    . . . . c c c . . . c b b f c 
                    `, plrSamus, -250, 0)
                projMissile.setKind(SpriteKind.kndSuperMissile)
                projMissile.x += -10
                stbMissiles.value += -5
                txtMissileCounter.setText(" " + convertToText(stbMissiles.value))
                if (varJumpStatus == -1) {
                    projMissile.y += 0
                } else {
                    projMissile.y += -10
                }
            }
        } else if (varDirection == 2 && varSelectedMissile == 2) {
            if (stbMissiles.value >= 5) {
                projMissile = sprites.createProjectileFromSprite(assets.image`superMissile`, plrSamus, 250, 0)
                projMissile.setKind(SpriteKind.kndSuperMissile)
                projMissile.x += 10
                stbMissiles.value += -5
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
        txtContinue = textsprite.create("Continue", 0, 6)
        txtContinue.setPosition(49, 55)
    } else {
        txtContinue = textsprite.create("Continue", 0, 11)
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
    timer.background(function () {
        Song_Title_Theme()
    })
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
        arrMissileFound[sprites.readDataNumber(otherSprite, "missileId") - 1] = 1
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
function activateElevator (level: number, colElevator: number, rowElevator: number, elevatorSprite: Image, Down: boolean) {
    varElevatorActive = true
    story.startCutscene(function () {
        varLevelState = 0.5
        varJumpStatus = 0
        tiles.placeOnTile(plrSamus, tiles.getTileLocation(colElevator + 1, rowElevator - 1))
        controller.moveSprite(plrSamus, 0, 0)
        plrSamus.setFlag(SpriteFlag.GhostThroughWalls, true)
        if (Down) {
            tiles.setWallAt(tiles.getTileLocation(colElevator, rowElevator), false)
            tiles.setWallAt(tiles.getTileLocation(colElevator + 1, rowElevator), false)
            tiles.setWallAt(tiles.getTileLocation(colElevator + 2, rowElevator), false)
            tiles.setTileAt(tiles.getTileLocation(colElevator, rowElevator), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(colElevator + 1, rowElevator), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(colElevator + 2, rowElevator), assets.tile`transparency16`)
            plrSamus.vy = 45
            plrSamus.x += -12
        } else {
            tiles.setTileAt(tiles.getTileLocation(colElevator, rowElevator), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(colElevator + 1, rowElevator), assets.tile`transparency16`)
            tiles.setTileAt(tiles.getTileLocation(colElevator + 2, rowElevator), assets.tile`transparency16`)
            plrSamus.vy = -45
            plrSamus.x += -11
            plrSamus.y += -10
        }
        plrSamus.ay = 0
        plrSamus.setImage(elevatorSprite)
        pause(2000)
        color.FadeToBlack.startScreenEffect(500)
        color.pauseUntilFadeDone()
        unloadAll()
        plrSamus.vy = 0
        plrSamus.ay = 500
        plrSamus.setFlag(SpriteFlag.GhostThroughWalls, false)
        controller.moveSprite(plrSamus, 100, 0)
        if (level == 1) {
            Setup_createLevel1(false, true)
        } else if (level == 2) {
            Setup_createLevel2(false, true)
        } else if (level == 3) {
            Setup_CreateLvl3(false, true)
        }
        color.clearFadeEffect()
        varElevatorActive = false
        story.cancelCurrentCutscene()
    })
}
sprites.onCreated(SpriteKind.kndEnemySnakes, function (sprite) {
    sprite.setImage(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `)
    characterAnimations.loopFrames(
    sprite,
    [img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `,img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    sprite,
    [img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 7 7 7 7 6 c . . . 
        . . . . c 7 7 7 7 7 7 7 7 c . . 
        . . . c 6 7 7 7 7 7 7 7 7 6 c . 
        . . . c 7 7 7 c 6 6 6 6 c 7 c . 
        . . . f 7 7 7 6 f 6 6 f 6 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . c f 6 7 7 c 6 7 7 7 7 f . . 
        . c 7 7 f 6 7 7 c c c c f . . . 
        c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
        c c 6 7 7 6 c f c 7 7 2 7 7 c . 
        . . c 6 6 6 c c f 6 7 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `,img`
        . . . . . . . c c c c c c . . . 
        . . . . . . c 6 7 7 7 7 6 c . . 
        . . . . . c 7 7 7 7 7 7 7 7 c . 
        . . . . c 6 7 7 7 7 7 7 7 7 6 c 
        . . . . c 7 7 7 c 6 6 6 6 c 7 c 
        . . . . f 7 7 7 6 f 6 6 f 6 7 f 
        . . . . f 7 7 7 7 7 7 7 7 7 7 f 
        . . . . f 6 7 7 c 6 7 7 7 7 f . 
        . . c c c f 6 7 7 c c c c f . . 
        . c 7 7 7 c c f 7 7 7 2 6 c . . 
        c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
        c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
        . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
        . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
        . . c c 6 6 7 1 1 1 1 1 6 c . . 
        . . . c c c c c c c c c c . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    sprite.ay = 500
    sprite.follow(plrSamus, 25)
    sprites.setDataNumber(sprite, "enemyHealth", 3 + varExtraEnemyHealth)
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
    if (varTitleMusic) {
        Song_Title_Theme()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndKaijuEgg, function (sprite, otherSprite) {
    playerDamaged(-5 - varExtraEnemyDmg, sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndEnemySnakes, function (sprite, otherSprite) {
    playerDamaged(-20 - varExtraEnemyDmg, sprite)
})
sprites.onOverlap(SpriteKind.kndChargeBeam, SpriteKind.kndEnemyBabyKaiju, function (sprite, otherSprite) {
    hitEnemy(-2, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndEnemyBat, function (sprite, otherSprite) {
    playerDamaged(-15 - varExtraEnemyDmg, sprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    if (controller.up.isPressed() && varElevatorActive == false) {
        timer.throttle("action", 500, function () {
            varElevatorFromLevel = 2
            activateElevator(1, 84, 8, img`
                ......................eee.......................
                .....................e242e......................
                ....................ee444ee.....................
                ...............ee4e2e72427e2e4ee................
                ..............e4dd4ee6dd66ee4dd4e...............
                .............e4ddddebe6d6ebedddd4e..............
                ..............ee4ddeebebebeedd4ee...............
                ..............e4eeeeeeeee7eeeee4e...............
                ..............fbbfee22eee72eefbbf...............
                ..............4ddeee2224227eeedd4...............
                ..............4ddeeee2ddd2eeeedd4...............
                ..............ed4e.eeeedeeee.e4de...............
                ..............ebbe.eee444eee.ebeee..............
                .............fffff..e4e4e4e..ee4de..............
                ............f677f7f.ee4d4ee..e4dde..............
                ............f677f7f.e4e4e4e..edd4e..............
                ............f766fffeee4d4eee..dd4e..............
                ............ff667fe44fe4ef44e.4de...............
                .............f667fedd4fef4dde.ede...............
                .............f667fedddeeeddde.e4e...............
                .............f667feddde.edddeedd4...............
                .............f7fffedd4e.e4dde4edd...............
                .............f667fe4de...ed4ee44e...............
                .............f7fffee4e...e4ee.ee................
                .............f67ffedee...eede...................
                ..............fff.ed4e...e4de...................
                ..................4d4ee.ee4d4...................
                ..................4deee.eeed4...................
                ..................e4e4e.e4e4e...................
                ..................eed4e.e4dee...................
                ..................edde...edde...................
                ..................4dde...edd4...................
                ..................4d4e...e4d4...................
                ..................dde.....edd...................
                ..................dde.....edd...................
                ..................4de.....ed4...................
                .................ee4e.....e4ee..................
                ................e4ddee...eedd4e.................
                ...............e4dd4ee...ee4dd4e................
                ...............fbbbfff...fffbbbf................
                .cccccccccccccccccccccccccccccccccccccccccccccc.
                aa22222222222222222222222222222222222222222222aa
                .cccccccccccccccccccccccccccccccccccccccccccccc.
                `, false)
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (varLevelState >= 1 && varAtSaveStation == 0) {
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
            music.pewPew.play()
            continueGame()
        } else if (othrCursorPosition == 1) {
            varLevelState = 0.1
            music.pewPew.play()
            Setup_Starting_Cutscene()
        }
    }
    if (varLevelState == 0.1) {
        story.clearAllText()
    }
})
sprites.onCreated(SpriteKind.greenDoor, function (sprite) {
    sprite.setImage(assets.image`doorSuper`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndItemPowerBomb, function (sprite, otherSprite) {
    otherSprite.destroy()
    varNorinMusic = false
    music.stopAllSounds()
    timer.background(function () {
        Song_Item_Get()
    })
    game.splash("Power Bomb Acquired", "Enter Morphball, and Press B to Use.")
    varItemGetMusic = false
    varPowerBombFound = true
    Song_Norin_lvl2()
})
sprites.onOverlap(SpriteKind.kndMissiles, SpriteKind.kndEnemySnakes, function (sprite, otherSprite) {
    hitEnemy(-2, sprite, otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    if (controller.down.isPressed() && varElevatorActive == false) {
        timer.throttle("action", 500, function () {
            activateElevator(3, 87, 12, img`
                ......................eee.......................
                .....................e242e......................
                ....................ee444ee.....................
                ...............ee4e2e72427e2e4ee................
                ..............e4dd4ee6dd66ee4dd4e...............
                .............e4ddddebe6d6ebedddd4e..............
                ..............ee4ddeebebebeedd4ee...............
                ..............e4eeeeeeeee7eeeee4e...............
                ..............fbbfee22eee72eefbbf...............
                ..............4ddeee2224227eeedd4...............
                ..............4ddeeee2ddd2eeeedd4...............
                ..............ed4e.eeeedeeee.e4de...............
                ..............ebbe.eee444eee.ebeee..............
                .............fffff..e4e4e4e..ee4de..............
                ............f677f7f.ee4d4ee..e4dde..............
                ............f677f7f.e4e4e4e..edd4e..............
                ............f766fffeee4d4eee..dd4e..............
                ............ff667fe44fe4ef44e.4de...............
                .............f667fedd4fef4dde.ede...............
                .............f667fedddeeeddde.e4e...............
                .............f667feddde.edddeedd4...............
                .............f7fffedd4e.e4dde4edd...............
                .............f667fe4de...ed4ee44e...............
                .............f7fffee4e...e4ee.ee................
                .............f67ffedee...eede...................
                ..............fff.ed4e...e4de...................
                ..................4d4ee.ee4d4...................
                ..................4deee.eeed4...................
                ..................e4e4e.e4e4e...................
                ..................eed4e.e4dee...................
                ..................edde...edde...................
                ..................4dde...edd4...................
                ..................4d4e...e4d4...................
                ..................dde.....edd...................
                ..................dde.....edd...................
                ..................4de.....ed4...................
                .................ee4e.....e4ee..................
                ................e4ddee...eedd4e.................
                ...............e4dd4ee...ee4dd4e................
                ...............fbbbfff...fffbbbf................
                .9999999999999999999999999999999999999999999999.
                ddffffffffffffffffffffffffffffffffffffffffffffdd
                .dddddddddddddddddddddddddddddddddddddddddddddd.
                `, true)
        })
    }
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
        if (varChargeBeamActivate >= 1 && varJumpStatus >= 0) {
            projChargeBeam.setPosition(60, 50)
        }
    }
})
function Setup_Starting_Cutscene () {
    color.FadeToBlack.startScreenEffect(1000)
    varTitleMusic = false
    arrMissileFound = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ]
    arrEtankFound = [
    0,
    0,
    0,
    0,
    0
    ]
    blockSettings.clear()
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
        story.printText("Enrylo", 80, 60, 6, 0, story.TextSpeed.Slow)
        pause(1000)
        Setup_createSamus()
        Setup_createLevel1(false, false)
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
        tiles.placeOnTile(plrSamus, tiles.getTileLocation(34, 22))
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
        timer.background(function () {
            Song_Enrylo_lvl1()
        })
        story.cancelCurrentCutscene()
    })
}
function Song_Callaris_lvl3 () {
    varCallarisMusic = true
    music.setTempo(150)
    timer.background(function () {
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(110, music.beat(BeatFraction.Breve))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(220, music.beat(BeatFraction.Breve))
            }
        })
        music.rest(music.beat(BeatFraction.Breve))
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(103.83, music.beat(BeatFraction.Double))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(208, music.beat(BeatFraction.Double))
            }
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(131, music.beat(BeatFraction.Double))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(262, music.beat(BeatFraction.Double))
            }
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(123.47, music.beat(BeatFraction.Double))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(247, music.beat(BeatFraction.Double))
            }
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(87.31, music.beat(BeatFraction.Double))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(175, music.beat(BeatFraction.Double))
            }
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(116.54, music.beat(BeatFraction.Breve))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(233, music.beat(BeatFraction.Breve))
            }
        })
        music.rest(music.beat(BeatFraction.Breve))
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(110, music.beat(BeatFraction.Breve))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(220, music.beat(BeatFraction.Breve))
            }
        })
        music.rest(music.beat(BeatFraction.Breve))
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(103.83, music.beat(BeatFraction.Double))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(208, music.beat(BeatFraction.Double))
            }
        })
        music.rest(music.beat(BeatFraction.Double))
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(73.42, music.beat(BeatFraction.Double))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(147, music.beat(BeatFraction.Double))
            }
        })
        if (varCallarisMusic == true) {
            music.rest(music.beat(BeatFraction.Double))
        }
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(98, music.beat(BeatFraction.Double))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(196, music.beat(BeatFraction.Double))
            }
        })
        if (varCallarisMusic == true) {
            music.rest(music.beat(BeatFraction.Double))
        }
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(69.30, music.beat(BeatFraction.Double))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(139, music.beat(BeatFraction.Double))
            }
        })
        if (varCallarisMusic == true) {
            music.rest(music.beat(BeatFraction.Double))
        }
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(87.31, music.beat(BeatFraction.Double))
            }
        })
        timer.background(function () {
            if (varCallarisMusic == true) {
                music.playTone(185, music.beat(BeatFraction.Double))
            }
        })
    })
    for (let index = 0; index < 20; index++) {
        if (varCallarisMusic == true) {
            music.playTone(740, music.beat(BeatFraction.Quarter))
        }
        if (varCallarisMusic == true) {
            music.playTone(622, music.beat(BeatFraction.Quarter))
        }
        if (varCallarisMusic == true) {
            music.playTone(523, music.beat(BeatFraction.Quarter))
        }
        if (varCallarisMusic == true) {
            music.playTone(440, music.beat(BeatFraction.Quarter))
        }
        if (varCallarisMusic == true) {
            music.playTone(523, music.beat(BeatFraction.Quarter))
        }
        if (varCallarisMusic == true) {
            music.playTone(622, music.beat(BeatFraction.Quarter))
        }
    }
    if (varCallarisMusic == true) {
        Song_Callaris_lvl3()
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
    energyBarWidth = 7
    stbEnergy.setBarSize(energyBarWidth, 7)
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
sprites.onOverlap(SpriteKind.kndChargeBeam, SpriteKind.kndEnemySnakes, function (sprite, otherSprite) {
    hitEnemy(-3, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndKaijuBigFire, function (sprite, otherSprite) {
    playerDamaged(-40 - varExtraEnemyDmg, sprite)
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
sprites.onOverlap(SpriteKind.kndSuperMissile, SpriteKind.kndEnemyBat, function (sprite, otherSprite) {
    hitEnemy(-100, sprite, otherSprite)
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
function Setup_createLevel1 (_continue: boolean, fromLevel: boolean) {
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
    saveStation = sprites.create(assets.image`lvl12SaveStation`, SpriteKind.kndSaveStation)
    tiles.placeOnTile(saveStation, tiles.getTileLocation(128, 29))
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
    varEtankId = 0
    tiles.createSpritesOnTiles(assets.tile`myTile11`, SpriteKind.kndItemMissileTank)
    tiles.createSpritesOnTiles(assets.tile`myTile15`, SpriteKind.kndItemEtank)
    tiles.createSpritesOnTiles(assets.tile`myTile17`, SpriteKind.kndEnemyBat)
    tiles.createSpritesOnTiles(assets.tile`myTile5`, SpriteKind.kndEnemySnakes)
    tiles.createSpritesOnTiles(assets.tile`myTile6`, SpriteKind.kndEnemyCrawler)
    timer.after(100, function () {
        tiles.replaceAllTiles(assets.tile`myTile11`, assets.tile`breakableBlock0`)
        tiles.replaceAllTiles(assets.tile`myTile15`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`myTile17`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`myTile5`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`myTile6`, assets.tile`transparency16`)
    })
    if (_continue) {
        color.clearFadeEffect()
        varLevelState = 0.5
        tiles.placeOnTile(plrSamus, tiles.getTileLocation(124, 28))
        controller.moveSprite(plrSamus, 0, 0)
        plrSamus.setImage(assets.image`samusFront`)
        timer.background(function () {
            Song_Entrance()
        })
        pause(4500)
        varLevelState = 1
        controller.moveSprite(plrSamus, 100, 0)
    } else if (fromLevel) {
        plrSamus.setImage(assets.image`samusFront`)
        if (varElevatorFromLevel == 2) {
            tiles.placeOnTile(plrSamus, tiles.getTileLocation(189, 28))
        } else if (varElevatorFromLevel == 3) {
            tiles.placeOnTile(plrSamus, tiles.getTileLocation(88, 10))
        }
        varLevelState = 1
    }
    timer.background(function () {
        Song_Enrylo_lvl1()
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
                if (varJumpStatus == -1) {
                    projChargeBeam.y += 10
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
    if (controller.down.isPressed() && varElevatorActive == false) {
        timer.throttle("action", 500, function () {
            activateElevator(2, 188, 30, img`
                ......................eee.......................
                .....................e242e......................
                ....................ee444ee.....................
                ...............ee4e2e72427e2e4ee................
                ..............e4dd4ee6dd66ee4dd4e...............
                .............e4ddddebe6d6ebedddd4e..............
                ..............ee4ddeebebebeedd4ee...............
                ..............e4eeeeeeeee7eeeee4e...............
                ..............fbbfee22eee72eefbbf...............
                ..............4ddeee2224227eeedd4...............
                ..............4ddeeee2ddd2eeeedd4...............
                ..............ed4e.eeeedeeee.e4de...............
                ..............ebbe.eee444eee.ebeee..............
                .............fffff..e4e4e4e..ee4de..............
                ............f677f7f.ee4d4ee..e4dde..............
                ............f677f7f.e4e4e4e..edd4e..............
                ............f766fffeee4d4eee..dd4e..............
                ............ff667fe44fe4ef44e.4de...............
                .............f667fedd4fef4dde.ede...............
                .............f667fedddeeeddde.e4e...............
                .............f667feddde.edddeedd4...............
                .............f7fffedd4e.e4dde4edd...............
                .............f667fe4de...ed4ee44e...............
                .............f7fffee4e...e4ee.ee................
                .............f67ffedee...eede...................
                ..............fff.ed4e...e4de...................
                ..................4d4ee.ee4d4...................
                ..................4deee.eeed4...................
                ..................e4e4e.e4e4e...................
                ..................eed4e.e4dee...................
                ..................edde...edde...................
                ..................4dde...edd4...................
                ..................4d4e...e4d4...................
                ..................dde.....edd...................
                ..................dde.....edd...................
                ..................4de.....ed4...................
                .................ee4e.....e4ee..................
                ................e4ddee...eedd4e.................
                ...............e4dd4ee...ee4dd4e................
                ...............fbbbfff...fffbbbf................
                .cccccccccccccccccccccccccccccccccccccccccccccc.
                aa22222222222222222222222222222222222222222222aa
                .cccccccccccccccccccccccccccccccccccccccccccccc.
                `, true)
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
        if (varChargeBeamActivate >= 1 && varJumpStatus >= 0) {
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
    energyBarWidth += 7
    stbEnergy.max = stbEnergy.max + 100
    stbEnergy.value = stbEnergy.value + 100
    arrEtankFound[sprites.readDataNumber(otherSprite, "etankId") - 1] = 1
    stbEnergy.setLabel(convertToText(stbEnergy.value), 5)
    stbEnergy.setBarSize(energyBarWidth, 7)
    varItemGetMusic = false
    if (varLevelState == 1) {
        Song_Enrylo_lvl1()
    } else if (varLevelState == 2) {
        Song_Norin_lvl2()
    } else if (varLevelState == 3) {
        Song_Callaris_lvl3()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndEnemyCrawler, function (sprite, otherSprite) {
    playerDamaged(-10 - varExtraEnemyDmg, sprite)
})
sprites.onOverlap(SpriteKind.kndSuperMissile, SpriteKind.kndEnemyKaiju, function (sprite, otherSprite) {
    hitEnemy(-100, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.kndSuperMissile, SpriteKind.kndEnemyBabyKaiju, function (sprite, otherSprite) {
    hitEnemy(-100, sprite, otherSprite)
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
    varMorphBallFound = true
    varMissile1Found = true
    if (varMissile1Found) {
        stbMissiles = statusbars.create(0, 0, StatusBarKind.missileAmmo)
        stbMissiles.max = 50
        txtMissileCounter = textsprite.create(" " + convertToText(stbMissiles.value), 15, 1)
        txtMissileCounter.setIcon(assets.image`missileIconOff`)
        txtMissileCounter.setFlag(SpriteFlag.RelativeToCamera, true)
        txtMissileCounter.setPosition(20, 15)
        txtMissileCounter.z = 10
        varMissileGetCheck = true
        varMissile1Found = true
    }
    varChargeBeamFound = true
    varHighJumpFound = true
    varPowerBombFound = true
    varSuperMissileFound = true
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
function playerDamaged (energyLost: number, enemy: Sprite) {
    stbEnergy.value += energyLost
    stbEnergy.setLabel(convertToText(stbEnergy.value))
    plrSamus.setFlag(SpriteFlag.GhostThroughSprites, true)
    timer.after(1000, function () {
        plrSamus.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
}
sprites.onCreated(SpriteKind.kndItemMissileTank, function (sprite) {
    varMissileId += 1
    sprite.setImage(assets.image`itemMissileTank`)
    sprites.setDataNumber(sprite, "missileId", varMissileId)
    sprite.z = -99
    if (arrMissileFound[varMissileId - 1]) {
        sprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.kndPowerBeam, SpriteKind.kndEnemyBabyKaiju, function (sprite, otherSprite) {
    hitEnemy(-1, sprite, otherSprite)
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
sprites.onOverlap(SpriteKind.kndPowerBeam, SpriteKind.kndEnemyKaiju, function (sprite, otherSprite) {
    hitEnemy(-1, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndItemHighJump, function (sprite, otherSprite) {
    otherSprite.destroy()
    varNorinMusic = false
    music.stopAllSounds()
    timer.background(function () {
        Song_Item_Get()
    })
    game.splash("High Jump Boots Acquired", "Jump height is increased.")
    varItemGetMusic = false
    varHighJumpFound = true
    Song_Norin_lvl2()
})
sprites.onCreated(SpriteKind.kndEnemyBat, function (sprite) {
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
    sprites.setDataNumber(sprite, "enemyHealth", 3 + varExtraEnemyHealth)
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
    if (varLevelState >= 1 && varAtSaveStation == 0) {
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
function Setup_CreateLvl3 (_continue: boolean, fromLevel: boolean) {
    tiles.loadMap(tiles.createMap(tilemap`lvl3_Callaris`))
    scene.setBackgroundImage(assets.image`CallarisBG`)
    saveStation = sprites.create(assets.image`lvl3SaveStation`, SpriteKind.kndSaveStation)
    tiles.placeOnTile(saveStation, tiles.getTileLocation(36, 51))
    bossCore = sprites.create(assets.image`coreGlassDestroyed`, SpriteKind.kndBossCore)
    tiles.placeOnTile(bossCore, tiles.getTileLocation(71, 49))
    bossCore.y += 8
    tiles.createSpritesOnTiles(assets.tile`myTile23`, SpriteKind.kndEnemyTurret)
    varEtankId = 5
    tiles.createSpritesOnTiles(assets.tile`myTile3`, SpriteKind.blueDoor)
    tiles.createSpritesOnTiles(assets.tile`myTile9`, SpriteKind.orangeDoor)
    tiles.createSpritesOnTiles(assets.tile`myTile2`, SpriteKind.greenDoor)
    tiles.createSpritesOnTiles(assets.tile`myTile15`, SpriteKind.kndItemEtank)
    tiles.createSpritesOnTiles(assets.tile`ridleyGlass0`, SpriteKind.kndPowerBombGlass)
    tiles.createSpritesOnTiles(assets.tile`ridleyGlass1`, SpriteKind.kndRidleyGlass)
    timer.after(100, function () {
        tiles.replaceAllTiles(assets.tile`myTile15`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`ridleyGlass0`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`ridleyGlass1`, assets.tile`transparency16`)
        tiles.replaceAllTiles(assets.tile`myTile23`, assets.tile`transparency16`)
    })
    if (_continue) {
        color.clearFadeEffect()
        varLevelState = 0.5
        tiles.placeOnTile(plrSamus, tiles.getTileLocation(41, 50))
        controller.moveSprite(plrSamus, 0, 0)
        plrSamus.setImage(assets.image`samusFront`)
        timer.background(function () {
            Song_Entrance()
        })
        pause(4500)
        varLevelState = 3
        controller.moveSprite(plrSamus, 100, 0)
    } else if (fromLevel) {
        tiles.placeOnTile(plrSamus, tiles.getTileLocation(77, 5))
        plrSamus.setImage(assets.image`samusFront`)
        varLevelState = 3
    }
    timer.background(function () {
        Song_Callaris_lvl3()
    })
}
function continueGame () {
    color.FadeToBlack.startScreenEffect(1000)
    color.pauseUntilFadeDone()
    varLevelState = blockSettings.readNumber("levelState")
    Setup_createSamus()
    varBossesDefeated = blockSettings.readNumber("bossesDefeated")
    energyBarWidth = blockSettings.readNumber("energyWidth")
    stbEnergy.max = blockSettings.readNumber("energyMax")
    varExtraEnemyDmg = blockSettings.readNumber("extraEnemyDmg")
    varExtraEnemyHealth = blockSettings.readNumber("extraEnemyHealth")
    arrMissileFound = blockSettings.readNumberArray("missilesFound")
    arrEtankFound = blockSettings.readNumberArray("etanksFound")
    if (blockSettings.readNumber("morphBallFound") == 1) {
        varMorphBallFound = true
    } else {
        varMorphBallFound = false
    }
    if (blockSettings.readNumber("missile1Found") == 1) {
        varMissile1Found = true
        stbMissiles = statusbars.create(0, 0, StatusBarKind.missileAmmo)
        stbMissiles.max = blockSettings.readNumber("missilesMax")
        txtMissileCounter = textsprite.create(" " + convertToText(stbMissiles.value), 15, 1)
        txtMissileCounter.setIcon(assets.image`missileIconOff`)
        txtMissileCounter.setFlag(SpriteFlag.RelativeToCamera, true)
        txtMissileCounter.setPosition(20, 15)
        txtMissileCounter.z = 10
        varMissileGetCheck = true
        varMissile1Found = true
    } else {
        varMissile1Found = false
    }
    if (blockSettings.readNumber("chargeBeamFound") == 1) {
        varChargeBeamFound = true
    } else {
        varChargeBeamFound = false
    }
    if (blockSettings.readNumber("highJumpFound") == 1) {
        varHighJumpFound = true
    } else {
        varHighJumpFound = false
    }
    if (blockSettings.readNumber("powerBombFound") == 1) {
        varPowerBombFound = true
    } else {
        varPowerBombFound = false
    }
    if (blockSettings.readNumber("superMissileFound") == 1) {
        varSuperMissileFound = true
    } else {
        varSuperMissileFound = false
    }
    if (blockSettings.readNumber("barrierFound") == 1) {
        varBarrierFound = true
    } else {
        varBarrierFound = false
    }
    varTitleMusic = false
    txtContinue.destroy()
    txtLogo.destroy()
    txtName.destroy()
    txtNewGame.destroy()
    othrCursor.destroy()
    if (varLevelState == 1) {
        Setup_createLevel1(true, false)
    } else if (varLevelState == 2) {
        Setup_createLevel2(true, false)
    } else if (varLevelState == 3) {
        Setup_CreateLvl3(true, false)
    }
}
sprites.onOverlap(SpriteKind.kndChargeBeam, SpriteKind.kndEnemyCrawler, function (sprite, otherSprite) {
    hitEnemy(-1, sprite, otherSprite)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (varLevelState >= 1) {
        if (varMissile1Found && varSuperMissileFound == false) {
            if (varSelectedMissile == 0) {
                txtMissileCounter.setIcon(assets.image`missileIconOn`)
                varSelectedMissile = 1
            } else if (varSelectedMissile == 1) {
                txtMissileCounter.setIcon(assets.image`missileIconOff`)
                varSelectedMissile = 0
            }
        } else if (varMissile1Found && varSuperMissileFound) {
            if (varSelectedMissile == 0) {
                txtMissileCounter.setIcon(assets.image`missileIconOn`)
                varSelectedMissile = 1
            } else if (varSelectedMissile == 1) {
                txtMissileCounter.setIcon(img`
                    a a a a a a a a a b b 
                    a a a a a a a b b 1 f 
                    a a c c b b b b 1 f f 
                    a c 1 7 1 f 1 f 1 1 1 
                    a c 7 7 1 f 1 f b b b 
                    a a c c c c c c f f f 
                    a a a a a a a c c 1 1 
                    a a a a a a a a a c c 
                    `)
                varSelectedMissile = 2
            } else if (varSelectedMissile == 2) {
                txtMissileCounter.setIcon(assets.image`missileIconOff`)
                varSelectedMissile = 0
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndEnemyKaiju, function (sprite, otherSprite) {
    playerDamaged(-30 - varExtraEnemyDmg, sprite)
})
sprites.onCreated(SpriteKind.orangeDoor, function (sprite) {
    sprite.setImage(assets.image`doorOrange`)
    sprite.z = 4
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (varChargeBeamActivate >= 30 && varJumpStatus != -2) {
        projChargeBeam.setFlag(SpriteFlag.RelativeToCamera, false)
        projChargeBeam.setKind(SpriteKind.kndChargeBeam)
        projChargeBeam.setPosition(plrSamus.x, plrSamus.y - 10)
        if (varJumpStatus == -1) {
            projChargeBeam.setPosition(plrSamus.x, plrSamus.y + 0)
        }
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
sprites.onCreated(SpriteKind.kndEnemyCrawler, function (sprite) {
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . . . . c 6 6 3 3 3 3 3 3 c . 
        . . . . c 6 6 6 6 3 3 3 3 3 3 c 
        . c c c c c 6 6 c c 3 3 3 3 3 c 
        b 5 5 c 3 3 c c 5 5 c 3 3 3 c c 
        f f 5 c c c 3 c 5 f f 6 6 6 c c 
        f f 5 c c c c c 5 f f 3 3 3 3 c 
        . b 5 5 3 c 3 5 5 c 3 3 3 3 3 c 
        . c 4 4 5 5 5 5 4 c c 3 3 3 c . 
        c 4 5 5 4 4 4 4 5 5 4 c b b . . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `)
    sprite.ay = 500
    sprite.setVelocity(randint(-10, 10), 0)
    sprites.setDataNumber(sprite, "enemyHealth", 2)
    characterAnimations.loopFrames(
    sprite,
    [img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . . c 5 5 5 5 b c c 3 3 3 3 3 c 
        . . c 4 5 5 4 b 5 5 c 3 3 3 c . 
        . c 5 b 4 4 b b 5 c c b b b . . 
        . c 4 4 b 5 5 5 4 c 4 4 4 5 b . 
        . c 5 4 c 5 5 5 c 4 4 4 c 5 c . 
        . c 5 c 5 5 5 5 c 4 4 4 c c c . 
        . . c c c c c c c . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c . . . . 
        . . . . . . c c c c 6 3 c . . . 
        . . . . . c 6 6 3 3 3 6 c . . . 
        . . . . c 6 6 3 3 3 3 3 3 c . . 
        b c c c 6 6 c c 3 3 3 3 3 3 c . 
        b 5 5 c 6 c 5 5 c 3 3 3 3 3 c . 
        f f 5 c 6 c 5 f f 6 3 3 3 c c . 
        f f 5 c c c 5 f f 6 6 6 6 c c . 
        . b 5 5 3 5 5 c 3 3 3 3 3 3 c . 
        . c 5 5 5 5 4 c c c 3 3 3 3 c . 
        . c 4 5 5 4 4 b 5 5 c 3 3 c . . 
        . c 5 b 4 4 b b 5 c b b c . . . 
        . c c 5 4 c 5 5 5 c c 5 c . . . 
        . . . c c 5 5 5 5 c c c c . . . 
        . . . . c c c c c c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 6 3 3 3 6 c . . 
        . . . . . c 6 6 3 3 3 3 3 3 c . 
        . b c c c 6 6 c c 3 3 3 3 3 3 c 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . f f 5 c c c 5 f f 6 6 6 6 c c 
        . . b 5 5 3 5 5 c c c 3 3 3 3 c 
        . . c 5 5 5 5 5 b 5 5 c 3 3 3 c 
        . c 4 4 5 5 4 4 b b 5 c 3 3 c . 
        . c 5 5 b 4 4 4 b 5 5 5 b c . . 
        . c 5 5 5 4 4 4 c 5 5 5 c b . . 
        . . c c c c 4 c 5 5 5 5 c c . . 
        . . . . c c c c c c c c c c . . 
        `,img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . c c 5 5 5 5 4 c c 3 3 3 3 3 c 
        c 5 5 4 5 5 4 c 5 5 c 3 3 3 c . 
        b 5 4 b 4 4 4 c 5 5 5 b c c . . 
        c 4 5 5 b 4 4 c 5 5 5 c b b . . 
        c 5 5 5 c 4 c 5 5 5 5 c c 5 b . 
        c 5 5 5 5 c 4 c c c c c c 5 c . 
        . c c c c c c . . . . . c c c . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    sprite,
    [img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c b 5 5 5 5 c . . 
        . c 3 3 3 c 5 5 b 4 5 5 4 c . . 
        . . b b b c c 5 b b 4 4 b 5 c . 
        . b 5 4 4 4 c 4 5 5 5 b 4 4 c . 
        . c 5 c 4 4 4 c 5 5 5 c 4 5 c . 
        . c c c 4 4 4 c 5 5 5 5 c 5 c . 
        . . . . . . . c c c c c c c . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c . . . . . . . . . . 
        . . . c 3 6 c c c c . . . . . . 
        . . . c 6 3 3 3 6 6 c . . . . . 
        . . c 3 3 3 3 3 3 6 6 c . . . . 
        . c 3 3 3 3 3 3 c c 6 6 c c c b 
        . c 3 3 3 3 3 c 5 5 c 6 c 5 5 b 
        . c c 3 3 3 6 f f 5 c 6 c 5 f f 
        . c c 6 6 6 6 f f 5 c c c 5 f f 
        . c 3 3 3 3 3 3 c 5 5 3 5 5 b . 
        . c 3 3 3 3 c c c 4 5 5 5 5 c . 
        . . c 3 3 c 5 5 b 4 4 5 5 4 c . 
        . . . c b b c 5 b b 4 4 b 5 c . 
        . . . c 5 c c 5 5 5 c 4 5 c c . 
        . . . c c c c 5 5 5 5 c c . . . 
        . . . . . . c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 6 6 c . . . . . . 
        . c 3 3 3 3 3 3 6 6 c . . . . . 
        c 3 3 3 3 3 3 c c 6 6 c c c b . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 f f 5 c c c 5 f f . 
        c 3 3 3 3 c c c 5 5 3 5 5 b . . 
        c 3 3 3 c 5 5 b 5 5 5 5 5 c . . 
        . c 3 3 c 5 b b 4 4 5 5 4 4 c . 
        . . c b 5 5 5 b 4 4 4 b 5 5 c . 
        . . b c 5 5 5 c 4 4 4 5 5 5 c . 
        . . c c 5 5 5 5 c 4 c c c c . . 
        . . c c c c c c c c c c . . . . 
        `,img`
        . . . c c . . . . . . . . . . . 
        . . c 3 6 c c c c . . . . . . . 
        . . c 6 3 3 3 3 6 c . . . . . . 
        . c 3 3 3 3 3 c c 6 c . c c . . 
        c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
        c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
        c c 3 3 3 6 f f 5 c 6 c 5 f f . 
        c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
        c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
        c 3 3 3 3 3 c c 4 5 5 5 5 c c . 
        . c 3 3 3 c 5 5 c 4 5 5 4 5 5 c 
        . . c c b 5 5 5 c 4 4 4 b 4 5 b 
        . . b b c 5 5 5 c 4 4 b 5 5 4 c 
        . b 5 c c 5 5 5 5 c 4 c 5 5 5 c 
        . c 5 c c c c c c 4 c 5 5 5 5 c 
        . c c c . . . . . c c c c c c . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
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
sprites.onCreated(SpriteKind.kndEnemyKaiju, function (sprite) {
    sprite.setImage(img`
        ........................
        ........................
        ...........cc...........
        ...........cccc.........
        .......cc...ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        .....ccb55555555ff55d55c
        ......b5555555555555555c
        ...c..b555d55555bb13bbc.
        ...cccd55ddddd55bb3335c.
        ....cbdddddddddd55b335c.
        ..cccdddddb55bdddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddddcb55cbcc....
        cddddddddd55dbccbbc.....
        cbdddddddd555dbbbcc.....
        .ccbdddbbdd555bbcdbcc...
        ...cccbbbbdd55ccdddbc...
        ......cccbdddbccccccc...
        ........cdd555dc........
        `)
    characterAnimations.loopFrames(
    sprite,
    [img`
        ........................
        ........................
        ...........cc...........
        .........cccc...........
        .....ccccccc...cc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bcc.....
        c5555555555555555b......
        .cbb31bb55555d555b..c...
        .c5333bb55ddddd55dccc...
        .c533b55ddddddddddbc....
        .c5555ddddb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bcdddddddbcccc
        .....cbbccbd55dddddddddc
        .....ccbbbd555ddddddddbc
        ...ccbdcbb555ddbbdddbcc.
        ...cbdddcc55ddbbbbccc...
        ...cccccccbdddbccc......
        ........cd555ddc........
        `,img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddddddb.....
        .c5555dddbb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bc5ddddddbcccc
        .....cbbcc5555dddddddddc
        .....ccbbb555ddbddddddc.
        .....cdcbc55ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd555ddccc......
        ........cccccccc........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb55555bbdddddcc...
        ....ccb555ccdddddddcc...
        ..ccccbcccbddddddddcc...
        ..c55cbbbbd55dddddddbcc.
        ...c5ccbbd555dddddddddcc
        ....cccbb555ddbbbddddddc
        ......ccb55ddbbbbddddcc.
        ....ccddcbdddbbbbbccc...
        ....ccccd555ddccccc.....
        ........cccccc..........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb55555bbdddddcc...
        ....ccb555ccdddddddcc...
        ..ccccbcccdddddddddcccc.
        ..c55cbbbd55ddddddddcdc.
        ...c5cccd555ddddddddddc.
        ....cc555d5ddbbbbddddbc.
        ......5555ddbbbbbdddbc..
        ......c5555dbbbbbbccc...
        .......c555cccccccc.....
        ........ccc.............
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb555555bdddddcc...
        ....ccb5555ccddddddccc..
        ..ccccbcccbddddddddccdc.
        ..c55cbbbbdddddddddbddc.
        ...c5cbbbd55ddddddddddc.
        ....cccbdd55dbbbbddddbc.
        .....cccd555dbbbbdddbc..
        .....c555dddbbbbbbccc...
        .....c55555dbcccccc.....
        ......c5555cc...........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc..cc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddd5ddcc....
        .c5555ddddb55bddddb.....
        ..ccccbbbbb55bdddddccc..
        ..ccccbc5555bddddddcccc.
        ..c55cbc555cdddddddccdc.
        ...c5cbbcccdddddddddddc.
        ....cccbbbbd55dddddddbc.
        ....cbcbbbd555ddddddbcc.
        .....cccbb555dbbbddccc..
        .......cc555dbbbbbcc....
        .......cbddddbcccc......
        ......cd5555dc..........
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    sprite,
    [img`
        ........................
        ........................
        ...........cc...........
        ...........cccc.........
        .......cc...ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        .....ccb55555555ff55d55c
        ......b5555555555555555c
        ...c..b555d55555bb13bbc.
        ...cccd55ddddd55bb3335c.
        ....cbdddddddddd55b335c.
        ..cccdddddb55bdddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddddcb55cbcc....
        cddddddddd55dbccbbc.....
        cbdddddddd555dbbbcc.....
        .ccbdddbbdd555bbcdbcc...
        ...cccbbbbdd55ccdddbc...
        ......cccbdddbccccccc...
        ........cdd555dc........
        `,img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        ...ccddddddddbcccbcccc..
        .ccbddddddd55dbbbbc55c..
        ccddddddddd555dbbcc5c...
        cddddddbbbdd555bbccc....
        .ccddddbbbbdd55bcc......
        ...cccbbbbbdddbcddcc....
        .....cccccdd555dcccc....
        ..........cccccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        .ccccdddddddddcccbcccc..
        .cdcdddddddd55dbbbc55c..
        .cdddddddddd555dccc5c...
        .cbddddbbbbdd5d555cc....
        ..cbdddbbbbbdd5555......
        ...cccbbbbbbd5555c......
        .....cccccccc555c.......
        .............ccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddb555555bccc...
        ..cccddddddcc5555bcc....
        .cdccddddddddbcccbcccc..
        .cddbdddddddddbbbbc55c..
        .cdddddddddd55dbbbc5c...
        .cbddddbbbbd55ddbccc....
        ..cbdddbbbbd555dccc.....
        ...cccbbbbbbddd555c.....
        .....ccccccbd55555c.....
        ...........cc5555c......
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........cc..ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        ....ccdd5ddddddd55b335c.
        .....bddddb55bdddd5555c.
        ..cccdddddb55bbbbbcccc..
        .ccccddddddb5555cbcccc..
        .cdccdddddddc555cbc55c..
        .cdddddddddddcccbbc5c...
        .cbddddddd55dbbbbccc....
        .ccbdddddd555dbbbcbc....
        ..cccddbbbd555bbccc.....
        ....ccbbbbbd555cc.......
        ......ccccbddddbc.......
        ..........cd5555dc......
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    sprites.setDataNumber(sprite, "enemyHealth", 10 + varExtraEnemyHealth)
    sprite.setVelocity(randint(-10, 10), 0)
    sprite.ay = 500
})
sprites.onOverlap(SpriteKind.kndProjPowerBomb, SpriteKind.kndPowerBombGlass, function (sprite, otherSprite) {
    varPowerBombGlassLocation = 13
    for (let value of sprites.allOfKind(SpriteKind.kndPowerBombGlass)) {
        tiles.setWallAt(tiles.getTileLocation(185, varPowerBombGlassLocation), false)
        value.destroy(effects.coolRadial, 500)
        varPowerBombGlassLocation += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndSaveStation, function (sprite, otherSprite) {
    timer.throttle("action", 2000, function () {
        story.showPlayerChoices("Save", "Cancel")
        varAtSaveStation = 1
        if (story.checkLastAnswer("Save")) {
            saveRecharge()
            game.splash("Game Saved")
            varAtSaveStation = 0
        } else if (story.checkLastAnswer("Cancel")) {
            varAtSaveStation = 0
        }
    })
})
sprites.onCreated(SpriteKind.redDoor, function (sprite) {
    sprite.setImage(assets.image`doorRed`)
})
function saveRecharge () {
    stbEnergy.value = stbEnergy.max
    stbMissiles.value = stbMissiles.max
    stbEnergy.setLabel(convertToText(stbEnergy.value))
    txtMissileCounter.setText(" " + convertToText(stbMissiles.value))
    blockSettings.writeNumber("levelState", varLevelState)
    blockSettings.writeNumber("gameStarted", 1)
    blockSettings.writeNumber("bossesDefeated", varBossesDefeated)
    blockSettings.writeNumber("energyWidth", energyBarWidth)
    blockSettings.writeNumber("energyMax", stbEnergy.max)
    blockSettings.writeNumber("missilesMax", stbMissiles.max)
    blockSettings.writeNumber("extraEnemyDmg", varExtraEnemyDmg)
    blockSettings.writeNumber("extraEnemyHealth", varExtraEnemyHealth)
    blockSettings.writeNumberArray("missilesFound", [
    arrMissileFound[0],
    arrMissileFound[1],
    arrMissileFound[2],
    arrMissileFound[3],
    arrMissileFound[4],
    arrMissileFound[5],
    arrMissileFound[6],
    arrMissileFound[7],
    arrMissileFound[8]
    ])
    blockSettings.writeNumberArray("etanksFound", [
    arrEtankFound[0],
    arrEtankFound[1],
    arrEtankFound[2],
    arrEtankFound[3],
    arrEtankFound[4]
    ])
    if (varMorphBallFound) {
        blockSettings.writeNumber("morphBallFound", 1)
    } else {
        blockSettings.writeNumber("morphBallFound", 0)
    }
    if (varMissile1Found) {
        blockSettings.writeNumber("missile1Found", 1)
    } else {
        blockSettings.writeNumber("missile1Found", 0)
    }
    if (varChargeBeamFound) {
        blockSettings.writeNumber("chargeBeamFound", 1)
    } else {
        blockSettings.writeNumber("chargeBeamFound", 0)
    }
    if (varHighJumpFound) {
        blockSettings.writeNumber("highJumpFound", 1)
    } else {
        blockSettings.writeNumber("highJumpFound", 0)
    }
    if (varPowerBombFound) {
        blockSettings.writeNumber("powerBombFound", 1)
    } else {
        blockSettings.writeNumber("powerBombFound", 0)
    }
    if (varSuperMissileFound) {
        blockSettings.writeNumber("superMissileFound", 1)
    } else {
        blockSettings.writeNumber("superMissileFound", 0)
    }
    if (varBarrierFound) {
        blockSettings.writeNumber("barrierFound", 1)
    } else {
        blockSettings.writeNumber("barrierFound", 0)
    }
}
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
    varNorinMusic = true
    music.setTempo(110)
    for (let index = 0; index < 2; index++) {
        // Bars 1-4. (RepeatTwice)
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(82.41, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(165, music.beat(BeatFraction.Half))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(330, music.beat(BeatFraction.Whole))
        }
        if (varNorinMusic == true) {
            music.playTone(247, music.beat(BeatFraction.Half))
        }
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(82.41, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(165, music.beat(BeatFraction.Half))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(440, music.beat(BeatFraction.Whole))
        }
        if (varNorinMusic == true) {
            music.playTone(262, music.beat(BeatFraction.Half))
        }
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(82.41, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(165, music.beat(BeatFraction.Half))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(370, music.beat(BeatFraction.Whole))
        }
        if (varNorinMusic == true) {
            music.playTone(294, music.beat(BeatFraction.Half))
        }
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(82.41, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(165, music.beat(BeatFraction.Half))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(247, music.beat(BeatFraction.Whole))
        }
        if (varNorinMusic == true) {
            music.playTone(233, music.beat(BeatFraction.Half))
        }
    }
    for (let index = 0; index < 2; index++) {
        // Bars 5-6 (RepeatTwice)
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(65.41, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(131, music.beat(BeatFraction.Half))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(392, music.beat(BeatFraction.Whole))
        }
        if (varNorinMusic == true) {
            music.playTone(294, music.beat(BeatFraction.Half))
        }
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(65.41, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(131, music.beat(BeatFraction.Half))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(330, music.beat(BeatFraction.Whole))
        }
        if (varNorinMusic == true) {
            music.playTone(247, music.beat(BeatFraction.Half))
        }
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(73.42, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(147, music.beat(BeatFraction.Half))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(370, music.beat(BeatFraction.Whole))
        }
        if (varNorinMusic == true) {
            music.playTone(294, music.beat(BeatFraction.Half))
        }
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(73.42, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(147, music.beat(BeatFraction.Half))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(440, music.beat(BeatFraction.Whole))
        }
        if (varNorinMusic == true) {
            music.playTone(330, music.beat(BeatFraction.Half))
        }
    }
    for (let index = 0; index < 4; index++) {
        // Bars 7-10 (RepeatTwice)
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(82.41, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(123.47, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(165, music.beat(BeatFraction.Half))
            }
        })
        for (let index = 0; index < 3; index++) {
            if (varNorinMusic == true) {
                music.playTone(392, music.beat(BeatFraction.Quarter))
            }
            if (varNorinMusic == true) {
                music.playTone(247, music.beat(BeatFraction.Quarter))
            }
        }
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(92.50, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(139, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(185, music.beat(BeatFraction.Half))
            }
        })
        for (let index = 0; index < 3; index++) {
            if (varNorinMusic == true) {
                music.playTone(466, music.beat(BeatFraction.Quarter))
            }
            if (varNorinMusic == true) {
                music.playTone(277, music.beat(BeatFraction.Quarter))
            }
        }
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(87.31, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(131, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(175, music.beat(BeatFraction.Half))
            }
        })
        for (let index = 0; index < 3; index++) {
            if (varNorinMusic == true) {
                music.playTone(440, music.beat(BeatFraction.Quarter))
            }
            if (varNorinMusic == true) {
                music.playTone(262, music.beat(BeatFraction.Quarter))
            }
        }
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(123.47, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(185, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(247, music.beat(BeatFraction.Half))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(440, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(311, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(370, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(311, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(494, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(370, music.beat(BeatFraction.Quarter))
        }
    }
    for (let index = 0; index < 2; index++) {
        // Bars 11-14. (RepeatTwice)
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(82.41, music.beat(BeatFraction.Whole))
            }
            if (varNorinMusic == true) {
                music.playTone(123.47, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(130.81, music.beat(BeatFraction.Whole))
            }
            if (varNorinMusic == true) {
                music.playTone(123.47, music.beat(BeatFraction.Half))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(370, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(392, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(440, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(494, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(587, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(494, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(740, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(587, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(440, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(392, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(370, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(494, music.beat(BeatFraction.Quarter))
        }
        timer.background(function () {
            if (varNorinMusic == true) {
                music.playTone(65.41, music.beat(BeatFraction.Whole))
            }
            if (varNorinMusic == true) {
                music.playTone(92.50, music.beat(BeatFraction.Half))
            }
            if (varNorinMusic == true) {
                music.playTone(98, music.beat(BeatFraction.Whole))
            }
            if (varNorinMusic == true) {
                music.playTone(92.50, music.beat(BeatFraction.Half))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(880, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(740, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(587, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(440, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(392, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(370, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(330, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(392, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(440, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(587, music.beat(BeatFraction.Quarter))
        }
        if (varNorinMusic == true) {
            music.playTone(659, music.beat(BeatFraction.Half))
        }
    }
    for (let index = 0; index < 4; index++) {
        // Bars 15-18. (Repeat4x)
        timer.background(function () {
            timer.background(function () {
                if (varNorinMusic == true) {
                    music.playTone(82.41, music.beat(BeatFraction.Double))
                }
            })
            if (varNorinMusic == true) {
                music.playTone(164.81, music.beat(BeatFraction.Double))
            }
            timer.background(function () {
                if (varNorinMusic == true) {
                    music.playTone(82.41, music.beat(BeatFraction.Whole))
                }
            })
            if (varNorinMusic == true) {
                music.playTone(165, music.beat(BeatFraction.Whole))
            }
        })
        if (varNorinMusic == true) {
            music.playTone(880, music.beat(BeatFraction.Half))
        }
        if (varNorinMusic == true) {
            music.playTone(784, music.beat(BeatFraction.Half))
        }
        if (varNorinMusic == true) {
            music.playTone(740, music.beat(BeatFraction.Half))
        }
        if (varNorinMusic == true) {
            music.playTone(659, music.beat(BeatFraction.Half))
        }
        if (varNorinMusic == true) {
            music.playTone(740, music.beat(BeatFraction.Half))
        }
        if (varNorinMusic == true) {
            music.playTone(784, music.beat(BeatFraction.Half))
        }
    }
    if (varNorinMusic == true) {
        Song_Norin_lvl2()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.kndSnakeSpit, function (sprite, otherSprite) {
    otherSprite.destroy()
    playerDamaged(-25 - varExtraEnemyDmg, sprite)
})
sprites.onOverlap(SpriteKind.kndMissiles, SpriteKind.kndEnemyCrawler, function (sprite, otherSprite) {
    hitEnemy(-2, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.kndPowerBeam, SpriteKind.kndBossCore, function (sprite, otherSprite) {
    hitEnemy(-1, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.kndMissiles, SpriteKind.kndEnemyKaiju, function (sprite, otherSprite) {
    hitEnemy(-3, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.kndPowerBeam, SpriteKind.kndEnemyCrawler, function (sprite, otherSprite) {
    if (varCrawlerShelled == false) {
        sprite.destroy()
        otherSprite.setVelocity(0, 0)
        varCrawlerShelled = true
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . c c . . . 
            . . . . . . . c c c c 6 3 c . . 
            . . . . . . c 6 3 3 3 3 6 c . . 
            . . c c . c 6 c c 3 3 3 3 3 c . 
            . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
            . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
            . f f 5 c 6 c 5 f f 6 3 3 3 c c 
            . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
            . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
            . c c 5 5 5 5 5 b c c 3 3 3 3 c 
            c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
            b 5 4 b 4 4 4 4 b b 5 c b b . . 
            c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
            c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
            c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
            . c c c c c c c c c . . c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . c c . . . 
            . . . . . . . c c c c 6 3 c . . 
            . . . . . . c 6 3 3 3 3 6 c . . 
            . . c c . c 6 c c 3 3 3 3 3 c . 
            . c 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
            . f f 5 c 6 c 5 f f 6 3 3 3 c c 
            . f f 5 3 c 3 5 f f 6 6 6 6 c c 
            . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
            . c c 5 5 5 5 5 b c c 3 3 3 3 c 
            c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
            b 5 4 b 4 4 4 4 b b 5 c b b . . 
            c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
            c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
            . c c c c c c c c c . . c c c . 
            `,img`
            . . . . . . . . . . . c c . . . 
            . . c c . c c c c 3 c 6 3 c . . 
            . f f 5 c 6 c 5 f f 3 3 6 c . . 
            . f f 5 c 6 c 5 f f 3 3 3 3 c . 
            . b 5 5 5 c 5 5 5 c 3 3 3 3 3 c 
            . b 5 5 5 c 5 5 5 c 6 3 3 3 3 c 
            . b b 5 5 3 5 5 c 3 6 3 3 3 c c 
            . b b 5 5 3 5 5 c 3 3 3 6 6 c c 
            . c c 5 5 5 5 5 b c c 3 3 3 3 c 
            c 5 5 4 5 5 5 4 b 5 5 c 3 3 3 c 
            b 5 4 b 4 4 4 4 b b 5 c 3 3 c . 
            c 4 5 5 b 4 b 5 5 5 4 c b b . . 
            c 5 5 5 c 4 c 5 5 5 c 4 4 5 b . 
            c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
            c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
            . c c c c c c c c c . . c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . c c . . . 
            . . . . . . . c c c c 6 3 c . . 
            . . . . . . c 6 3 3 3 3 6 c . . 
            . . . . . c 6 6 3 3 3 3 3 3 c . 
            . . . . c 6 6 6 6 3 3 3 3 3 3 c 
            . c c c c c 6 6 c c 3 3 3 3 3 c 
            b 5 5 c 3 3 c c 5 5 c 3 3 3 c c 
            f f 5 c c c 3 c 5 f f 6 6 6 c c 
            f f 5 c c c c c 5 f f 3 3 3 3 c 
            . b 5 5 3 c 3 5 5 c 3 3 3 3 3 c 
            . c 4 4 5 5 5 5 4 c c 3 3 3 c . 
            c 4 5 5 4 4 4 4 5 5 4 c b b . . 
            c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
            c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
            . c c c c c c c c c . . c c c . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . c c . . . 
            . . . . . . c c c c c 6 3 c . . 
            . . . . . c 6 6 3 3 3 3 6 c c . 
            . . . . c 6 6 6 6 3 3 3 3 3 6 c 
            . . . . c 6 6 6 6 6 3 3 3 3 3 c 
            . . c c c 6 6 6 6 6 6 3 3 3 3 c 
            . c 3 3 3 c 6 6 6 6 6 6 6 6 c c 
            c 6 c c c 3 c c 6 6 6 3 3 3 6 c 
            c c c c c c c c c 6 3 3 3 3 3 c 
            c 5 5 4 c c 5 5 4 c 6 6 c c c . 
            c 4 5 5 c 5 5 5 c 6 6 6 c . . . 
            . c c c c c c c c c c c . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . c c . . 
            . . . . . . . c c c c c 6 3 c . 
            . . . . . . c 6 6 3 3 3 6 6 c . 
            . . . . . c 6 6 6 3 3 3 3 3 3 c 
            . . . . c 6 6 6 6 3 3 3 3 3 3 c 
            . . c c c 6 6 6 6 6 3 3 3 3 3 c 
            . c 3 3 3 c 6 6 6 6 6 3 3 3 3 c 
            c 3 c c c 3 c 6 6 6 6 6 3 3 c c 
            c 6 c c c c 3 c 6 6 6 6 6 6 c c 
            c 6 c c c c 6 6 c 6 6 3 3 3 3 c 
            . c 6 c c c c 6 c 6 3 3 3 3 6 c 
            . . c 6 c c c c c 6 3 3 3 6 c . 
            . . . c c c c c c c c c c c . . 
            `],
        100,
        false
        )
        timer.after(1500, function () {
            animation.runImageAnimation(
            otherSprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . c c . . 
                . . . . . . . c c c c c 6 3 c . 
                . . . . . . c 6 6 3 3 3 6 6 c . 
                . . . . . c 6 6 6 3 3 3 3 3 3 c 
                . . . . c 6 6 6 6 3 3 3 3 3 3 c 
                . . c c c 6 6 6 6 6 3 3 3 3 3 c 
                . c 3 3 3 c 6 6 6 6 6 3 3 3 3 c 
                c 3 c c c 3 c 6 6 6 6 6 3 3 c c 
                c 6 c c c c 3 c 6 6 6 6 6 6 c c 
                c 6 c c c c 6 6 c 6 6 3 3 3 3 c 
                . c 6 c c c c 6 c 6 3 3 3 3 6 c 
                . . c 6 c c c c c 6 3 3 3 6 c . 
                . . . c c c c c c c c c c c . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . c c . . . 
                . . . . . . c c c c c 6 3 c . . 
                . . . . . c 6 6 3 3 3 3 6 c c . 
                . . . . c 6 6 6 6 3 3 3 3 3 6 c 
                . . . . c 6 6 6 6 6 3 3 3 3 3 c 
                . . c c c 6 6 6 6 6 6 3 3 3 3 c 
                . c 3 3 3 c 6 6 6 6 6 6 6 6 c c 
                c 6 c c c 3 c c 6 6 6 3 3 3 6 c 
                c c c c c c c c c 6 3 3 3 3 3 c 
                c 5 5 4 c c 5 5 4 c 6 6 c c c . 
                c 4 5 5 c 5 5 5 c 6 6 6 c . . . 
                . c c c c c c c c c c c . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . c c . . . 
                . . . . . . . c c c c 6 3 c . . 
                . . . . . . c 6 3 3 3 3 6 c . . 
                . . . . . c 6 6 3 3 3 3 3 3 c . 
                . . . . c 6 6 6 6 3 3 3 3 3 3 c 
                . c c c c c 6 6 c c 3 3 3 3 3 c 
                b 5 5 c 3 3 c c 5 5 c 3 3 3 c c 
                f f 5 c c c 3 c 5 f f 6 6 6 c c 
                f f 5 c c c c c 5 f f 3 3 3 3 c 
                . b 5 5 3 c 3 5 5 c 3 3 3 3 3 c 
                . c 4 4 5 5 5 5 4 c c 3 3 3 c . 
                c 4 5 5 4 4 4 4 5 5 4 c b b . . 
                c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
                c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
                . c c c c c c c c c . . c c c . 
                `,img`
                . . . . . . . . . . . c c . . . 
                . . c c . c c c c 3 c 6 3 c . . 
                . f f 5 c 6 c 5 f f 3 3 6 c . . 
                . f f 5 c 6 c 5 f f 3 3 3 3 c . 
                . b 5 5 5 c 5 5 5 c 3 3 3 3 3 c 
                . b 5 5 5 c 5 5 5 c 6 3 3 3 3 c 
                . b b 5 5 3 5 5 c 3 6 3 3 3 c c 
                . b b 5 5 3 5 5 c 3 3 3 6 6 c c 
                . c c 5 5 5 5 5 b c c 3 3 3 3 c 
                c 5 5 4 5 5 5 4 b 5 5 c 3 3 3 c 
                b 5 4 b 4 4 4 4 b b 5 c 3 3 c . 
                c 4 5 5 b 4 b 5 5 5 4 c b b . . 
                c 5 5 5 c 4 c 5 5 5 c 4 4 5 b . 
                c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
                c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
                . c c c c c c c c c . . c c c . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . c c . . . 
                . . . . . . . c c c c 6 3 c . . 
                . . . . . . c 6 3 3 3 3 6 c . . 
                . . c c . c 6 c c 3 3 3 3 3 c . 
                . c 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
                . f f 5 c 6 c 5 f f 6 3 3 3 c c 
                . f f 5 3 c 3 5 f f 6 6 6 6 c c 
                . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
                . c c 5 5 5 5 5 b c c 3 3 3 3 c 
                c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
                b 5 4 b 4 4 4 4 b b 5 c b b . . 
                c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
                c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
                . c c c c c c c c c . . c c c . 
                `,img`
                . . . . . . . . . . . c c . . . 
                . . . . . . . c c c c 6 3 c . . 
                . . . . . . c 6 3 3 3 3 6 c . . 
                . . c c . c 6 c c 3 3 3 3 3 c . 
                . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
                . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
                . f f 5 c 6 c 5 f f 6 3 3 3 c c 
                . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
                . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
                . c c 5 5 5 5 5 b c c 3 3 3 3 c 
                c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
                b 5 4 b 4 4 4 4 b b 5 c b b . . 
                c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
                c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
                c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
                . c c c c c c c c c . . c c c . 
                `],
            100,
            false
            )
            timer.after(600, function () {
                varCrawlerShelled = false
            })
        })
    }
})
sprites.onCreated(SpriteKind.blueDoor, function (sprite) {
    sprite.setImage(assets.image`doorBlue`)
})
sprites.onOverlap(SpriteKind.kndSuperMissile, SpriteKind.greenDoor, function (sprite, otherSprite) {
    timer.throttle("action", 3000, function () {
        sprite.destroy()
        openDoor(Math.round(Math.round(otherSprite.x / 16)), Math.round(Math.round(otherSprite.y) / 16))
        animation.runImageAnimation(
        otherSprite,
        assets.animation`blueGreenOpen`,
        100,
        false
        )
        timer.after(2500, function () {
            closeDoor(Math.round(Math.round(otherSprite.x / 16)), Math.round(Math.round(otherSprite.y) / 16))
            animation.runImageAnimation(
            otherSprite,
            assets.animation`blueGreenClose`,
            100,
            false
            )
        })
    })
})
sprites.onOverlap(SpriteKind.kndSuperMissile, SpriteKind.kndEnemyCrawler, function (sprite, otherSprite) {
    hitEnemy(-100, sprite, otherSprite)
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
function hitEnemy (healthLost: number, projectile: Sprite, enemy: Sprite) {
    projectile.destroy()
    sprites.changeDataNumberBy(enemy, "enemyHealth", healthLost)
    if (sprites.readDataNumber(enemy, "enemyHealth") <= 0) {
        enemy.setVelocity(0, 0)
        enemy.setFlag(SpriteFlag.GhostThroughSprites, true)
        animation.runImageAnimation(
        enemy,
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
            enemy.destroy()
        })
    }
}
sprites.onOverlap(SpriteKind.kndPowerBeam, SpriteKind.kndEnemySnakes, function (sprite, otherSprite) {
    hitEnemy(-1, sprite, otherSprite)
})
function unloadAll () {
    tiles.destroySpritesOfKind(SpriteKind.blueDoor)
    tiles.destroySpritesOfKind(SpriteKind.redDoor)
    tiles.destroySpritesOfKind(SpriteKind.orangeDoor)
    tiles.destroySpritesOfKind(SpriteKind.greenDoor)
    tiles.destroySpritesOfKind(SpriteKind.kndItemMorphBall)
    tiles.destroySpritesOfKind(SpriteKind.kndItemMissileTank)
    tiles.destroySpritesOfKind(SpriteKind.kndItemEtank)
    tiles.destroySpritesOfKind(SpriteKind.kndItemChargeBean)
    tiles.destroySpritesOfKind(SpriteKind.kndItemSuperMissile)
    tiles.destroySpritesOfKind(SpriteKind.kndItemPowerBomb)
    tiles.destroySpritesOfKind(SpriteKind.kndItemHighJump)
    tiles.destroySpritesOfKind(SpriteKind.kndPowerBombGlass)
    tiles.destroySpritesOfKind(SpriteKind.kndRidleyGlass)
    tiles.destroySpritesOfKind(SpriteKind.kndEnemySnakes)
    tiles.destroySpritesOfKind(SpriteKind.kndEnemyKaiju)
    tiles.destroySpritesOfKind(SpriteKind.kndEnemyBat)
    tiles.destroySpritesOfKind(SpriteKind.kndEnemyCrawler)
    tiles.destroySpritesOfKind(SpriteKind.kndEnemyBabyKaiju)
    tiles.destroySpritesOfKind(SpriteKind.kndKaijuEgg)
    tiles.destroySpritesOfKind(SpriteKind.kndKaijuBigFire)
    tiles.destroySpritesOfKind(SpriteKind.kndSaveStation)
    tiles.destroySpritesOfKind(SpriteKind.kndEnemyTurret)
    tiles.destroySpritesOfKind(SpriteKind.kndBossCore)
    varEnryloMusic = false
    varNorinMusic = false
    varCallarisMusic = false
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    if (controller.up.isPressed() && varElevatorActive == false) {
        timer.throttle("action", 500, function () {
            varElevatorFromLevel = 3
            activateElevator(1, 76, 7, img`
                ......................eee.......................
                .....................e242e......................
                ....................ee444ee.....................
                ...............ee4e2e72427e2e4ee................
                ..............e4dd4ee6dd66ee4dd4e...............
                .............e4ddddebe6d6ebedddd4e..............
                ..............ee4ddeebebebeedd4ee...............
                ..............e4eeeeeeeee7eeeee4e...............
                ..............fbbfee22eee72eefbbf...............
                ..............4ddeee2224227eeedd4...............
                ..............4ddeeee2ddd2eeeedd4...............
                ..............ed4e.eeeedeeee.e4de...............
                ..............ebbe.eee444eee.ebeee..............
                .............fffff..e4e4e4e..ee4de..............
                ............f677f7f.ee4d4ee..e4dde..............
                ............f677f7f.e4e4e4e..edd4e..............
                ............f766fffeee4d4eee..dd4e..............
                ............ff667fe44fe4ef44e.4de...............
                .............f667fedd4fef4dde.ede...............
                .............f667fedddeeeddde.e4e...............
                .............f667feddde.edddeedd4...............
                .............f7fffedd4e.e4dde4edd...............
                .............f667fe4de...ed4ee44e...............
                .............f7fffee4e...e4ee.ee................
                .............f67ffedee...eede...................
                ..............fff.ed4e...e4de...................
                ..................4d4ee.ee4d4...................
                ..................4deee.eeed4...................
                ..................e4e4e.e4e4e...................
                ..................eed4e.e4dee...................
                ..................edde...edde...................
                ..................4dde...edd4...................
                ..................4d4e...e4d4...................
                ..................dde.....edd...................
                ..................dde.....edd...................
                ..................4de.....ed4...................
                .................ee4e.....e4ee..................
                ................e4ddee...eedd4e.................
                ...............e4dd4ee...ee4dd4e................
                ...............fbbbfff...fffbbbf................
                .9999999999999999999999999999999999999999999999.
                ddffffffffffffffffffffffffffffffffffffffffffffdd
                .dddddddddddddddddddddddddddddddddddddddddddddd.
                `, false)
        })
    }
})
let projSnakeSpit: Sprite = null
let enemyBabyKaiju: Sprite = null
let projKaijuEgg: Sprite = null
let projKaijuFire: Sprite = null
let varCrawlerShelled = false
let varPowerBombGlassLocation = 0
let varBarrierFound = false
let varBossesDefeated = 0
let bossCore: Sprite = null
let varRidleyGlassLocation = 0
let varDoorRow = 0
let varDoorCol = 0
let itemChargeBeam: Sprite = null
let itemMissilePack: Sprite = null
let projbreakEffect: Sprite = null
let energyBarWidth = 0
let stbEnergy: StatusBarSprite = null
let ctsnShip: Sprite = null
let arrEtankFound: number[] = []
let projChargeBeam: Sprite = null
let varChargeBeamActivate = 0
let varAtSaveStation = 0
let varElevatorFromLevel = 0
let varTitleMusic = false
let varExtraEnemyHealth = 0
let varElevatorActive = false
let varMorphBallFound = false
let itemMorphBall: Sprite = null
let arrMissileFound: number[] = []
let varMissile1Found = false
let varMissileGetCheck = false
let varCallarisMusic = false
let txtContinue: TextSprite = null
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
let varExtraEnemyDmg = 0
let varChargeBeamFound = false
let varEnryloMusic = false
let varItemGetMusic = false
let varNorinMusic = false
let othrCursor: Sprite = null
let othrCursorPosition = 0
let plrSamus: Sprite = null
let varLevelState = 0
let varMissileId = 0
let varEtankId = 0
let itemSuperMissile: Sprite = null
let varSuperMissileFound = false
let itemPowerBomb: Sprite = null
let varPowerBombFound = false
let varHighJumpFound = false
let saveStation: Sprite = null
let varGameStarted = 0
music.setVolume(20)
varGameStarted = blockSettings.readNumber("gameStarted")
Setup_Title_Screen()
game.onUpdateInterval(randint(2500, 5000), function () {
    for (let value of sprites.allOfKind(SpriteKind.kndEnemyKaiju)) {
        value.setVelocity(0, 0)
        value.follow(plrSamus, 0)
        if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingLeft))) {
            animation.runImageAnimation(
            value,
            [img`
                ........................
                ........................
                ..........ccc...........
                .........cccc...........
                .....ccccccc..ccc.......
                ...cc555555cccccc.......
                ..c5555555555bcc........
                .c555555555555b..cc.....
                c555551ff555555bccc.....
                c55d55ff55555555bc......
                c5555555555555555b......
                .cbb31bb5555dd555b.cc...
                .c5333b555ddddd55dccc...
                .c533b55ddddddddddb.....
                .c5555dddbb55bdddddccc..
                ..ccccbbbb555bdddddccc..
                ...cdcbc5555bddddddcc...
                ....ccbc55bc5ddddddbcccc
                .....cbbcc5555dddddddddc
                .....ccbbb555ddbddddddc.
                .....cdcbc55ddbbbdddcc..
                ...ccdddccddddbcbbcc....
                ...ccccccd555ddccc......
                ........cccccccc........
                `,img`
                ............ccc.........
                .......cccccccc.........
                .....cc55555cc..cc......
                ....c555555555cccc......
                ...c55555555555bcc......
                ..c555551ff55555b..cc...
                ..c55d55ff5555555bccc...
                ..c55555555d55555bcc....
                ..c5555d5555d55555b.....
                ..cbbbb55555ddd555b.cc..
                ..c555d5555ddddd55dccc..
                ...c555dbbbdddbd5ddcc...
                ....cccbbbbb555bdddb....
                ....cbbbbbbc555bdddccc..
                ...cbbbbbbc555bddddcc...
                ...cbbbbbc555bdddddc....
                ..ccbbbbbc55bddddddcc...
                ..ccbbbbbbcb55dddddbcc..
                ...cbbbbbb5555ddddddddcc
                ....cbbbbb555ddbdddddddc
                ....cccbbc55ddbbbddddcc.
                ...ccdddccddddbcbbccc...
                ...ccccccd555ddccc......
                ........cccccccc........
                `,img`
                .............ccc........
                ........cccccccc........
                ......cc55555cc..cc.....
                .....c555555555cccc.....
                ....c55555555555bcc.....
                ...c555555ccb5555b.cc...
                ...c55d55c55555555bcc...
                ...c55555555dd5555bc....
                ...c5555d5555dd5555.....
                ...cbbbd555555dd555.cc..
                ...c555d555555ddd55ccc..
                ....c555d5555ddbd5dcc...
                ....cccbbbbb555bdddb....
                ...cbbbbbbbc555bdddccc..
                ..cbbbbbbbc555bddddcc...
                ..cbbbbbbc555bdddddc....
                .ccbbbbbbc55bddddddcc...
                .ccbbbbbbbcb55dddddbc...
                ..cbbbbbbb5555ddddddbc..
                ...cbbbbbb555ddbddddddc.
                ....cccbbc55ddbbbddddddc
                ...ccdddccddddbcbbcccccc
                ...ccccccd555ddccc......
                ........cccccccc........
                `,img`
                ........................
                ........................
                ........................
                ..........ccc...........
                .........cccc...........
                .....ccccccc..ccc.......
                ...cc555555cccccc.......
                ..c5555555555bcc........
                .c555555555555b..cc.....
                c555555ccb55555bccc.....
                c55d55c555555555bc......
                c5555555555555555b......
                .cbbb1bb5555dd555b.cc...
                .c533bbbb5ddddd55dcc....
                .c533bbbb5ddddddddbcc...
                .c533bbb55dddddddddcccc.
                .c5333bb5bb55bdddddcccdc
                .c5333b5bb555bddddddbddc
                .c53335b5555bddddddddddc
                ..c5555c55bb55dbddddddcc
                ...cccbccc55ddbbbddddcc.
                ....cdddccddddbcbbbcc...
                ....cccccd555ddcccc.....
                ........cccccccc........
                `,img`
                ........................
                ........................
                ........................
                ..........ccc...........
                .........cccc...........
                .....ccccccc..ccc.......
                ...cc555555cccccc.......
                ..c5555555555bcc........
                .c555555555555b..cc.....
                c555555ccb55555bccc.....
                c55d55c555555555bc......
                c5555555555555555b......
                .cbbb1bb5555dd555b.cc...
                .c533bbbb5ddddd55dcc....
                .c533bbbb5ddddddddbcc...
                .c5333bb55dddddddddcccc.
                .c5333b55bb55bdddddcccdc
                .c533355bb555bddddddbddc
                ..c5555b5555bddddddddddc
                ...cccbc55bb55dbddddddcc
                .....cbbcc55ddbbbddddcc.
                ....cdddccddddbcbbbcc...
                ....cccccd555ddcccc.....
                ........cccccccc........
                `,img`
                ........................
                ........................
                ........................
                ..........ccc...........
                .........cccc...........
                .....ccccccc..ccc.......
                ...cc555555cccccc.......
                ..c5555555555bcc........
                .c555555555555b..cc.....
                c555555ccb55555bccc.....
                c55d55c555555555bc......
                c5555555555555555b......
                .cbbb1bb5555dd555b.cc...
                .c533bbb55ddddd55dcc....
                .c5333bb5dddddddddbcc...
                .c5333b55ddddddddddcccc.
                .c533355dbb55bdddddcccdc
                ..c55555bb555bddddddbddc
                ...cccbb5555bddddddddddc
                .....cbc55bb55dbddddddcc
                .....cdbcc55ddbbbddddcc.
                ....cdddccddddbcbbbcc...
                ....cccccd555ddcccc.....
                ........cccccccc........
                `],
            100,
            false
            )
            timer.after(400, function () {
                if (Math.percentChance(80)) {
                    for (let index = 0; index < 4; index++) {
                        projKaijuFire = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . 4 4 4 4 . . . . . . . . . . . 
                            4 4 2 . . . . . . . . . . . . . 
                            4 . 2 2 . . . . . . . . . . . . 
                            4 2 2 2 2 . 4 . . . . . . . . . 
                            4 4 . 2 2 . 4 . . . . . . . . . 
                            . 4 4 . . . 4 . . . . . . . . . 
                            . . . 4 4 4 4 . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, value, -100, 0)
                        projKaijuFire.setKind(SpriteKind.kndKaijuBigFire)
                        projKaijuFire.setPosition(value.x, value.y + 5)
                        animation.runImageAnimation(
                        projKaijuFire,
                        assets.animation`kaijuFireLeft`,
                        100,
                        true
                        )
                        pause(100)
                    }
                } else {
                    projKaijuEgg = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . b b b b . . . . . . 
                        . . . . b b 1 1 1 1 b b . . . . 
                        . . . . b 1 1 1 3 3 1 b . . . . 
                        . . . b 1 1 1 1 3 3 3 1 b . . . 
                        . . . b 1 1 3 1 1 3 3 1 b . . . 
                        . . b d 1 1 1 1 1 1 1 1 d b . . 
                        . . b d 3 3 1 1 1 1 1 1 d b . . 
                        . . b b 3 3 1 1 1 1 3 3 d b . . 
                        . . c b b d 1 1 1 3 3 b d c . . 
                        . . c d d d d d d b b b d c . . 
                        . . c b d d b b d b b d b c . . 
                        . . . c d d b b d d d d c . . . 
                        . . . . c b d d d d b c . . . . 
                        . . . . . c c c c c c . . . . . 
                        `, value, 50, 50)
                    projKaijuEgg.setPosition(value.x, value.y)
                    projKaijuEgg.setFlag(SpriteFlag.AutoDestroy, true)
                    projKaijuEgg.setFlag(SpriteFlag.DestroyOnWall, false)
                    projKaijuEgg.setKind(SpriteKind.kndKaijuEgg)
                    story.spriteMoveToLocation(projKaijuEgg, value.x - randint(10, 40), value.y + 5, 100)
                    timer.after(200, function () {
                        for (let value of sprites.allOfKind(SpriteKind.kndKaijuEgg)) {
                            animation.runImageAnimation(
                            value,
                            [img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . b b b b . . . . . . 
                                . . . . b b 1 1 1 1 b b . . . . 
                                . . . . b 1 1 1 3 3 1 b . . . . 
                                . . . b 1 1 1 1 3 3 3 1 b . . . 
                                . . . b 1 1 3 1 1 3 3 1 b . . . 
                                . . b d 1 1 1 1 1 1 1 1 d b . . 
                                . . b d 3 3 1 1 1 1 1 1 d b . . 
                                . . b b 3 3 1 1 1 1 3 3 d b . . 
                                . . c b b d 1 1 1 3 3 b d c . . 
                                . . c d d d d d d b b b d c . . 
                                . . c b d d b b d b b d b c . . 
                                . . . c d d b b d d d d c . . . 
                                . . . . c b d d d d b c . . . . 
                                . . . . . c c c c c c . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . b b b b . . . . . . 
                                . . . . b b 1 1 1 1 b b . . . . 
                                . . . . b 1 1 1 3 3 1 b . . . . 
                                . . . b c 1 1 1 3 3 3 c b . . . 
                                . . . b c c 3 1 1 3 3 c b . . . 
                                . . b d 1 c 1 1 1 c c c d b . . 
                                . . b d 3 3 1 1 1 1 1 1 d b . . 
                                . . b b 3 3 1 1 1 1 3 3 d b . . 
                                . . c b b d 1 1 1 3 3 b d c . . 
                                . . c d d c d d d b c b d c . . 
                                . . c b c c b b d b c d b c . . 
                                . . . c c d b b d d c c c . . . 
                                . . . . c b d d d d b c . . . . 
                                . . . . . c c c c c c . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . b b b b . . . . . . 
                                . . . . b b 1 1 1 1 b b . . . . 
                                . . . . b 1 1 1 3 3 1 b . . . . 
                                . . . b c 1 1 1 3 3 3 c b . . . 
                                . . . b c c 3 1 1 3 3 c b . . . 
                                . . b d 1 c c 1 1 c c c d b . . 
                                . . b d 3 3 c c c c 1 1 d b . . 
                                . . b b 3 3 1 c c 1 3 3 d b . . 
                                . . c b b d c c c 3 3 b d c . . 
                                . . c d d c c c c c c b d c . . 
                                . . c b c c b b d b c d b c . . 
                                . . . c c d b b d d c c c . . . 
                                . . . . c b d d d d b c . . . . 
                                . . . . . c c c c c c . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . b b b b . . . . . . 
                                . . . . b b 1 1 c c b b . . . . 
                                . . . . b 1 1 1 c 3 1 b . . . . 
                                . . . b c 1 1 c c 3 3 c b . . . 
                                . . . b c c c c 1 3 3 c b . . . 
                                . . b d 1 c c 1 1 c c c d b . . 
                                . . b d 3 3 c c c c 1 1 c b . . 
                                . . b c c c c c c 1 3 3 c b . . 
                                . . c b b c c c c c c c c c . . 
                                . . c d d c c c c c c b d c . . 
                                . . c b c c b c c b c d b c . . 
                                . . . c c d c c d d c c c . . . 
                                . . . . c c c d d d b c . . . . 
                                . . . . . c c c c c c . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . b b b b . . . . . . 
                                . . . . b b 1 1 c c b b . . . . 
                                . . . . b 1 1 1 c 3 1 b . . . . 
                                . . . b c 1 1 c c 3 3 c b . . . 
                                . . . b c c c c c c 3 c b . . . 
                                . . b d 1 c c c c c c c d b . . 
                                . . b d c c c c c c c 1 c b . . 
                                . . b c c c c c c c c 3 c b . . 
                                . . c b b c c c c c c c c c . . 
                                . . c d d c c c c c c b d c . . 
                                . . c b c c c c c c c d b c . . 
                                . . . c c d c c c d c c c . . . 
                                . . . . c c c d d d b c . . . . 
                                . . . . . c c c c c c . . . . . 
                                `],
                            100,
                            false
                            )
                            timer.after(499, function () {
                                for (let index = 0; index < randint(1, 3); index++) {
                                    enemyBabyKaiju = sprites.create(img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . c c c c . . . . . . . . 
                                        . . c c 5 5 5 5 c c . . . . . . 
                                        . c 5 5 5 5 5 5 5 5 c . . . . . 
                                        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 d c . . 
                                        c 5 3 3 3 5 5 5 5 5 d d d c . . 
                                        . b 5 5 5 5 5 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c c . 
                                        . c b b c 5 5 b b d d d d c d c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . c c c c d 5 5 b d d d c . 
                                        . . c c c c c b 5 5 b c c c . . 
                                        . . c b b b c d 5 5 b c . . . . 
                                        `, SpriteKind.kndEnemyBabyKaiju)
                                    enemyBabyKaiju.setPosition(projKaijuEgg.x + randint(-10, 10), projKaijuEgg.y)
                                    enemyBabyKaiju.ay = 500
                                    sprites.setDataNumber(enemyBabyKaiju, "enemyHealth", 2 + varExtraEnemyHealth)
                                    characterAnimations.loopFrames(
                                    enemyBabyKaiju,
                                    [img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . c c c c . . . . . . . . 
                                        . . c c 5 5 5 5 c c . . . . . . 
                                        . c 5 5 5 5 5 5 5 5 c . . . . . 
                                        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 d c . . 
                                        c 5 3 3 3 5 5 5 5 5 d d d c . . 
                                        . b 5 5 5 5 5 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c c . 
                                        . c b b c 5 5 b b d d d d c d c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . c c c c d 5 5 b d d d c . 
                                        . . c c c c c b 5 5 b c c c . . 
                                        . . c b b b c d 5 5 b c . . . . 
                                        `,img`
                                        . . . . c c c c c . . . . . . . 
                                        . . c c 5 5 5 5 5 c . . . . . . 
                                        . c 5 5 5 5 1 f 5 5 c . . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 c . . . 
                                        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
                                        c 5 3 3 3 5 5 5 5 5 d d d c . . 
                                        . c 5 5 5 5 b 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c . . 
                                        . c b b c 5 5 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . . c c c b 5 5 b d d d c . 
                                        . . . . . c d 5 5 b b c c c . . 
                                        . . . . c c c c c c c . . . . . 
                                        . . . . c b b b c . . . . . . . 
                                        `,img`
                                        . . . . c c c c c . . . . . . . 
                                        . . c c 5 5 5 5 5 c . . . . . . 
                                        . c 5 5 5 5 1 f 5 5 c . . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 c . . . 
                                        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
                                        c 5 5 5 5 5 5 5 5 5 d d d c . . 
                                        . c 5 5 5 5 b 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c . . 
                                        . c b b c 5 5 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . . c c b 5 5 b d d d c c . 
                                        . . . . c d 5 5 b b c c c . . . 
                                        . . . . c c c c c c c . . . . . 
                                        . . . . c b b b c . . . . . . . 
                                        `,img`
                                        . . . . c c c c c . . . . . . . 
                                        . . c c 5 5 5 5 5 c . . . . . . 
                                        . c 5 5 5 5 1 f 5 5 c . . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 c . . . 
                                        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
                                        c 5 5 5 5 5 5 5 5 5 d d d c . . 
                                        . c 5 5 5 5 b 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c . . 
                                        . c b b c 5 5 b b d d d d c c . 
                                        . c c c c c b b d d d d d d c c 
                                        . . . c c 5 5 b 5 5 d d d d d c 
                                        . . . . c b 5 5 b b c c c c c c 
                                        . . . . c c c c c c . . . . . . 
                                        . . . . . c b b b c . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . c c c c . . . . . . . . 
                                        . . c c 5 5 5 5 c c . . . . . . 
                                        . c 5 5 5 5 5 5 5 5 c . . . . . 
                                        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 c . . . 
                                        c c 3 3 b b 5 5 5 5 5 5 d c . . 
                                        c 5 3 3 3 5 5 5 5 5 d d d c . . 
                                        . b 5 5 5 5 5 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c . . 
                                        . c b b c 5 5 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . c c c c d 5 5 b d d d c c 
                                        . . . c b c c b 5 5 b c c c . . 
                                        . . . c c c d 5 5 b c . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . c c c c . . . . . . . . 
                                        . . c c 5 5 5 5 c c . . . . . . 
                                        . c 5 5 5 5 5 5 5 5 c . . . . . 
                                        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 d c . . 
                                        c 5 3 3 3 5 5 5 5 5 d d d c . . 
                                        . b 5 5 5 5 5 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c . . 
                                        . c b b c 5 5 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . c c c c d 5 5 b d d c c . 
                                        . . c b b c c c 5 5 b c c . . . 
                                        . . c c c c c d 5 5 c . . . . . 
                                        `],
                                    100,
                                    characterAnimations.rule(Predicate.MovingLeft)
                                    )
                                    characterAnimations.loopFrames(
                                    enemyBabyKaiju,
                                    [img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . c c c c . . . . 
                                        . . . . . . c c 5 5 5 5 c c . . 
                                        . . . . . c 5 5 5 5 5 5 5 5 c . 
                                        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                        . . c d 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 5 5 5 b . 
                                        . c c d d d d b 5 5 c b b c . . 
                                        c d c d d d d b b 5 5 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c d d d b 5 5 d c c c c . . . 
                                        . . c c c b 5 5 b c c c c c . . 
                                        . . . . c b 5 5 d c b b b c . . 
                                        `,img`
                                        . . . . . . . c c c c c . . . . 
                                        . . . . . . c 5 5 5 5 5 c c . . 
                                        . . . . . c 5 5 f 1 5 5 5 5 c . 
                                        . . . . c 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 b 5 5 5 5 c . 
                                        . . c d d d d b 5 5 c b b c . . 
                                        c c c d d d d b b 5 5 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c d d d b 5 5 b c c c . . . . 
                                        . . c c c b b 5 5 d c . . . . . 
                                        . . . . . c c c c c c c . . . . 
                                        . . . . . . . c b b b c . . . . 
                                        `,img`
                                        . . . . . . . c c c c c . . . . 
                                        . . . . . . c 5 5 5 5 5 c c . . 
                                        . . . . . c 5 5 f 1 5 5 5 5 c . 
                                        . . . . c 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 5 5 5 5 c 
                                        . . c d d d 5 5 5 b 5 5 5 5 c . 
                                        . . c d d d d b 5 5 c b b c . . 
                                        c c c d d d d b b 5 5 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c c d d d b 5 5 b c c . . . . 
                                        . . . c c c b b 5 5 d c . . . . 
                                        . . . . . c c c c c c c . . . . 
                                        . . . . . . . c b b b c . . . . 
                                        `,img`
                                        . . . . . . . c c c c c . . . . 
                                        . . . . . . c 5 5 5 5 5 c c . . 
                                        . . . . . c 5 5 f 1 5 5 5 5 c . 
                                        . . . . c 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 5 5 5 5 c 
                                        . . c d d d 5 5 5 b 5 5 5 5 c . 
                                        . . c d d d d b 5 5 c b b c . . 
                                        . c c d d d d b b 5 5 c b b c . 
                                        c c d d d d d d b b c c c c c . 
                                        c d d d d d 5 5 b 5 5 c c . . . 
                                        c c c c c c b b 5 5 b c . . . . 
                                        . . . . . . c c c c c c . . . . 
                                        . . . . . . c b b b c . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . c c c c . . . . 
                                        . . . . . . c c 5 5 5 5 c c . . 
                                        . . . . . c 5 5 5 5 5 5 5 5 c . 
                                        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d 5 5 5 5 5 5 b b 3 3 c c 
                                        . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 5 5 5 b . 
                                        . . c d d d d b 5 5 c b b c . . 
                                        c c c d d d d b b 5 5 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        c c d d d b 5 5 d c c c c . . . 
                                        . . c c c b 5 5 b c c b c . . . 
                                        . . . . . c b 5 5 d c c c . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . c c c c . . . . 
                                        . . . . . . c c 5 5 5 5 c c . . 
                                        . . . . . c 5 5 5 5 5 5 5 5 c . 
                                        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                        . . c d 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 5 5 5 b . 
                                        . . c d d d d b 5 5 c b b c . . 
                                        c c c d d d d b b 5 5 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c c d d b 5 5 d c c c c . . . 
                                        . . . c c b 5 5 c c c b b c . . 
                                        . . . . . c 5 5 d c c c c c . . 
                                        `],
                                    100,
                                    characterAnimations.rule(Predicate.MovingRight)
                                    )
                                }
                                value.destroy()
                            })
                        }
                    })
                }
            })
        } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingRight))) {
            animation.runImageAnimation(
            value,
            [img`
                ........................
                ........................
                ...........ccc..........
                ...........cccc.........
                .......ccc..ccccccc.....
                .......cccccc555555cc...
                ........ccb5555555555c..
                .....cc..b555555555555c.
                .....cccb555555ff155555c
                ......cb55555555ff55d55c
                ......b5555555555555555c
                ...cc.b555dd5555bb13bbc.
                ...cccd55ddddd555b3335c.
                .....bdddddddddd55b335c.
                ..cccdddddb55bbddd5555c.
                ..cccdddddb555bbbbcccc..
                ...ccddddddb5555cbcdc...
                ccccbdddddd5cb55cbcc....
                cddddddddd5555ccbbc.....
                .cddddddbdd555bbbcc.....
                ..ccdddbbbdd55cbcdc.....
                ....ccbbcbddddccdddcc...
                ......cccdd555dcccccc...
                ........cccccccc........
                `,img`
                .........ccc............
                .........cccccccc.......
                ......cc..cc55555cc.....
                ......cccc555555555c....
                ......ccb55555555555c...
                ...cc..b55555ff155555c..
                ...cccb5555555ff55d55c..
                ....ccb55555d55555555c..
                .....b55555d5555d5555c..
                ..cc.b555ddd55555bbbbc..
                ..cccd55ddddd5555d555c..
                ...ccdd5dbdddbbbd555c...
                ....bdddb555bbbbbccc....
                ..cccdddb555cbbbbbbc....
                ...ccddddb555cbbbbbbc...
                ....cdddddb555cbbbbbc...
                ...ccddddddb55cbbbbbcc..
                ..ccbddddd55bcbbbbbbcc..
                ccdddddddd5555bbbbbbc...
                cdddddddbdd555bbbbbc....
                .ccddddbbbdd55cbbccc....
                ...cccbbcbddddccdddcc...
                ......cccdd555dcccccc...
                ........cccccccc........
                `,img`
                ........ccc.............
                ........cccccccc........
                .....cc..cc55555cc......
                .....cccc555555555c.....
                .....ccb55555555555c....
                ...cc.b5555bcc555555c...
                ...ccb55555555c55d55c...
                ....cb5555dd55555555c...
                .....5555dd5555d5555c...
                ..cc.555dd555555dbbbc...
                ..ccc55ddd555555d555c...
                ...ccd5dbdd5555d555c....
                ....bdddb555bbbbbccc....
                ..cccdddb555cbbbbbbbc...
                ...ccddddb555cbbbbbbbc..
                ....cdddddb555cbbbbbbc..
                ...ccddddddb55cbbbbbbcc.
                ...cbddddd55bcbbbbbbbcc.
                ..cbdddddd5555bbbbbbbc..
                .cddddddbdd555bbbbbbc...
                cddddddbbbdd55cbbccc....
                ccccccbbcbddddccdddcc...
                ......cccdd555dcccccc...
                ........cccccccc........
                `,img`
                ........................
                ........................
                ........................
                ...........ccc..........
                ...........cccc.........
                .......ccc..ccccccc.....
                .......cccccc555555cc...
                ........ccb5555555555c..
                .....cc..b555555555555c.
                .....cccb55555bcc555555c
                ......cb555555555c55d55c
                ......b5555555555555555c
                ...cc.b555dd5555bb1bbbc.
                ....ccd55ddddd5bbbb335c.
                ...ccbdddddddd5bbbb335c.
                .ccccddddddddd55bbb335c.
                cdcccdddddb55bb5bb3335c.
                cddbddddddb555bb5b3335c.
                cddddddddddb5555b53335c.
                ccddddddbd55bb55c5555c..
                .ccddddbbbdd55cccbccc...
                ...ccbbbcbddddccdddc....
                .....ccccdd555dccccc....
                ........cccccccc........
                `,img`
                ........................
                ........................
                ........................
                ...........ccc..........
                ...........cccc.........
                .......ccc..ccccccc.....
                .......cccccc555555cc...
                ........ccb5555555555c..
                .....cc..b555555555555c.
                .....cccb55555bcc555555c
                ......cb555555555c55d55c
                ......b5555555555555555c
                ...cc.b555dd5555bb1bbbc.
                ....ccd55ddddd5bbbb335c.
                ...ccbdddddddd5bbbb335c.
                .ccccddddddddd55bb3335c.
                cdcccdddddb55bb55b3335c.
                cddbddddddb555bb553335c.
                cddddddddddb5555b5555c..
                ccddddddbd55bb55cbccc...
                .ccddddbbbdd55ccbbc.....
                ...ccbbbcbddddccdddc....
                .....ccccdd555dccccc....
                ........cccccccc........
                `,img`
                ........................
                ........................
                ........................
                ...........ccc..........
                ...........cccc.........
                .......ccc..ccccccc.....
                .......cccccc555555cc...
                ........ccb5555555555c..
                .....cc..b555555555555c.
                .....cccb55555bcc555555c
                ......cb555555555c55d55c
                ......b5555555555555555c
                ...cc.b555dd5555bb1bbbc.
                ....ccd55ddddd55bbb335c.
                ...ccbddddddddd5bb3335c.
                .ccccdddddddddd55b3335c.
                cdcccdddddb55bbd553335c.
                cddbddddddb555bb55555c..
                cddddddddddb5555bbccc...
                ccddddddbd55bb55cbc.....
                .ccddddbbbdd55ccbdc.....
                ...ccbbbcbddddccdddc....
                .....ccccdd555dccccc....
                ........cccccccc........
                `],
            100,
            false
            )
            timer.after(400, function () {
                if (Math.percentChance(80)) {
                    for (let index = 0; index < 4; index++) {
                        projKaijuFire = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . 4 4 4 4 . . . . . . . . . . . 
                            4 4 2 . . . . . . . . . . . . . 
                            4 . 2 2 . . . . . . . . . . . . 
                            4 2 2 2 2 . 4 . . . . . . . . . 
                            4 4 . 2 2 . 4 . . . . . . . . . 
                            . 4 4 . . . 4 . . . . . . . . . 
                            . . . 4 4 4 4 . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, value, 100, 0)
                        projKaijuFire.setPosition(value.x, value.y + 5)
                        projKaijuFire.setKind(SpriteKind.kndKaijuBigFire)
                        animation.runImageAnimation(
                        projKaijuFire,
                        assets.animation`kaijuFireLeft`,
                        100,
                        true
                        )
                        pause(100)
                    }
                } else {
                    projKaijuEgg = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . b b b b . . . . . . 
                        . . . . b b 1 1 1 1 b b . . . . 
                        . . . . b 1 1 1 3 3 1 b . . . . 
                        . . . b 1 1 1 1 3 3 3 1 b . . . 
                        . . . b 1 1 3 1 1 3 3 1 b . . . 
                        . . b d 1 1 1 1 1 1 1 1 d b . . 
                        . . b d 3 3 1 1 1 1 1 1 d b . . 
                        . . b b 3 3 1 1 1 1 3 3 d b . . 
                        . . c b b d 1 1 1 3 3 b d c . . 
                        . . c d d d d d d b b b d c . . 
                        . . c b d d b b d b b d b c . . 
                        . . . c d d b b d d d d c . . . 
                        . . . . c b d d d d b c . . . . 
                        . . . . . c c c c c c . . . . . 
                        `, value, 50, 50)
                    projKaijuEgg.setPosition(value.x, value.y)
                    projKaijuEgg.setFlag(SpriteFlag.AutoDestroy, true)
                    projKaijuEgg.setFlag(SpriteFlag.DestroyOnWall, false)
                    projKaijuEgg.setKind(SpriteKind.kndKaijuEgg)
                    story.spriteMoveToLocation(projKaijuEgg, value.x - randint(-10, -40), value.y + 5, 100)
                    timer.after(200, function () {
                        for (let value of sprites.allOfKind(SpriteKind.kndKaijuEgg)) {
                            animation.runImageAnimation(
                            value,
                            [img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . b b b b . . . . . . 
                                . . . . b b 1 1 1 1 b b . . . . 
                                . . . . b 1 1 1 3 3 1 b . . . . 
                                . . . b 1 1 1 1 3 3 3 1 b . . . 
                                . . . b 1 1 3 1 1 3 3 1 b . . . 
                                . . b d 1 1 1 1 1 1 1 1 d b . . 
                                . . b d 3 3 1 1 1 1 1 1 d b . . 
                                . . b b 3 3 1 1 1 1 3 3 d b . . 
                                . . c b b d 1 1 1 3 3 b d c . . 
                                . . c d d d d d d b b b d c . . 
                                . . c b d d b b d b b d b c . . 
                                . . . c d d b b d d d d c . . . 
                                . . . . c b d d d d b c . . . . 
                                . . . . . c c c c c c . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . b b b b . . . . . . 
                                . . . . b b 1 1 1 1 b b . . . . 
                                . . . . b 1 1 1 3 3 1 b . . . . 
                                . . . b c 1 1 1 3 3 3 c b . . . 
                                . . . b c c 3 1 1 3 3 c b . . . 
                                . . b d 1 c 1 1 1 c c c d b . . 
                                . . b d 3 3 1 1 1 1 1 1 d b . . 
                                . . b b 3 3 1 1 1 1 3 3 d b . . 
                                . . c b b d 1 1 1 3 3 b d c . . 
                                . . c d d c d d d b c b d c . . 
                                . . c b c c b b d b c d b c . . 
                                . . . c c d b b d d c c c . . . 
                                . . . . c b d d d d b c . . . . 
                                . . . . . c c c c c c . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . b b b b . . . . . . 
                                . . . . b b 1 1 1 1 b b . . . . 
                                . . . . b 1 1 1 3 3 1 b . . . . 
                                . . . b c 1 1 1 3 3 3 c b . . . 
                                . . . b c c 3 1 1 3 3 c b . . . 
                                . . b d 1 c c 1 1 c c c d b . . 
                                . . b d 3 3 c c c c 1 1 d b . . 
                                . . b b 3 3 1 c c 1 3 3 d b . . 
                                . . c b b d c c c 3 3 b d c . . 
                                . . c d d c c c c c c b d c . . 
                                . . c b c c b b d b c d b c . . 
                                . . . c c d b b d d c c c . . . 
                                . . . . c b d d d d b c . . . . 
                                . . . . . c c c c c c . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . b b b b . . . . . . 
                                . . . . b b 1 1 c c b b . . . . 
                                . . . . b 1 1 1 c 3 1 b . . . . 
                                . . . b c 1 1 c c 3 3 c b . . . 
                                . . . b c c c c 1 3 3 c b . . . 
                                . . b d 1 c c 1 1 c c c d b . . 
                                . . b d 3 3 c c c c 1 1 c b . . 
                                . . b c c c c c c 1 3 3 c b . . 
                                . . c b b c c c c c c c c c . . 
                                . . c d d c c c c c c b d c . . 
                                . . c b c c b c c b c d b c . . 
                                . . . c c d c c d d c c c . . . 
                                . . . . c c c d d d b c . . . . 
                                . . . . . c c c c c c . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . b b b b . . . . . . 
                                . . . . b b 1 1 c c b b . . . . 
                                . . . . b 1 1 1 c 3 1 b . . . . 
                                . . . b c 1 1 c c 3 3 c b . . . 
                                . . . b c c c c c c 3 c b . . . 
                                . . b d 1 c c c c c c c d b . . 
                                . . b d c c c c c c c 1 c b . . 
                                . . b c c c c c c c c 3 c b . . 
                                . . c b b c c c c c c c c c . . 
                                . . c d d c c c c c c b d c . . 
                                . . c b c c c c c c c d b c . . 
                                . . . c c d c c c d c c c . . . 
                                . . . . c c c d d d b c . . . . 
                                . . . . . c c c c c c . . . . . 
                                `],
                            100,
                            false
                            )
                            timer.after(499, function () {
                                for (let index = 0; index < randint(1, 3); index++) {
                                    enemyBabyKaiju = sprites.create(img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . c c c c . . . . . . . . 
                                        . . c c 5 5 5 5 c c . . . . . . 
                                        . c 5 5 5 5 5 5 5 5 c . . . . . 
                                        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 d c . . 
                                        c 5 3 3 3 5 5 5 5 5 d d d c . . 
                                        . b 5 5 5 5 5 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c c . 
                                        . c b b c 5 5 b b d d d d c d c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . c c c c d 5 5 b d d d c . 
                                        . . c c c c c b 5 5 b c c c . . 
                                        . . c b b b c d 5 5 b c . . . . 
                                        `, SpriteKind.kndEnemyBabyKaiju)
                                    enemyBabyKaiju.setPosition(projKaijuEgg.x + randint(-10, 10), projKaijuEgg.y)
                                    characterAnimations.loopFrames(
                                    enemyBabyKaiju,
                                    [img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . c c c c . . . . . . . . 
                                        . . c c 5 5 5 5 c c . . . . . . 
                                        . c 5 5 5 5 5 5 5 5 c . . . . . 
                                        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 d c . . 
                                        c 5 3 3 3 5 5 5 5 5 d d d c . . 
                                        . b 5 5 5 5 5 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c c . 
                                        . c b b c 5 5 b b d d d d c d c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . c c c c d 5 5 b d d d c . 
                                        . . c c c c c b 5 5 b c c c . . 
                                        . . c b b b c d 5 5 b c . . . . 
                                        `,img`
                                        . . . . c c c c c . . . . . . . 
                                        . . c c 5 5 5 5 5 c . . . . . . 
                                        . c 5 5 5 5 1 f 5 5 c . . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 c . . . 
                                        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
                                        c 5 3 3 3 5 5 5 5 5 d d d c . . 
                                        . c 5 5 5 5 b 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c . . 
                                        . c b b c 5 5 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . . c c c b 5 5 b d d d c . 
                                        . . . . . c d 5 5 b b c c c . . 
                                        . . . . c c c c c c c . . . . . 
                                        . . . . c b b b c . . . . . . . 
                                        `,img`
                                        . . . . c c c c c . . . . . . . 
                                        . . c c 5 5 5 5 5 c . . . . . . 
                                        . c 5 5 5 5 1 f 5 5 c . . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 c . . . 
                                        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
                                        c 5 5 5 5 5 5 5 5 5 d d d c . . 
                                        . c 5 5 5 5 b 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c . . 
                                        . c b b c 5 5 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . . c c b 5 5 b d d d c c . 
                                        . . . . c d 5 5 b b c c c . . . 
                                        . . . . c c c c c c c . . . . . 
                                        . . . . c b b b c . . . . . . . 
                                        `,img`
                                        . . . . c c c c c . . . . . . . 
                                        . . c c 5 5 5 5 5 c . . . . . . 
                                        . c 5 5 5 5 1 f 5 5 c . . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 c . . . 
                                        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
                                        c 5 5 5 5 5 5 5 5 5 d d d c . . 
                                        . c 5 5 5 5 b 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c . . 
                                        . c b b c 5 5 b b d d d d c c . 
                                        . c c c c c b b d d d d d d c c 
                                        . . . c c 5 5 b 5 5 d d d d d c 
                                        . . . . c b 5 5 b b c c c c c c 
                                        . . . . c c c c c c . . . . . . 
                                        . . . . . c b b b c . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . c c c c . . . . . . . . 
                                        . . c c 5 5 5 5 c c . . . . . . 
                                        . c 5 5 5 5 5 5 5 5 c . . . . . 
                                        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 c . . . 
                                        c c 3 3 b b 5 5 5 5 5 5 d c . . 
                                        c 5 3 3 3 5 5 5 5 5 d d d c . . 
                                        . b 5 5 5 5 5 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c . . 
                                        . c b b c 5 5 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . c c c c d 5 5 b d d d c c 
                                        . . . c b c c b 5 5 b c c c . . 
                                        . . . c c c d 5 5 b c . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . c c c c . . . . . . . . 
                                        . . c c 5 5 5 5 c c . . . . . . 
                                        . c 5 5 5 5 5 5 5 5 c . . . . . 
                                        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
                                        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
                                        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
                                        c c b b 1 b 5 5 5 5 5 5 d c . . 
                                        c 5 3 3 3 5 5 5 5 5 d d d c . . 
                                        . b 5 5 5 5 5 5 5 5 d d d c . . 
                                        . . c b b c 5 5 b d d d d c . . 
                                        . c b b c 5 5 b b d d d d c c c 
                                        . c c c c c c d d d d d d d d c 
                                        . . . c c c c d 5 5 b d d c c . 
                                        . . c b b c c c 5 5 b c c . . . 
                                        . . c c c c c d 5 5 c . . . . . 
                                        `],
                                    100,
                                    characterAnimations.rule(Predicate.MovingLeft)
                                    )
                                    characterAnimations.loopFrames(
                                    enemyBabyKaiju,
                                    [img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . c c c c . . . . 
                                        . . . . . . c c 5 5 5 5 c c . . 
                                        . . . . . c 5 5 5 5 5 5 5 5 c . 
                                        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                        . . c d 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 5 5 5 b . 
                                        . c c d d d d b 5 5 c b b c . . 
                                        c d c d d d d b b 5 5 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c d d d b 5 5 d c c c c . . . 
                                        . . c c c b 5 5 b c c c c c . . 
                                        . . . . c b 5 5 d c b b b c . . 
                                        `,img`
                                        . . . . . . . c c c c c . . . . 
                                        . . . . . . c 5 5 5 5 5 c c . . 
                                        . . . . . c 5 5 f 1 5 5 5 5 c . 
                                        . . . . c 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 b 5 5 5 5 c . 
                                        . . c d d d d b 5 5 c b b c . . 
                                        c c c d d d d b b 5 5 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c d d d b 5 5 b c c c . . . . 
                                        . . c c c b b 5 5 d c . . . . . 
                                        . . . . . c c c c c c c . . . . 
                                        . . . . . . . c b b b c . . . . 
                                        `,img`
                                        . . . . . . . c c c c c . . . . 
                                        . . . . . . c 5 5 5 5 5 c c . . 
                                        . . . . . c 5 5 f 1 5 5 5 5 c . 
                                        . . . . c 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 5 5 5 5 c 
                                        . . c d d d 5 5 5 b 5 5 5 5 c . 
                                        . . c d d d d b 5 5 c b b c . . 
                                        c c c d d d d b b 5 5 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c c d d d b 5 5 b c c . . . . 
                                        . . . c c c b b 5 5 d c . . . . 
                                        . . . . . c c c c c c c . . . . 
                                        . . . . . . . c b b b c . . . . 
                                        `,img`
                                        . . . . . . . c c c c c . . . . 
                                        . . . . . . c 5 5 5 5 5 c c . . 
                                        . . . . . c 5 5 f 1 5 5 5 5 c . 
                                        . . . . c 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 5 5 5 5 c 
                                        . . c d d d 5 5 5 b 5 5 5 5 c . 
                                        . . c d d d d b 5 5 c b b c . . 
                                        . c c d d d d b b 5 5 c b b c . 
                                        c c d d d d d d b b c c c c c . 
                                        c d d d d d 5 5 b 5 5 c c . . . 
                                        c c c c c c b b 5 5 b c . . . . 
                                        . . . . . . c c c c c c . . . . 
                                        . . . . . . c b b b c . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . c c c c . . . . 
                                        . . . . . . c c 5 5 5 5 c c . . 
                                        . . . . . c 5 5 5 5 5 5 5 5 c . 
                                        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d 5 5 5 5 5 5 b b 3 3 c c 
                                        . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 5 5 5 b . 
                                        . . c d d d d b 5 5 c b b c . . 
                                        c c c d d d d b b 5 5 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        c c d d d b 5 5 d c c c c . . . 
                                        . . c c c b 5 5 b c c b c . . . 
                                        . . . . . c b 5 5 d c c c . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . c c c c . . . . 
                                        . . . . . . c c 5 5 5 5 c c . . 
                                        . . . . . c 5 5 5 5 5 5 5 5 c . 
                                        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
                                        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
                                        . . c d 5 5 5 5 5 5 b 1 b b c c 
                                        . . c d d d 5 5 5 5 5 3 3 3 5 c 
                                        . . c d d d 5 5 5 5 5 5 5 5 b . 
                                        . . c d d d d b 5 5 c b b c . . 
                                        c c c d d d d b b 5 5 c b b c . 
                                        c d d d d d d d d c c c c c c . 
                                        . c c d d b 5 5 d c c c c . . . 
                                        . . . c c b 5 5 c c c b b c . . 
                                        . . . . . c 5 5 d c c c c c . . 
                                        `],
                                    100,
                                    characterAnimations.rule(Predicate.MovingRight)
                                    )
                                }
                                value.destroy()
                            })
                        }
                    })
                }
            })
        }
        timer.after(100, function () {
            value.setVelocity(randint(-10, 10), 0)
        })
    }
})
game.onUpdateInterval(randint(500, 1000), function () {
    for (let value of sprites.allOfKind(SpriteKind.kndEnemyBabyKaiju)) {
        value.setVelocity(randint(-100, 100), 0)
    }
})
game.onUpdateInterval(randint(2000, 5500), function () {
    for (let value of sprites.allOfKind(SpriteKind.kndEnemySnakes)) {
        value.setVelocity(0, 0)
        value.follow(plrSamus, 0)
        if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingLeft))) {
            animation.runImageAnimation(
            value,
            [img`
                . . . . . c c c c c c c . . . . 
                . . . . c 6 7 7 7 7 7 6 c . . . 
                . . . c 7 c 6 6 6 6 c 7 6 c . . 
                . . c 6 7 6 f 6 6 f 6 7 7 c . . 
                . . c 7 7 7 7 7 7 7 7 7 7 c . . 
                . . f 7 8 1 f f 1 6 7 7 7 f . . 
                . . f 6 f 1 f f 1 f 7 7 7 f . . 
                . . . f f 2 2 2 2 f 7 7 6 f . . 
                . . c c f 2 2 2 2 7 7 6 f c . . 
                . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
                c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
                f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
                f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
                f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . f 6 1 1 1 1 1 6 6 6 6 c . . . 
                . . f f c c c c c c c c . . . . 
                `,img`
                . . . . . . c c c c c c c . . . 
                . . . . . c f f 6 6 f f 7 c . . 
                . . . . c 7 6 6 6 6 6 6 7 6 c . 
                . . . c 7 7 7 7 7 7 7 7 7 7 c . 
                . . . c 7 8 1 f f 1 6 7 7 7 c . 
                . . . f 6 f 1 f f 1 f 7 7 7 f . 
                . . . f 6 f 2 2 2 2 f 7 7 7 f . 
                . . c c 6 f 2 2 2 2 f 7 7 6 f . 
                . c 7 7 7 7 2 2 2 2 7 7 f c . . 
                c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
                f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
                f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
                f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
                f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . f 6 1 1 1 1 6 6 6 6 6 c . . . 
                . . f f c c c c c c c c . . . . 
                `,img`
                . . . . . . c c c c c c c . . . 
                . . . . . c f f 6 6 f f 7 c . . 
                . . . . c 7 6 6 6 6 6 6 7 6 c . 
                . . . c 7 7 7 7 7 7 7 7 7 7 c . 
                . . . c 7 8 1 f f 1 6 7 7 7 c . 
                . . . f 6 f 1 f f 1 f 7 7 7 f . 
                . . . f 6 f 2 2 2 2 f 7 7 7 f . 
                . . c c 6 f 2 2 2 2 f 7 7 6 f . 
                . c 7 7 7 7 2 2 2 2 7 7 f c . . 
                c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
                f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
                f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
                f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
                f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . f 6 1 1 1 1 6 6 6 6 6 c . . . 
                . . f f c c c c c c c c . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . c c c c c 
                . . . . . . . . . c c 7 7 7 6 c 
                . . . . . . . . c c 7 7 7 c c . 
                . . . . . . . . c 6 7 7 c . . . 
                . . . . . . . . c 6 6 6 c . . . 
                . . . c c c c c c 6 6 6 c c . . 
                . . c 6 7 7 7 7 6 c c 6 6 6 c . 
                . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
                c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
                c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
                f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
                f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
                . c 1 c f f 1 c 7 6 f 6 6 c c . 
                . c c c c c c c c c c c c . . . 
                `,img`
                . . . . . . . . . . . c c c c c 
                . . . . . . . . . c c 7 7 7 6 c 
                . . . . . . . . c c 7 7 7 c c . 
                . . . . . . . . c 6 7 7 c . . . 
                . . . . . . . . c 6 6 6 c . . . 
                . . . . . . . . c 6 6 6 c c . . 
                . . . c c c c c c c 6 6 6 c c . 
                . . c 6 7 7 7 7 6 c c 6 6 6 c . 
                . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
                c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
                c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
                f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
                f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
                . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
                . c 1 c f f 1 c 7 6 f 6 6 c c . 
                . c c c c c c c c c c c c . . . 
                `],
            100,
            false
            )
            timer.after(300, function () {
                projSnakeSpit = sprites.createProjectileFromSprite(img`
                    . . c c . . 
                    . c a a c . 
                    c a a b a c 
                    c a a a a c 
                    . c a a c . 
                    . . c c . . 
                    `, value, -50, 0)
                projSnakeSpit.setKind(SpriteKind.kndSnakeSpit)
            })
        } else if (characterAnimations.matchesRule(value, characterAnimations.rule(Predicate.MovingRight))) {
            animation.runImageAnimation(
            value,
            [img`
                . . . . c c c c c c c . . . . . 
                . . . c 6 7 7 7 7 7 6 c . . . . 
                . . c 6 7 c 6 6 6 6 c 7 c . . . 
                . . c 7 7 6 f 6 6 f 6 7 6 c . . 
                . . c 7 7 7 7 7 7 7 7 7 7 c . . 
                . . f 7 7 7 6 1 f f 1 8 7 f . . 
                . . f 7 7 7 f 1 f f 1 f 6 f . . 
                . . f 6 7 7 f 2 2 2 2 f f . . . 
                . . c f 6 7 7 2 2 2 2 f c c . . 
                . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
                c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
                c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
                . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
                . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
                . . . c 6 6 6 6 1 1 1 1 1 6 f . 
                . . . . c c c c c c c c f f . . 
                `,img`
                . . . c c c c c c c . . . . . . 
                . . c 7 f f 6 6 f f c . . . . . 
                . c 6 7 6 6 6 6 6 6 7 c . . . . 
                . c 7 7 7 7 7 7 7 7 7 7 c . . . 
                . c 7 7 7 6 1 f f 1 8 7 c . . . 
                . f 7 7 7 f 1 f f 1 f 6 f . . . 
                . f 7 7 7 f 2 2 2 2 f 6 f . . . 
                . f 6 7 7 f 2 2 2 2 f 6 c c . . 
                . . c f 7 7 2 2 2 2 7 7 7 7 c . 
                . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
                c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
                c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
                . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
                . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
                . . . c 6 6 6 6 6 1 1 1 1 6 f . 
                . . . . c c c c c c c c f f . . 
                `,img`
                . . . c c c c c c c . . . . . . 
                . . c 7 f f 6 6 f f c . . . . . 
                . c 6 7 6 6 6 6 6 6 7 c . . . . 
                . c 7 7 7 7 7 7 7 7 7 7 c . . . 
                . c 7 7 7 6 1 f f 1 8 7 c . . . 
                . f 7 7 7 f 1 f f 1 f 6 f . . . 
                . f 7 7 7 f 2 2 2 2 f 6 f . . . 
                . f 6 7 7 f 2 2 2 2 f 6 c c . . 
                . . c f 7 7 2 2 2 2 7 7 7 7 c . 
                . c 7 7 c c 7 7 7 7 7 1 1 1 7 c 
                c 7 7 7 6 c f 7 7 7 1 1 1 1 1 f 
                c c 6 6 6 c c f 6 1 1 1 1 1 1 f 
                . . c 6 6 6 c 6 6 1 1 1 1 1 6 f 
                . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
                . . . c 6 6 6 6 6 1 1 1 1 6 f . 
                . . . . c c c c c c c c f f . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                c c c c c . . . . . . . . . . . 
                c 6 7 7 7 c c . . . . . . . . . 
                . c c 7 7 7 c c . . . . . . . . 
                . . . c 7 7 6 c . . . . . . . . 
                . . . c 6 6 6 c . . . . . . . . 
                . . c c 6 6 6 c c c c c c . . . 
                . c 6 6 6 c c 6 7 7 7 7 6 c . . 
                c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
                c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
                c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
                c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
                c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
                . c c 6 6 f 6 7 c 1 f f c 1 c . 
                . . . c c c c c c c c c c c c . 
                `,img`
                c c c c c . . . . . . . . . . . 
                c 6 7 7 7 c c . . . . . . . . . 
                . c c 7 7 7 c c . . . . . . . . 
                . . . c 7 7 6 c . . . . . . . . 
                . . . c 6 6 6 c . . . . . . . . 
                . . c c 6 6 6 c . . . . . . . . 
                . c c 6 6 6 c c c c c c c . . . 
                . c 6 6 6 c c 6 7 7 7 7 6 c . . 
                c c 6 6 6 c 7 7 7 7 7 7 7 7 c . 
                c 6 6 6 c 6 7 7 7 7 7 7 7 7 6 c 
                c 6 6 6 c 7 7 7 c 6 6 6 6 c 7 c 
                c 6 6 6 f 7 7 7 c c 6 6 c c 7 f 
                c 6 6 6 f 7 7 7 6 f 6 6 f 6 7 f 
                . c 6 6 f 6 7 7 7 7 7 7 7 7 f . 
                . c c 6 6 f 6 7 c 1 f f c 1 c . 
                . . . c c c c c c c c c c c c . 
                `],
            100,
            false
            )
            timer.after(300, function () {
                projSnakeSpit = sprites.createProjectileFromSprite(img`
                    . . c c . . 
                    . c a a c . 
                    c a a b a c 
                    c a a a a c 
                    . c a a c . 
                    . . c c . . 
                    `, value, 50, 0)
                projSnakeSpit.setKind(SpriteKind.kndSnakeSpit)
            })
        }
        timer.after(500, function () {
            value.follow(plrSamus, 25)
            characterAnimations.loopFrames(
            value,
            [img`
                . . . . c c c c c c . . . . . . 
                . . . c 6 7 7 7 7 6 c . . . . . 
                . . c 7 7 7 7 7 7 7 7 c . . . . 
                . c 6 7 7 7 7 7 7 7 7 6 c . . . 
                . c 7 c 6 6 6 6 c 7 7 7 c . . . 
                . f 7 6 f 6 6 f 6 7 7 7 f . . . 
                . f 7 7 7 7 7 7 7 7 7 7 f . . . 
                . . f 7 7 7 7 6 c 7 7 6 f c . . 
                . . . f c c c c 7 7 6 f 7 7 c . 
                . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
                . c 7 7 2 7 7 c f c 6 7 7 6 c c 
                c 1 1 1 1 7 6 f c c 6 6 6 c . . 
                f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
                f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
                . f 6 1 1 1 1 1 1 6 6 6 f . . . 
                . . c c c c c c c c c f . . . . 
                `,img`
                . . . c c c c c c . . . . . . . 
                . . c 6 7 7 7 7 6 c . . . . . . 
                . c 7 7 7 7 7 7 7 7 c . . . . . 
                c 6 7 7 7 7 7 7 7 7 6 c . . . . 
                c 7 c 6 6 6 6 c 7 7 7 c . . . . 
                f 7 6 f 6 6 f 6 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                . f 7 7 7 7 6 c 7 7 6 f . . . . 
                . . f c c c c 7 7 6 f c c c . . 
                . . c 6 2 7 7 7 f c c 7 7 7 c . 
                . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
                . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
                . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
                . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
                . . c 6 1 1 1 1 1 7 6 6 c c . . 
                . . . c c c c c c c c c c . . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingLeft)
            )
            characterAnimations.loopFrames(
            value,
            [img`
                . . . . . . c c c c c c . . . . 
                . . . . . c 6 7 7 7 7 6 c . . . 
                . . . . c 7 7 7 7 7 7 7 7 c . . 
                . . . c 6 7 7 7 7 7 7 7 7 6 c . 
                . . . c 7 7 7 c 6 6 6 6 c 7 c . 
                . . . f 7 7 7 6 f 6 6 f 6 7 f . 
                . . . f 7 7 7 7 7 7 7 7 7 7 f . 
                . . c f 6 7 7 c 6 7 7 7 7 f . . 
                . c 7 7 f 6 7 7 c c c c f . . . 
                c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
                c c 6 7 7 6 c f c 7 7 2 7 7 c . 
                . . c 6 6 6 c c f 6 7 1 1 1 1 c 
                . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
                . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
                . . . f 6 6 6 1 1 1 1 1 1 6 f . 
                . . . . f c c c c c c c c c . . 
                `,img`
                . . . . . . . c c c c c c . . . 
                . . . . . . c 6 7 7 7 7 6 c . . 
                . . . . . c 7 7 7 7 7 7 7 7 c . 
                . . . . c 6 7 7 7 7 7 7 7 7 6 c 
                . . . . c 7 7 7 c 6 6 6 6 c 7 c 
                . . . . f 7 7 7 6 f 6 6 f 6 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 6 7 7 c 6 7 7 7 7 f . 
                . . c c c f 6 7 7 c c c c f . . 
                . c 7 7 7 c c f 7 7 7 2 6 c . . 
                c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
                c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
                . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
                . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
                . . c c 6 6 7 1 1 1 1 1 6 c . . 
                . . . c c c c c c c c c c . . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingRight)
            )
        })
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
game.onUpdateInterval(500, function () {
    for (let value of sprites.allOfKind(SpriteKind.kndEnemyCrawler)) {
        if (varCrawlerShelled == false) {
            value.setVelocity(randint(-10, 10), 0)
        }
    }
})
