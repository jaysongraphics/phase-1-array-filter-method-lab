
let findMatching = (drivers, string) => {
    return drivers.filter(possibleMatch =>
        possibleMatch.toLowerCase() === string.toLowerCase()
)}

let fuzzyMatch = (drivers, string) => {
    return drivers.filter(possibleMatch => 
        possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
)}

let matchName = (driver , string) => {
    return driver.filter(foundName => foundName.name === string)
}
