'use strict'

/**
 * 
 * @param {number[]} levels 
 */
const GetCollectedWater = (levels) => {

    let collectedWater = 0;
    let nextLevelIndex = levels.findIndex((l) => l > 0);
    let nextLevel = levels[nextLevelIndex];
    let maxLevel = nextLevel;
    let nextHighLevelIndex;

    for (var i = nextLevelIndex; i < levels.length; i++) {
        nextHighLevelIndex = levels.findIndex((fl, fi) => (fi > i && fl >= maxLevel));

        if (nextHighLevelIndex === -1) {
            nextHighLevelIndex = levels.findIndex((fl, fi) => (fi > i && fl === Math.max(...levels.slice(i + 1))));
            maxLevel = levels[nextHighLevelIndex];
        }
        if (nextHighLevelIndex !== -1) {
            for (var z = i; z < nextHighLevelIndex; z++) {
                collectedWater += maxLevel < levels[z] ? maxLevel : maxLevel - levels[z];
            }
            i = nextHighLevelIndex;
            maxLevel = i < levels.length - 1 ? levels[i] : maxLevel;
        } else {
            break;
        }

    }

    console.log(`Collected Water: ${collectedWater}`);

}

const GetLevelsFromCmd = () => {
    const { argv } = process;
    const { 0: LEVELS_RAW } = argv.slice(2, argv.length);
    const LEVELS = LEVELS_RAW.split(',').map(i => +i)

    return LEVELS;
}

GetCollectedWater(GetLevelsFromCmd())