export const ModelUnion = {
    Group: "groups",
    Member: "members",
    Notification: "notifications"
}

export type ModelType = typeof ModelUnion[keyof typeof ModelUnion];