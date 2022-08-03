def on_sound_loud():
    global gg1
    basic.show_number(3)
    basic.pause(500)
    basic.show_number(2)
    basic.pause(500)
    basic.show_number(1)
    basic.pause(500)
    gg1 = randint(1, 3)
    if gg1 == 1:
        basic.show_leds("""
            . . # . .
                        . # # # .
                        # # # # #
                        . # # # .
                        . . # . .
        """)
    elif gg1 == 2:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        # # . # #
                        # # . # #
        """)
    elif gg1 == 3:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

gg1 = 0
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . # . #
""")
music.play_melody("- - - C5 B A B C5 ", 120)
basic.pause(100)
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")
input.set_sound_threshold(SoundThreshold.LOUD, 255)
input.set_sound_threshold(SoundThreshold.QUIET, 254)

led.set_brightness(128)

def on_forever():
    if input.light_level() < 70:
        led.set_brightness(205)
    elif input.light_level() > 205:
        led.set_brightness(50)
    else:
        led.set_brightness(103)
basic.forever(on_forever)
