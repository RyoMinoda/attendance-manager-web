import { AxiosResponse } from "axios";
import { Status } from "./StatusType";

export interface IResult<T> {
    Status: number;
    Data: T | null;
}

export class Result<T> implements IResult<T> {
    Status: number;
    Data: T | null;

    constructor(responce?: AxiosResponse<any, any>) {
        if (responce === undefined) {
            this.Data = null;
            this.Status = 200;
        } else {
            if (responce.status === 200) {
                this.Data = responce.data;
                this.Status = Status.Success;
                return;
            }
            this.Data = null;
            this.Status = responce.status;
        }
    }
}

export class ResultMock<T> implements IResult<T> {
    Status: number;
    Data: T | null;
    
    constructor(data: T) {
        this.Status = Status.Success;
        this.Data = data;
    }
}