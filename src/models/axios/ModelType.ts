export const ModelUnion = {
    Group: "groups",
    Member: "members",
}

export type ModelType = typeof ModelUnion[keyof typeof ModelUnion];