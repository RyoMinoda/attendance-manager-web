export const Status = {
    Success: 200,
    BadRequest: 400,
    NotFound: 404,
    InternalServerError: 500
} as const;

export const StatusType = Object.keys(Status);
