export const RouteUnion = {
    GetAll: "{model}",
    GetById: "{model}/{id}",
    Create: "{model}/create",
    Remove: "{model}/remove"
} as const;