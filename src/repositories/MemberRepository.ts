import "reflect-metadata";
import axios, { AxiosResponse } from "axios";
import { injectable} from "tsyringe";
import { URLFactory } from "../models/axios/URLFactory";
import { ModelUnion } from "../models/axios/ModelType";
import { Member } from "../models/states/Member";
import { IMemberRepository } from "./Interfaces/IMemberRepository";
import { RouteUnion } from "../models/axios/RouteType";
import { Result } from "../models/axios/Result";

@injectable()
export class MemberRepository implements IMemberRepository {
    private urlFactory: URLFactory;

    constructor() {
        this.urlFactory = new URLFactory(ModelUnion.Group);
    }

    GetMembers(): Result<Member[]> {
        const url = this.urlFactory.Create(RouteUnion.GetAll);
        var result = new Result<Array<Member>>();
        axios.get(url)
            .then((data: AxiosResponse<any, any>) => {
                result = new Result<Array<Member>>(data);
            })
            .catch((error: AxiosResponse<any, any>) => {
                result = new Result<Array<Member>>(error);
            });
        return result;
    }
}
