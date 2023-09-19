
superbowlWin = (arr) => {
    const result = arr.find((arr) => arr.result === "W")
    return result ? result.year : undefined    
}


