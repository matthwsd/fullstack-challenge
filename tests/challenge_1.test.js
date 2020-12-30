const { CheckForTargetSum } = require('../challenges/challenge_1');

function GetRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function GenerateRandomTenCases() {

    /**
     * @type {number[][]}
     */
    var cases = [[]]

    for (let i = 0; i < 10; i++) {
        cases[i] = []
        for (let z = 0; z < 4; z++) {
            if (!cases[i].length)
                cases[i] = []

            cases[i].push(GetRandomNumber(1, 999));
        }
    }

    return cases;
}
const cases = GenerateRandomTenCases()

cases.forEach((c) => {
    let a = 0;
    let b = 0;

    while (b === a) {
        a = GetRandomNumber(0, 4)
        b = GetRandomNumber(0, 4)
    }

    test(`Index to target sum ${c[a] + c[b]} in [${c.join(",")}] to be [${a},${b}]`, () => {
        expect(CheckForTargetSum(c, (c[a] + c[b]))).toStrictEqual([a, b].sort())
    })
})


