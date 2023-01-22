let ix = 0
let iy = 0
input.onButtonPressed(Button.A, function () {
    tt.ftest(1.5, 2.4)
    basic.showNumber(ix)
    basic.showNumber(iy)
})
namespace tt {
    //% blockId=tt_ftest
    //% block="Setze den Zeichnungsparamerter nrpar %nrpar auf wert %wert"
    //% inlineInputMode=inline
    //% nrpar.min=0 nrpar.max=6
    //% wert.min=0 wert.max=6
    //% weight=100 blockGap=8
    export function ftest(x0: number, y0: number) {
        ix = Math.round(x0 + 1.1)
        iy = Math.round(y0 + -1.1)
        return
    }
}

basic.forever(function () {
	
})
