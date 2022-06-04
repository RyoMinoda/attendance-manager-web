export class DateObj {
    date: Date = new Date();

    constructor(dt: Date) {
        this.date = dt;
    }

    addDay(d: number): Date {
        var day: number = this.date.getDate() + d;
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), day);
        return this.date;
    }

    getDate(): Date {
        return this.date;
    }
}