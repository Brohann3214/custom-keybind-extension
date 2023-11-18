//% weight=98 color=#39296e icon="\uf1de"
namespace Keybinds {
    export enum MakeyMakeyKey {
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

    }

    function MakeyMakeyKeyToKeyCode(makeyMakeyKey: MakeyMakeyKey) {
        switch (makeyMakeyKey) {
            case (MakeyMakeyKey.UP):
                return keymap.KeyCode.UpArrow
            case (MakeyMakeyKey.DOWN):
                return keymap.KeyCode.DownArrow
            case (MakeyMakeyKey.LEFT):
                return keymap.KeyCode.LeftArrow
            case (MakeyMakeyKey.RIGHT):
                return keymap.KeyCode.RightArrow
            case (MakeyMakeyKey.SPACE):
                return keymap.KeyCode.Space
            case (MakeyMakeyKey.LEFT_CLICK):
                return keymap.KeyCode.MouseLeftButton
            case (MakeyMakeyKey.RIGHT_CLICK):
                return keymap.KeyCode.MouseRightButton
            case (MakeyMakeyKey.Q):
                return keymap.KeyCode.Q
            case (MakeyMakeyKey.W):
                return keymap.KeyCode.W
            case (MakeyMakeyKey.E):
                return keymap.KeyCode.E
            case (MakeyMakeyKey.R):
                return keymap.KeyCode.R
            case (MakeyMakeyKey.T):
                return keymap.KeyCode.T
            case (MakeyMakeyKey.Y):
                return keymap.KeyCode.Y
            case (MakeyMakeyKey.U):
                return keymap.KeyCode.U
            case (MakeyMakeyKey.I):
                return keymap.KeyCode.I
            case (MakeyMakeyKey.O):
                return keymap.KeyCode.O
            case (MakeyMakeyKey.P):
                return keymap.KeyCode.P
            case (MakeyMakeyKey.A):
                return keymap.KeyCode.A
            case (MakeyMakeyKey.S):
                return keymap.KeyCode.S
            case (MakeyMakeyKey.D):
                return keymap.KeyCode.D
            case (MakeyMakeyKey.F):
                return keymap.KeyCode.F
            case (MakeyMakeyKey.G):
                return keymap.KeyCode.G
            case (MakeyMakeyKey.H):
                return keymap.KeyCode.H
            case (MakeyMakeyKey.J):
                return keymap.KeyCode.J
            case (MakeyMakeyKey.K):
                return keymap.KeyCode.K
            case (MakeyMakeyKey.L):
                return keymap.KeyCode.L
            case (MakeyMakeyKey.Z):
                return keymap.KeyCode.Z
            case (MakeyMakeyKey.X):
                return keymap.KeyCode.X
            case (MakeyMakeyKey.C):
                return keymap.KeyCode.C
            case (MakeyMakeyKey.V):
                return keymap.KeyCode.V
            case (MakeyMakeyKey.B):
                return keymap.KeyCode.B
            case (MakeyMakeyKey.N):
                return keymap.KeyCode.N
            case (MakeyMakeyKey.M):
                return keymap.KeyCode.M
            case (MakeyMakeyKey.ONE):
                return keymap.KeyCode.One
            case (MakeyMakeyKey.TWO):
                return keymap.KeyCode.Two
            case (MakeyMakeyKey.THREE):
                return keymap.KeyCode.Three
            case (MakeyMakeyKey.FOUR):
                return keymap.KeyCode.Four
            case (MakeyMakeyKey.FIVE):
                return keymap.KeyCode.Five
            case (MakeyMakeyKey.SIX):
                return keymap.KeyCode.Six
            case (MakeyMakeyKey.SEVEN):
                return keymap.KeyCode.Seven
            case (MakeyMakeyKey.EIGHT):
                return keymap.KeyCode.Eight
            case (MakeyMakeyKey.NINE):
                return keymap.KeyCode.Nine
            case (MakeyMakeyKey.ZERO):
                return keymap.KeyCode.Zero
            case (MakeyMakeyKey.TILDE):
                return keymap.KeyCode.Tilde
            case (MakeyMakeyKey.MINUS):
                return keymap.KeyCode.Subtract
            case (MakeyMakeyKey.PLUS):
                return keymap.KeyCode.Add
            case (MakeyMakeyKey.SHIFT):
                return keymap.KeyCode.Shift
            case (MakeyMakeyKey.ALT):
                return keymap.KeyCode.Alt
            case (MakeyMakeyKey.TAB):
                return keymap.KeyCode.Tab
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
        buttonUp: MakeyMakeyKey = MakeyMakeyKey.UP,
        buttonDown: MakeyMakeyKey = MakeyMakeyKey.DOWN,
        buttonLeft: MakeyMakeyKey = MakeyMakeyKey.LEFT,
        buttonRight: MakeyMakeyKey = MakeyMakeyKey.RIGHT,
        buttonA: MakeyMakeyKey = MakeyMakeyKey.SPACE,
        buttonB: MakeyMakeyKey = MakeyMakeyKey.LEFT_CLICK) {
        keymap.setPlayerKeys(
            playerNumber,
            MakeyMakeyKeyToKeyCode(buttonUp),
            MakeyMakeyKeyToKeyCode(buttonDown),
            MakeyMakeyKeyToKeyCode(buttonLeft),
            MakeyMakeyKeyToKeyCode(buttonRight),
            MakeyMakeyKeyToKeyCode(buttonA),
            MakeyMakeyKeyToKeyCode(buttonB)
        )
    }



    //% blockId=set_simulator_keymap_to_makey_makey_defaults
    //% block="use default keys"
    export function setMakeyMakeyDefaults() {
        setSimulatorKeymap(1,
            MakeyMakeyKey.UP,
            MakeyMakeyKey.DOWN,
            MakeyMakeyKey.LEFT,
            MakeyMakeyKey.RIGHT,
            MakeyMakeyKey.Z,
            MakeyMakeyKey.X
        )
        setSimulatorKeymap(2,
            MakeyMakeyKey.W,
            MakeyMakeyKey.A,
            MakeyMakeyKey.S,
            MakeyMakeyKey.D,
            MakeyMakeyKey.Q,
            MakeyMakeyKey.E
        )
    }
}