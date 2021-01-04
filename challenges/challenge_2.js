
const GetSequenceFromCmd = () => {
    const { argv } = process;
    const { 0: SEQUENCE } = argv.slice(2, argv.length);

    return SEQUENCE;
}



/**
 * 
 * @param {string} bracketString 
 */
const CheckIfBracketsAreValid = (bracketString) => {

    let isValid = true;

    if (bracketString.replace(/\s/g, "").length % 2 !== 0) {
        isValid = false;
    } else {
        for (var i = 0; i < bracketString.length / 2; i++) {
            switch (bracketString.charAt(i)) {
                case "(":
                    if (bracketString.charAt(bracketString.length - i - 1) !== ")") {
                        isValid = false;
                    }
                    break;

                case "[":
                    if (bracketString.charAt(bracketString.length - i - 1) !== "]") {
                        isValid = false;
                    }
                    break;

                case "{":
                    if (bracketString.charAt(bracketString.length - i - 1) !== "}") {
                        isValid = false;
                    }
                    break;

                default:
                    isValid = false;
            }
        }

    }

    if (isValid) {
        console.log("Brackets are valid");
    } else {
        console.log("Invalid Brackets sequence")
    }
}


CheckIfBracketsAreValid(GetSequenceFromCmd());