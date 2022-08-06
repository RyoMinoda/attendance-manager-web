import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { injectable } from "tsyringe";
import { APIURLFactory } from "../models/axios/APIURLFactory";
import { ModelUnion } from "../models/axios/ModelType";
import { IResult, Result } from "../models/axios/Result";
import { RouteUnion } from "../models/axios/RouteType";
import { MyConfig } from "../models/utils/MyConfig";
import { INotificationRepository } from "./Interfaces/INotificationRepository";

@injectable()
export class NotificationRepository implements INotificationRepository {
    private urlFactory: APIURLFactory;

    constructor() {
        this.urlFactory = new APIURLFactory(ModelUnion.Notification);
    }

    GetNotifications(config: MyConfig): Promise<IResult<Notification[]>> {
        const url = this.urlFactory.Create(RouteUnion.GetAll);
        return new Promise((resolve) => {
            axios
                .get(url)
                .then((data: AxiosResponse<any, any>) => {
                    resolve(new Result<Array<Notification>>(data));
                })
                .catch((error: AxiosResponse<any, any>) => {
                    resolve(new Result<Array<Notification>>(error));
                });
        });
    }
}