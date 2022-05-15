type EnumObjectMap = {
    value: string;
    index: number;
}

export class EnumObject implements EnumObjectMap {
    value: string;
    index: number;

    constructor(v: string, i: number) {
        this.value = v;
        this.index = i;
    }

    static get = (e: any): Array<EnumObject> => {
        return Object.keys(e)
            .filter(x => isNaN(Number(x)))
            .map((key, i) => new EnumObject(key, i))
    }
}
