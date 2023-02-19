input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    Count = 0
})
input.onButtonPressed(Button.B, function () {
    Count += 1
    basic.showNumber(Count)
})
let Count = 0
basic.showNumber(0)
Count = 0
basic.forever(function () {
	
})
