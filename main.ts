input.onSound(DetectedSound.Loud, function () {
    basic.showNumber(3)
    basic.pause(500)
    basic.showNumber(2)
    basic.pause(500)
    basic.showNumber(1)
    basic.pause(500)
    gg1 = randint(1, 3)
    if (gg1 == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (gg1 == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else if (gg1 == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
let gg1 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . # . #
    `)
music.playMelody("- - - C5 B A B C5 ", 120)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
input.setSoundThreshold(SoundThreshold.Loud, 255)
input.setSoundThreshold(SoundThreshold.Quiet, 254)
led.setBrightness(128)
basic.forever(function () {
    if (input.lightLevel() < 70) {
        led.setBrightness(50)
    } else if (input.lightLevel() > 205) {
        led.setBrightness(255)
    } else {
        led.setBrightness(128)
    }
})
