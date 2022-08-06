export const RouteUnion = {
    GetAll: "https://127.0.0.1:8080/{model}",
    GetAllPush: "ws://127.0.0.1:8080/{model}/push",
    GetById: "{model}/{id}",
    Create: "{model}/create",
    Remove: "{model}/remove"
} as const;