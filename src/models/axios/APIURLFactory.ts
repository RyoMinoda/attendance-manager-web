import { ModelType } from "./ModelType";

export class APIURLFactory {
    private modelType: ModelType;

    constructor(modelType: ModelType) {
        this.modelType = modelType;
    }

    Create(RouteType: string): string {
        return RouteType.replace('{model}', this.modelType);
    }
}