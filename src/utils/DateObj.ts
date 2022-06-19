export class DateObj {
    date: Date = new Date();

    constructor(dt: Date) {
        this.date = dt;
    }

    addDay(d: number): DateObj {
        var day: number = this.date.getDate() + d;
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), day);
        return this;
    }

    addHour(h: number): DateObj {
        const hour: number = this.date.getHours() + h;
        this.date = new Date(this.date.getFullYear(), 
            this.date.getMonth(), 
            this.date.getDate(), 
            this.date.getHours() + hour,
        );
        return this;
    }

    setTime(h: number, m: number): DateObj {
        this.date = new Date(this.date.getFullYear(), 
            this.date.getMonth(), 
            this.date.getDate(), 
            h,
            m
        );
        return this;
    }

    setHour(h: number): DateObj {
        this.date = new Date(this.date.getFullYear(), 
            this.date.getMonth(), 
            this.date.getDate(), 
            h,
        );
        return this;
    }

    setMinute(m: number): DateObj {
        this.date = new Date(this.date.getFullYear(), 
        this.date.getMonth(), 
        this.date.getDate(), 
        this.date.getHours(),
        m
    );
    return this;
    }

    getDate(): Date {
        return this.date;
    }
}