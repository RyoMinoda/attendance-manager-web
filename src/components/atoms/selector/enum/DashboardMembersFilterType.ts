export const DashboardMembersFilterUnion = {
    Name: 'Name',
    Group: 'Group',
    Active: 'Active'
} as const;

export type DashboardMembersFilterType = typeof DashboardMembersFilterUnion[keyof typeof DashboardMembersFilterUnion];

export const DashboardMembersFilterTypes = Object.values(DashboardMembersFilterUnion).map(x => x);