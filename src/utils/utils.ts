export function isNumeric(str: string) {
    if (typeof str != "string") return false // we only process strings!
    return !isNaN(parseInt(str)) // ...and ensure strings of whitespace fail
}