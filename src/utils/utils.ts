export function goodString(str: any, minLength: number, maxLength: number) {
    let res: boolean;
    if (typeof str === "string") {
        res = str.length >= minLength && str.length <= maxLength;
    }
    else {
        res = false;
    }
    return res;
}

export function isNumeric(str: string) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(parseInt(str)) // ...and ensure strings of whitespace fail
}