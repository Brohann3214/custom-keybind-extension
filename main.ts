//% weight=98 color=#39296e icon="\uf1de"
namespace Keybinds {
    export enum CustomKey {
        //% block="UP ARROW"
        UP = keymap.KeyCode.UpArrow,
        //% block="DOWN ARROW"
        DOWN = keymap.KeyCode.DownArrow,
        //% block="LEFT ARROW"
        LEFT = keymap.KeyCode.LeftArrow,
        //% block="RIGHT ARROW"
        RIGHT = keymap.KeyCode.RightArrow,
        //% block="SPACE"
        SPACE = keymap.KeyCode.Space,
        //% block="LEFT CLICK"
        LEFT_CLICK = keymap.KeyCode.MouseLeftButton,
        //% block="RIGHT CLICK"
        RIGHT_CLICK = keymap.KeyCode.MouseRightButton,
        //% block="Q"
        Q = keymap.KeyCode.Q,
        //% block="W"
        W = keymap.KeyCode.W,
        //% block="E"
        E = keymap.KeyCode.E,
        //% block="R"
        R = keymap.KeyCode.R,
        //% block="T"
        T = keymap.KeyCode.T,
        //% block="Y"
        Y = keymap.KeyCode.Y,
        //% block="U"
        U = keymap.KeyCode.U,
        //% block="I"
        I = keymap.KeyCode.I,
        //% block="O"
        O = keymap.KeyCode.O,
        //% block="P"
        P = keymap.KeyCode.P,
        //% block="A"
        A = keymap.KeyCode.A,
        //% block="S"
        S = keymap.KeyCode.S,
        //% block="D"
        D = keymap.KeyCode.F,
        //% block="F"
        F = keymap.KeyCode.F,
        //% block="G"
        G = keymap.KeyCode.G,
        //% block="H"
        H = keymap.KeyCode.H,
        //% block="J"
        J = keymap.KeyCode.J,
        //% block="K"
        K = keymap.KeyCode.K,
        //% block="L"
        L = keymap.KeyCode.L,
        //% block="Z"
        Z = keymap.KeyCode.Z,
        //% block="X"
        X = keymap.KeyCode.X,
        //% block="C"
        C = keymap.KeyCode.C,
        //% block="V"
        V = keymap.KeyCode.V,
        //% block="B"
        B = keymap.KeyCode.B,
        //% block="N"
        N = keymap.KeyCode.N,
        //% block="M"
        M = keymap.KeyCode.M,
        //% block="1"
        ONE = keymap.KeyCode.One,
        //% block="2"
        TWO = keymap.KeyCode.Two,
        //% block="3"
        THREE = keymap.KeyCode.Three,
        //% block="4"
        FOUR = keymap.KeyCode.Four,
        //% block="5"
        FIVE = keymap.KeyCode.Five,
        //% block="6"
        SIX = keymap.KeyCode.Six,
        //% block="7"
        SEVEN = keymap.KeyCode.Seven,
        //% block="8"
        EIGHT = keymap.KeyCode.Eight,
        //% block="9"
        NINE = keymap.KeyCode.Nine,
        //% block="0"
        ZERO = keymap.KeyCode.Zero,
        //% block="-"
        MINUS = keymap.KeyCode.Subtract,
        //% block="+"
        PLUS = keymap.KeyCode.Add,
        //% block="~"
        TILDE = keymap.KeyCode.Tilde,
        //% block="SHIFT"
        SHIFT = keymap.KeyCode.Shift,
        //% block="ALT"
        ALT = keymap.KeyCode.Alt,
        //% block="TAB"
        TAB = keymap.KeyCode.Tab,
        //% block="ENTER"
        ENTER = keymap.KeyCode.Enter,
        //% block="BACKSPACE"
        BACKSPACE = keymap.KeyCode.Backspace,

    }

