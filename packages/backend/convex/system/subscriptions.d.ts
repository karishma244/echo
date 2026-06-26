export declare const upsert: import("convex/server").RegisteredMutation<"internal", {
    organizationId: string;
    status: string;
}, Promise<void>>;
export declare const getByOrganizationId: import("convex/server").RegisteredQuery<"internal", {
    organizationId: string;
}, Promise<{
    _id: import("convex/values").GenericId<"subscriptions">;
    _creationTime: number;
    organizationId: string;
    status: string;
} | null>>;
//# sourceMappingURL=subscriptions.d.ts.map