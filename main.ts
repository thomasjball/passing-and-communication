radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    if (control.deviceSerialNumber() == receivedNumber) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.setGroup(11)
    basic.showString("11")
})
input.onButtonPressed(Button.A, function () {
    if (!(running) && !(coach_mode)) {
        radio.sendString("add")
    } else if (!(running) && coach_mode) {
        running = true
        start_time = input.runningTime()
        passes = 0
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (!(running) && !(coach_mode)) {
        coach_mode = true
        players = []
        basic.showString("C")
    }
})
radio.onReceivedString(function (receivedString) {
    if (coach_mode) {
        if (players.indexOf(radio.receivedPacket(RadioPacketProperty.SerialNumber)) == -1) {
            players.push(radio.receivedPacket(RadioPacketProperty.SerialNumber))
            basic.showNumber(players.length)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (coach_mode) {
        if (1 < delay) {
            delay += -1
            basic.showNumber(delay)
            basic.pause(1000)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (coach_mode && running) {
        passes += 1
        basic.showNumber(passes)
    }
})
let players: number[] = []
let passes = 0
let start_time = 0
let delay = 0
let running = false
let coach_mode = false
coach_mode = false
running = false
radio.setGroup(13)
radio.setTransmitSerialNumber(true)
delay = 10
start_time = 0
let game_duration = 30000
passes = 0
loops.everyInterval(1000, function () {
    if (coach_mode) {
        if (running) {
            if (input.runningTime() - start_time >= game_duration) {
                running = false
                music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
                basic.showNumber(passes)
            }
        }
    }
})
basic.forever(function () {
    if (running) {
        radio.sendNumber(players._pickRandom())
        basic.showIcon(IconNames.Heart)
        for (let index = 0; index < delay; index++) {
            basic.pause(500)
        }
        basic.showIcon(IconNames.SmallHeart)
    }
})
