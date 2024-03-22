function FirstDayOfYear(YearInput)
{
    let DifferentYears = YearInput - 1360;
    let firstDayOfYear = 0;
    let kabise = 0;
    for (let i = 0; i <= DifferentYears; i++) {
        if ((i % 4) == 0) kabise++;
    }
    firstDayOfYear = (DifferentYears + kabise - 1) % 7;
    return firstDayOfYear;
}

function TheDaysinYear(Year, InputDay) {
    const DayOfWeekList = {
        1: 31,
        2: 31,
        3: 31,
        4: 31,
        5: 31,
        6: 31,
        7: 30,
        8: 30,
        9: 30,
        10: 30,
        11: 30,
        12: 30
    };
    let FirstDay = FirstDayOfYear(Year)
    let CDay = InputDay - FirstDay;
    let Month = 1;
    let index = 0;
    let result = Array.from({ length: 12 }, () => []);
    
    for (let i = 1; i <= 53; i++) {
        if (CDay > 0) {
            result[Month - 1][index] = CDay;
        }
        index++;
        CDay += 7;

        if (CDay > DayOfWeekList[Month]) {
            CDay = CDay % DayOfWeekList[Month];
            Month++;
            
            if (Month == 13) break;
            
            index = 0;
        }
    }

    return result;
}

module.exports = { TheDaysinYear };