let reaing = 0
basic.forever(function () {
    reaing = input.lightLevel()
    led.plotBarGraph(
    reaing,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reaing)
    }
})
