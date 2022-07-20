def כאשר():
    pass
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . # . #
""")
music.play_melody("- - - C5 B A B C5 ", 120)

def on_forever():
    pass
basic.forever(on_forever)

def on_every_interval():
    basic.pause(1500)
    basic.show_number(input.temperature())
    input.calibrate_compass()
    basic.show_arrow(ArrowNames.NORTH)
loops.every_interval(20000, on_every_interval)
