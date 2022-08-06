export type Notification = {
    NotificationId: String,
    NotificationType: String,
}

export const NotificationType = {
    Group: "Group",
} as const;
