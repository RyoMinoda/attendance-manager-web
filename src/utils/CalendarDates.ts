export type CalendarDateObject = {
    date: Date,
    weekday: number,
    row: number
}


export const GetCalendarDates = (date: Date) => {
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const days = lastDayOfMonth.getDate() - firstDate.getDate() + 1;
    return [ ...Array(days) ]
        .map((_, i) => new Date(date.getFullYear(), date.getMonth(), i + 1));
}

export const GetCalendarMap = () => {
    const weeks = [ ...Array(6)].map((x, i) => i);
    const weekdays = [ ...Array(7) ].map((x, i) => i);
    return weeks.map((x) => weekdays.map((y) => x * 7 + y));
}

export const GetCalendarDateObjects = (date: Date): Array<CalendarDateObject> => {
    const dates = GetCalendarDates(date);
    const days = [ ...Array(7) ].map(() => 0);
    var calendarDates = new Array<CalendarDateObject>();
    var isInitial = true;
    dates.forEach((d) => {
        const day = d.getDay();
        const calendarDate: CalendarDateObject = {
            date: d,
            weekday: day,
            row: days[day]
        }
        calendarDates.push(calendarDate);
        days[day] = days[day] + 1;
        if (isInitial && day !== 0) {
            const target = [ ...Array(day) ].map((x, i) => i)
            target.forEach(x => {
                days[x] = days[x] + 1;
            });
        }
        isInitial = false;
    });
    return calendarDates;
}