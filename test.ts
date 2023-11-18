controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    number = "" + number + "+"
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    number = "" + number + convertToText(0)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {

})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    number = "" + number + "-"
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    number = "" + number + convertToText(7)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    number = "" + number + convertToText(6)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    number = "" + number + convertToText(9)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    number = "" + number + convertToText(8)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    number = "" + number + convertToText(3)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    number = "" + number + convertToText(4)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    number = "" + number + convertToText(5)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    number = "" + number + convertToText(2)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    number = "" + number + convertToText(1)
})
let number = ""
let mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
number = ""
Keybinds.setSimulatorKeymap(
    Keybinds.PlayerNumber.ONE,
    Keybinds.MakeyMakeyKey.ZERO,
    Keybinds.MakeyMakeyKey.ONE,
    Keybinds.MakeyMakeyKey.TWO,
    Keybinds.MakeyMakeyKey.THREE,
    Keybinds.MakeyMakeyKey.FOUR,
    Keybinds.MakeyMakeyKey.FIVE
)
Keybinds.setSimulatorKeymap(
    Keybinds.PlayerNumber.TWO,
    Keybinds.MakeyMakeyKey.SIX,
    Keybinds.MakeyMakeyKey.SEVEN,
    Keybinds.MakeyMakeyKey.EIGHT,
    Keybinds.MakeyMakeyKey.NINE,
    Keybinds.MakeyMakeyKey.MINUS,
    Keybinds.MakeyMakeyKey.PLUS
)
game.onUpdate(function () {
    mySprite.sayText(number)
})
