
export type KeyValue<T> = {
    key: string,
    value: T
}

export class Dictionary<T> {
    list: KeyValue<T>[];

    constructor(items: KeyValue<T>[]) {
        this.list = items;
    }

    getValue(type: any): T {
        var target = this.list.filter(x => x.key === type);
        if (target.length > 0) {
            const { value } = target[0];
            return value;
        }
        throw new Error("Dictionary;" + type + 'is Error');
    }

    getValueOrDefault(type: any, defaultValue: T): T {
        var target = this.list.filter(x => x.key === type);
        if (target.length > 0) {
            const { value } = target[0];
            return value;
        }
        return defaultValue;
    }

    getEnumStr(type: any): T {
        var target = this.list.filter(x => x.key === type);
        if (target.length > 0) {
            const { value } = target[0];
            return value;
        }
        throw new Error("Dictionary;" + type + 'is Error');
    }

    toArray = (): KeyValue<T>[] => this.list;
}