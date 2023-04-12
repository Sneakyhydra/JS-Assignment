function solution(D) {
    let newDict = {
        "Mon": 0,
        "Tue": 0,
        "Wed": 0,
        "Thu": 0,
        "Fri": 0,
        "Sat": 0,
        "Sun": 0
    };
    let newKeys = Object.keys(newDict);
    let keys = Object.keys(D);
    let values = Object.values(D);

    for (let i = 0; i < keys.length; i++) {
        let date = new Date(keys[i]);
        let day = date.getDay();
        if (day == 0) {
            day = 7;
        }

        newDict[newKeys[day - 1]] += values[i];
    }

    let start = -1;
    for (let i = 0; i < newKeys.length; i++) {
        if (newDict[newKeys[i]] == 0) {
            if (start == -1) {
                start = i;
            }
        } else {
            if (start == -1) {
                continue;
            }

            // Implemented arithmetic progression as every value will be the mean of the two values on either side
            const a = newDict[newKeys[start - 1]];
            const b = newDict[newKeys[i]];
            const cnt = i - start;

            const d = (b - a) / (cnt + 1);

            for (let j = start; j < i; j++) {
                newDict[newKeys[j]] = newDict[newKeys[j - 1]] + d;
            }

            start = -1;
        }
    }

    return newDict;
}

module.exports = solution;