    function CustomKeyToKeyCode(customKey: CustomKey) {
        switch (customKey) {
            case (CustomKey.UP):
                return keymap.KeyCode.UpArrow
            case (CustomKey.DOWN):
                return keymap.KeyCode.DownArrow
            case (CustomKey.LEFT):
                return keymap.KeyCode.LeftArrow
            case (CustomKey.RIGHT):
                return keymap.KeyCode.RightArrow
            case (CustomKey.SPACE):
                return keymap.KeyCode.Space
            case (CustomKey.LEFT_CLICK):
                return keymap.KeyCode.MouseLeftButton
            case (CustomKey.RIGHT_CLICK):
                return keymap.KeyCode.MouseRightButton
            case (CustomKey.Q):
                return keymap.KeyCode.Q
            case (CustomKey.W):
                return keymap.KeyCode.W
            case (CustomKey.E):
                return keymap.KeyCode.E
            case (CustomKey.R):
                return keymap.KeyCode.R
            case (CustomKey.T):
                return keymap.KeyCode.T
            case (CustomKey.Y):
                return keymap.KeyCode.Y
            case (CustomKey.U):
                return keymap.KeyCode.U
            case (CustomKey.I):
                return keymap.KeyCode.I
            case (CustomKey.O):
                return keymap.KeyCode.O
            case (CustomKey.P):
                return keymap.KeyCode.P
            case (CustomKey.A):
                return keymap.KeyCode.A
            case (CustomKey.S):
                return keymap.KeyCode.S
            case (CustomKey.D):
                return keymap.KeyCode.D
            case (CustomKey.F):
                return keymap.KeyCode.F
            case (CustomKey.G):
                return keymap.KeyCode.G
            case (CustomKey.H):
                return keymap.KeyCode.H
            case (CustomKey.J):
                return keymap.KeyCode.J
            case (CustomKey.K):
                return keymap.KeyCode.K
            case (CustomKey.L):
                return keymap.KeyCode.L
            case (CustomKey.Z):
                return keymap.KeyCode.Z
            case (CustomKey.X):
                return keymap.KeyCode.X
            case (CustomKey.C):
                return keymap.KeyCode.C
            case (CustomKey.V):
                return keymap.KeyCode.V
            case (CustomKey.B):
                return keymap.KeyCode.B
            case (CustomKey.N):
                return keymap.KeyCode.N
            case (CustomKey.M):
                return keymap.KeyCode.M
            case (CustomKey.ONE):
                return keymap.KeyCode.One
            case (CustomKey.TWO):
                return keymap.KeyCode.Two
            case (CustomKey.THREE):
                return keymap.KeyCode.Three
            case (CustomKey.FOUR):
                return keymap.KeyCode.Four
            case (CustomKey.FIVE):
                return keymap.KeyCode.Five
            case (CustomKey.SIX):
                return keymap.KeyCode.Six
            case (CustomKey.SEVEN):
                return keymap.KeyCode.Seven
            case (CustomKey.EIGHT):
                return keymap.KeyCode.Eight
            case (CustomKey.NINE):
                return keymap.KeyCode.Nine
            case (CustomKey.ZERO):
                return keymap.KeyCode.Zero
            case (CustomKey.TILDE):
                return keymap.KeyCode.Tilde
            case (CustomKey.MINUS):
                return keymap.KeyCode.Subtract
            case (CustomKey.PLUS):
                return keymap.KeyCode.Add
            case (CustomKey.SHIFT):
                return keymap.KeyCode.Shift
            case (CustomKey.ALT):
                return keymap.KeyCode.Alt
            case (CustomKey.TAB):
                return keymap.KeyCode.Tab
            case (CustomKey.ENTER):
                return keymap.KeyCode.Enter
            case (CustomKey.BACKSPACE):
                return keymap.KeyCode.Backspace
        }
        return null
    }

    export enum PlayerNumber {
        //% block="player 1"
        ONE = 1,
        //% block="player 2"
        TWO = 2,
        //% block="player 3"
        THREE = 3,
        //% block="player 4"
        FOUR = 4
    }
    //% blockId=set_simulator_keymap_for_player
    //% block="set simulator keys for $playerNumber \n UP $buttonUp \n DOWN $buttonDown \n LEFT $buttonLeft \n RIGHT $buttonRight \n A $buttonA \n B $buttonB"    
    export function setSimulatorKeymap(
        playerNumber: PlayerNumber = 1,
        buttonUp: CustomKey = CustomKey.UP,
        buttonDown: CustomKey = CustomKey.DOWN,
        buttonLeft: CustomKey = CustomKey.LEFT,
        buttonRight: CustomKey = CustomKey.RIGHT,
        buttonA: CustomKey = CustomKey.SPACE,
        buttonB: CustomKey = CustomKey.LEFT_CLICK) {
        keymap.setPlayerKeys(
            playerNumber,
            CustomKeyToKeyCode(buttonUp),
            CustomKeyToKeyCode(buttonDown),
            CustomKeyToKeyCode(buttonLeft),
            CustomKeyToKeyCode(buttonRight),
            CustomKeyToKeyCode(buttonA),
            CustomKeyToKeyCode(buttonB)
        )
    }



    //% blockId=set_simulator_keymap_to_makey_makey_defaults
    //% block="use default keys"
    export function setMakeyMakeyDefaults() {
        setSimulatorKeymap(1,
            CustomKey.UP,
            CustomKey.DOWN,
            CustomKey.LEFT,
            CustomKey.RIGHT,
            CustomKey.Z,
            CustomKey.X
        )
        setSimulatorKeymap(2,
            CustomKey.W,
            CustomKey.A,
            CustomKey.S,
            CustomKey.D,
            CustomKey.Q,
            CustomKey.E
        )
    }
}