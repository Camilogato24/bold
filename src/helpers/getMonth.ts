export const getMonthDates = () => {
    let now = new Date();
    let dayOfWeek = now.getDay();
    let numDay = now.getDate();
    let start = new Date(now); 
    start.setDate(numDay - dayOfWeek);
    start.setHours(0, 0, 0, 0);
    let end = new Date(now); 
    end.setDate(numDay + (31 - dayOfWeek));
    end.setHours(0, 0, 0, 0);
    return [start, end];
}