input.onGesture(Gesture.Shake, function () {
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
    } else {
        if (gg1 == 3) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(1500)
    basic.showNumber(input.temperature())
    input.calibrateCompass()
    basic.showArrow(ArrowNames.North)
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
basic.forever(function () {
	
})
loops.everyInterval(20000, function () {
	
})
