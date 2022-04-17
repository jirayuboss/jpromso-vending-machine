export async function CalculateChange(change) {
    let changeObj = {
        1: 0,
        5: 0,
        10: 0,
        20: 0,
        50: 0,
        100: 0,
        500: 0,
        1000: 0
    }

    while (change > 0) {
        if (change >= 1 && change < 5) {
            changeObj[1] += 1
            change -= 1
        } if (change >= 5 && change < 10) {
            changeObj[5] += 1
            change -= 5
        } if (change >= 10 && change < 20) {
            changeObj[10] += 1
            change -= 10
        } if (change >= 20 && change < 50) {
            changeObj[20] += 1
            change -= 20
        } if (change >= 50 && change < 100) {
            changeObj[50] += 1
            change -= 50
        } if (change >= 100 && change < 500) {
            changeObj[100] += 1
            change -= 100
        } if (change >= 500 && change < 1000) {
            changeObj[500] += 1
            change -= 500
        } if (change >= 1000) {
            changeObj[1000] += 1
            change -= 1000
        }
    }

    return changeObj
}