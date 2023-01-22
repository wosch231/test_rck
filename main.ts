namespace tt {
let ix = 0
let iy = 0
    //% blockId=tt_ftest
    //% block="Test function %x0 und %y0"
    //% inlineInputMode=inline
    //% weight=100 blockGap=8
    export function ftest(x0: number, y0: number) {
        ix = Math.round(x0 + 1.1)
        iy = Math.round(y0 + -1.1)
        return
    }
}
