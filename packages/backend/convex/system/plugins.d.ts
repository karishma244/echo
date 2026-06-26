export declare const upsert: import("convex/server").RegisteredMutation<"internal", {
    organizationId: string;
    service: "vapi";
    value: {
        publicApiKey: string;
        privateApiKey: string;
    };
}, Promise<void>>;
export declare const getByOrganizationIdAndService: import("convex/server").RegisteredQuery<"internal", {
    organizationId: string;
    service: "vapi";
}, Promise<{
    _id: import("convex/values").GenericId<"plugins">;
    _creationTime: number;
    organizationId: string;
    service: "vapi";
    value: {
        publicApiKey: string;
        privateApiKey: string;
    };
} | null>>;
//# sourceMappingURL=plugins.d.ts.map