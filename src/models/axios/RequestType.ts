export const RequestUnion = {
    Post: "POST",
    Get: "GET"
} as const;

export type RequestType = typeof RequestUnion[keyof typeof RequestUnion];