// Constraints: 
// Input dict will have atleast Mon & Sun
// Input dict key is a string in the range of 1970-01-01 to 2100-01-01
// Input dict value is a number in the range of -1000000 to 1000000

const solution = require('./solution');

test("Given Test 1", () => {
    expect(solution({
        "2020-01-01": 4,
        "2020-01-02": 4,
        "2020-01-03": 6,
        "2020-01-04": 8,
        "2020-01-05": 2,
        "2020-01-06": -6,
        "2020-01-07": 2,
        "2020-01-08": -2,
    })).toEqual({
        "Mon": -6,
        "Tue": 2,
        "Wed": 2,
        "Thu": 4,
        "Fri": 6,
        "Sat": 8,
        "Sun": 2,
    });
});

test("Given Test 2", () => {
    expect(solution({
        "2020-01-01": 6,
        "2020-01-04": 12,
        "2020-01-05": 14,
        "2020-01-06": 2,
        "2020-01-07": 4,
    })).toEqual({
        "Mon": 2,
        "Tue": 4,
        "Wed": 6,
        "Thu": 8,
        "Fri": 10,
        "Sat": 12,
        "Sun": 14,
    });
});

// Create edge cases tests following the constraints above

test("Low Value", () => {
    expect(solution({
        "2020-01-01": -1000000,
        "2020-01-02": -1000000,
        "2020-01-03": -1000000,
        "2020-01-04": -1000000,
        "2020-01-05": -1000000,
        "2020-01-06": -1000000,
        "2020-01-07": -1000000,
        "2020-01-08": -1000000,
    })).toEqual({
        "Mon": -1000000,
        "Tue": -1000000,
        "Wed": -2000000,
        "Thu": -1000000,
        "Fri": -1000000,
        "Sat": -1000000,
        "Sun": -1000000,
    });
});

test("High Value", () => {
    expect(solution({
        "2020-01-01": 1000000,
        "2020-01-02": 1000000,
        "2020-01-03": 1000000,
        "2020-01-04": 1000000,
        "2020-01-05": 1000000,
        "2020-01-06": 1000000,
        "2020-01-07": 1000000,
        "2020-01-08": 1000000,
    })).toEqual({
        "Mon": 1000000,
        "Tue": 1000000,
        "Wed": 2000000,
        "Thu": 1000000,
        "Fri": 1000000,
        "Sat": 1000000,
        "Sun": 1000000,
    });
});

test("Low Keys", () => {
    expect(solution({
        "1970-01-01": 1000000,
        "1970-01-02": 1000000,
        "1970-01-03": 1000000,
        "1970-01-04": 1000000,
        "1970-01-05": 1000000,
        "1970-01-06": 1000000,
        "1970-01-07": 1000000,
        "1970-01-08": 1000000,
    })).toEqual({
        "Mon": 1000000,
        "Tue": 1000000,
        "Wed": 1000000,
        "Thu": 2000000,
        "Fri": 1000000,
        "Sat": 1000000,
        "Sun": 1000000,
    });
});

test("High Keys", () => {
    expect(solution({
        "2100-01-01": 1000000,
        "2100-01-02": 1000000,
        "2100-01-03": 1000000,
        "2100-01-04": 1000000,
        "2100-01-05": 1000000,
        "2100-01-06": 1000000,
        "2100-01-07": 1000000,
        "2100-01-08": 1000000,
    })).toEqual({
        "Mon": 1000000,
        "Tue": 1000000,
        "Wed": 1000000,
        "Thu": 1000000,
        "Fri": 2000000,
        "Sat": 1000000,
        "Sun": 1000000,
    });
});

test("No value other than Mon and Sun", () => {
    expect(solution({
        "2020-01-05": 6,
        "2020-01-06": -6,
    })).toEqual({
        "Mon": -6,
        "Tue": -4,
        "Wed": -2,
        "Thu": 0,
        "Fri": 2,
        "Sat": 4,
        "Sun": 6,
    });
});