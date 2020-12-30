
const GetArrayAndTargetFromCmd = () => {
    const { argv } = process;
    const { 0: NUMBERS_RAW, 1: TARGET_RAW } = argv.slice(2, argv.length);
    const NUMBERS = NUMBERS_RAW.split(',').map(i => +i)
    const TARGET = +TARGET_RAW

    return { NUMBERS, TARGET }
}

const CheckForTargetSum = (numbers, target) => {
    let result = [];

    numbers.forEach((n, i) => {
        numbers.find((f, fi) => {
            if (i != fi && f + n == target && !result.length) {
                result = [i, fi]
            }
        })
    })

    return result;
}

module.exports = {
    CheckForTargetSum,
    GetArrayAndTargetFromCmd
}
