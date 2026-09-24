input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Great!")
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Triangle)
})
basic.showString("Hello!")
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # # # .
    `)
basic.showIcon(IconNames.Meh)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.TShirt)
basic.showIcon(IconNames.StickFigure)
basic.showIcon(IconNames.Butterfly)
basic.showIcon(IconNames.Heart)
music.play(music.createSoundExpression(WaveShape.Noise, 5000, 1, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
music.play(music.stringPlayable("F E D E E E G C5 ", 988), music.PlaybackMode.UntilDone)
