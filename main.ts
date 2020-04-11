enum numOption {
    //% block="rounding"
    round,
    //% block="float"
    float
}

//% weight=100 color=#f5ce42 icon="\uf2bb" block="Area"
namespace areaCalculator {

    //% blockId="block="get the area of triangle:base: %base|height: %height| option:%myOpt"
    //% base.min=0 base.max=100 base.defl=0 height.min=0 height.max=100 height.defl=0
    //% weight=100
    export function areaOfTriangle(base: number, height: number, myOpt: numOption): number {
        if (myOpt == numOption.float)
            return base * height / 2;
        else
            return Math.round(base * height / 2);
    }
    //% blockId="showAreaOfTriangle"
    //% block="Show the area of triangle on LED: base: %base|height: %height| option:%myOpt"
    //% base.min=0 base.max=100 base.defl=0 height.min=0 height.max=100 height.defl=0
    //% weight=90
    export function showAreaOfTriangle(base: number, height: number, myOpt: numOption): void {
        let myNum = 0;
        if (myOpt == numOption.float)
            myNum = base * height / 2;
        else
            myNum = Math.round(base * height / 2);
        basic.showNumber(myNum);
      }
}
